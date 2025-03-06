import { render } from '@react-email/render';

import {
  ConnectedAccountSecurityAlertEmail,
  type ConnectedAccountSecurityAlertEmailProps
} from '@workspace/email-templates/connected-account-security-alert-email';

import { sendEmail } from './mailer/send-email';

export async function sendConnectedAccountSecurityAlertEmail(
  input: ConnectedAccountSecurityAlertEmailProps & { recipient: string }
): Promise<void> {
  const component = ConnectedAccountSecurityAlertEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Security Alert!',
    html,
    text
  });
}
