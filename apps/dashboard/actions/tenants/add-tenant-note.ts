"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { addTenantNoteSchema } from "~/schemas/tenants/add-tenant-note-schema";

export const addTenantNote = authOrganizationActionClient
  .metadata({ actionName: "addTenantNote" })
  .schema(addTenantNoteSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.tenantNote.create({
      data: {
        tenantId: parsedInput.tenantId,
        text: parsedInput.text ? parsedInput.text : undefined,
        userId: ctx.session.user.id,
      },
      select: {
        id: true, // SELECT NONE
      },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantNotes,
        ctx.organization.id,
        parsedInput.tenantId,
      ),
    );
  });
