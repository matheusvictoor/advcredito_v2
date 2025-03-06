'use server';

import { revalidateTag } from 'next/cache';

import { PreConditionError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';

export const disableAuthenticatorApp = authActionClient
  .metadata({ actionName: 'disableAuthenticatorApp' })
  .action(async ({ ctx }) => {
    const count = await prisma.authenticatorApp.count({
      where: { userId: ctx.session.user.id }
    });
    if (count < 1) {
      throw new PreConditionError('Authenticator app is not enabled');
    }

    await prisma.authenticatorApp.deleteMany({
      where: { userId: ctx.session.user.id }
    });

    revalidateTag(
      Caching.createUserTag(
        UserCacheKey.MultiFactorAuthentication,
        ctx.session.user.id
      )
    );
  });
