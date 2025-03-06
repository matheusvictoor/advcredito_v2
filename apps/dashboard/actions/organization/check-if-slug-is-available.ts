'use server';

import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { checkIfSlugIsAvailableSchema } from '~/schemas/organization/check-if-slug-is-available-schema';

export const checkIfSlugIsAvailable = authActionClient
  .metadata({ actionName: 'checkIfSlugIsAvailable' })
  .schema(checkIfSlugIsAvailableSchema)
  .action(async ({ parsedInput }) => {
    const count = await prisma.organization.count({
      where: { slug: parsedInput.slug }
    });

    return { isAvailable: count === 0 };
  });
