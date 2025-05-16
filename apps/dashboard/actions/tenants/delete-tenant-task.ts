"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { deleteTenantTaskSchema } from "~/schemas/tenants/delete-tenant-task-schema";

export const deleteTenantTask = authOrganizationActionClient
  .metadata({ actionName: "deleteTenantTask" })
  .schema(deleteTenantTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenantTask.count({
      where: {
        id: parsedInput.id,
        tenant: {
          organizationId: ctx.organization.id,
        },
      },
    });
    if (count < 1) {
      throw new NotFoundError("Task not found");
    }

    const deletedTask = await prisma.tenantTask.delete({
      where: { id: parsedInput.id },
      select: { tenantId: true },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantTasks,
        ctx.organization.id,
        deletedTask.tenantId,
      ),
    );
  });
