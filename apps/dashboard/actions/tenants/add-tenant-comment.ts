"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { addTenantCommentSchema } from "~/schemas/tenants/add-tenant-comment-schema";

export const addTenantComment = authOrganizationActionClient
  .metadata({ actionName: "addTenantComment" })
  .schema(addTenantCommentSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.tenantComment.create({
      data: {
        tenantId: parsedInput.tenantId,
        text: parsedInput.text,
        userId: ctx.session.user.id,
      },
      select: {
        id: true, // SELECT NONE
      },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantTimelineEvents,
        ctx.organization.id,
        parsedInput.tenantId,
      ),
    );
  });
