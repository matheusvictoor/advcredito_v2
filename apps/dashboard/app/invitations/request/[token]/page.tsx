import * as React from 'react';
import { type Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';
import { validate as uuidValidate } from 'uuid';

import { dedupedAuth } from '@workspace/auth';
import { InvitationStatus } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { AcceptInvitationCard } from '~/components/invitations/accept-invitation-card';
import { SignInToAcceptCard } from '~/components/invitations/sign-in-to-accept-card';
import { createTitle } from '~/lib/formatters';

const paramsCache = createSearchParamsCache({
  token: parseAsString.withDefault('')
});

export const metadata: Metadata = {
  title: createTitle('Join organization')
};

export default async function InvitationPage({
  params
}: NextPageProps): Promise<React.JSX.Element> {
  const { token } = await paramsCache.parse(params);
  if (!token || !uuidValidate(token)) {
    return notFound();
  }

  const invitation = await prisma.invitation.findFirst({
    where: { token },
    select: {
      id: true,
      email: true,
      status: true,
      organization: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });
  if (!invitation) {
    return notFound();
  }
  if (invitation.status === InvitationStatus.ACCEPTED) {
    return redirect(routes.dashboard.invitations.AlreadyAccepted);
  }
  if (invitation.status === InvitationStatus.REVOKED) {
    return redirect(routes.dashboard.invitations.Revoked);
  }

  const session = await dedupedAuth();
  if (!session || !session.user || session.user.email !== invitation.email) {
    return (
      <SignInToAcceptCard
        organizationName={invitation.organization.name}
        email={invitation.email}
        loggedIn={!!session}
      />
    );
  }
  return (
    <AcceptInvitationCard
      invitationId={invitation.id}
      organizationName={invitation.organization.name}
    />
  );
}
