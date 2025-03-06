'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';
import { updateMarketingEmailsSchema } from '~/schemas/account/update-marketing-email-settings';

export const updateMarketingEmails = authActionClient
  .metadata({ actionName: 'updateMarketingEmails' })
  .schema(updateMarketingEmailsSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.user.update({
      where: { id: ctx.session.user.id },
      data: {
        enabledNewsletter: parsedInput.enabledNewsletter,
        enabledProductUpdates: parsedInput.enabledProductUpdates
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createUserTag(UserCacheKey.MarketingEmails, ctx.session.user.id)
    );
  });
