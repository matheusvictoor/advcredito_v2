'use server';

import { revalidateTag } from 'next/cache';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { createTenantAndCaptureEvent } from '~/actions/tenants/_tenant-event-capture';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addTenantSchema } from '~/schemas/tenants/add-tenant-schema';

export const addTenant = authOrganizationActionClient
  .metadata({ actionName: 'addTenant' })
  .schema(addTenantSchema)
  .action(async ({ parsedInput, ctx }) => {
    await createTenantAndCaptureEvent(
      {
        record: parsedInput.record,
        name: parsedInput.name,
        email: parsedInput.email,
        phone: parsedInput.phone,
        organization: {
          connect: {
            id: ctx.organization.id
          }
        }
      },
      ctx.session.user.id
    );

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Tenants,
        ctx.organization.id
      )
    );

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          membership.userId
        )
      );
    }
  });
