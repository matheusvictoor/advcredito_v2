'use server';

import { revalidateTag } from 'next/cache';

import { type Prisma } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import { updateFavoritesOrder } from '~/actions/favorites/_favorites-order';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { reorderFavoritesSchema } from '~/schemas/favorites/reorder-favorites-schema';

export const reorderFavorites = authOrganizationActionClient
  .metadata({ actionName: 'reorderFavorites' })
  .schema(reorderFavoritesSchema)
  .action(async ({ parsedInput, ctx }) => {
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: ctx.session.user.id
      },
      select: {
        id: true
      }
    });

    const updates: Prisma.PrismaPromise<unknown>[] = [];
    for (const favorite of parsedInput.favorites) {
      if (favorites.some((f) => f.id === favorite.id)) {
        updates.push(
          prisma.favorite.update({
            where: { id: favorite.id },
            data: { order: favorite.order }
          })
        );
      }
    }

    if (updates.length > 0) {
      await prisma.$transaction([
        ...updates,
        updateFavoritesOrder(ctx.session.user.id)
      ]);

      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          ctx.session.user.id
        )
      );
    }
  });
