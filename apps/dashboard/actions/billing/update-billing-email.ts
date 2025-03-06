'use server';

import { revalidatePath } from 'next/cache';
import Stripe from 'stripe';

import { stripeServer } from '@workspace/billing/stripe-server';
import { GatewayError, NotFoundError } from '@workspace/common/errors';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { updateBillingEmailSchema } from '~/schemas/billing/update-billing-email-schema';

export const updateBillingEmail = authOrganizationActionClient
  .metadata({ actionName: 'updateBillingEmail' })
  .schema(updateBillingEmailSchema)
  .action(async ({ parsedInput, ctx }) => {
    if (!ctx.organization.stripeCustomerId) {
      throw new NotFoundError('Stripe customer not found');
    }

    try {
      await stripeServer.customers.update(ctx.organization.stripeCustomerId, {
        email: parsedInput.email
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
          `Failed to update billing email: ${error.message}`
        );
      }
      throw error;
    }
  });
