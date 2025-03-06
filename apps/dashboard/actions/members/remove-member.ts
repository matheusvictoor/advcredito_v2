'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { isOrganizationAdmin } from '@workspace/auth/permissions';
import { updateOrganizationSubscriptionQuantity } from '@workspace/billing/organization';
import { ForbiddenError, NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { removeMemberSchema } from '~/schemas/members/remove-member-schema';

export const removeMember = authOrganizationActionClient
  .metadata({ actionName: 'removeMember' })
  .schema(removeMemberSchema)
  .action(async ({ parsedInput, ctx }) => {
    const isLeaving = ctx.session.user.id === parsedInput.id;
    if (!isLeaving) {
      const currentUserIsAdmin = await isOrganizationAdmin(
        ctx.session.user.id,
        ctx.organization.id
      );
      if (!currentUserIsAdmin) {
        throw new ForbiddenError('Insufficient permissions');
      }
    }

    const membership = await prisma.membership.findFirst({
      where: {
        organizationId: ctx.organization.id,
        userId: parsedInput.id
      },
      select: {
        id: true,
        role: true,
        isOwner: true,
        user: {
          select: {
            email: true
          }
        }
      }
    });
    if (!membership) {
      throw new NotFoundError('Membership not found');
    }
    if (membership.isOwner) {
      throw new ForbiddenError('Owners cannot be removed.');
    }

    await prisma.$transaction([
      prisma.verificationToken.deleteMany({
        where: { identifier: membership.user.email! }
      }),
      prisma.membership.deleteMany({
        where: { id: membership.id }
      })
    ]);

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Members,
        ctx.organization.id
      )
    );

    revalidateTag(Caching.createUserTag(UserCacheKey.Profile, parsedInput.id));
    revalidateTag(
      Caching.createUserTag(UserCacheKey.Organizations, parsedInput.id)
    );

    try {
      await updateOrganizationSubscriptionQuantity(ctx.organization.id);
    } catch (e) {
      console.error(e);
    }

    if (isLeaving) {
      redirect(routes.dashboard.organizations.Index);
    }
  });
