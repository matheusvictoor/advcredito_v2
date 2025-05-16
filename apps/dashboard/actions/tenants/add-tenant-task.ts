"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { addTenantTaskSchema } from "~/schemas/tenants/add-tenant-task-schema";

export const addTenantTask = authOrganizationActionClient
  .metadata({ actionName: "addTenantTask" })
  .schema(addTenantTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenant.count({
      where: {
        id: parsedInput.tenantId,
        organizationId: ctx.organization.id,
      },
    });
    if (count < 1) {
      throw new NotFoundError("Tenant not found.");
    }

    await prisma.tenantTask.create({
      data: {
        tenantId: parsedInput.tenantId,
        title: parsedInput.title,
        description: parsedInput.description,
        status: parsedInput.status,
        dueDate: parsedInput.dueDate ? parsedInput.dueDate : null,
      },
      select: {
        id: true, // SELECT NONE
      },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantTasks,
        ctx.organization.id,
        parsedInput.tenantId,
      ),
    );
  });
