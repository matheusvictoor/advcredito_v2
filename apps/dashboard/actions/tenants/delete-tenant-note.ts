"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { deleteTenantNoteSchema } from "~/schemas/tenants/delete-tenant-note-schema";

export const deleteTenantNote = authOrganizationActionClient
  .metadata({ actionName: "deleteTenantNote" })
  .schema(deleteTenantNoteSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenantNote.count({
      where: {
        id: parsedInput.id,
        tenant: {
          organizationId: ctx.organization.id,
        },
      },
    });
    if (count < 1) {
      throw new NotFoundError("Tenant note not found");
    }

    const note = await prisma.tenantNote.delete({
      where: { id: parsedInput.id },
      select: { tenantId: true },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantNotes,
        ctx.organization.id,
        note.tenantId,
      ),
    );
  });
