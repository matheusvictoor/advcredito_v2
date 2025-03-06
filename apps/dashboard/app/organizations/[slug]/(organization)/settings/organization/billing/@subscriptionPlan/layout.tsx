import * as React from 'react';

import { APP_NAME } from '@workspace/common/app';
import { AnnotatedSection } from '@workspace/ui/components/annotated';

export default function SubscriptionPlanLayout({
  children
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <AnnotatedSection
      title="Subscription plan"
      description={`View, upgrade or cancel your subscription. We partner with Stripe to handle billings for ${APP_NAME}.`}
    >
      {children}
    </AnnotatedSection>
  );
}
