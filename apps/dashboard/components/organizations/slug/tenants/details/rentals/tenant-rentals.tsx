"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CirclePlusIcon,
  FileText,
  Home,
} from "lucide-react";

import { PropertyType, StatusContract } from "@workspace/database";
import { Button } from "@workspace/ui/components/button";
import { EmptyText } from "@workspace/ui/components/empty-text";
import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { ViewTenantRentalModal } from "~/components/organizations/slug/tenants/details/rentals/view-tenant-rental-modal";
import { TenantTaskList } from "~/components/organizations/slug/tenants/details/rentals/tenant-task-list";
import type { TenantContractsDto } from "~/types/dtos/tenant-contracts-dto";
import { formatCurrency, getTypeProperty } from "~/lib/formatters";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { formatDateBR } from "~/lib/fomatDateBR";
import StatusBadge from "../tenant-status-badge";
import Decimal from "decimal.js";

export type TenantContractsProps = {
  contracts: TenantContractsDto[];
};

const contracts: TenantContractsDto[] = [
  {
    id: "1",
    startContract: new Date("2023-01-01"),
    endContract: new Date("2024-01-01"),
    rental: new Decimal(1200),
    totalCharges: new Decimal(1320),
    floor: 1,
    dueRental: new Date("2023-06-01"),
    propertyType: "APARTMENT",
    propertyUse: "RESIDENTIAL",
    status: "ACTIVE",
    p_street: "Rua das Flores",
    p_number: "123",
    p_neighborhood: "Centro",
    p_zipcode: "58000-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-06-01"),
  },
  {
    id: "2",
    startContract: new Date("2022-10-15"),
    endContract: new Date("2023-10-15"),
    rental: new Decimal(900),
    totalCharges: new Decimal(990),
    floor: 2,
    dueRental: new Date("2023-06-15"),
    propertyType: "HOUSE",
    propertyUse: "COMMERCIAL",
    status: "FINISHED",
    p_street: "Av. Principal",
    p_number: "456A",
    p_neighborhood: "Bancários",
    p_zipcode: "58033-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2022-10-15"),
    updatedAt: new Date("2023-06-15"),
  },
  {
    id: "3",
    startContract: new Date("2024-01-10"),
    endContract: new Date("2025-01-10"),
    rental: new Decimal(1500),
    totalCharges: new Decimal(1650),
    floor: 3,
    dueRental: new Date("2024-06-10"),
    propertyType: "STUDIO",
    propertyUse: "RESIDENTIAL",
    status: "ACTIVE",
    p_street: "Rua Projetada",
    p_number: "789",
    p_neighborhood: "Tambauzinho",
    p_zipcode: "58041-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-06-10"),
  },
  {
    id: "4",
    startContract: new Date("2023-03-05"),
    endContract: new Date("2024-03-05"),
    rental: new Decimal(800),
    totalCharges: new Decimal(880),
    floor: null,
    dueRental: new Date("2023-09-05"),
    propertyType: "HOUSE",
    propertyUse: "RESIDENTIAL",
    status: "CANCELED",
    p_street: "Rua da Paz",
    p_number: "55",
    p_neighborhood: "Altiplano",
    p_zipcode: "58037-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2023-03-05"),
    updatedAt: new Date("2023-09-05"),
  },
  {
    id: "5",
    startContract: new Date("2023-07-01"),
    endContract: new Date("2024-07-01"),
    rental: new Decimal(1350),
    totalCharges: new Decimal(1450),
    floor: 4,
    dueRental: new Date("2024-01-01"),
    propertyType: "APARTMENT",
    propertyUse: "COMMERCIAL",
    status: "ACTIVE",
    p_street: "Av. Epitácio Pessoa",
    p_number: "1000",
    p_neighborhood: "Tambaú",
    p_zipcode: "58039-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "6",
    startContract: new Date("2022-12-20"),
    endContract: new Date("2023-12-20"),
    rental: new Decimal(1000),
    totalCharges: new Decimal(1100),
    floor: 0,
    dueRental: new Date("2023-06-20"),
    propertyType: "HOUSE",
    propertyUse: "RESIDENTIAL",
    status: "FINISHED",
    p_street: "Rua do Sol",
    p_number: "321",
    p_neighborhood: "Castelo Branco",
    p_zipcode: "58050-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2022-12-20"),
    updatedAt: new Date("2023-06-20"),
  },
  {
    id: "7",
    startContract: new Date("2024-04-01"),
    endContract: new Date("2025-04-01"),
    rental: new Decimal(1800),
    totalCharges: new Decimal(1950),
    floor: 5,
    dueRental: new Date("2024-06-01"),
    propertyType: "MOTORHOME",
    propertyUse: "RESIDENTIAL",
    status: "ACTIVE",
    p_street: "Av. Beira Mar",
    p_number: "800",
    p_neighborhood: "Cabo Branco",
    p_zipcode: "58045-000",
    p_city: "João Pessoa",
    p_state: "PB",
    p_country: "Brasil",
    createdAt: new Date("2024-04-01"),
    updatedAt: new Date("2024-06-01"),
  },
];
export function TenantRentals({ rentals: rentals, }: TenantContractsProps,): React.JSX.Element {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [contractmodalopen, setcontractmodalopen] = React.usestate<boolean>(false);
  const amount = rentals.length;
  const threshold = 4;

  const handleToggleShowMoe = (): void => {
    setShowMore((value) => !value);
  };

  const handleViewRental = (id: string) => {
    const contract = await getTenanatContract;
    NiceModal.show(ViewTenantRentalModal, { id });
  };

  const handleShowAddTaskModal = (): void => {
    NiceModal.show(AddTenantTaskModal, { tenantId: tenant.id });
  };

  const calculateTotal = (rental: TenantContractsDto): Decimal[] => {
    const totalCharges = rental.charges.reduce((sum: Decimal, charge) => {
      return sum.plus(charge.value);
    }, new Decimal(0));

    return [new Decimal(rental.rental).plus(totalCharges), totalCharges];
  };

  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="">
        <div className="flex h-14 flex-row items-center justify-between gap-2 px-6">
          <h1 className="text-sm font-semibold hidden sm:block">
            Todos os aluguéis{" "}
            <span className="text-muted-foreground">({rentals.length})</span>
          </h1>
          <Button
            type="button"
            variant="outline"
            size="default"
            className="shadow-md"
            // onClick={handleShowAddTaskModal}
          >
            <CirclePlusIcon className="mr-2 size-4 shrink-0" />
            Adicionar aluguel
          </Button>
        </div>
        <div className="px-6 grid grid-cols-1 2xl:grid-cols-4 gap-2">
          {rentals.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Nenhum contrato encontrado
                </p>
              </CardContent>
            </Card>
          ) : (
            rentals.slice(0, showMore ? amount : threshold).map((contract) => {
              // const [totalMonthly, totalCharge] = calculateTotal(contract);
              const totalMonthly = contract.rental.plus(contract.totalCharges);

              return (
                <Card key={contract.id} className="overflow-hidden shadow-xl">
                  <CardHeader className="pb-2 flex flex-row items-start justify-between">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 mr-2" />
                      <CardTitle className="text-lg">
                        {getTypeProperty(contract.propertyType)}{" "}
                        {contract.floor ?? ""}
                      </CardTitle>
                    </div>
                    <StatusBadge status={contract.status} size="sm" />
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Endereço
                        </p>
                        <p className="text-sm font-medium">
                          {contract.p_street}, {contract.p_number} ,
                          {contract.p_city}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Período do Contrato
                        </p>
                        <p className="text-sm font-medium">
                          {formatDateBR(contract.startContract, "dd/MM/yyyy")} -{" "}
                          {formatDateBR(contract.endContract, "dd/MM/yyyy")}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Valor do Aluguel
                        </p>
                        <p className="text-sm font-medium">
                          {formatCurrency(
                            contract.rental ? Decimal(contract.rental) : 0,
                          )}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Valor dos Encargos
                        </p>
                        <p className="text-sm font-medium">
                          {formatCurrency(contract.totalCharges)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Vencimento
                        </p>
                        <p className="text-sm font-medium">
                          Todo dia {formatDateBR(contract.dueRental, "dd")}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Mensal
                        </p>
                        <p className="text-sm font-bold">
                          {formatCurrency(totalMonthly)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          handleViewRental(contract.id);
                        }}
                        className="flex items-center shadow-md"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver Contrato
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {amount > threshold && (
          <div className="ml-6 p-6">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleToggleShowMore}
            >
              {showMore ? "Mostrar menos" : "Mostrar mais"}
              {showMore ? (
                <ChevronUpIcon className="ml-1 size-4 shrink-0" />
              ) : (
                <ChevronDownIcon className="ml-1 size-4 shrink-0" />
              )}
            </Button>
          </div>
        )}
      </div>
    </ResponsiveScrollArea>
  );
}
