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
  getTenantContractsSchema,
  type GetTenantContractsSchema,
} from "~/schemas/tenants/get-tenant-contracts-schema";
import type { TenantContractsDto } from "~/types/dtos/tenant-contracts-dto";
import { SortDirection } from "~/types/sort-direction";

export async function getTenantContracts(
  input: GetTenantContractsSchema,
): Promise<TenantContractsDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantContractsSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const contracts = await prisma.contract.findMany({
        where: {
          id: parsedInput.id,
          tenant: {
            organizationId: ctx.organization.id,
          },
        },
        select: {
          id: true,
          startContract: true,
          endContract: true,
          rental: true,
          totalCharges: true,
          floor: true,
          dueRental: true,
          propertyType: true,
          propertyUse: true,
          status: true,
          p_street: true,
          p_zipcode: true,
          p_city: true,
          p_state: true,
          p_country: true,
          updatedAt: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: SortDirection.Asc,
        },
      });

      return contracts;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.TenantContracts,
      ctx.organization.id,
      parsedInput.id,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.TenantContracts,
          ctx.organization.id,
          parsedInput.id,
        ),
      ],
    },
  )();
}
