import { type WebhookTrigger } from '@workspace/database';

export type WebhookDto = {
  id: string;
  url: string;
  triggers: WebhookTrigger[];
  secret?: string;
};
