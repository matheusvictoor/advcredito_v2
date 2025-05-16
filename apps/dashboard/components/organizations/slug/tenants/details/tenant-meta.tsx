"use client";

import * as React from "react";

import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { TenantDetailsSection } from "~/components/organizations/slug/tenants/details/tenant-details-section";
// import { ContactStageSection } from "~/components/organizations/slug/tenants/details/contact-stage-section";
// import { ContactTagsSection } from "~/components/organizations/slug/tenants/details/contact-tags-section";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantMetaProps = {
  tenant: TenantDto;
};

export function TenantMeta({ tenant }: TenantMetaProps): React.JSX.Element {
  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="size-full divide-y border-b md:w-[360px] md:min-w-[360px]">
        <TenantDetailsSection tenant={tenant} />
        {/* <ContactStageSection tenant={tenant} /> */}
        {/* <ContactTagsSection tenant={tenant} /> */}
      </div>
    </ResponsiveScrollArea>
  );
}
