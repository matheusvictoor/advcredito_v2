'use server';

import { revalidateTag } from 'next/cache';

import { sendInvitationRequest } from '@workspace/auth/invitations';
import { NotFoundError, PreConditionError } from '@workspace/common/errors';
import { InvitationStatus } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { resendInvitationSchema } from '~/schemas/invitations/resend-invitation-schema';

export const resendInvitation = authOrganizationActionClient
  .metadata({ actionName: 'resendInvitation' })
  .schema(resendInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    const invitation = await prisma.invitation.findFirst({
      where: {
        id: parsedInput.id,
        organizationId: ctx.organization.id
      },
      select: {
        email: true,
        token: true,
        status: true
      }
    });
    if (!invitation) {
      throw new NotFoundError('Invitation not found');
    }
    if (invitation.status === InvitationStatus.ACCEPTED) {
      throw new PreConditionError('Invitation already accepted');
    }
    if (invitation.status === InvitationStatus.REVOKED) {
      throw new PreConditionError('Invitation was revoked');
    }

    await sendInvitationRequest({
      email: invitation.email,
      organizationName: ctx.organization.name,
      invitedByEmail: ctx.session.user.email,
      invitedByName: ctx.session.user.name,
      token: invitation.token,
      invitationId: parsedInput.id,
      organizationId: ctx.organization.id
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        ctx.organization.id
      )
    );
  });
