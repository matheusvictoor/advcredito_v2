import 'server-only';

import Stripe from 'stripe';

import { keys } from '../keys';

export const stripeServer = Object.freeze(
  new Stripe(keys().BILLING_STRIPE_SECRET_KEY ?? '', {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2024-06-20'
  })
);
