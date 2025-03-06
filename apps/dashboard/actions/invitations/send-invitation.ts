'use server';

import { revalidateTag } from 'next/cache';

import {
  checkIfCanInvite,
  createInvitation,
  sendInvitationRequest
} from '@workspace/auth/invitations';
import { isOrganizationAdmin } from '@workspace/auth/permissions';
import { ForbiddenError, PreConditionError } from '@workspace/common/errors';
import { Role } from '@workspace/database';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { sendInvitationSchema } from '~/schemas/invitations/send-invitation-schema';

export const sendInvitation = authOrganizationActionClient
  .metadata({ actionName: 'sendInvitation' })
  .schema(sendInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    if (parsedInput.role === Role.ADMIN) {
      const currentUserIsAdmin = await isOrganizationAdmin(
        ctx.session.user.id,
        ctx.organization.id
      );
      if (!currentUserIsAdmin) {
        throw new ForbiddenError('Insufficient permissions');
      }
    }

    const canInvite = await checkIfCanInvite(
      parsedInput.email,
      ctx.organization.id
    );
    if (!canInvite) {
      throw new PreConditionError('Already member or invited');
    }

    const invitation = await createInvitation(
      parsedInput.email,
      parsedInput.role,
      ctx.organization.id
    );

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        ctx.organization.id
      )
    );

    await sendInvitationRequest({
      email: parsedInput.email,
      organizationName: ctx.organization.name,
      invitedByEmail: ctx.session.user.email,
      invitedByName: ctx.session.user.name,
      token: invitation.token,
      invitationId: invitation.id,
      organizationId: ctx.organization.id
    });
  });
