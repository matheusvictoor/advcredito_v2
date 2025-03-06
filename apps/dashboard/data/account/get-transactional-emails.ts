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
import type { TransactionalEmailsDto } from '~/types/dtos/transactional-emails-dto';

export async function getTransactionalEmails(): Promise<TransactionalEmailsDto> {
  const ctx = await getAuthContext();

  return cache(
    async () => {
      const userFromDb = await prisma.user.findFirst({
        where: { id: ctx.session.user.id },
        select: {
          enabledContactsNotifications: true,
          enabledInboxNotifications: true,
          enabledWeeklySummary: true
        }
      });
      if (!userFromDb) {
        throw new NotFoundError('User not found');
      }

      const response: TransactionalEmailsDto = {
        enabledContactsNotifications: userFromDb.enabledContactsNotifications,
        enabledInboxNotifications: userFromDb.enabledInboxNotifications,
        enabledWeeklySummary: userFromDb.enabledWeeklySummary
      };

      return response;
    },
    Caching.createUserKeyParts(
      UserCacheKey.TransactionalEmails,
      ctx.session.user.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(
          UserCacheKey.TransactionalEmails,
          ctx.session.user.id
        )
      ]
    }
  )();
}
