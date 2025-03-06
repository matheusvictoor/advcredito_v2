import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      EMAIL_FROM: z.string(), // emails can be in format "Acme <noreply@mailer.example.com>"
      EMAIL_FEEDBACK_INBOX: z.string().email().optional(),
      EMAIL_MAILER: z.enum(['NodeMailer', 'Resend']),
      // credentials (you just need one)
      EMAIL_NODEMAILER_URL: z.string().optional(),
      EMAIL_RESEND_API_KEY: z.string().optional()
    },
    runtimeEnv: {
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_FEEDBACK_INBOX: process.env.EMAIL_FEEDBACK_INBOX,
      EMAIL_MAILER: process.env.EMAIL_MAILER,
      EMAIL_NODEMAILER_URL: process.env.EMAIL_NODEMAILER_URL,
      EMAIL_RESEND_API_KEY: process.env.EMAIL_RESEND_API_KEY
    }
  });
