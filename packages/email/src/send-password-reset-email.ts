import { render } from '@react-email/render';

import {
  PasswordResetEmail,
  type PasswordResetEmailProps
} from '@workspace/email-templates/password-reset-email';

import { sendEmail } from './mailer/send-email';

export async function sendPasswordResetEmail(
  input: PasswordResetEmailProps & { recipient: string }
): Promise<void> {
  const component = PasswordResetEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Reset password instructions',
    html,
    text
  });
}
