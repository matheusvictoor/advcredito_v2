import * as React from "react";

import { TenantFinances } from "~/components/organizations/slug/tenants/details/finances/tenant-finances";
import { getTenantFinances } from "~/data/tenants/get-tenant-finances";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantFinancesTabProps = {
  tenant: TenantDto;
};

export async function TenantFinancesTab({
  tenant,
}: TenantFinancesTabProps): Promise<React.JSX.Element> {
  const finances = await getTenantFinances({ id: tenant.id });
  return <TenantFinances tenant={tenant} finances={finances} />;
}
