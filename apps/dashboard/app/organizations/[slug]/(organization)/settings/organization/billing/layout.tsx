import * as React from "react";
import { type Metadata } from "next";

import { routes } from "@workspace/routes";
import { AnnotatedLayout } from "@workspace/ui/components/annotated";
import {
  Page,
  PageBody,
  PageHeader,
  PagePrimaryBar,
} from "@workspace/ui/components/page";
import { Separator } from "@workspace/ui/components/separator";

import { OrganizationPageTitle } from "~/components/organizations/slug/organization-page-title";
import { createTitle } from "~/lib/formatters";

export const metadata: Metadata = {
  title: createTitle("Billing"),
};

export type BillingLayoutProps = {
  subscriptionPlan: React.ReactNode;
  billingBreakdown: React.ReactNode;
  billingEmail: React.ReactNode;
  billingAddress: React.ReactNode;
  invoices: React.ReactNode;
};

export default async function BillingLayout({
  subscriptionPlan,
  billingBreakdown,
  billingEmail,
  billingAddress,
  invoices,
}: BillingLayoutProps & NextPageProps): Promise<React.JSX.Element> {
  return (
    <Page>
      <PageHeader>
        <PagePrimaryBar>
          <OrganizationPageTitle
            index={{
              route:
                routes.dashboard.organizations.slug.settings.organization.Index,
              title: "Organização",
            }}
            title="Faturamento"
          />
        </PagePrimaryBar>
      </PageHeader>
      <PageBody>
        <AnnotatedLayout>
          {subscriptionPlan}
          <Separator />
          {billingBreakdown}
          <Separator />
          {billingEmail}
          <Separator />
          {billingAddress}
          <Separator />
          {invoices}
        </AnnotatedLayout>
      </PageBody>
    </Page>
  );
}
