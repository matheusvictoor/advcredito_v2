'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { deleteInvitationSchema } from '~/schemas/invitations/delete-invitation-schema';

export const deleteInvitation = authOrganizationActionClient
  .metadata({ actionName: 'deleteInvitation' })
  .schema(deleteInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.invitation.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      }
    });
    if (count < 1) {
      throw new NotFoundError('Invitation not found');
    }

    await prisma.invitation.deleteMany({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        ctx.organization.id
      )
    );
  });
