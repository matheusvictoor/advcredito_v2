import type Stripe from 'stripe';

import { keys } from '../keys';
import { Tier } from './tier';

export type Subscription = Stripe.Subscription & {
  plan?: Stripe.Plan;
};

export function pickSubscription(
  subscriptions: Subscription[]
): Subscription | undefined {
  if (subscriptions && subscriptions.length > 0) {
    if (subscriptions.length > 1) {
      console.warn(
        'Multiple subscriptions found. Picking the first subscription.'
      );
    }

    return subscriptions[0];
  }

  return undefined;
}

export function mapSubscriptionToTier(subscription?: Subscription): Tier {
  if (subscription && subscription.plan && subscription.plan.product) {
    if (subscription.plan.product === keys().BILLING_PRO_PRODUCT_ID) {
      return subscription.cancel_at_period_end
        ? Tier.ProPendingCancel
        : Tier.Pro;
    }
  }

  return Tier.Free;
}
