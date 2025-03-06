'use server';

import { revalidateTag } from 'next/cache';

import { updateOrganizationSubscriptionQuantity } from '@workspace/billing/organization';
import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';

export const deleteAccount = authActionClient
  .metadata({ actionName: 'deleteAccount' })
  .action(async ({ ctx }) => {
    if (ctx.session.user.memberships.some((membership) => membership.isOwner)) {
      throw new Error('Cannot delete account while owning an organization');
    }

    await prisma.$transaction([
      prisma.invitation.deleteMany({
        where: { email: ctx.session.user.email }
      }),
      prisma.account.deleteMany({
        where: { userId: ctx.session.user.id }
      }),
      prisma.session.deleteMany({
        where: { userId: ctx.session.user.id }
      }),
      prisma.verificationToken.deleteMany({
        where: { identifier: ctx.session.user.email }
      }),
      prisma.changeEmailRequest.deleteMany({
        where: { userId: ctx.session.user.id }
      }),
      prisma.resetPasswordRequest.deleteMany({
        where: { email: ctx.session.user.email }
      }),
      prisma.membership.deleteMany({
        where: { id: ctx.session.user.id }
      }),
      prisma.user.deleteMany({
        where: { id: ctx.session.user.id }
      })
    ]);

    for (const membership of ctx.session.user.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Members,
          membership.organizationId
        )
      );
      try {
        await updateOrganizationSubscriptionQuantity(membership.organizationId);
      } catch (e) {
        console.error(e);
      }
    }
  });
