'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { updateOrganizationSubscriptionQuantity } from '@workspace/billing/organization';
import { NotFoundError, PreConditionError } from '@workspace/common/errors';
import { InvitationStatus } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { acceptInvitationSchema } from '~/schemas/invitations/accept-invitation-schema';

export const acceptInvitation = authActionClient
  .metadata({ actionName: 'acceptInvitation' })
  .schema(acceptInvitationSchema)
  .action(async ({ parsedInput, ctx }) => {
    const invitation = await prisma.invitation.findFirst({
      where: { id: parsedInput.invitationId },
      select: {
        status: true,
        email: true,
        role: true,
        organizationId: true
      }
    });
    if (!invitation) {
      throw new NotFoundError('Invitation not found');
    }
    if (invitation.status === InvitationStatus.REVOKED) {
      throw new PreConditionError('Invitation was revoked');
    }
    if (invitation.status === InvitationStatus.ACCEPTED) {
      throw new PreConditionError('Invitation was already accepted');
    }
    const normalizedEmail = invitation.email.toLowerCase();
    if (normalizedEmail !== ctx.session.user.email) {
      throw new PreConditionError('Email does not match');
    }
    const organization = await prisma.organization.findFirst({
      where: { id: invitation.organizationId },
      select: { slug: true }
    });
    if (!organization) {
      throw new NotFoundError('Organization not found');
    }

    await prisma.$transaction([
      prisma.invitation.updateMany({
        where: { id: parsedInput.invitationId },
        data: { status: InvitationStatus.ACCEPTED }
      }),
      prisma.membership.create({
        data: {
          organizationId: invitation.organizationId,
          userId: ctx.session.user.id,
          role: invitation.role
        },
        select: {
          id: true // SELECT NONE
        }
      })
    ]);

    try {
      await updateOrganizationSubscriptionQuantity(invitation.organizationId);
    } catch (e) {
      console.error(e);
    }

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Members,
        invitation.organizationId
      )
    );
    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Invitations,
        invitation.organizationId
      )
    );
    revalidateTag(
      Caching.createUserTag(UserCacheKey.Organizations, ctx.session.user.id)
    );

    return redirect(
      replaceOrgSlug(
        routes.dashboard.organizations.slug.Home,
        organization.slug
      )
    );
  });
