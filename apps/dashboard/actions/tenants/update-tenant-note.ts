"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { updateTenantCommentSchema } from "~/schemas/tenants/update-tenant-comment-schema";

export const updateTenantNote = authOrganizationActionClient
  .metadata({ actionName: "updateTenantNote" })
  .schema(updateTenantCommentSchema)
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
      throw new NotFoundError("Tenant not not found");
    }

    const note = await prisma.tenantNote.update({
      where: { id: parsedInput.id },
      data: { text: parsedInput.text },
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
