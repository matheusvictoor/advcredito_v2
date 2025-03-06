'use server';

import { createHash } from 'crypto';
import { revalidateTag } from 'next/cache';
import { v4 } from 'uuid';

import {
  checkIfCanInvite,
  createInvitation,
  sendInvitationRequest
} from '@workspace/auth/invitations';
import {
  addOrganizationToStripe,
  updateOrganizationSubscriptionQuantity
} from '@workspace/billing/organization';
import { Tier } from '@workspace/billing/tier';
import type { Maybe } from '@workspace/common/maybe';
import {
  DayOfWeek,
  InvitationStatus,
  Role,
  type Prisma
} from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { decodeBase64Image } from '@workspace/image-processing/decode-base64-image';
import { resizeImage } from '@workspace/image-processing/resize-image';
import {
  getOrganizationLogoUrl,
  getUserImageUrl,
  replaceOrgSlug,
  routes
} from '@workspace/routes';

import { addExampleData } from '~/actions/onboarding/_add-example';
import { authActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { FileUploadAction } from '~/lib/file-upload';
import { getTimeSlot } from '~/lib/formatters';
import {
  completeOnboardingSchema,
  OnboardingStep,
  type CompleteOnboardingSchema
} from '~/schemas/onboarding/complete-onboarding-schema';

type Transaction = Prisma.PrismaPromise<unknown>;

export const completeOnboarding = authActionClient
  .metadata({ actionName: 'completeOnboarding' })
  .schema(completeOnboardingSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transactions: Transaction[] = [];
    const organizationId = v4();
    const userId = ctx.session.user.id;
    const userEmail = ctx.session.user.email.toLowerCase();

    // Handle profile step
    if (parsedInput.activeSteps.includes(OnboardingStep.Profile)) {
      await handleProfileStep(parsedInput.profileStep, userId, transactions);
    }

    // Handle theme step
    // No action required for theme step

    // Handle organization step
    if (parsedInput.activeSteps.includes(OnboardingStep.Organization)) {
      await handleOrganizationStep(
        parsedInput.organizationStep,
        organizationId,
        userEmail,
        userId,
        transactions
      );
    }

    // Handle pending invitations step
    if (parsedInput.activeSteps.includes(OnboardingStep.PendingInvitations)) {
      await handlePendingInvitationsStep(
        parsedInput.pendingInvitationsStep,
        userId,
        userEmail,
        transactions
      );
    }

    if (transactions.length) {
      await prisma.$transaction(transactions);
    }

    revalidateTag(Caching.createUserTag(UserCacheKey.PersonalDetails, userId));
    revalidateTag(Caching.createUserTag(UserCacheKey.Preferences, userId));
    revalidateTag(Caching.createUserTag(UserCacheKey.Organizations, userId));

    // Ideally we would execute these in a background job
    if (
      parsedInput.activeSteps.includes(OnboardingStep.Organization) &&
      parsedInput.organizationStep
    ) {
      // Handle invite team step
      if (parsedInput.activeSteps.includes(OnboardingStep.InviteTeam)) {
        await handleInviteTeamStep(
          parsedInput.inviteTeamStep,
          organizationId,
          parsedInput.organizationStep.name,
          ctx.session.user.name,
          ctx.session.user.email
        );
      }

      // Handle add example data
      if (parsedInput.organizationStep?.addExampleData) {
        try {
          await addExampleData(organizationId, ctx.session.user.id);
        } catch (e) {
          console.error(e);
        }
      }
    }

    const memberships = await prisma.membership.findMany({
      where: { userId: ctx.session.user.id },
      select: { organization: { select: { id: true, slug: true } } }
    });

    for (const membership of memberships) {
      try {
        await updateOrganizationSubscriptionQuantity(
          membership.organization.id
        );
      } catch (e) {
        console.error(e);
      }

      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Members,
          membership.organization.id
        )
      );
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Invitations,
          membership.organization.id
        )
      );
    }

    let redirect: string = routes.dashboard.organizations.Index;

    // Newly created organization
    if (
      parsedInput.activeSteps.includes(OnboardingStep.Organization) &&
      parsedInput.organizationStep?.slug
    ) {
      redirect = replaceOrgSlug(
        routes.dashboard.organizations.slug.Home,
        parsedInput.organizationStep.slug
      );
    }
    // Has only one organization
    else if (memberships.length === 1) {
      redirect = replaceOrgSlug(
        routes.dashboard.organizations.slug.Home,
        memberships[0].organization.slug
      );
    }

    return { redirect };
  });

async function handleProfileStep(
  step: CompleteOnboardingSchema['profileStep'],
  userId: string,
  transactions: Transaction[]
) {
  if (!step) {
    return;
  }

  let imageUrl: Maybe<string> = undefined;
  if (step.action === FileUploadAction.Update && step.image) {
    const { buffer, mimeType } = decodeBase64Image(step.image);
    const data = await resizeImage(buffer, mimeType);
    const hash = createHash('sha256').update(data).digest('hex');

    transactions.push(
      prisma.userImage.deleteMany({ where: { userId } }),
      prisma.userImage.create({
        data: { userId, data, contentType: mimeType, hash }
      })
    );

    imageUrl = getUserImageUrl(userId, hash);
  }
  if (step.action === FileUploadAction.Delete) {
    transactions.push(prisma.userImage.deleteMany({ where: { userId } }));
    imageUrl = null;
  }

  // Update user profile
  transactions.push(
    prisma.user.update({
      where: { id: userId },
      data: {
        image: imageUrl,
        name: step.name,
        phone: step.phone,
        completedOnboarding: true
      }
    })
  );
}

async function handleOrganizationStep(
  step: CompleteOnboardingSchema['organizationStep'],
  organizationId: string,
  userEmail: string,
  userId: string,
  transactions: Transaction[]
) {
  if (!step) {
    return;
  }

  let stripeCustomerId = '';
  try {
    stripeCustomerId = await addOrganizationToStripe(
      step.name,
      userEmail,
      organizationId
    );
  } catch {
    console.warn('Stripe customer ID is missing');
  }

  let logoUrl: Maybe<string> = undefined;
  if (step.logo) {
    const { buffer, mimeType } = decodeBase64Image(step.logo);
    const data = await resizeImage(buffer, mimeType);
    const hash = createHash('sha256').update(data).digest('hex');
    transactions.push(
      prisma.organizationLogo.create({
        data: {
          organizationId,
          data,
          contentType: mimeType,
          hash
        },
        select: {
          id: true // SELECT NONE
        }
      })
    );

    logoUrl = getOrganizationLogoUrl(organizationId, hash);
  }

  transactions.push(
    prisma.organization.create({
      data: {
        id: organizationId,
        logo: logoUrl,
        name: step.name,
        stripeCustomerId,
        slug: step.slug,
        tier: Tier.Free,
        businessHours: createDefaultBusinessHours(),
        memberships: {
          create: {
            userId,
            role: Role.ADMIN,
            isOwner: true
          }
        }
      }
    })
  );
}

async function handlePendingInvitationsStep(
  step: CompleteOnboardingSchema['pendingInvitationsStep'],
  userId: string,
  userEmail: string,
  transactions: Transaction[]
): Promise<void> {
  if (!step || !step.invitationIds) {
    return;
  }

  for (const invitationId of step.invitationIds) {
    const pendingInvitation = await prisma.invitation.findFirst({
      where: {
        id: invitationId,
        email: userEmail,
        status: InvitationStatus.PENDING
      },
      select: {
        organizationId: true,
        role: true
      }
    });
    if (!pendingInvitation) {
      continue;
    }

    transactions.push(
      prisma.membership.create({
        data: {
          userId,
          organizationId: pendingInvitation.organizationId,
          role: pendingInvitation.role
        }
      }),
      prisma.invitation.update({
        where: { id: invitationId },
        data: { status: InvitationStatus.ACCEPTED }
      })
    );
  }
}

async function handleInviteTeamStep(
  step: CompleteOnboardingSchema['inviteTeamStep'],
  organizationId: string,
  organizationName: string,
  userName: string,
  userEmail: string
): Promise<void> {
  if (!step || !step.invitations) {
    return;
  }

  for (const invitation of step.invitations) {
    if (!invitation.email) {
      continue;
    }

    const canInvite = await checkIfCanInvite(invitation.email, organizationId);
    if (!canInvite) {
      continue;
    }

    try {
      const newInvitation = await createInvitation(
        invitation.email,
        invitation.role,
        organizationId
      );
      await sendInvitationRequest({
        email: newInvitation.email,
        organizationName,
        invitedByEmail: userEmail,
        invitedByName: userName,
        token: newInvitation.token,
        invitationId: newInvitation.id,
        organizationId
      });
    } catch (e) {
      console.error(e);
    }
  }
}

function createDefaultBusinessHours() {
  const timeSlot = { start: getTimeSlot(9, 0), end: getTimeSlot(17, 0) };
  return {
    create: [
      { dayOfWeek: DayOfWeek.SUNDAY },
      { dayOfWeek: DayOfWeek.MONDAY, timeSlots: { create: timeSlot } },
      { dayOfWeek: DayOfWeek.TUESDAY, timeSlots: { create: timeSlot } },
      { dayOfWeek: DayOfWeek.WEDNESDAY, timeSlots: { create: timeSlot } },
      { dayOfWeek: DayOfWeek.THURSDAY, timeSlots: { create: timeSlot } },
      { dayOfWeek: DayOfWeek.FRIDAY, timeSlots: { create: timeSlot } },
      { dayOfWeek: DayOfWeek.SATURDAY }
    ]
  };
}
