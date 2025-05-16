import { type TenantRecord } from "@workspace/database";

export type FavoriteDto = {
  id: string;
  order: number;
  tenantId: string;
  name: string;
  record: TenantRecord;
  image?: string;
};
