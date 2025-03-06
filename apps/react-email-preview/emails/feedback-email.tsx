import * as React from 'react';

import { FeedbackEmail } from '@workspace/email-templates/feedback-email';

export default function RenderedEmail(): React.JSX.Element {
  return (
    <FeedbackEmail
      appName="Acme"
      category="Feature Request"
      email="john.doe@gmail.com"
      message="I would like to request a feature that allows me to change my email address."
      name="John Doe"
      organizationName="Evil Corp"
    />
  );
}
