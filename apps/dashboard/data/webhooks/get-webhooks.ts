import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { WebhookDto } from '~/types/dtos/webhook-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getWebhooks(): Promise<WebhookDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const webhooks = await prisma.webhook.findMany({
        where: { organizationId: ctx.organization.id },
        select: {
          id: true,
          url: true,
          triggers: true,
          secret: true
        },
        orderBy: {
          createdAt: SortDirection.Asc
        }
      });

      const response: WebhookDto[] = webhooks.map((webhook) => ({
        id: webhook.id,
        url: webhook.url,
        triggers: webhook.triggers,
        secret: webhook.secret ?? undefined
      }));

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Webhooks,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Webhooks,
          ctx.organization.id
        )
      ]
    }
  )();
}
