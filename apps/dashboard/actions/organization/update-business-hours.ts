'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateBusinessHoursSchema } from '~/schemas/organization/update-business-hours-schema';

export const updateBusinessHours = authOrganizationActionClient
  .metadata({ actionName: 'updateBusinessHours' })
  .schema(updateBusinessHoursSchema)
  .action(async ({ parsedInput, ctx }) => {
    const organization = await prisma.organization.findFirst({
      where: { id: ctx.organization.id },
      select: {
        name: true,
        stripeCustomerId: true,
        businessHours: {
          select: {
            id: true,
            dayOfWeek: true,
            timeSlots: {
              select: {
                id: true
              }
            }
          }
        }
      }
    });
    if (!organization) {
      throw new NotFoundError('Organization not found');
    }

    await prisma.$transaction([
      prisma.workTimeSlot.deleteMany({
        where: {
          workHours: {
            organization: {
              id: ctx.organization.id
            }
          },
          workHoursId: {
            in: organization.businessHours.map((workHours) => workHours.id)
          }
        }
      }),
      ...parsedInput.businessHours.map((workHours) =>
        prisma.workTimeSlot.createMany({
          data: workHours.timeSlots.map((timeSlot) => ({
            workHoursId: organization.businessHours.find(
              (w) => w.dayOfWeek === workHours.dayOfWeek
            )!.id,
            start: timeSlot.start,
            end: timeSlot.end
          }))
        })
      )
    ]);

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.BusinessHours,
        ctx.organization.id
      )
    );
  });
