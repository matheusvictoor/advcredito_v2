'use server';

import Stripe from 'stripe';

import { stripeServer } from '@workspace/billing/stripe-server';
import { GatewayError, NotFoundError } from '@workspace/common/errors';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';

export const createBillingPortalSessionUrl = authOrganizationActionClient
  .metadata({ actionName: 'createBillingPortalSessionUrl' })
  .action(async ({ ctx }) => {
    if (!ctx.organization.stripeCustomerId) {
      throw new NotFoundError('Stripe customer not found');
    }

    try {
      const billingPortalSession =
        await stripeServer.billingPortal.sessions.create({
          customer: ctx.organization.stripeCustomerId,
          return_url: `${replaceOrgSlug(routes.dashboard.organizations.slug.settings.organization.Billing, ctx.organization.slug)}`
        });

      return { url: billingPortalSession.url };
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new GatewayError(
          `Failed to update billing address: ${error.message}`
        );
      }
      throw error;
    }
  });
