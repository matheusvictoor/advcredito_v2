import * as React from 'react';

import { AnnotatedSection } from '@workspace/ui/components/annotated';

export default function BillingBreakdownLayout({
  children
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <AnnotatedSection
      title="Billing breakdown"
      description="This invoice will continue updating until the end of your billing cycle."
    >
      {children}
    </AnnotatedSection>
  );
}
