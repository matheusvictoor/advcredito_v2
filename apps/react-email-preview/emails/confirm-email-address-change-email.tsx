import * as React from 'react';

import { ConfirmEmailAddressChangeEmail } from '@workspace/email-templates/confirm-email-address-change-email';

export default function RenderedEmail(): React.JSX.Element {
  return (
    <ConfirmEmailAddressChangeEmail
      confirmLink="https://example.com/auth/change-email/request/a5cffa7e-76eb-4671-a195-d1670a7d4df3"
      name="John Doe"
    />
  );
}
