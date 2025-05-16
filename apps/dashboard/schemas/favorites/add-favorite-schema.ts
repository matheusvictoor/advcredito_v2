import { z } from "zod";

export const addFavoriteSchema = z.object({
  tenantId: z
    .string({
      required_error: "Tenant id is required.",
      invalid_type_error: "Tenant id must be a string.",
    })
    .trim()
    .uuid("Tenant id is invalid.")
    .min(1, "Tenant id is required.")
    .max(36, "Maximum 36 characters allowed."),
});

export type AddFavoriteSchema = z.infer<typeof addFavoriteSchema>;
