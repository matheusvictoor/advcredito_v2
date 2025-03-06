import { keys } from '../../keys';
import { type Mailer } from './types';

export async function resolveMailer(): Promise<Mailer> {
  let mailer: string = keys().EMAIL_MAILER;

  if (mailer) {
    mailer = mailer.toLowerCase();

    if (mailer === 'nodemailer') {
      const importedModule = await import('./node-mailer');
      return new importedModule.NodeMailer();
    }

    if (mailer === 'resend') {
      const importedModule = await import('./resend');
      return new importedModule.ResendMailer();
    }
  }

  // Default to node mailer
  const importedModule = await import('./node-mailer');
  return new importedModule.NodeMailer();
}
