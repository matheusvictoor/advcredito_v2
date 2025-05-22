import { z } from "zod";

import { TenantRecord } from "@workspace/database";

export const tenantAddressStates = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AP", name: "Amapá" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "MA", name: "Maranhão" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "MG", name: "Minas Gerais" },
  { code: "PA", name: "Pará" },
  { code: "PB", name: "Paraíba" },
  { code: "PR", name: "Paraná" },
  { code: "PE", name: "Pernambuco" },
  { code: "PI", name: "Piauí" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "RO", name: "Rondônia" },
  { code: "RR", name: "Roraima" },
  { code: "SC", name: "Santa Catarina" },
  { code: "SP", name: "São Paulo" },
  { code: "SE", name: "Sergipe" },
  { code: "TO", name: "Tocantins" }
];


const baseSchema = z.object({
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
    .max(64, "Nome deve ter no máximo 64 caracteres."),
  email: z
    .string({
      invalid_type_error: "Email must be a string.",
    })
    .trim()
    .max(255, "Email deve ter no máximo 255 caracteres.")
    .email("Insira um e-mail válido.")
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
  street: z
    .string({
      invalid_type_error: "Street must be a string.",
    })
    .trim()
    .max(64, "Rua deve ter no máximo 64 caracteres.")
    .optional()
    .or(z.literal("")),
  number: z
    .string({
      invalid_type_error: "Number must be a string.",
    })
    .trim()
    .max(10, "Numero deve ter no máximo 10 caracteres.")
    .optional()
    .or(z.literal("")),
  neighborhood: z
    .string({
      invalid_type_error: "Neighborhood must be a string.",
    })
    .trim()
    .max(64, "Bairro deve ter no máximo 64 caracteres.")
    .optional()
    .or(z.literal("")),
  zipcode: z
    .string({
      invalid_type_error: "Zip code must be a string.",
    })
    .trim()
    .max(10, "Cep deve ter no máximo 10 caracteres.")
    .optional()
    .or(z.literal("")),
  city: z
    .string({
      invalid_type_error: "City must be a string.",
    })
    .trim()
    .max(64, "Cidade deve ter no máximo 64 caracteres.")
    .optional()
    .or(z.literal("")),
  state: z
    .string({
      invalid_type_error: "State must be a string.",
    })
    .trim()
    .max(64, "Estado deve ter no máximo 64 caracteres.")
    .optional()
    .or(z.literal("")),
  complement: z
    .string({
      invalid_type_error: "Complement must be a string.",
    })
    .trim()
    .max(255, "complemento deve ter no máximo 255 caracteres.")
    .optional()
    .or(z.literal("")),
});

const personSchema = baseSchema.extend({
  record: z.literal(TenantRecord.PERSON),
  cpf: z
    .string({
      required_error: "Cpf is required.",
      invalid_type_error: "Cpf must be a string.",
    })
    .trim()
    .min(1, "Cpf é obrigatório.")
    .max(14, "Cpf deve ter no máximo 14 caracteres."),
  birthDate: z
    .coerce.date({
      invalid_type_error: "Birth date must be a date.",
    })
    .optional()
    .refine(
      (date) => {
        if (!date) return true;
        const age = new Date().getFullYear() - date.getFullYear();
        return age >= 18;
      },
      { message: 'O inquilino deve ter pelo menos 18 anos' }
    ),
});

const companySchema = baseSchema.extend({
  record: z.literal(TenantRecord.COMPANY),
  cnpj: z
    .string({
      required_error: "Cnpj is required.",
      invalid_type_error: "Cnpj must be a string.",
    })
    .trim()
    .min(1, "Cnpj é obrigatório.")
    .max(14, "Cnpj deve ter no máximo 14 caracteres."),
});

export const updateTenantPropertiesSchema = z.discriminatedUnion("record", [
  personSchema,
  companySchema,
]);

export type UpdateTenantPropertiesSchema = z.infer<
  typeof updateTenantPropertiesSchema
>;