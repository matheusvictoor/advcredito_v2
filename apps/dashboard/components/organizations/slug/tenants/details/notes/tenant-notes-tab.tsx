import * as React from "react";

import { TenantNotes } from "~/components/organizations/slug/tenants/details/notes/tenant-notes";
import { getTenantNotes } from "~/data/tenants/get-tenant-notes";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantNotesTabProps = {
  tenant: TenantDto;
};

export async function TenantNotesTab({
  tenant,
}: TenantNotesTabProps): Promise<React.JSX.Element> {
  const notes = await getTenantNotes({ tenantId: tenant.id });
  return <TenantNotes tenant={tenant} notes={notes} />;
}
