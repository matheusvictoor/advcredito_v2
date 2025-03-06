import * as React from 'react';

import { BillingEmailCard } from '~/components/organizations/slug/settings/organization/billing/billing-email-card';
import { getDedupedBillingDetails } from '~/data/billing/get-billing-details';

export default async function BillingEmailPage(): Promise<React.JSX.Element> {
  const overview = await getDedupedBillingDetails();
  return <BillingEmailCard email={overview.email} />;
}
