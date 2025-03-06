'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { createWebhookSchema } from '~/schemas/webhooks/create-webhook-schema';

export const createWebhook = authOrganizationActionClient
  .metadata({ actionName: 'createWebhook' })
  .schema(createWebhookSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.webhook.create({
      data: {
        organizationId: ctx.organization.id,
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
