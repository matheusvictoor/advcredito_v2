'use client';

import * as React from 'react';
import { differenceInDays, format } from 'date-fns';

import { getStripeClient } from '@workspace/billing/stripe-client';
import { Button } from '@workspace/ui/components/button';
import { toast } from '@workspace/ui/components/sonner';
import { cn } from '@workspace/ui/lib/utils';

import { createBillingPortalSessionUrl } from '~/actions/billing/create-billing-portal-session-url';
import { createCheckoutSession } from '~/actions/billing/create-checkout-session';
import type { SubscriptionPlanDto } from '~/types/dtos/subscription-plan-dto';

export type SubscriptionPlanDetailsProps =
  React.HtmlHTMLAttributes<HTMLDivElement> & {
    plan: SubscriptionPlanDto;
  };

export function SubscriptionPlanDetails({
  plan,
  className,
  ...other
}: SubscriptionPlanDetailsProps): React.JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);

  const isFreePlan = plan.displayName === 'Free';
  const billingCycleStart = plan.stripeCurrentPeriodStart
    ? new Date(plan.stripeCurrentPeriodStart * 1000)
    : undefined;
  const billingCycleEnd = plan.stripeCurrentPeriodEnd
    ? new Date(plan.stripeCurrentPeriodEnd * 1000)
    : undefined;
  const daysToCycleEnd = billingCycleEnd
    ? differenceInDays(billingCycleEnd, new Date())
    : 0;
  const daysWithinCycle =
    billingCycleEnd && billingCycleStart
      ? differenceInDays(billingCycleEnd, billingCycleStart)
      : 0;

  const handleUpgrade = async (): Promise<void> => {
    const result = await createCheckoutSession();
    if (result?.data?.session?.id) {
      const stripe = await getStripeClient();
      const { error } = await stripe!.redirectToCheckout({
        sessionId: result.data.session.id
      });
      if (error?.message) {
        toast.error(error.message);
      }
    } else {
      toast.error('Failed to create checkout session. Please try again.');
    }
  };

  const handleBillingPortalRedirect = async (): Promise<void> => {
    const result = await createBillingPortalSessionUrl();
    if (result?.data?.url) {
      window.location.href = result.data.url;
    } else {
      toast.error('Failed to create billing portal session. Please try again.');
    }
  };

  const handleBillingRedirect = async (): Promise<void> => {
    setLoading(true);
    try {
      if (isFreePlan) {
        await handleUpgrade();
      } else {
        await handleBillingPortalRedirect();
      }
    } catch (error) {
      console.error('Billing redirect error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn('space-y-6', className)}
      {...other}
    >
      <div>
        <p className="text-sm text-muted-foreground">
          This organization is currently on the plan:
        </p>
        <p>
          <span className="text-2xl">{plan.displayName}</span>
          {plan.isCanceled && (
            <span className="ml-2 text-sm text-muted-foreground">
              (Canceled)
            </span>
          )}
        </p>
      </div>
      <div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={loading}
          loading={loading}
          onClick={handleBillingRedirect}
        >
          {isFreePlan ? 'Upgrade to Pro' : 'Change subscription'}
        </Button>
      </div>
      {!isFreePlan && (
        <div className="flex w-full flex-col">
          <div className="flex justify-between space-x-8 pb-1 align-baseline">
            <p className="capitalize-sentence max-w-[75%] truncate text-xs text-foreground">
              {`Current billing cycle (${plan.stripeCurrentPeriodStart ? formatStripeDate(plan.stripeCurrentPeriodStart) : ''} - ${plan.stripeCurrentPeriodEnd ? formatStripeDate(plan.stripeCurrentPeriodEnd) : ''})`}
            </p>
            <p className="text-xs text-muted-foreground">{`${daysToCycleEnd} days remaining`}</p>
          </div>
          <div className="relative h-1 w-full overflow-hidden rounded bg-muted p-0">
            <div
              className="absolute inset-x-0 bottom-0 h-1 rounded bg-foreground transition-all"
              style={{
                width: `${Number(((daysWithinCycle - daysToCycleEnd) / daysWithinCycle) * 100)}%`
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function formatStripeDate(timestamp: number): string {
  return format(new Date(timestamp * 1000), 'MMM dd');
}
