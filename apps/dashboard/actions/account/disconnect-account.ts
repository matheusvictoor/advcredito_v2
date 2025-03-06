'use server';

import { revalidatePath } from 'next/cache';

import { OAuthProvider } from '@workspace/auth/providers.types';
import { APP_NAME } from '@workspace/common/app';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { sendConnectedAccountSecurityAlertEmail } from '@workspace/email/send-connected-account-security-alert-email';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { identityProviderLabels } from '~/lib/labels';
import { disconnectAccountSchema } from '~/schemas/account/disconnect-account-schema';

export const disconnectAccount = authOrganizationActionClient
  .metadata({ actionName: 'disconnectAccount' })
  .schema(disconnectAccountSchema)
  .action(async ({ parsedInput, ctx }) => {
    const normalizedProvider = parsedInput.provider.toLowerCase();
    const account = await prisma.account.findFirst({
      where: {
        provider: normalizedProvider,
        user: { id: ctx.session.user.id }
      },
      select: {
        id: true,
        provider: true
      }
    });
    if (!account) {
      throw new NotFoundError('Account not found');
    }
    await prisma.account.delete({
      where: { id: account.id },
      select: {
        id: true // SELECT NONE
      }
    });

    try {
      await sendConnectedAccountSecurityAlertEmail({
        recipient: ctx.session.user.email,
        appName: APP_NAME,
        name: ctx.session.user.name,
        provider: identityProviderLabels[account.provider as OAuthProvider],
        action: 'disconnected'
      });
    } catch (e) {
      console.error(e);
    }

    revalidatePath(
      replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Security,
        ctx.organization.slug
      )
    );
  });
