import { headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';

import { updateOrganizationSubscriptionPlan } from '@workspace/billing/organization';
import { stripeServer } from '@workspace/billing/stripe-server';

import { env } from '~/env';

function extractCustomerId(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer | null
): string | null {
  if (!customer) {
    return null;
  }
  if (typeof customer === 'string') {
    return customer;
  }
  if (customer && typeof customer === 'object' && 'id' in customer) {
    return customer.id;
  }

  return null;
}

function subscriptionIdNotFound(): NextResponse {
  return NextResponse.json(
    { error: 'Subscription ID not found' },
    {
      status: 400,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function customerIdNotFound(): NextResponse {
  return NextResponse.json(
    { error: 'Customer ID not found' },
    {
      status: 400,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function webhookError(): NextResponse {
  return NextResponse.json(
    { error: 'Webhook error: "Webhook handler failed. View logs."' },
    {
      status: 500,
      headers: { 'Cache-Control': 'no-store' }
    }
  );
}

function webhookSuccess(): NextResponse {
  return NextResponse.json({
    received: true,
    message: 'Webhook received.',
    status: 200,
    headers: { 'Cache-Control': 'no-store' }
  });
}

const relevantEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'checkout.session.completed'
]);

export async function POST(req: NextRequest): Promise<Response> {
  const headersList = await headers();
  const sig = headersList.get('stripe-signature');
  if (!sig) {
    console.error('Missing stripe-signature');
    return webhookError();
  }

  const webhookSecret = env.BILLING_STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('Missing stripe webhook secret');
    return webhookError();
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = stripeServer.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error(err);
    return webhookError();
  }

  if (!event || !event.type) {
    console.error('Failed to construct event');
    return webhookError();
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted': {
          const subscription = event.data.object;
          if (!subscription.id) {
            return subscriptionIdNotFound();
          }

          const stripeCustomerId = extractCustomerId(subscription.customer);
          if (!stripeCustomerId) {
            return customerIdNotFound();
          }

          await updateOrganizationSubscriptionPlan(stripeCustomerId);

          break;
        }
        case 'checkout.session.completed': {
          const checkoutSession = event.data.object;
          if (checkoutSession.mode === 'subscription') {
            if (!checkoutSession.subscription) {
              return subscriptionIdNotFound();
            }

            const subscriptionId = Array.isArray(checkoutSession.subscription)
              ? checkoutSession.subscription[0]
              : checkoutSession.subscription;
            if (!subscriptionId) {
              return subscriptionIdNotFound();
            }

            const stripeCustomerId = extractCustomerId(
              checkoutSession.customer
            );
            if (!stripeCustomerId) {
              return customerIdNotFound();
            }

            await updateOrganizationSubscriptionPlan(stripeCustomerId);
          }
          break;
        }
        default: {
          console.warn(`Unhandled event type ${event.type}`);
        }
      }
    } catch (err) {
      console.error(err);
      return webhookError();
    }
  }

  return webhookSuccess();
}
