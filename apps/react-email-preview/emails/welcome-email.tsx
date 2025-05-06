import * as React from "react";

import { WelcomeEmail } from "@workspace/email-templates/welcome-email";

export default function RenderedEmail(): React.JSX.Element {
  return (
    <WelcomeEmail
      appName="Advcredito"
      getStartedLink="https://example.com/organizations"
      name="John Doe"
    />
  );
}
