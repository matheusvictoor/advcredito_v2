import * as React from 'react';
import type { Metadata } from 'next';

import { CareersBenefits } from '~/components/sections/careers-benefits';
import { CareersPositions } from '~/components/sections/careers-positions';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Careers')
};

export default function CareersPage(): React.JSX.Element {
  return (
    <>
      <CareersBenefits />
      <CareersPositions />
    </>
  );
}
