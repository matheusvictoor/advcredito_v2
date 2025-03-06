'use server';

import { addHours } from 'date-fns';

import { PASSWORD_RESET_EXPIRY_HOURS } from '@workspace/auth/constants';
import { APP_NAME } from '@workspace/common/app';
import { ResetPasswordRequest } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { sendPasswordResetEmail } from '@workspace/email/send-password-reset-email';
import { routes } from '@workspace/routes';

import { actionClient } from '~/actions/safe-action';
import { sendResetPasswordInstructionsSchema } from '~/schemas/auth/send-reset-password-instructions-schema';

export const sendResetPasswordInstructions = actionClient
  .metadata({ actionName: 'sendResetPasswordInstructions' })
  .schema(sendResetPasswordInstructionsSchema)
  .action(async ({ parsedInput }) => {
    const normalizedEmail = parsedInput.email.toLowerCase();
    const maybeUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        name: true,
        email: true,
        locale: true
      }
    });
    if (!maybeUser || !maybeUser.email) {
      // Don't leak information about whether an email is registered or not
      return;
    }

    const now = new Date();
    const maybePreviousRequest = await prisma.resetPasswordRequest.findMany({
      where: {
        email: maybeUser.email,
        expires: { gt: now }
      }
    });

    let passwordRequest: ResetPasswordRequest | undefined = undefined;

    if (maybePreviousRequest && maybePreviousRequest?.length >= 1) {
      passwordRequest = maybePreviousRequest[0];
    } else {
      const expiry = addHours(new Date(), PASSWORD_RESET_EXPIRY_HOURS);
      const createdResetPasswordRequest =
        await prisma.resetPasswordRequest.create({
          data: {
            email: maybeUser.email,
            expires: expiry
          }
        });
      passwordRequest = createdResetPasswordRequest;
    }

    await sendPasswordResetEmail({
      recipient: maybeUser.email,
      appName: APP_NAME,
      name: maybeUser.name,
      resetPasswordLink: `${routes.dashboard.auth.resetPassword.Request}/${passwordRequest!.id}`
    });
  });
