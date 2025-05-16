"use server";

import { revalidateTag } from "next/cache";

import { NotFoundError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import { updateTenantAndCaptureEvent } from "~/actions/tenants/_tenant-event-capture";
import { authOrganizationActionClient } from "~/actions/safe-action";
import { Caching, OrganizationCacheKey } from "~/data/caching";
import { updateTenantPropertiesSchema } from "~/schemas/tenants/update-tenant-properties-schema";

export const updateTenantProperties = authOrganizationActionClient
  .metadata({ actionName: "updateTenantProperties" })
  .schema(updateTenantPropertiesSchema)
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

    await updateTenantAndCaptureEvent(
      parsedInput.id,
      {
        record: parsedInput.record,
        name: parsedInput.name,
        email: parsedInput.email,
        phone: parsedInput.phone,
        street: parsedInput.street,
        number: parsedInput.number,
        neighborhood: parsedInput.neighborhood,
        zipcode: parsedInput.zipcode,
        city: parsedInput.city,
        state: parsedInput.state,
        complement: parsedInput.complement,
      },
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
