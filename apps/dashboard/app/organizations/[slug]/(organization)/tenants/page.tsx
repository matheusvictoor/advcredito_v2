import * as React from "react";
import { type Metadata } from "next";

import {
  Page,
  PageActions,
  PageBody,
  PageHeader,
  PagePrimaryBar,
  PageSecondaryBar,
} from "@workspace/ui/components/page";

import { OrganizationPageTitle } from "~/components/organizations/slug/organization-page-title";
import { AddTenantButton } from "~/components/organizations/slug/tenants/add-tenant-button";
import { TenantsDataTable } from "~/components/organizations/slug/tenants/tenants-data-table";
import { TenantsEmptyState } from "~/components/organizations/slug/tenants/tenants-empty-state";
import { TenantsFilters } from "~/components/organizations/slug/tenants/tenants-filters";
import { searchParamsCache } from "~/components/organizations/slug/tenants/tenants-search-params";
import { getContactTags } from "~/data/tenants/get-contact-tags";
import { getTenants } from "~/data/tenants/get-tenants";
import { TransitionProvider } from "~/hooks/use-transition-context";
import { createTitle } from "~/lib/formatters";

export const metadata: Metadata = {
  title: createTitle("Inquilinos"),
  description: "Gerencie seus inquilinos de forma eficiente.",
};

export default async function TenantsPage({
  searchParams,
}: NextPageProps): Promise<React.JSX.Element> {
  const parsedSearchParams = await searchParamsCache.parse(searchParams);

  const [{ tenants, filteredCount, totalCount, assetsCount }] =
    await Promise.all([getTenants(parsedSearchParams)]);
  const countArchived = totalCount - assetsCount;

  const hasAnyTenants = totalCount > 0;

  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <OrganizationPageTitle
              title="Inquilinos"
              info={`Total de ${totalCount} ${totalCount === 1 ? "inquilino" : "inquilinos"} em sua organização`}
            />
            {hasAnyTenants && (
              <PageActions>
                <AddTenantButton />
              </PageActions>
            )}
          </PagePrimaryBar>
          <PageSecondaryBar>
            <React.Suspense>
              <TenantsFilters
                assetsCount={assetsCount}
                countArchived={countArchived}
              />
            </React.Suspense>
          </PageSecondaryBar>
        </PageHeader>
        <PageBody disableScroll={hasAnyTenants}>
          {hasAnyTenants ? (
            <React.Suspense>
              <TenantsDataTable data={tenants} totalCount={filteredCount} />
            </React.Suspense>
          ) : (
            <TenantsEmptyState />
          )}
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
