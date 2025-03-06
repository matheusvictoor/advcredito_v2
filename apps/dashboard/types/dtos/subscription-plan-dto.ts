import type { Maybe } from '@workspace/common/maybe';

export type SubscriptionPlanDto = {
  displayName: string;
  isCanceled: boolean;
  stripeCurrentPeriodStart: Maybe<number>;
  stripeCurrentPeriodEnd: Maybe<number>;
};
