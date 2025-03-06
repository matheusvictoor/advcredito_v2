'use server';

import { revalidateTag } from 'next/cache';

import { APP_NAME } from '@workspace/common/app';
import { NotFoundError } from '@workspace/common/errors';
import { InvitationStatus } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { sendRevokedInvitationEmail } from '@workspace/email/send-revoked-invitation-email';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { revokeInvitationSchema } from '~/schemas/invitations/revoke-invitation-schema';

export const revokeInvitation = authOrganizationActionClient
  .metadata({ actionName: 'revokeInvitation' })
  .schema(revokeInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    const invitation = await prisma.invitation.findFirst({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      },
      select: {
        status: true,
        email: true
      }
    });
    if (!invitation) {
      throw new NotFoundError('Invitation not found');
    }

    await prisma.invitation.updateMany({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id,
        status: InvitationStatus.PENDING
      },
      data: {
        status: InvitationStatus.REVOKED
      }
    });

    if (invitation.status === InvitationStatus.PENDING) {
      try {
        await sendRevokedInvitationEmail({
          recipient: invitation.email,
          appName: APP_NAME,
          organizationName: ctx.organization.name
        });
      } catch (e) {
        console.error(e);
      }
    }

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        ctx.organization.id
      )
    );
  });
