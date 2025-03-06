'use server';

import { APP_NAME } from '@workspace/common/app';
import { prisma } from '@workspace/database/client';
import { sendFeedbackEmail } from '@workspace/email/send-feedback-email';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { env } from '~/env';
import { feedbackCategoryLabels } from '~/lib/labels';
import { sendFeedbackSchema } from '~/schemas/feedback/send-feedback-schema';

export const sendFeedback = authOrganizationActionClient
  .metadata({ actionName: 'sendFeedback' })
  .schema(sendFeedbackSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.feedback.create({
      data: {
        category: parsedInput.category,
        message: parsedInput.message,
        organizationId: ctx.organization.id,
        userId: ctx.session.user.id
      },
      select: {
        id: true // SELECT NONE
      }
    });

    if (!env.EMAIL_FEEDBACK_INBOX) {
      console.warn('Missing EMAIL_FEEDBACK_INBOX environment variable');
      return;
    }

    await sendFeedbackEmail({
      recipient: env.EMAIL_FEEDBACK_INBOX,
      appName: APP_NAME,
      organizationName: ctx.organization.name,
      name: ctx.session.user.name,
      email: ctx.session.user.email,
      category: feedbackCategoryLabels[parsedInput.category],
      message: parsedInput.message
    });
  });
