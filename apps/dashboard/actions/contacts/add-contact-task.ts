'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addContactTaskSchema } from '~/schemas/contacts/add-contact-task-schema';

export const addContactTask = authOrganizationActionClient
  .metadata({ actionName: 'addContactTask' })
  .schema(addContactTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.contact.count({
      where: {
        id: parsedInput.contactId,
        organizationId: ctx.organization.id
      }
    });
    if (count < 1) {
      throw new NotFoundError('Contact not found.');
    }

    await prisma.contactTask.create({
      data: {
        contactId: parsedInput.contactId,
        title: parsedInput.title,
        description: parsedInput.description,
        status: parsedInput.status,
        dueDate: parsedInput.dueDate ? parsedInput.dueDate : null
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactTasks,
        ctx.organization.id,
        parsedInput.contactId
      )
    );
  });
