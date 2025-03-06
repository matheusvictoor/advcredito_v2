import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  UserCacheKey
} from '~/data/caching';
import type { MultiFactorAuthenticationDto } from '~/types/dtos/multi-factor-authentication-dto';

export async function getMultiFactorAuthentication(): Promise<MultiFactorAuthenticationDto> {
  const ctx = await getAuthContext();

  return cache(
    async () => {
      const authenticatorApp = await prisma.authenticatorApp.findFirst({
        where: { userId: ctx.session.user.id },
        select: {
          id: true,
          accountName: true,
          issuer: true,
          createdAt: true
        }
      });
      const response: MultiFactorAuthenticationDto = {
        authenticatorApp: authenticatorApp ?? undefined
      };

      return response;
    },
    Caching.createUserKeyParts(
      UserCacheKey.MultiFactorAuthentication,
      ctx.session.user.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(
          UserCacheKey.MultiFactorAuthentication,
          ctx.session.user.id
        )
      ]
    }
  )();
}
