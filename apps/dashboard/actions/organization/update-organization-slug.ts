'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@workspace/database/client';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';
import { updateOrganizationSlugSchema } from '~/schemas/organization/update-organization-slug-schema';

export const updateOrganizationSlug = authOrganizationActionClient
  .metadata({ actionName: 'updateOrganizationSlug' })
  .schema(updateOrganizationSlugSchema)
  .action(async ({ parsedInput, ctx }) => {
    if (parsedInput.slug !== ctx.organization.slug) {
      await prisma.organization.update({
        where: { id: ctx.organization.id },
        data: { slug: parsedInput.slug },
        select: {
          id: true // SELECT NONE
        }
      });

      for (const membership of ctx.organization.memberships) {
        revalidateTag(
          Caching.createUserTag(UserCacheKey.Organizations, membership.userId)
        );
      }

      redirect(
        `${replaceOrgSlug(
          routes.dashboard.organizations.slug.settings.organization.General,
          parsedInput.slug
        )}?slugUpdated=true`
      );
    }
  });
