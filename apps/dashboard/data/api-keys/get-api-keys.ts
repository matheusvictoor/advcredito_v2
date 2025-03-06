import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { ApiKeyDto } from '~/types/dtos/api-key-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getApiKeys(): Promise<ApiKeyDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const apiKeys = await prisma.apiKey.findMany({
        where: { organizationId: ctx.organization.id },
        select: {
          id: true,
          description: true,
          lastUsedAt: true,
          expiresAt: true
        },
        orderBy: {
          createdAt: SortDirection.Asc
        }
      });

      const response: ApiKeyDto[] = apiKeys.map((apiKey) => ({
        id: apiKey.id,
        description: apiKey.description,
        lastUsedAt: apiKey.lastUsedAt ?? undefined,
        expiresAt: apiKey.expiresAt ?? undefined
      }));

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.ApiKeys,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.ApiKeys,
          ctx.organization.id
        )
      ]
    }
  )();
}
