'use server';

import { redirect } from 'next/navigation';
import { isAfter } from 'date-fns';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { actionClient } from '~/actions/safe-action';
import { changeEmailSchema } from '~/schemas/account/change-email-schema';

export const changeEmail = actionClient
  .metadata({ actionName: 'changeEmail' })
  .schema(changeEmailSchema)
  .action(async ({ parsedInput }) => {
    const request = await prisma.changeEmailRequest.findFirst({
      where: { id: parsedInput.id },
      select: {
        userId: true,
        email: true,
        valid: true,
        expires: true
      }
    });
    if (!request) {
      throw new NotFoundError('Change email request not found');
    }

    if (!request.valid) {
      return redirect(routes.dashboard.auth.changeEmail.Invalid);
    }

    if (isAfter(new Date(), request.expires)) {
      return redirect(routes.dashboard.auth.changeEmail.Expired);
    }

    await prisma.$transaction([
      prisma.changeEmailRequest.updateMany({
        where: { id: parsedInput.id },
        data: { valid: false }
      }),
      prisma.session.deleteMany({
        where: { userId: request.userId }
      }),
      prisma.user.update({
        where: { id: request.userId },
        data: { email: request.email },
        select: {
          id: true // SELECT NONE
        }
      })
    ]);
  });
