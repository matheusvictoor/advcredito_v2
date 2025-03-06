import { keys } from '../../../keys';
import { detectTransport } from './detect-transport';
import type { NodeMailerTransport } from './node-mailer-transport';

type NodeMailerOptions = {
  transport: NodeMailerTransport;
  from: string;
};

export const nodeMailerOptions: NodeMailerOptions = {
  transport: detectTransport(),
  from: keys().EMAIL_FROM
};
