import * as React from 'react';

import { AnnotatedSection } from '@workspace/ui/components/annotated';

export default function SocialMediaLayout({
  children
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <AnnotatedSection
      title="Social media"
      description="Add your organization's social media links."
    >
      {children}
    </AnnotatedSection>
  );
}
