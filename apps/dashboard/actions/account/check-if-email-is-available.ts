'use server';

import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { checkIfEmailIsAvailableSchema } from '~/schemas/account/check-if-email-is-available-schema';

export const checkIfEmailIsAvailable = authActionClient
  .metadata({ actionName: 'checkIfEmailIsAvailable' })
  .schema(checkIfEmailIsAvailableSchema)
  .action(async ({ parsedInput }) => {
    const normalizedEmail = parsedInput.email.toLowerCase();
    const countUsers = await prisma.user.count({
      where: { email: normalizedEmail }
    });

    return { isAvailable: countUsers === 0 };
  });
