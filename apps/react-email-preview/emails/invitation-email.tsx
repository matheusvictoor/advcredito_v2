import * as React from 'react';

import { InvitationEmail } from '@workspace/email-templates/invitation-email';

export default function RenderedEmail(): React.JSX.Element {
  return (
    <InvitationEmail
      appName="Acme"
      invitedByEmail="jane.doe@gmail.com"
      invitedByName="Jane Doe"
      inviteLink="https://example.com/invitations/request/a5cffa7e-76eb-4671-a195-d1670a7d4df3"
      organizationName="Evil Corp"
    />
  );
}
