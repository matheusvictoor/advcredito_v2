import * as React from "react";

import { TenantRentals } from "~/components/organizations/slug/tenants/details/rentals/tenant-rentals";
import { getTenantContracts } from "~/data/tenants/get-tenant-contracts";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantRentalsTabProps = {
  tenant: TenantDto;
};

export async function TenantRentalsTab({
  tenant,
}: TenantRentalsTabProps): Promise<React.JSX.Element> {
  const rentals = await getTenantContracts({ id: tenant.id });
  return <TenantRentals contracts={rentals} />;
}
