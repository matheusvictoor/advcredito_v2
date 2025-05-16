"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { deleteTenantSchema } from "~/schemas/tenants/delete-tenant-schema";

export const deleteTenant = authOrganizationActionClient
  .metadata({ actionName: "deleteTenant" })
  .schema(deleteTenantSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenant.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id,
      },
    });
    if (count < 1) {
      throw new NotFoundError("Inquilino não encontrado");
    }

    await prisma.$transaction([
      prisma.tenantImage.deleteMany({
        where: { tenantId: parsedInput.id },
      }),
      prisma.tenant.delete({
        where: { id: parsedInput.id },
        select: {
          id: true, // SELECT NONE
        },
      }),
    ]);

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenants,
        ctx.organization.id,
      ),
    );

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenants,
        ctx.organization.id,
        parsedInput.id,
      ),
    );

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
