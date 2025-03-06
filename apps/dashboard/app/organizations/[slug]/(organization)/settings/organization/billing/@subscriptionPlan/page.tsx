import * as React from 'react';

import { SubscriptionPlanDetails } from '~/components/organizations/slug/settings/organization/billing/subscription-plan-details';
import { getDedupedBillingDetails } from '~/data/billing/get-billing-details';

export default async function SubscriptionPlanPage(): Promise<React.JSX.Element> {
  const details = await getDedupedBillingDetails();
  return <SubscriptionPlanDetails plan={details.plan} />;
}
