"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { deleteTenantsSchema } from "~/schemas/tenants/delete-tenants-schema";

export const deleteTenants = authOrganizationActionClient
  .metadata({ actionName: "deleteTenants" })
  .schema(deleteTenantsSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.tenant.deleteMany({
      where: {
        id: {
          in: parsedInput.ids,
        },
        // organizationId: ctx.organization.id
      },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenants,
        ctx.organization.id,
      ),
    );

    for (const id of parsedInput.ids) {
      revalidateTag(
        Caching.createOrganizationTag(OrganizationCacheKey.Tenants, id),
      );
    }

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          membership.userId,
        ),
      );
    }
  });
