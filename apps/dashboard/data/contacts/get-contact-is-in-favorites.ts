import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { ValidationError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
  UserCacheKey
} from '~/data/caching';
import {
  getContactIsInFavoritesSchema,
  type GetContactAddedToFavoritesSchema
} from '~/schemas/contacts/get-contact-is-in-favorites-schema';

export async function getContactIsInFavorites(
  input: GetContactAddedToFavoritesSchema
): Promise<boolean> {
  const ctx = await getAuthOrganizationContext();

  const result = getContactIsInFavoritesSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const count = await prisma.favorite.count({
        where: {
          userId: ctx.session.user.id,
          contactId: parsedInput.contactId
        }
      });

      return count > 0;
    },
    Caching.createUserKeyParts(
      UserCacheKey.ContactIsInFavorites,
      ctx.session.user.id,
      parsedInput.contactId
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(
          UserCacheKey.ContactIsInFavorites,
          ctx.session.user.id,
          parsedInput.contactId
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          ctx.session.user.id
        )
      ]
    }
  )();
}
