'use server';

import { revalidateTag } from 'next/cache';

import { stripeServer } from '@workspace/billing/stripe-server';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { updateOrganizationDetailsSchema } from '~/schemas/organization/update-organization-details-schema';

export const updateOrganizationDetails = authOrganizationActionClient
  .metadata({ actionName: 'updateOrganizationDetails' })
  .schema(updateOrganizationDetailsSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.organization.update({
      where: { id: ctx.organization.id },
      data: {
        name: parsedInput.name,
        address: parsedInput.address,
        phone: parsedInput.phone,
        email: parsedInput.email,
        website: parsedInput.website
      },
      select: {
        id: true // SELECT NONE
      }
    });

    if (ctx.organization.name !== ctx.organization.name) {
      if (ctx.organization.stripeCustomerId) {
        try {
          await stripeServer.customers.update(
            ctx.organization.stripeCustomerId,
            {
              name: parsedInput.name
            }
          );
        } catch (e) {
          console.error(e);
        }
      } else {
        console.warn('Stripe customer ID is missing');
      }
    }

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createUserTag(UserCacheKey.Organizations, membership.userId)
      );
    }

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.OrganizationDetails,
        ctx.organization.id
      )
    );
  });
