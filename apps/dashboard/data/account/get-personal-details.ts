import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthContext } from '@workspace/auth/context';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  UserCacheKey
} from '~/data/caching';
import type { PersonalDetailsDto } from '~/types/dtos/personal-details-dto';

export async function getPersonalDetails(): Promise<PersonalDetailsDto> {
  const ctx = await getAuthContext();

  return cache(
    async () => {
      const userFromDb = await prisma.user.findFirst({
        where: { id: ctx.session.user.id },
        select: {
          id: true,
          image: true,
          name: true,
          phone: true,
          email: true
          // role: true
        }
      });
      if (!userFromDb) {
        throw new NotFoundError('User not found');
      }

      const response: PersonalDetailsDto = {
        id: userFromDb.id,
        image: userFromDb.image ?? undefined,
        name: userFromDb.name,
        phone: userFromDb.phone ?? undefined,
        email: userFromDb.email ?? undefined
      };

      return response;
    },
    Caching.createUserKeyParts(
      UserCacheKey.PersonalDetails,
      ctx.session.user.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(UserCacheKey.PersonalDetails, ctx.session.user.id)
      ]
    }
  )();
}
