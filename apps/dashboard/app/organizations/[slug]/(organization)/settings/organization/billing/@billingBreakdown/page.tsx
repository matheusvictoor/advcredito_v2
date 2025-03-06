import * as React from 'react';

import { BillingBreakdownTable } from '~/components/organizations/slug/settings/organization/billing/billing-breakdown-table';
import { getDedupedBillingDetails } from '~/data/billing/get-billing-details';

export default async function BillingBreakdownPage(): Promise<React.JSX.Element> {
  const details = await getDedupedBillingDetails();
  return <BillingBreakdownTable billingBreakdown={details.breakdown} />;
}
