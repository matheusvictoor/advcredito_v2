import { z } from "zod";

import { TenantRecord } from "@workspace/database";

export const addTenantSchema = z.object({
  record: z.nativeEnum(TenantRecord, {
    required_error: "Record is required",
    invalid_type_error: "Record must be a string",
  }),
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    })
    .trim()
    .min(1, "Nome é obrigatório.")
    .max(64, "Nome deve ter no máximo 64 caracteres."),
  email: z
    .string({
      invalid_type_error: "Email must be a string.",
    })
    .trim()
    .max(255, "E-mail deve ter no máximo 255 caracteres.")
    .email("Informe um e-mail válido.")
    .optional()
    .or(z.literal("")),
  phone: z
    .string({
      invalid_type_error: "Phone must be a string.",
    })
    .trim()
    .max(16, "Telefone deve ter no máximo 16 caracteres.")
    .optional()
    .or(z.literal("")),
  
});

export type AddTenantSchema = z.infer<typeof addTenantSchema>;
