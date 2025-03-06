import { render } from '@react-email/render';

import {
  VerifyEmailAddressEmail,
  type VerifyEmailAddressEmailProps
} from '@workspace/email-templates/verify-email-address-email';

import { sendEmail } from './mailer/send-email';

export async function sendVerifyEmailAddressEmail(
  input: VerifyEmailAddressEmailProps & { recipient: string }
): Promise<void> {
  const component = VerifyEmailAddressEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Verify email address',
    html,
    text
  });
}
