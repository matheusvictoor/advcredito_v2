import { type WebhookTrigger } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import { sendPayload } from './send-payload';

// In the beginning, just call this method whenever an event occurs,
// but ideally you want to call webhooks in a separate worker process.

export async function callWebhooks<T>(
  organizationId: string,
  trigger: WebhookTrigger,
  payload: T
) {
  const webhooks = await prisma.webhook.findMany({
    where: {
      organizationId,
      triggers: {
        has: trigger
      }
    },
    select: {
      id: true,
      url: true,
      triggers: true,
      secret: true
    },
    orderBy: {
      createdAt: 'asc'
    }
  });
  for (const webhook of webhooks) {
    let retryCount = 0;
    const MAX_RETRY_COUNT = 3;
    while (retryCount < MAX_RETRY_COUNT) {
      retryCount++;
      try {
        console.log('SENDING webhook payload');
        const response = await sendPayload<T>(webhook, trigger, payload);
        console.log('SENT webhook payload');
        if (response.ok) {
          console.log('SUCCESS webhook payload');
          break;
        }
        console.log('FAILED webhook payload');
      } catch (e) {
        console.error(
          `Error executing webhook ${webhook.id} for event: ${trigger}, URL: ${webhook.url}`,
          e
        );
      }
    }
  }
}
