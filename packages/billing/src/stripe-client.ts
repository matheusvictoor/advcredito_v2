import 'client-only';

import type { Stripe } from '@stripe/stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { keys } from '../keys';

let stripeClientPromise: Promise<Stripe | null>;

export function getStripeClient(): Promise<Stripe | null> {
  if (!stripeClientPromise) {
    stripeClientPromise = loadStripe(
      keys().NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY ?? ''
    );
  }

  return stripeClientPromise;
}
