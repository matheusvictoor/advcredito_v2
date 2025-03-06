'use server';

import Stripe from 'stripe';

import { BillingUnit } from '@workspace/billing/billing-unit';
import { stripeServer } from '@workspace/billing/stripe-server';
import {
  GatewayError,
  NotFoundError,
  PreConditionError
} from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';
import { replaceOrgSlug, routes } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { env } from '~/env';

export const createCheckoutSession = authOrganizationActionClient
  .metadata({ actionName: 'createCheckoutSession' })
  .action(async ({ ctx }) => {
    if (!ctx.organization.stripeCustomerId) {
      throw new NotFoundError('Stripe customer not found');
    }
    if (!env.BILLING_PRO_PRODUCT_PRICE_ID) {
      throw new PreConditionError('No BILLING_PRO_PRODUCT_PRICE_ID found');
    }

    const memberCount = await prisma.membership.count({
      where: { organizationId: ctx.organization.id }
    });

    let quantity = 1;
    if (env.BILLING_UNIT === BillingUnit.PerSeat) {
      quantity = memberCount;
    }
    if (env.BILLING_UNIT === BillingUnit.PerOrganization) {
      quantity = 1;
    }

    try {
      const checkoutSession = await stripeServer.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: env.BILLING_PRO_PRODUCT_PRICE_ID,
            quantity
          }
        ],
        mode: 'subscription',
        customer: ctx.organization.stripeCustomerId,
        success_url: `${replaceOrgSlug(routes.dashboard.organizations.slug.settings.organization.Billing, ctx.organization.slug)}?status=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${replaceOrgSlug(routes.dashboard.organizations.slug.settings.organization.Billing, ctx.organization.slug)}?status=canceled`,
        customer_update: {
          name: 'auto',
          address: 'auto'
        }
      });

      return {
        session: {
          id: checkoutSession.id
        }
      };
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new GatewayError(
          `Failed to update billing address: ${error.message}`
        );
      }
      throw error;
    }
  });
