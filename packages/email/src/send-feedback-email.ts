import { render } from '@react-email/render';

import {
  FeedbackEmail,
  type FeedbackEmailProps
} from '@workspace/email-templates/feedback-email';

import { sendEmail } from './mailer/send-email';

export async function sendFeedbackEmail(
  input: FeedbackEmailProps & { recipient: string }
): Promise<void> {
  const component = FeedbackEmail(input);
  const html = await render(component);
  const text = await render(component, { plainText: true });

  await sendEmail({
    recipient: input.recipient,
    subject: 'User Feedback',
    html,
    text
  });
}
