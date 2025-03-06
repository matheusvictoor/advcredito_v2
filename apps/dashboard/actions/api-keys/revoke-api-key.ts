'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { revokeApiKeySchema } from '~/schemas/api-keys/revoke-api-key-schema';

export const revokeApiKey = authOrganizationActionClient
  .metadata({ actionName: 'revokeApiKey' })
  .schema(revokeApiKeySchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.apiKey.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      }
    });
    if (count < 1) {
      throw new NotFoundError('API key not found');
    }

    await prisma.apiKey.delete({
      where: { id: parsedInput.id },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ApiKeys,
        ctx.organization.id
      )
    );
  });
