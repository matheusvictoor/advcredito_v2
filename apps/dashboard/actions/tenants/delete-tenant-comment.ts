"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { deleteTenantCommentSchema } from "~/schemas/tenants/delete-tenant-comment-schema";

export const deleteTenantComment = authOrganizationActionClient
  .metadata({ actionName: "deleteTenantComment" })
  .schema(deleteTenantCommentSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenantComment.count({
      where: {
        id: parsedInput.id,
        tenant: {
          organizationId: ctx.organization.id,
        },
      },
    });
    if (count < 1) {
      throw new NotFoundError("Tenant comment not found");
    }

    const comment = await prisma.tenantComment.delete({
      where: { id: parsedInput.id },
      select: { tenantId: true },
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.TenantTimelineEvents,
        ctx.organization.id,
        comment.tenantId,
      ),
    );
  });
