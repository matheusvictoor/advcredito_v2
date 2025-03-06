import * as React from 'react';

import { Skeleton } from '@workspace/ui/components/skeleton';

export function SubscriptionPlanDetailsSkeleton(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="mb-2 h-4 w-56" />
        <Skeleton className="h-8 w-32" />
      </div>
      <div>
        <Skeleton className="h-8 w-36" />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex justify-between space-x-8 pb-1 align-baseline">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="mt-1 h-1 w-full" />
      </div>
    </div>
  );
}
