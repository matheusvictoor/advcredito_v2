import "server-only";

import { unstable_cache as cache } from "next/cache";

import { getAuthOrganizationContext } from "@workspace/auth/context";
import { ValidationError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
} from "~/data/caching";
import {
  getTenantTasksSchema,
  type GetTenantTasksSchema,
} from "~/schemas/tenants/get-tenant-tasks-schema";
import type { TenantTaskDto } from "~/types/dtos/tenant-task-dto";
import { SortDirection } from "~/types/sort-direction";

export async function getTenantTasks(
  input: GetTenantTasksSchema,
): Promise<TenantTaskDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantTasksSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const tasks = await prisma.tenantTask.findMany({
        where: {
          tenantId: parsedInput.tenantId,
          tenant: {
            organizationId: ctx.organization.id,
          },
        },
        select: {
          id: true,
          tenantId: true,
          title: true,
          description: true,
          status: true,
          dueDate: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: SortDirection.Asc,
        },
      });

      const mapped: TenantTaskDto[] = tasks.map((task) => ({
        id: task.id,
        tenantId: task.tenantId ?? undefined,
        title: task.title,
        description: task.description ?? undefined,
        status: task.status,
        dueDate: task.dueDate ?? undefined,
        createdAt: task.createdAt,
      }));

      return mapped;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.TenantTasks,
      ctx.organization.id,
      parsedInput.tenantId,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.TenantTasks,
          ctx.organization.id,
          parsedInput.tenantId,
        ),
      ],
    },
  )();
}
