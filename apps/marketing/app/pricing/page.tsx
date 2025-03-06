import * as React from 'react';
import type { Metadata } from 'next';

import { PricingFAQ } from '~/components/sections/pricing-faq';
import { PricingPlans } from '~/components/sections/pricing-plans';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Pricing')
};

export default function PricingPage(): React.JSX.Element {
  return (
    <>
      <PricingPlans />
      <PricingFAQ />
    </>
  );
}
