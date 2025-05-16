import * as React from "react";

import { TenantActionsDropdown } from "~/components/organizations/slug/tenants/details/tenant-actions-dropdown";
import { TenantFavoriteToggle } from "~/components/organizations/slug/tenants/details/tenant-favorite-toggle";
import { getTenantIsInFavorites } from "~/data/tenants/get-tenant-is-in-favorites";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantActionsProps = React.HtmlHTMLAttributes<HTMLDivElement> & { 
  tenant: TenantDto;
};

export async function TenantActions({
  tenant: tenant,
}: TenantActionsProps): Promise<React.JSX.Element> {
  const addedToFavorites = await getTenantIsInFavorites({
    tenantId: tenant.id,
  });

  return (
    <div className="flex flex-row items-center gap-2">
      <TenantFavoriteToggle
        tenant={tenant}
        addedToFavorites={addedToFavorites}
      />
      <TenantActionsDropdown
        tenant={tenant}
        addedToFavorites={addedToFavorites}
      />
    </div>
  );
}
