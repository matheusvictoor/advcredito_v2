import { resolveMailer } from './resolve-mailer';
import { type MailerPayload } from './types';

export async function sendEmail(payload: MailerPayload): Promise<unknown> {
  const mailer = await resolveMailer();
  return mailer.sendEmail(payload);
}
