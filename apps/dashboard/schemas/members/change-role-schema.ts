import { z } from "zod";

import { Role } from "@workspace/database";

export const changeRoleSchema = z.object({
  id: z
    .string({
      required_error: "Id is required.",
      invalid_type_error: "Id must be a string.",
    })
    .trim()
    .uuid("Id is invalid.")
    .min(1, "Id is required.")
    .max(36, "Maximum 36 characters allowed."),
  role: z.nativeEnum(Role, {
    required_error: "Role is required",
    invalid_type_error: "Role must be a string",
  }),
});

export type ChangeRoleSchema = z.infer<typeof changeRoleSchema>;
