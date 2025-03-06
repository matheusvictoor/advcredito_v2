import * as React from 'react';

import { SubscriptionPlanDetailsSkeleton } from '~/components/organizations/slug/settings/organization/billing/subscription-plan-details-skeleton';

export default function SubscriptionPlanLoading(): React.JSX.Element {
  return <SubscriptionPlanDetailsSkeleton />;
}
