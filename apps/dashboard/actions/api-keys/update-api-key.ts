'use server';

import { revalidateTag } from 'next/cache';
import { startOfDay } from 'date-fns';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateApiKeySchema } from '~/schemas/api-keys/update-api-key-schema';

export const updateApiKey = authOrganizationActionClient
  .metadata({ actionName: 'updateApiKey' })
  .schema(updateApiKeySchema)
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

    await prisma.apiKey.update({
      where: { id: parsedInput.id },
      data: {
        description: parsedInput.description,
        expiresAt: parsedInput.neverExpires
          ? null
          : startOfDay(parsedInput.expiresAt ?? new Date())
      },
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
