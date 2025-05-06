import "server-only";

import { unstable_cache as cache } from "next/cache";

import { getAuthOrganizationContext } from "@workspace/auth/context";
import { ValidationError } from "@workspace/common/errors";
import { TenantRecord, Prisma } from "@workspace/database";
import { prisma } from "@workspace/database/client";

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
} from "~/data/caching";
import {
  getTenantsSchema,
  RecordsOption,
  type GetTenantsSchema,
} from "~/schemas/tenants/get-tenants-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export async function getTenants(input: GetTenantsSchema): Promise<{
  tenants: TenantDto[];
  filteredCount: number;
  totalCount: number;
  assetsCount: number;
}> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantsSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  const searchCriteria: Prisma.StringFilter | undefined =
    parsedInput.searchQuery
      ? { contains: parsedInput.searchQuery, mode: "insensitive" }
      : undefined;
  const searchVector = searchCriteria
    ? [
        { name: searchCriteria },
        { email: searchCriteria },
        { phone: searchCriteria },
      ]
    : undefined;

  return cache(
    async () => {
      const [tenants, filteredCount, totalCount, assetsCount] =
        await prisma.$transaction([
          prisma.tenant.findMany({
            skip: parsedInput.pageIndex * parsedInput.pageSize,
            take: parsedInput.pageSize,
            where: {
              record: mapRecords(parsedInput.records),
              archived: parsedInput.archived,
              OR: searchVector,
            },
            select: {
              person: {
                select: {
                  cpf: true,
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
              createdAt: true,
              contract: {
                where: {
                  status: "ACTIVE",
                },
                select: {
                  property: {
                    select: {
                      type: true,
                      number: true,
                    },
                  },
                  _count: {
                    select: {
                      financialTransation: {
                        where: {
                          status: "PENDING",
                        },
                      },
                    },
                  },
                },
              },
              _count: {
                select: {
                  contract: {
                    where: {
                      status: "ACTIVE",
                    },
                  },
                },
              },
            },
            orderBy: {
              [parsedInput.sortBy]: parsedInput.sortDirection,
            },
          }),
          prisma.tenant.count({
            where: {
              record: mapRecords(parsedInput.records),
              archived: parsedInput.archived,
              OR: searchVector,
            },
          }),
          prisma.tenant.count(),
          prisma.tenant.count({
            where: {
              archived: false,
            },
          }),
        ]);

      const mapped: TenantDto[] = tenants.map((tenant) => ({
        id: tenant.id,
        record: tenant.record,
        name: tenant.name,
        cpf: tenant.person?.cpf ? tenant.person.cpf : undefined,
        cnpj: tenant.company?.cnpj ? tenant.company.cnpj : undefined,
        image: tenant.image ? tenant.image : undefined,
        email: tenant.email,
        phone: tenant.phone,
        status: tenant.status,
        archived: tenant.archived,
        solde: tenant.solde,
        createdAt: tenant.createdAt,
        propertyType: tenant.contract[0]?.property.type,
        propertyNumber: tenant.contract[0]?.property.number,
        pendingInstallmentsCount: tenant.contract.reduce(
          (acc, contract) => acc + contract._count.financialTransation,
          0,
        ),
        assetsContractCount: tenant._count.contract,
      }));

      return { tenants: mapped, filteredCount, totalCount, assetsCount };
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.Tenants,
      ctx.organization.id,
      parsedInput.pageIndex.toString(),
      parsedInput.pageSize.toString(),
      parsedInput.sortBy,
      parsedInput.sortDirection,
      parsedInput.archived.toString(),
      parsedInput.records?.toString() ?? "",
      parsedInput.searchQuery?.toString() ?? "",
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.Tenants,
          ctx.organization.id,
        ),
      ],
    },
  )();
}

function mapRecords(option: RecordsOption): TenantRecord | undefined {
  switch (option) {
    case RecordsOption.People:
      return TenantRecord.PERSON;
    case RecordsOption.Companies:
      return TenantRecord.COMPANY;
  }

  return undefined;
}
