import { z } from "zod";

import { TenantRecord } from "@workspace/database";
import { brazilianStates } from "~/lib/formatters";

export const updateTenantPropertiesSchema = z.object({
  id: z
    .string({
      required_error: "Id is required.",
      invalid_type_error: "Id must be a string.",
    })
    .trim()
    .uuid("Id is invalid.")
    .min(1, "Id is required.")
    .max(36, "Maximum 36 characters allowed."),
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
    .max(64, "Limite máximo de 64 caracteres."),
  email: z
    .string({
      invalid_type_error: "Email must be a string.",
    })
    .trim()
    .max(255, "Limite máximo de 255 caracteres.")
    .email("Insira um e-mail válido.")
    .optional()
    .or(z.literal("")),
  phone: z
    .string({
      invalid_type_error: "Phone must be a string.",
    })
    .trim()
    .max(11, "Limite máximo de 16 caracteres.")
    .optional()
    .or(z.literal("")),
  street: z
    .string({
      invalid_type_error: "Street must be a string.",
    })
    .trim()
    .max(64, "Limite máximo de 64 caracteres.")
    .optional()
    .or(z.literal("")),
  number: z
    .string({
      invalid_type_error: "Number must be a string.",
    })
    .trim()
    .max(10, "Limite máximo de 10 caracteres.")
    .optional()
    .or(z.literal("")),
  neighborhood: z
    .string({
      invalid_type_error: "Neighborhood must be a string.",
    })
    .trim()
    .max(64, "Limite máximo de 64 caracteres.")
    .optional()
    .or(z.literal("")),
  zipcode: z
    .string({
      invalid_type_error: "Zip code must be a string.",
    })
    .trim()
    .max(10, "Limite máximo de 10 caracteres.")
    .optional()
    .or(z.literal("")),
  city: z
    .string({
      invalid_type_error: "City must be a string.",
    })
    .trim()
    .max(64, "Limite máximo de 64 caracteres.")
    .optional()
    .or(z.literal("")),
  state: z
    .string({
      required_error: "State is required.",
      invalid_type_error: "State must be a string.",
    })
    .trim()
    .toUpperCase()
    .refine(
      (val) => !val || brazilianStates.some((state) => state.code === val),
      "Selecione um estado válido.",
    )
    .optional()
    .or(z.literal("")),
  complement: z
    .string({
      invalid_type_error: "Complement must be a string.",
    })
    .trim()
    .max(255, "Limite máximo de 255 caracteres.")
    .optional()
    .or(z.literal("")),
  birthDate: z.coerce
    .date({
      invalid_type_error: "Birth date must be a date.",
    })
    .optional()
    .refine(
      (date) => {
        if (!date) return true;
        const age = new Date().getFullYear() - date.getFullYear();
        return age >= 18;
      },
      { message: "Idade mínima de 18 anos." },
    ),
});

export type UpdateTenantPropertiesSchema = z.infer<
  typeof updateTenantPropertiesSchema
>;
