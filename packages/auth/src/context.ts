import { cache } from 'react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { getRedirectToSignIn } from '@workspace/auth/redirect';
import { checkSession } from '@workspace/auth/session';
import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { dedupedAuth, signOut } from '.';

const dedupedGetActiveOrganization = cache(async function () {
  // Read organization slug from the HTTP header
  const headerList = await headers();
  const organizationSlug = headerList.get('x-organization-slug');
  if (!organizationSlug) {
    // Instead of not-found we can just redirect.
    console.warn('No organization slug in headers. Check middleware.');
    return redirect(routes.dashboard.organizations.Index);
  }

  const organization = await prisma.organization.findFirst({
    where: { slug: organizationSlug },
    select: {
      id: true,
      logo: true,
      name: true,
      tier: true,
      stripeCustomerId: true,
      slug: true,
      memberships: {
        select: {
          userId: true
        }
      }
    }
  });
  if (!organization) {
    // Instead of not-found we can just redirect.
    return redirect(routes.dashboard.organizations.Index);
  }

  return {
    ...organization,
    logo: organization.logo ? organization.logo : undefined
  };
});

const dedupedGetUserInfo = cache(async function (userId: string) {
  const userInfo = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      completedOnboarding: true,
      memberships: {
        select: {
          organizationId: true,
          role: true,
          isOwner: true
        }
      }
    }
  });
  if (!userInfo) {
    // Should not happen, but if it does let's sign out the user.
    // One possible scenario is if someone is fiddling with the database while a user is still logged in.
    return signOut({ redirectTo: routes.dashboard.auth.SignIn });
  }

  return userInfo;
});

export async function getAuthContext() {
  const session = await dedupedAuth();
  if (!checkSession(session)) {
    return redirect(getRedirectToSignIn());
  }

  const userInfo = await dedupedGetUserInfo(session.user.id);

  const enrichedSession = {
    ...session,
    user: {
      ...session.user,
      ...userInfo
    }
  };

  return { session: enrichedSession };
}

export async function getAuthOrganizationContext() {
  const session = await dedupedAuth();
  if (!checkSession(session)) {
    return redirect(getRedirectToSignIn());
  }

  const activeOrganization = await dedupedGetActiveOrganization();
  const userInfo = await dedupedGetUserInfo(session.user.id);
  if (
    !userInfo.memberships.some((m) => m.organizationId == activeOrganization.id)
  ) {
    // Instead of forbidden we can just redirect.
    return redirect(routes.dashboard.organizations.Index);
  }

  const enrichedSession = {
    ...session,
    user: {
      ...session.user,
      ...userInfo
    }
  };

  return { session: enrichedSession, organization: activeOrganization };
}
