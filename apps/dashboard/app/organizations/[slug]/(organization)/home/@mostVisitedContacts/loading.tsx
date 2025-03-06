import * as React from 'react';

import { MostVisitedContactsSkeletonCard } from '~/components/organizations/slug/home/most-visited-contacts-skeleton-card';

export default function MostVisitedContactsLoading(): React.JSX.Element {
  return (
    <MostVisitedContactsSkeletonCard className="col-span-2 md:col-span-1" />
  );
}
