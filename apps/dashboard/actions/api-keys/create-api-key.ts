'use server';

import { revalidateTag } from 'next/cache';
import { startOfDay } from 'date-fns';

import { generateApiKey } from '@workspace/api-keys/generate-api-key';
import { hashApiKey } from '@workspace/api-keys/hash-api-key';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { createApiKeySchema } from '~/schemas/api-keys/create-api-key-schema';

export const createApiKey = authOrganizationActionClient
  .metadata({ actionName: 'createApiKey' })
  .schema(createApiKeySchema)
  .action(async ({ parsedInput, ctx }) => {
    const apiKey = generateApiKey();
    await prisma.apiKey.create({
      data: {
        description: parsedInput.description,
        hashedKey: hashApiKey(apiKey),
        expiresAt: parsedInput.neverExpires
          ? null
          : startOfDay(parsedInput.expiresAt ?? new Date()),
        organizationId: ctx.organization.id
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

    return { apiKey };
  });
