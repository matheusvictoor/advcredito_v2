import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { ValidationError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import {
  getContactTasksSchema,
  type GetContactTasksSchema
} from '~/schemas/contacts/get-contact-tasks-schema';
import type { ContactTaskDto } from '~/types/dtos/contact-task-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getContactTasks(
  input: GetContactTasksSchema
): Promise<ContactTaskDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getContactTasksSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const tasks = await prisma.contactTask.findMany({
        where: {
          contactId: parsedInput.contactId,
          contact: {
            organizationId: ctx.organization.id
          }
        },
        select: {
          id: true,
          contactId: true,
          title: true,
          description: true,
          status: true,
          dueDate: true,
          createdAt: true
        },
        orderBy: {
          createdAt: SortDirection.Asc
        }
      });

      const mapped: ContactTaskDto[] = tasks.map((task) => ({
        id: task.id,
        contactId: task.contactId ?? undefined,
        title: task.title,
        description: task.description ?? undefined,
        status: task.status,
        dueDate: task.dueDate ?? undefined,
        createdAt: task.createdAt
      }));

      return mapped;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.ContactTasks,
      ctx.organization.id,
      parsedInput.contactId
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.ContactTasks,
          ctx.organization.id,
          parsedInput.contactId
        )
      ]
    }
  )();
}
