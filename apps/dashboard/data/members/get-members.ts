import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { MemberDto } from '~/types/dtos/member-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getMembers(): Promise<MemberDto[]> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const members = await prisma.membership.findMany({
        where: { organizationId: ctx.organization.id },
        select: {
          role: true,
          isOwner: true,
          user: {
            select: {
              id: true,
              image: true,
              name: true,
              email: true,
              lastLogin: true,
              createdAt: true
            }
          }
        },
        orderBy: {
          createdAt: SortDirection.Asc
        }
      });

      const response: MemberDto[] = members.map((member) => ({
        id: member.user.id,
        image: member.user.image ?? undefined,
        name: member.user.name,
        email: member.user.email!,
        role: member.role,
        isOwner: member.isOwner,
        dateAdded: member.user.createdAt,
        lastLogin: member.user.lastLogin ?? undefined
      }));

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Members,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Members,
          ctx.organization.id
        )
      ]
    }
  )();
}
