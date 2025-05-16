import { z } from "zod";

export const updateTenantNoteSchema = z.object({
  id: z
    .string({
      required_error: "Id is required.",
      invalid_type_error: "Id must be a string.",
    })
    .trim()
    .uuid("Id is invalid.")
    .min(1, "Id is required.")
    .max(36, "Maximum 36 characters allowed."),
  text: z
    .string({
      required_error: "Text is required.",
      invalid_type_error: "Text must be a string.",
    })
    .trim()
    .min(1, "Texto é obrigatório.")
    .max(8000, "Texto deve ter no máximo 8000 caracteres."),
});

export type UpdateTenantNoteSchema = z.infer<typeof updateTenantNoteSchema>;
