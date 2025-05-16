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
  getTenantNotesSchema,
  type GetTenantNotesSchema,
} from "~/schemas/tenants/get-tenant-notes-schema";
import type { TenantNoteDto } from "~/types/dtos/tenant-note-dto";
import { SortDirection } from "~/types/sort-direction";

export async function getTenantNotes(
  input: GetTenantNotesSchema,
): Promise<TenantNoteDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantNotesSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const notes = await prisma.tenantNote.findMany({
        where: {
          tenantId: parsedInput.tenantId,
          tenant: {
            organizationId: ctx.organization.id,
          },
        },
        select: {
          id: true,
          tenantId: true,
          text: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: SortDirection.Asc,
        },
      });

      const mapped: TenantNoteDto[] = notes.map((note) => ({
        id: note.id,
        tenantId: note.tenantId,
        text: note.text ?? undefined,
        edited: note.createdAt.getTime() !== note.updatedAt.getTime(),
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        sender: {
          id: note.user.id,
          name: note.user.name,
          image: note.user.image ?? undefined,
        },
      }));

      return mapped;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.TenantNotes,
      ctx.organization.id,
      parsedInput.tenantId,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.TenantNotes,
          ctx.organization.id,
          parsedInput.tenantId,
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Tenant,
          ctx.organization.id,
          parsedInput.tenantId,
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Tenants,
          ctx.organization.id,
        ),
      ],
    },
  )();
}
