import * as React from 'react';
import { ClockIcon, MapPinIcon } from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';

import { GridSection } from '~/components/fragments/grid-section';

const DATA = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    description:
      'You will be responsible for the development of new and existing software products.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Product Manager',
    department: 'Engineering',
    description: 'Help us build the next generation of Acme products.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    description:
      'Create engaging content for our blog, website, and social media channels.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Social Media Manager',
    department: 'Marketing',
    description:
      'Manage our social media presence and engage with our followers.',
    type: 'Full-time',
    location: 'Remote'
  }
];

export function CareersPositions(): React.JSX.Element {
  return (
    <GridSection>
      <div className="space-y-12 py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Open Positions
        </h2>
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-2 divide-y">
          {DATA.map((position, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-dashed py-6 md:flex-row  md:items-center"
            >
              <div className="flex-1">
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                  <h3 className="mb-1 text-lg font-semibold">
                    {position.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="w-fit rounded-full"
                  >
                    {position.department}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-auto w-4" />
                    {position.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-auto w-4" />
                    {position.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 shrink-0 md:mt-0">
                <Button
                  type="button"
                  variant="default"
                  className="rounded-xl"
                >
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
