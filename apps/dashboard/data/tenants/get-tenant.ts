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
  getTenantSchema,
  type GetTenantSchema,
} from "~/schemas/tenants/get-tenant-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export async function getTenant(input: GetTenantSchema): Promise<TenantDto> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantSchema.safeParse(input);
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
          person: {
            select: {
              cpf: true,
              birthDate: true,
            },
          },
          company: {
            select: {
              cnpj: true,
            },
          },
          id: true,
          record: true,
          name: true,
          image: true,
          email: true,
          phone: true,
          status: true,
          archived: true,
          solde: true,
          street: true,
          number: true,
          neighborhood: true,
          zipcode: true,
          city: true,
          complement: true,
          state: true,
          createdAt: true,
        },
      });
      if (!tenant) {
        return notFound();
      }

      const response: TenantDto = {
        id: tenant.id,
        record: tenant.record,
        name: tenant.name,
        image: tenant.image ? tenant.image : undefined,
        email: tenant.email ? tenant.email : undefined,
        phone: tenant.phone ? tenant.phone : undefined,
        status: tenant.status,
        archived: tenant.archived,
        solde: tenant.solde.toString(),
        street: tenant.street ? tenant.street : undefined,
        number: tenant.number ? tenant.number : undefined,
        neighborhood: tenant.neighborhood ? tenant.neighborhood : undefined,
        zipcode: tenant.zipcode ? tenant.zipcode : undefined,
        city: tenant.city ? tenant.city : undefined,
        createdAt: tenant.createdAt,
      };

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Tenant,
      ctx.organization.id,
      parsedInput.id,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Tenant,
          ctx.organization.id,
          parsedInput.id,
        ),
      ],
    },
  )();
}
