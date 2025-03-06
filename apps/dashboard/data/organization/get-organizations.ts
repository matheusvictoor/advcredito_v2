import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthContext } from '@workspace/auth/context';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  UserCacheKey
} from '~/data/caching';
import type { OrganizationDto } from '~/types/dtos/organization-dto';

export async function getOrganizations(): Promise<OrganizationDto[]> {
  const ctx = await getAuthContext();

  return cache(
    async () => {
      const organizations = await prisma.organization.findMany({
        where: {
          memberships: {
            some: {
              userId: ctx.session.user.id
            }
          }
        },
        select: {
          id: true,
          logo: true,
          name: true,
          slug: true,
          _count: {
            select: {
              memberships: true
            }
          },
          memberships: {
            where: { userId: ctx.session.user.id },
            select: { createdAt: true }
          }
        }
      });

      const response: OrganizationDto[] = organizations
        .sort(
          (a, b) =>
            a.memberships[0].createdAt.getTime() -
            b.memberships[0].createdAt.getTime()
        )
        .map((organization) => ({
          id: organization.id,
          logo: organization.logo ? organization.logo : undefined,
          name: organization.name,
          slug: organization.slug,
          memberCount: organization._count.memberships
        }));

      return response;
    },
    Caching.createUserKeyParts(UserCacheKey.Organizations, ctx.session.user.id),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(UserCacheKey.Organizations, ctx.session.user.id)
      ]
    }
  )();
}
