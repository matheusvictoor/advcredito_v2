'use server';

import { redirect } from 'next/navigation';
import { returnValidationErrors } from 'next-safe-action';

import { hashPassword } from '@workspace/auth/password';
import { createOtpTokens } from '@workspace/auth/verification';
import { prisma } from '@workspace/database/client';
import { sendVerifyEmailAddressEmail } from '@workspace/email/send-verify-email-address-email';
import { routes } from '@workspace/routes';

import { actionClient } from '~/actions/safe-action';
import { signUpSchema } from '~/schemas/auth/sign-up-schema';

export const signUp = actionClient
  .metadata({ actionName: 'signUp' })
  .schema(signUpSchema)
  .action(async ({ parsedInput }) => {
    const normalizedEmail = parsedInput.email.toLowerCase();
    const countUsers = await prisma.user.count({
      where: { email: normalizedEmail }
    });
    if (countUsers > 0) {
      return returnValidationErrors(signUpSchema, {
        email: {
          _errors: ['Email address is already taken.']
        }
      });
    }

    const hashedPassword = await hashPassword(parsedInput.password);

    await prisma.user.create({
      data: {
        name: parsedInput.name,
        email: normalizedEmail,
        password: hashedPassword,
        locale: 'en-US',
        completedOnboarding: false
      }
    });

    try {
      const { otp, hashedOtp } = await createOtpTokens(normalizedEmail);

      await sendVerifyEmailAddressEmail({
        recipient: normalizedEmail,
        name: parsedInput.name,
        otp,
        verificationLink: `${routes.dashboard.auth.verifyEmail.Request}/${hashedOtp}`
      });
    } catch (e) {
      console.error(e);
    }

    return redirect(
      `${routes.dashboard.auth.verifyEmail.Index}?email=${encodeURIComponent(parsedInput.email)}`
    );
  });
