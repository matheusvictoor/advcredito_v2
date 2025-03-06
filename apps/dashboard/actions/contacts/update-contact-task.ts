'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateContactTaskSchema } from '~/schemas/contacts/update-contact-task-schema';

export const updateContactTask = authOrganizationActionClient
  .metadata({ actionName: 'updateContactTask' })
  .schema(updateContactTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const task = await prisma.contactTask.update({
      where: {
        id: parsedInput.id,
        contact: {
          organizationId: ctx.organization.id
        }
      },
      data: {
        title: parsedInput.title,
        description: parsedInput.description,
        status: parsedInput.status,
        dueDate: parsedInput.dueDate ? parsedInput.dueDate : null
      },
      select: { contactId: true }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactTasks,
        ctx.organization.id,
        task.contactId
      )
    );
  });
