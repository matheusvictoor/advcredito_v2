import { render } from '@react-email/render';

import {
  RevokedInvitationEmail,
  type RevokedInvitationEmailProps
} from '@workspace/email-templates/revoked-invitation-email';

import { sendEmail } from './mailer/send-email';

export async function sendRevokedInvitationEmail(
  input: RevokedInvitationEmailProps & { recipient: string }
): Promise<void> {
  const component = RevokedInvitationEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'Invitation revoked',
    html,
    text
  });
}
