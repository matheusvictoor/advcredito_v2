'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { deleteWebhookSchema } from '~/schemas/webhooks/delete-webhook-schema';

export const deleteWebhook = authOrganizationActionClient
  .metadata({ actionName: 'deleteWebhook' })
  .schema(deleteWebhookSchema)
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

    await prisma.webhook.delete({
      where: { id: parsedInput.id },
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
