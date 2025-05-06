import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      BILLING_STRIPE_SECRET_KEY: z.string().optional(),
      BILLING_STRIPE_WEBHOOK_SECRET: z.string().optional(),
      BILLING_PRO_PRODUCT_ID: z.string().optional(),
      BILLING_PRO_PRODUCT_PRICE_ID: z.string().optional(),
      BILLING_UNIT: z.enum(["per_seat", "per_organization"]),
    },
    client: {
      NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
    },
    runtimeEnv: {
      BILLING_STRIPE_SECRET_KEY: process.env.BILLING_STRIPE_SECRET_KEY,
      BILLING_STRIPE_WEBHOOK_SECRET: process.env.BILLING_STRIPE_WEBHOOK_SECRET,
      BILLING_PRO_PRODUCT_ID: process.env.BILLING_PRO_PRODUCT_ID,
      BILLING_PRO_PRODUCT_PRICE_ID: process.env.BILLING_PRO_PRODUCT_PRICE_ID,
      BILLING_UNIT: process.env.BILLING_UNIT,
      NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY,
    },
  });
