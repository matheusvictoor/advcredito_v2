'use server';

import { revalidatePath } from 'next/cache';
import { returnValidationErrors } from 'next-safe-action';

import { hashPassword, verifyPassword } from '@workspace/auth/password';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { changePasswordSchema } from '~/schemas/account/change-password-schema';

export const changePassword = authOrganizationActionClient
  .metadata({ actionName: 'changePassword' })
  .schema(changePasswordSchema)
  .action(async ({ parsedInput, ctx }) => {
    const userFromDb = await prisma.user.findFirst({
      where: { id: ctx.session.user.id },
      select: { password: true }
    });
    if (!userFromDb) {
      throw new NotFoundError('User not found');
    }

    if (userFromDb.password) {
      const passwordsMatch = await verifyPassword(
        parsedInput.currentPassword ?? '',
        userFromDb.password
      );
      if (!passwordsMatch) {
        return returnValidationErrors(changePasswordSchema, {
          currentPassword: {
            _errors: ['Current password is not correct.']
          }
        });
      }
    }
    if (parsedInput.currentPassword === parsedInput.newPassword) {
      return returnValidationErrors(changePasswordSchema, {
        newPassword: {
          _errors: [
            'New password matches your old password. Please choose a different password.'
          ]
        }
      });
    }

    const password = await hashPassword(parsedInput.newPassword);

    await prisma.user.update({
      where: { id: ctx.session.user.id },
      data: { password },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidatePath(
      replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Security,
        ctx.organization.slug
      )
    );
  });
