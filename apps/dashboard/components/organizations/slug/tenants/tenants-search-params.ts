import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  parseAsBoolean,
} from "nuqs/server";

import {
  GetTenantsSortBy,
  RecordsOption,
} from "~/schemas/tenants/get-tenants-schema";
import { SortDirection } from "~/types/sort-direction";

export const searchParams = {
  pageIndex: parseAsInteger.withDefault(0),
  pageSize: parseAsInteger.withDefault(50),
  records: parseAsStringLiteral(Object.values(RecordsOption)).withDefault(
    RecordsOption.All,
  ),
  sortBy: parseAsStringLiteral(Object.values(GetTenantsSortBy)).withDefault(
    GetTenantsSortBy.Name,
  ),
  sortDirection: parseAsStringLiteral(Object.values(SortDirection)).withDefault(
    SortDirection.Asc,
  ),
  searchQuery: parseAsString.withDefault(""),
  archived: parseAsBoolean.withDefault(false),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
export const serializer = createSerializer(searchParams);
