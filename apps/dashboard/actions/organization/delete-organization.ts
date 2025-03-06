'use server';

import { revalidateTag } from 'next/cache';

import { isOrganizationOwner } from '@workspace/auth/permissions';
import { deleteOrganizationFromStripe } from '@workspace/billing/organization';
import { ForbiddenError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';

export const deleteOrganization = authOrganizationActionClient
  .metadata({ actionName: 'deleteOrganization' })
  .action(async ({ ctx }) => {
    const currentUserIsOwner = await isOrganizationOwner(
      ctx.session.user.id,
      ctx.organization.id
    );
    if (!currentUserIsOwner) {
      throw new ForbiddenError('Only owners can delete an organization.');
    }

    await prisma.$transaction([
      prisma.membership.deleteMany({
        where: { organizationId: ctx.organization.id }
      }),
      prisma.organization.deleteMany({
        where: { id: ctx.organization.id }
      }),
      prisma.organizationLogo.deleteMany({
        where: { organizationId: ctx.organization.id }
      })
    ]);

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createUserTag(UserCacheKey.Organizations, membership.userId)
      );
      revalidateTag(
        Caching.createUserTag(UserCacheKey.Profile, membership.userId)
      );
    }

    try {
      await deleteOrganizationFromStripe(ctx.organization.stripeCustomerId);
    } catch (e) {
      console.error(e);
    }
  });
