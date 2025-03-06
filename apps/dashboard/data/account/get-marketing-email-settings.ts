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
import type { MarketingEmailsDto } from '~/types/dtos/marketing-emails-dto';

export async function getMarketingEmailSettings(): Promise<MarketingEmailsDto> {
  const ctx = await getAuthContext();

  return cache(
    async () => {
      const userFromDb = await prisma.user.findFirst({
        where: { id: ctx.session.user.id },
        select: {
          enabledNewsletter: true,
          enabledProductUpdates: true
        }
      });
      if (!userFromDb) {
        throw new NotFoundError('User not found');
      }

      const response: MarketingEmailsDto = {
        enabledNewsletter: userFromDb.enabledNewsletter,
        enabledProductUpdates: userFromDb.enabledProductUpdates
      };

      return response;
    },
    Caching.createUserKeyParts(
      UserCacheKey.MarketingEmails,
      ctx.session.user.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(UserCacheKey.MarketingEmails, ctx.session.user.id)
      ]
    }
  )();
}
