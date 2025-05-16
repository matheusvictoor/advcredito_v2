import * as React from "react";

import { TenantActivity } from "~/components/organizations/slug/tenants/details/timeline/tenant-activity";
import { getProfile } from "~/data/account/get-profile";
import { getTenantTimelineEvents } from "~/data/tenants/get-tenant-timeline-events";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantActivityTabProps = {
  tenant: TenantDto;
};

export async function TenantActivityTab({
  tenant,
}: TenantActivityTabProps): Promise<React.JSX.Element> {
  const [profile, events] = await Promise.all([
    getProfile(),
    getTenantTimelineEvents({ tenantId: tenant.id }),
  ]);

  return (
    <TenantActivity profile={profile} tenant={tenant} events={events} />
  );
}
