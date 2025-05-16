"use client";

import * as React from "react";

import { addTenantPageVisit } from "~/actions/tenants/add-tenant-page-visit";
import { useRunOnce } from "~/hooks/use-run-once";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantPageVisitProps = {
  tenant: TenantDto;
};

export function TenantPageVisit({
  tenant,
}: TenantPageVisitProps): React.JSX.Element {
  useRunOnce(() => addTenantPageVisit({ tenantId: tenant.id }));
  return <></>;
}
