'use server';

import { addHours } from 'date-fns';

import { EMAIL_CHANGE_EXPIRY_HOURS } from '@workspace/auth/constants';
import { PreConditionError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { sendConfirmEmailAddressChangeEmail } from '@workspace/email/send-confirm-email-address-change-email';
import { routes } from '@workspace/routes';

import { authActionClient } from '~/actions/safe-action';
import { requestEmailChangeSchema } from '~/schemas/account/request-email-change-schema';

export const requestEmailChange = authActionClient
  .metadata({ actionName: 'requestEmailChange' })
  .schema(requestEmailChangeSchema)
  .action(async ({ parsedInput, ctx }) => {
    const normalizedEmail = parsedInput.email.toLowerCase();
    const countUsers = await prisma.user.count({
      where: { email: normalizedEmail }
    });
    if (countUsers > 0) {
      throw new PreConditionError('Email address is already taken');
    }

    const expiry = addHours(new Date(), EMAIL_CHANGE_EXPIRY_HOURS);

    const [, request] = await prisma.$transaction([
      prisma.changeEmailRequest.updateMany({
        where: { userId: ctx.session.user.id },
        data: { valid: false }
      }),
      prisma.changeEmailRequest.create({
        data: {
          userId: ctx.session.user.id,
          email: normalizedEmail,
          valid: true,
          expires: expiry
        },
        select: {
          id: true // SELECT NONE
        }
      })
    ]);

    await sendConfirmEmailAddressChangeEmail({
      recipient: normalizedEmail,
      name: ctx.session.user.name,
      confirmLink: `${routes.dashboard.auth.changeEmail.Request}/${request.id}`
    });
  });
