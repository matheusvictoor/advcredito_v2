import * as React from 'react';

import { getAuthContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import { DeleteAccountCard } from '~/components/organizations/slug/settings/account/profile/delete-account-card';

export default async function DangerZonePage(): Promise<React.JSX.Element> {
  const ctx = await getAuthContext();
  const ownedOrganizationIds = ctx.session.user.memberships
    .filter((membership) => membership.isOwner)
    .map((membership) => membership.organizationId);
  const ownedOrganizations =
    ownedOrganizationIds.length > 0
      ? await prisma.organization.findMany({
          where: {
            id: {
              in: ownedOrganizationIds
            }
          },
          select: {
            name: true,
            slug: true
          }
        })
      : [];
  return <DeleteAccountCard ownedOrganizations={ownedOrganizations} />;
}
