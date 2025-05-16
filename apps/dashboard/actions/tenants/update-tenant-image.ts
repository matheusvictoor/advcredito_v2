"use server";

import { createHash } from "crypto";
import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import type { Maybe } from "@workspace/common/maybe";
import { prisma } from "@workspace/database/client";
import { decodeBase64Image } from "@workspace/image-processing/decode-base64-image";
import { resizeImage } from "@workspace/image-processing/resize-image";
import { getTenantImageUrl } from "@workspace/routes";

import { updateTenantAndCaptureEvent } from "~/actions/tenants/_tenant-event-capture";
import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { FileUploadAction } from "~/lib/file-upload";
import { updateTenantImageSchema } from "~/schemas/tenants/update-tenant-image-schema";

export const updateTenantImage = authOrganizationActionClient
  .metadata({ actionName: "updateTenantImage" })
  .schema(updateTenantImageSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.tenant.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id,
      },
    });
    if (count < 1) {
      throw new NotFoundError("Tenant not found");
    }

    let imageUrl: Maybe<string> = undefined;

    if (parsedInput.action === FileUploadAction.Update && parsedInput.image) {
      const { buffer, mimeType } = decodeBase64Image(parsedInput.image);
      const data = await resizeImage(buffer, mimeType);
      const hash = createHash("sha256").update(data).digest("hex");

      await prisma.$transaction([
        prisma.tenantImage.deleteMany({
          where: { tenantId: parsedInput.id },
        }),
        prisma.tenantImage.create({
          data: {
            tenantId: parsedInput.id,
            data,
            contentType: mimeType,
            hash,
          },
        }),
      ]);

      imageUrl = getTenantImageUrl(parsedInput.id, hash);
    }
    if (parsedInput.action === FileUploadAction.Delete) {
      await prisma.tenantImage.deleteMany({
        where: { tenantId: parsedInput.id },
      });

      imageUrl = null;
    }

    await updateTenantAndCaptureEvent(
      parsedInput.id,
      { image: imageUrl },
      ctx.session.user.id,
    );

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenants,
        ctx.organization.id,
      ),
    );
    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenant,
        ctx.organization.id,
        parsedInput.id,
      ),
    );

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          membership.userId,
        ),
      );
    }
  });
