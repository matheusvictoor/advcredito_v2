'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { updateFavoritesOrder } from '~/actions/favorites/_favorites-order';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { addFavoriteSchema } from '~/schemas/favorites/add-favorite-schema';

export const addFavorite = authOrganizationActionClient
  .metadata({ actionName: 'addFavorite' })
  .schema(addFavoriteSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.favorite.count({
      where: {
        userId: ctx.session.user.id,
        contactId: parsedInput.contactId
      }
    });

    // already added
    if (count > 0) {
      return;
    }

    await prisma.$transaction([
      prisma.favorite.deleteMany({
        where: {
          userId: ctx.session.user.id,
          contactId: parsedInput.contactId
        }
      }),
      prisma.favorite.create({
        data: {
          userId: ctx.session.user.id,
          contactId: parsedInput.contactId,
          order: await prisma.favorite.count({
            where: { userId: ctx.session.user.id }
          })
        },
        select: {
          id: true // SELECT NONE
        }
      }),
      updateFavoritesOrder(ctx.session.user.id)
    ]);

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Favorites,
        ctx.organization.id,
        ctx.session.user.id
      )
    );

    revalidateTag(
      Caching.createUserTag(
        UserCacheKey.ContactIsInFavorites,
        ctx.session.user.id,
        parsedInput.contactId
      )
    );
  });
