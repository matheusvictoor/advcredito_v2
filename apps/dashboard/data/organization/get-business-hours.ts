import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { WorkHoursDto } from '~/types/dtos/work-hours-dto';

export async function getBusinessHours(): Promise<WorkHoursDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const organization = await prisma.organization.findFirst({
        where: { id: ctx.organization.id },
        select: {
          name: true,
          address: true,
          phone: true,
          email: true,
          businessHours: {
            select: {
              dayOfWeek: true,
              timeSlots: {
                select: {
                  id: true,
                  start: true,
                  end: true
                }
              }
            }
          }
        }
      });
      if (!organization) {
        throw new NotFoundError('Organization not found');
      }

      const response: WorkHoursDto[] = organization.businessHours.map(
        (workHours) => ({
          dayOfWeek: workHours.dayOfWeek,
          timeSlots: workHours.timeSlots.map((timeSlot) => ({
            id: timeSlot.id,
            start: timeSlot.start.toISOString(),
            end: timeSlot.end.toISOString()
          }))
        })
      );

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.BusinessHours,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.BusinessHours,
          ctx.organization.id
        )
      ]
    }
  )();
}
