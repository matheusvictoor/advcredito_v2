import * as React from "react";

import { TenantFinances } from "~/components/organizations/slug/tenants/details/finances/tenant-finances";
import { getTenantNotes } from "~/data/tenants/get-tenant-notes";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantFinancesTabProps = {
  tenant: TenantDto;
};

export async function TenantFinancesTab({
  tenant,
}: TenantFinancesTabProps): Promise<React.JSX.Element> {
  const finances = await getTenantNotes({ tenantId: tenant.id });
  return <TenantFinances tenant={tenant} notes={finances} />;
}
