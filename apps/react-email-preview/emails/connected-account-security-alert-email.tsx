import * as React from "react";

import { ConnectedAccountSecurityAlertEmail } from "@workspace/email-templates/connected-account-security-alert-email";

export default function RenderedEmail(): React.JSX.Element {
  return (
    <ConnectedAccountSecurityAlertEmail
      action="disconnected"
      appName="Advcredito"
      name="John Doe"
      provider="Google"
    />
  );
}
