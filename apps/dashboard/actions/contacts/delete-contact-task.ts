'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { deleteContactTaskSchema } from '~/schemas/contacts/delete-contact-task-schema';

export const deleteContactTask = authOrganizationActionClient
  .metadata({ actionName: 'deleteContactTask' })
  .schema(deleteContactTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.contactTask.count({
      where: {
        id: parsedInput.id,
        contact: {
          organizationId: ctx.organization.id
        }
      }
    });
    if (count < 1) {
      throw new NotFoundError('Task not found');
    }

    const deletedTask = await prisma.contactTask.delete({
      where: { id: parsedInput.id },
      select: { contactId: true }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactTasks,
        ctx.organization.id,
        deletedTask.contactId
      )
    );
  });
