import { TenantTaskStatus } from "@workspace/database";

export type TenantTaskDto = {
  id: string;
  tenantId?: string;
  title: string;
  description?: string;
  status: TenantTaskStatus;
  dueDate?: Date;
  createdAt: Date;
};
