"use client";

import * as React from "react";
import { Wallet, BanknoteIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import type { TenantDto } from "~/types/dtos/tenant-dto";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { formatCurrency, isNegativeValue } from "~/lib/formatters";
import Decimal from "decimal.js";
import { useRouter } from "next/navigation";
import { replaceOrgSlug, routes } from "@workspace/routes";
import { useActiveOrganization } from "~/hooks/use-active-organization";

export type TenantFinancesProps = {
  tenant: TenantDto;
};

export function TenantFinances({
  tenant,
}: TenantFinancesProps): React.JSX.Element {
  const router = useRouter();
  const activeOrganization = useActiveOrganization();

  const handleGoToFinances = (): void => {
    router.push(
      replaceOrgSlug(
        routes.dashboard.organizations.slug.Finances,
        activeOrganization.slug,
      ),
    );
  };

  const handleGoToSolde = (): void => {
    router.push(
      `${replaceOrgSlug(
        routes.dashboard.organizations.slug.Tenants,
        activeOrganization.slug,
      )}/${tenant.id}/solde`,
    );
  };

  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="space-y-4 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="drop-shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Wallet className="h-5 w-5 mr-2" />
                Saldo Atual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className={`text-2xl font-bold ${isNegativeValue(tenant.solde) ? "text-red-600" : "text-green-600"}`}
              >
                {formatCurrency(Decimal(tenant.solde))}
              </p>
            </CardContent>
          </Card>

          <Card className="drop-shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BanknoteIcon className="size-5 mr-2" />
                Receita Mensal Esperada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(tenant.totalActiveRentals ?? 0)}
              </p>
              <CardDescription className="mt-2">
                {tenant.assetsContractsCount ? "contratos ativos" : "Nenhum contrato ativo"}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-2 justify-end">
          <Button
            variant="outline"
            onClick={() => handleGoToFinances()}
            className="flex items-center h-7"
          >
            Finanças
          </Button>
          <Button
            variant="outline"
            onClick={() => handleGoToSolde()}
            className="flex items-center h-7"
          >
            Detalhes do Saldo
          </Button>
        </div>
      </div>
    </ResponsiveScrollArea>
  );
}
