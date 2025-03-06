'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';
import { updatePreferencesSchema } from '~/schemas/account/update-preferences-schema';

export const updatePreferences = authActionClient
  .metadata({ actionName: 'updatePreferences' })
  .schema(updatePreferencesSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.user.update({
      where: { id: ctx.session.user.id },
      data: {
        locale: parsedInput.locale
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createUserTag(UserCacheKey.Preferences, ctx.session.user.id)
    );
  });
