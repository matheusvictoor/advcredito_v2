'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateWebhookSchema } from '~/schemas/webhooks/update-webhook-schema';

export const updateWebhook = authOrganizationActionClient
  .metadata({ actionName: 'updateWebhook' })
  .schema(updateWebhookSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.webhook.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      }
    });
    if (count < 1) {
      throw new NotFoundError('Webhook not found');
    }

    await prisma.webhook.update({
      where: {
        id: parsedInput.id,
        organizationId: ctx.organization.id
      },
      data: {
        url: parsedInput.url,
        triggers: parsedInput.triggers ? parsedInput.triggers : [],
        secret: parsedInput.secret ? parsedInput.secret : null
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Webhooks,
        ctx.organization.id
      )
    );
  });
