import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { Prisma } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { TagDto } from '~/types/dtos/tag-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getContactTags(): Promise<TagDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const [contactTags] = await prisma.$transaction(
        [
          prisma.contactTag.findMany({
            where: {
              contacts: {
                some: {
                  organizationId: ctx.organization.id
                }
              }
            },
            select: {
              id: true,
              text: true
            },
            orderBy: {
              text: SortDirection.Asc
            }
          })
        ],
        {
          isolationLevel: Prisma.TransactionIsolationLevel.ReadUncommitted
        }
      );

      return contactTags;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.ContactTags,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.ContactTags,
          ctx.organization.id
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contacts,
          ctx.organization.id
        )
      ]
    }
  )();
}
