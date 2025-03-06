'use server';

import { revalidateTag } from 'next/cache';

import { isOrganizationAdmin } from '@workspace/auth/permissions';
import { ForbiddenError, NotFoundError } from '@workspace/common/errors';
import { Role } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateInvitationSchema } from '~/schemas/invitations/update-invitation-schema';

export const updateInvitation = authOrganizationActionClient
  .metadata({ actionName: 'updateInvitation' })
  .schema(updateInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    const invitation = await prisma.invitation.findFirst({
      where: {
        id: parsedInput.id,
        organizationId: ctx.organization.id
      },
      select: {
        email: true,
        role: true
      }
    });
    if (!invitation) {
      throw new NotFoundError('Invitation not found');
    }
    if (invitation.role !== Role.ADMIN && parsedInput.role === Role.ADMIN) {
      const currentUserIsAdmin = await isOrganizationAdmin(
        ctx.session.user.id,
        ctx.organization.id
      );
      if (!currentUserIsAdmin) {
        throw new ForbiddenError('Insufficient permissions');
      }
    }

    await prisma.invitation.update({
      where: { id: parsedInput.id },
      data: { role: parsedInput.role },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        ctx.organization.id
      )
    );
  });
