import * as React from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { createSearchParamsCache, parseAsString } from "nuqs/server";

import { routes } from "@workspace/routes";
import {
  Page,
  PageBody,
  PageHeader,
  PagePrimaryBar,
} from "@workspace/ui/components/page";

import { TenantActions } from "~/components/organizations/slug/tenants/details/tenant-actions";
import { TenantMeta } from "~/components/organizations/slug/tenants/details/tenant-meta";
import { TenantPageVisit } from "~/components/organizations/slug/tenants/details/tenant-page-visit";
import { TenantTabs } from "~/components/organizations/slug/tenants/details/tenant-tabs";
import { OrganizationPageTitle } from "~/components/organizations/slug/organization-page-title";
import { getTenant } from "~/data/tenants/get-tenant";
import { createTitle } from "~/lib/formatters";

const dedupedGetTenant = React.cache(getTenant);

const paramsCache = createSearchParamsCache({
  tenantId: parseAsString.withDefault(""),
});

export async function generateMetadata({
  params,
}: NextPageProps): Promise<Metadata> {
  const { tenantId } = await paramsCache.parse(params);

  if (tenantId) {
    const tenant = await dedupedGetTenant({
      id: tenantId,
    });
    if (tenant) {
      return {
        title: createTitle(tenant.name),
      };
    }
  }

  return {
    title: createTitle("Inquilino"),
  };
}

export default async function TenantPage({
  params,
}: NextPageProps): Promise<React.JSX.Element> {
  const { tenantId } = await paramsCache.parse(params);
  if (!tenantId) {
    return notFound();
  }

  const tenant = await dedupedGetTenant({
    id: tenantId,
  });

  return (
    <Page>
      <PageHeader>
        <PagePrimaryBar>
          <OrganizationPageTitle
            index={{
              route: routes.dashboard.organizations.slug.Tenants,
              title: "Tenant",
            }}
            title={tenant.name}
          />
          <TenantActions tenant={tenant} />
        </PagePrimaryBar>
      </PageHeader>
      <PageBody
        disableScroll
        className="flex h-full flex-col overflow-auto md:flex-row md:divide-x md:overflow-hidden"
      >
        <TenantPageVisit tenant={tenant} />
        <TenantMeta tenant={tenant} />
        <TenantTabs tenant={tenant} />
      </PageBody>
    </Page>
  );
}
