import * as React from "react";

import { TenantTasks } from "~/components/organizations/slug/tenants/details/tasks/tenant-tasks";
import { getTenantTasks } from "~/data/tenants/get-tenant-tasks";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantTasksTabProps = {
  tenant: TenantDto;
};

export async function TenantTasksTab({
  tenant,
}: TenantTasksTabProps): Promise<React.JSX.Element> {
  const tasks = await getTenantTasks({ tenantId: tenant.id });
  return <TenantTasks tenant={tenant} tasks={tasks} />;
}
