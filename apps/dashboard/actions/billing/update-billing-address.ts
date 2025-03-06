'use server';

import { revalidatePath } from 'next/cache';
import Stripe from 'stripe';

import { stripeServer } from '@workspace/billing/stripe-server';
import { GatewayError, NotFoundError } from '@workspace/common/errors';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { updateBillingAddressSchema } from '~/schemas/billing/update-billing-address-schema';

export const updateBillingAddress = authOrganizationActionClient
  .metadata({ actionName: 'updateBillingAddress' })
  .schema(updateBillingAddressSchema)
  .action(async ({ parsedInput, ctx }) => {
    if (!ctx.organization.stripeCustomerId) {
      throw new NotFoundError('Stripe customer not found');
    }

    try {
      await stripeServer.customers.update(ctx.organization.stripeCustomerId, {
        address: {
          line1: parsedInput.line1,
          line2: parsedInput.line2,
          country: parsedInput.country,
          postal_code: parsedInput.postalCode,
          city: parsedInput.city,
          state: parsedInput.state
        }
      });

      revalidatePath(
        replaceOrgSlug(
          routes.dashboard.organizations.slug.settings.organization.Billing,
          ctx.organization.slug
        )
      );
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new GatewayError(
          `Failed to update billing address: ${error.message}`
        );
      }
      throw error;
    }
  });
