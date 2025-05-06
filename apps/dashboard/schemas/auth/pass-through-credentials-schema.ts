import { z } from "zod";

export const passThroughCredentialsSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string.",
    })
    .trim()
    .max(255, "Máximo de 255 caracteres permitidos."),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .max(72, "Maximum 72 characters allowed."),
});

export type PassThroughCredentialsSchema = z.infer<
  typeof passThroughCredentialsSchema
>;
