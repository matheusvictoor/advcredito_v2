import { z } from "zod";

import { TenantTaskStatus } from "@workspace/database";

export const updateTenantTaskSchema = z.object({
  id: z
    .string({
      required_error: "Id is required.",
      invalid_type_error: "Id must be a string.",
    })
    .trim()
    .uuid("Id is invalid.")
    .min(1, "Id is required.")
    .max(36, "Maximum 36 characters allowed."),
  title: z
    .string({
      required_error: "Title is required.",
      invalid_type_error: "Title must be a string.",
    })
    .trim()
    .min(1, "Título é obrigatório.")
    .max(64, `Título deve ter no máximo 64 caracteres.`),
  description: z
    .string({
      invalid_type_error: "Description must be a string.",
    })
    .trim()
    .max(4000, `Descrição deve ter no máximo 4000 caracteres.`)
    .optional()
    .or(z.literal("")),
  dueDate: z.coerce.date().optional(),
  status: z.nativeEnum(TenantTaskStatus, {
    required_error: "Status is required",
    invalid_type_error: "Status must be a string",
  }),
});

export type UpdateTenantTaskSchema = z.infer<typeof updateTenantTaskSchema>;
