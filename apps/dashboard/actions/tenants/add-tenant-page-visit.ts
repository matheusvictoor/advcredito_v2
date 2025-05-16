"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { addTenantPageVisitSchema } from "~/schemas/tenants/add-tenant-page-visit-schema";

export const addTenantPageVisit = authOrganizationActionClient
  .metadata({ actionName: "addTenantPageVisit" })
  .schema(addTenantPageVisitSchema)
  .action(async ({ parsedInput, ctx }) => {
    const countTenants = await prisma.tenant.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.tenantId,
      },
    });
    if (countTenants < 1) {
      throw new NotFoundError("Tenant not found");
    }

    await prisma.tenantPageVisit.create({
      data: {
        tenantId: parsedInput.tenantId,
        userId: ctx.session.user.id,
      },
      select: {
        id: true, // SELECT NONE
      },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantPageVisits,
        ctx.organization.id,
      ),
    );
  });
