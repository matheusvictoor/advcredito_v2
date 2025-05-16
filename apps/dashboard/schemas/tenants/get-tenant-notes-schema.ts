import { z } from "zod";

export const getTenantNotesSchema = z.object({
  tenantId: z
    .string({
      invalid_type_error: "Tenant id must be a string.",
    })
    .trim()
    .uuid("Tenant id is invalid.")
    .max(36, "Maximum 36 characters allowed."),
});

export type GetTenantNotesSchema = z.infer<typeof getTenantNotesSchema>;
