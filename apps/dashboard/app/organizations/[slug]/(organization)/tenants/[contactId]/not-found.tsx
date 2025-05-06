"use client";

import * as React from "react";
import { Metadata } from "next";
import { MoreHorizontalIcon } from "lucide-react";

import { routes } from "@workspace/routes";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { EmptyText } from "@workspace/ui/components/empty-text";
import {
  Page,
  PageActions,
  PageBody,
  PageHeader,
  PagePrimaryBar,
} from "@workspace/ui/components/page";
import { toast } from "@workspace/ui/components/sonner";

import { OrganizationPageTitle } from "~/components/organizations/slug/organization-page-title";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { createTitle } from "~/lib/formatters";

function getLastPartOfUrl(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

export const metadata: Metadata = {
  title: createTitle("Inquilino não encontrado"),
};

export default function TenantNotFoundPage(): React.JSX.Element {
  const copyToClipboard = useCopyToClipboard();
  const handleCopyTenantId = async (): Promise<void> => {
    await copyToClipboard(getLastPartOfUrl(window.location.href));
    toast.success("ID Copiado!");
  };
  const handleCopyPageUrl = async (): Promise<void> => {
    await copyToClipboard(window.location.href);
    toast.success("URL Copiada!");
  };
  return (
    <Page>
      <PageHeader>
        <PagePrimaryBar>
          <OrganizationPageTitle
            index={{
              route: routes.dashboard.organizations.slug.Tenants,
              title: "Inquilinos",
            }}
            title="Não encontrado"
          />
          <PageActions>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="size-9"
                  title="Open menu"
                >
                  <MoreHorizontalIcon className="size-4 shrink-0" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleCopyTenantId}
                >
                  Copiar ID do inquilino
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleCopyPageUrl}
                >
                  Copiar URL da página
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </PageActions>
        </PagePrimaryBar>
      </PageHeader>
      <PageBody>
        <EmptyText className="p-6">Inquilino não foi encontrado.</EmptyText>
      </PageBody>
    </Page>
  );
}
