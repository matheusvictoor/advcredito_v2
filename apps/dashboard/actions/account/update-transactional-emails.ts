'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';
import { updateTransactionalEmailsSchema } from '~/schemas/account/update-transactional-emails-schema';

export const updateTransactionalEmails = authActionClient
  .metadata({ actionName: 'updateTransactionalEmails' })
  .schema(updateTransactionalEmailsSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.user.update({
      where: { id: ctx.session.user.id },
      data: {
        enabledContactsNotifications: parsedInput.enabledContactsNotifications,
        enabledInboxNotifications: parsedInput.enabledInboxNotifications,
        enabledWeeklySummary: parsedInput.enabledWeeklySummary
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createUserTag(
        UserCacheKey.TransactionalEmails,
        ctx.session.user.id
      )
    );
  });
