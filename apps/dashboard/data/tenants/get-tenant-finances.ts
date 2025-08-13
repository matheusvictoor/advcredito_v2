import "server-only";

import { unstable_cache as cache } from "next/cache";
import { notFound } from "next/navigation";

import { getAuthOrganizationContext } from "@workspace/auth/context";
import { ValidationError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
} from "~/data/caching";
import {
  getTenantFinancesSchema,
  type GetTenantFinancesSchema,
} from "~/schemas/tenants/get-tenant-finances-schema";
import type { TenantFinancesDto } from "~/types/dtos/tenant-finances-dto";
import Decimal from "decimal.js";

export async function getTenantFinances(
  input: GetTenantFinancesSchema,
): Promise<TenantFinancesDto> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantFinancesSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const tenant = await prisma.tenant.findFirst({
        where: {
          organizationId: ctx.organization.id,
          id: parsedInput.id,
        },
        select: {
          id: true,
          solde: true,
          _count: {
            select: {
              rentals: {
                where: {
                  status: "ACTIVE",
                },
              },
            },
          },
          rentals: {
            where: {
              status: "ACTIVE",
            },
            select: {
              rental: true,
            },
          },
        },
      });
      if (!tenant) {
        return notFound();
      }

      const response: TenantFinancesDto = {
        id: tenant.id,
        solde: tenant.solde.toString(),
        assetsRentalsCount: tenant._count.rentals,
        totalActiveRentals: tenant.rentals.reduce(
          (sum: Decimal, rental) => {
            return sum.plus(rental.rental ?? new Decimal(0));
          },
          new Decimal(0),
        ).toString(),
      };

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.TenantFinances,
      ctx.organization.id,
      parsedInput.id,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.TenantFinances,
          ctx.organization.id,
          parsedInput.id,
        ),
      ],
    },
  )();
}
