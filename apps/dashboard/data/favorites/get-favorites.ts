import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { FavoriteDto } from '~/types/dtos/favorite-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getFavorites(): Promise<FavoriteDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const favorites = await prisma.favorite.findMany({
        where: {
          userId: ctx.session.user.id,
          contact: {
            organizationId: ctx.organization.id
          }
        },
        select: {
          id: true,
          order: true,
          contact: {
            select: {
              id: true,
              name: true,
              record: true,
              image: true
            }
          }
        },
        orderBy: {
          order: SortDirection.Asc
        }
      });

      const mapped: FavoriteDto[] = favorites.map((favorite) => ({
        id: favorite.id,
        order: favorite.order,
        contactId: favorite.contact.id,
        name: favorite.contact.name,
        record: favorite.contact.record,
        image: favorite.contact.image ? favorite.contact.image : undefined
      }));

      return mapped;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Favorites,
      ctx.organization.id,
      ctx.session.user.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          ctx.session.user.id
        )
      ]
    }
  )();
}
