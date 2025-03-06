import { render } from '@react-email/render';

import {
  InvitationEmail,
  type InvitationEmailProps
} from '@workspace/email-templates/invitation-email';

import { sendEmail } from './mailer/send-email';

export async function sendInvitationEmail(
  input: InvitationEmailProps & { recipient: string }
): Promise<void> {
  const component = InvitationEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Organization invitation',
    html,
    text
  });
}
