import { render } from '@react-email/render';

import { APP_NAME } from '@workspace/common/app';
import {
  WelcomeEmail,
  type WelcomeEmailProps
} from '@workspace/email-templates/welcome-email';

import { sendEmail } from './mailer/send-email';

export async function sendWelcomeEmail(
  input: WelcomeEmailProps & { recipient: string }
): Promise<void> {
  const component = WelcomeEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: `Welcome to ${APP_NAME}`,
    html,
    text
  });
}
