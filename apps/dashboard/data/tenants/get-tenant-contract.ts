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
import type { TenantContractDto } from "~/types/dtos/tenant-contract-dto";
import { SortDirection } from "~/types/sort-direction";

export async function getTenantContract(
  input: GetTenantContractsSchema,
): Promise<TenantContractDto> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantContractsSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const contract = await prisma.contract.findFirst({
        where: {
          id: parsedInput.id,
          tenant: {
            organizationId: ctx.organization.id,
          },
        },
        select: {
          id: true,
          tenantId: true,
          startContract: true,
          endContract: true,
          rental: true,
          totalCharges: true,
          furnished: true,
          floor: true,
          dueRental: true,
          forumCity: true,
          observation: true,
          createdAt: true,
          updatedAt: true,
          paymentType: true,
          propertyType: true,
          propertyUse: true,
          status: true,

          p_street: true,
          p_number: true,
          p_neighborhood: true,
          p_zipcode: true,
          p_city: true,
          p_state: true,
          p_country: true,
          p_complement: true,

          l_name: true,
          l_doc: true,
          l_email: true,
          l_phone: true,
          l_street: true,
          l_number: true,
          l_neighborhood: true,
          l_zipcode: true,
          l_city: true,
          l_state: true,
          l_country: true,
          l_complement: true,

          t_name: true,
          t_doc: true,
          t_email: true,
          t_phone: true,
          t_street: true,
          t_number: true,
          t_neighborhood: true,
          t_zipcode: true,
          t_city: true,
          t_state: true,
          t_country: true,
          t_complement: true,

          charges: {
            select: {
              type: true,
              description: true,
              value: true,
            },
          },
        },
        orderBy: {
          createdAt: SortDirection.Asc,
        },
      });

      return contract;
    },

    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.TenantContract,
      ctx.organization.id,
      parsedInput.id,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.TenantContract,
          ctx.organization.id,
          parsedInput.id,
        ),
      ],
    },
  )();
}
