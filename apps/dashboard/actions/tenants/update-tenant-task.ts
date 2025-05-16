"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { updateTenantTaskSchema } from "~/schemas/tenants/update-tenant-task-schema";

export const updateTenantTask = authOrganizationActionClient
  .metadata({ actionName: "updateTenantTask" })
  .schema(updateTenantTaskSchema)
  .action(async ({ parsedInput, ctx }) => {
    const task = await prisma.tenantTask.update({
      where: {
        id: parsedInput.id,
        tenant: {
          organizationId: ctx.organization.id,
        },
      },
      data: {
        title: parsedInput.title,
        description: parsedInput.description,
        status: parsedInput.status,
        dueDate: parsedInput.dueDate ? parsedInput.dueDate : null,
      },
      select: { tenantId: true },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantTasks,
        ctx.organization.id,
        task.tenantId,
      ),
    );
  });
