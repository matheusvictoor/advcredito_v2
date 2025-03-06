import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { NumberTicker } from '~/components/fragments/number-ticket';

const DATA = [
  {
    value: 55,
    suffix: '%',
    description: 'Increased conversion'
  },
  {
    value: 4,
    suffix: 'x',
    description: 'Improved retention'
  },
  {
    value: 97,
    suffix: '%',
    description: 'Statisfaction rate'
  },
  {
    value: 450,
    suffix: '+',
    description: 'Customers in 85 countries'
  }
];

export function Stats(): React.JSX.Element {
  return (
    <GridSection>
      <div className="grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {DATA.map((stat, index) => (
          <div
            key={index}
            className={cn(
              'justify-top flex flex-col items-center border-dashed p-6 text-center lg:p-8 ',
              (index === 2 || index === 3) && 'border-t lg:border-t-0'
            )}
          >
            <p className="whitespace-nowrap text-2xl font-semibold md:text-3xl">
              <NumberTicker value={stat.value} />
              {stat.suffix}
            </p>
            <p className="mt-2 whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </GridSection>
  );
}
