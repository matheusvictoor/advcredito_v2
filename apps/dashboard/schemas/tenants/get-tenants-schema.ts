import { literal, z } from "zod";

import { SortDirection } from "~/types/sort-direction";

const MAX_INT32 = +2147483647;

export enum GetTenantsSortBy {
  Name = "name",
  Email = "email",
  Phone = "phone",
  Solde = "solde",
  Status = "status",
}

export enum RecordsOption {
  All = "all",
  People = "people",
  Companies = "companies",
}

export const getTenantsSchema = z.object({
  pageIndex: z.coerce
    .number({
      required_error: "Page index is required.",
      invalid_type_error: "Page index must be a number.",
    })
    .int()
    .min(0, "Page number must be equal or greater than 1.")
    .max(MAX_INT32, `Page number must be equal or smaller than ${MAX_INT32}.`),
  pageSize: z.coerce
    .number({
      required_error: "Page size is required.",
      invalid_type_error: "Page size must be a number.",
    })
    .int()
    .min(1, "Page size must be equal or greater than 1.")
    .max(100, "Page number must be equal or smaller than 100."),
  sortBy: z.nativeEnum(GetTenantsSortBy, {
    required_error: "Sort by is required.",
    invalid_type_error: "Sort by must be a string.",
  }),
  sortDirection: z.nativeEnum(SortDirection, {
    required_error: "Sort direction is required.",
    invalid_type_error: "Sort direction must be a string.",
  }),
  searchQuery: z
    .string({
      invalid_type_error: "Search query must be a string.",
    })
    .max(2000, "Maximum 2000 characters allowed.")
    .optional()
    .or(literal("")),
  records: z.nativeEnum(RecordsOption, {
    required_error: "Records is required.",
    invalid_type_error: "Records must be a string.",
  }),
  archived: z.boolean({
    required_error: "Archived is required.",
    invalid_type_error: "Archived must be a boolean.",
  }),
});

export type GetTenantsSchema = z.infer<typeof getTenantsSchema>;
