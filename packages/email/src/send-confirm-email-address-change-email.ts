import { render } from '@react-email/render';

import {
  ConfirmEmailAddressChangeEmail,
  type ConfirmEmailAddressChangeEmailProps
} from '@workspace/email-templates/confirm-email-address-change-email';

import { sendEmail } from './mailer/send-email';

export async function sendConfirmEmailAddressChangeEmail(
  input: ConfirmEmailAddressChangeEmailProps & { recipient: string }
): Promise<void> {
  const component = ConfirmEmailAddressChangeEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Change email instructions',
    html,
    text
  });
}
