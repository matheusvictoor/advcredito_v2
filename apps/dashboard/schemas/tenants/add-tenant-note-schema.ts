import { z } from "zod";

export const addTenantNoteSchema = z.object({
  tenantId: z
    .string({
      required_error: "Tenant id is required.",
      invalid_type_error: "Tenant id must be a string.",
    })
    .trim()
    .uuid("Tenant id is invalid.")
    .min(1, "Tenant id is required.")
    .max(36, "Maximum 36 characters allowed."),
  text: z
    .string({
      required_error: "Text is required.",
      invalid_type_error: "Text must be a string.",
    })
    .trim()
    .min(1, "Texto é obrigatório.")
    .max(8000, "Texto deve ter no máximo 8000 caracteres.")
    .optional()
    .or(z.literal("")),
});

export type AddTenantNoteSchema = z.infer<typeof addTenantNoteSchema>;
