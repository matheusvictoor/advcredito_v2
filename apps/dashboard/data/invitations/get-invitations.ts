import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { InvitationStatus } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { InvitationDto } from '~/types/dtos/invitation-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getInvitations(): Promise<InvitationDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const invitations = await prisma.invitation.findMany({
        where: {
          organizationId: ctx.organization.id,
          NOT: { status: { equals: InvitationStatus.ACCEPTED } }
        },
        select: {
          id: true,
          token: true,
          status: true,
          email: true,
          role: true,
          createdAt: true,
          lastSentAt: true
        },
        orderBy: {
          createdAt: SortDirection.Asc
        }
      });

      const response: InvitationDto[] = invitations.map((invitation) => ({
        id: invitation.id,
        token: invitation.token,
        status: invitation.status,
        email: invitation.email,
        role: invitation.role,
        lastSent: invitation.lastSentAt ?? undefined,
        dateAdded: invitation.createdAt
      }));

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Invitations,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Invitations,
          ctx.organization.id
        )
      ]
    }
  )();
}
