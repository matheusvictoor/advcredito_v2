"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NiceModal from "@ebay/nice-modal-react";
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
  type Row,
} from "@tanstack/react-table";
import {
  ArchiveIcon,
  ArchiveRestoreIcon,
  DollarSignIcon,
  FileXIcon,
  HomeIcon,
  MoreHorizontalIcon,
  PlusCircleIcon,
  SendIcon,
  SquarePenIcon,
  Trash2Icon,
} from "lucide-react";
import { useQueryStates } from "nuqs";

import { replaceOrgSlug, routes } from "@workspace/routes";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  DataTable,
  DataTableColumnHeader,
  DataTableColumnOptionsHeader,
  DataTablePagination,
} from "@workspace/ui/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { CenteredSpinner } from "@workspace/ui/components/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";

import { TenantsBulkActions } from "~/components/organizations/slug/tenants/contacts-bulk-actions";
import { DeleteTenantModal } from "~/components/organizations/slug/tenants/delete-tenant-modal";
import { TenantAvatar } from "~/components/organizations/slug/tenants/details/tenant-avatar";
import { tenantStatusColor } from "~/components/organizations/slug/tenants/tenant-stage-color";
import { searchParams } from "~/components/organizations/slug/tenants/tenants-search-params";
import { useActiveOrganization } from "~/hooks/use-active-organization";
import { useTransitionContext } from "~/hooks/use-transition-context";
import { formatCurrency, mask } from "~/lib/formatters";
import { tenantStatusLabel } from "~/lib/labels";
import { GetTenantsSortBy } from "~/schemas/tenants/get-tenants-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import { SortDirection } from "~/types/sort-direction";

export type TenantsDataTableProps = {
  data: TenantDto[];
  totalCount: number;
};

export function TenantsDataTable({
  data,
  totalCount,
}: TenantsDataTableProps): React.JSX.Element {
  const router = useRouter();
  const activeOrganization = useActiveOrganization();
  const { isLoading, startTransition } = useTransitionContext();
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const [sorting, setSorting] = useQueryStates(
    {
      sortBy: searchParams.sortBy,
      sortDirection: searchParams.sortDirection,
    },
    {
      history: "push",
      startTransition,
      shallow: false,
    },
  );

  const [pagination, setPagination] = useQueryStates(
    {
      pageIndex: searchParams.pageIndex,
      pageSize: searchParams.pageSize,
    },
    {
      history: "push",
      startTransition,
      shallow: false,
    },
  );

  const columns: ColumnDef<TenantDto>[] = [
    {
      id: "select",
      size: 64,
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="mx-auto flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="mx-auto flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      meta: {
        title: "Inquilino",
      },
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Inquilino" />
      ),
      cell: ({ row }) => (
        <div className="flex w-fit flex-row items-center gap-2">
          <TenantAvatar record={row.original.record} src={row.original.image} />
          <div className="whitespace-nowrap text-sm font-medium max-w-[200] truncate">
            {row.original.name}
          </div>
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      meta: {
        title: "Propriedade",
      },
      accessorKey: "properties",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Propriedade" />
      ),
      cell: ({ row }) => {
        const { propertyNumber, propertyType } = row.original;

        if (!propertyNumber || propertyNumber.length === 0) {
          return (
            <Button
              variant="outline"
              size="sm"
              className="text-xs w-fit whitespace-nowrap"
              onClick={(e) => {
                e.stopPropagation();
                // lógica para adicionar aluguel
              }}
            >
              <PlusCircleIcon className="h-4 w-4 mr-1" />
              Adicionar Aluguel
            </Button>
          );
        }

        if (propertyNumber.length === 1) {
          return (
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => {
                // lógica para o imóvel único
              }}
            >
              <HomeIcon className="h-2 w-2" />
              Imóveis
              <span className="px-1 ml-2 h-4 rounded-full bg-green-600 text-green-100 text-[10px]">
                {propertyNumber}
              </span>
            </Button>
          );
        }

        // Se tiver mais de um imóvel
        return (
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => {
              // lógica para múltiplos imóveis
            }}
          >
            <HomeIcon className="h-2 w-2" />
            {propertyType}, {propertyNumber}
          </Button>
        );
      },
      enableSorting: true,
      enableHiding: true,
    },
    {
      meta: {
        title: "Email",
      },
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => (
        <span className="whitespace-nowrap text-sm">{row.original.email}</span>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      meta: {
        title: "Contato",
      },
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contato" />
      ),
      cell: ({ row }) => (
        <span className="whitespace-nowrap text-sm">
          {mask.phone(row.original.phone)}
        </span>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      meta: {
        title: "Saldo",
      },
      accessorKey: "solde",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Saldo" />
      ),
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, activeOrganization.slug)}/${row.original.id}`}
                // href={`/list/tenants/${tenant.tenantId}/solde`}
                className={`p-0 h-auto text-xs hover:underline ${
                  row.original.solde < 0
                    ? "text-red-500"
                    : row.original.solde === 0
                      ? "text-foreground"
                      : "text-green-500"
                }`}
              >
                {formatCurrency(row.original.solde)}
              </Link>
            </TooltipTrigger>
            <TooltipContent>Saldo do inquilino</TooltipContent>
          </Tooltip>
          {row.original.pendingInstallmentsCount > 0 && (
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex items-center justify-center size-4 rounded-full bg-red-500 text-[10px] cursor-pointer"
                  // onClick={() => handleLateBills(row.original.id)}
                >
                  {row.original.pendingInstallmentsCount}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span>
                  {row.original.pendingInstallmentsCount > 1
                    ? `${row.original.pendingInstallmentsCount} aluguéis atrasados`
                    : `${row.original.pendingInstallmentsCount} aluguel atrasado`}
                </span>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      meta: {
        title: "Status",
      },
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => (
        <div className="flex flex-row items-center gap-2 whitespace-nowrap">
          <div
            className={cn(
              "size-2.5 rounded-full border-2 bg-background",
              tenantStatusColor[row.original.status],
            )}
          />
          {tenantStatusLabel[row.original.status]}
        </div>
      ),
      enableSorting: true,
      enableHiding: true,
    },
    {
      id: "actions",
      size: 64,
      header: ({ table }) => <DataTableColumnOptionsHeader table={table} />,
      cell: ({ row }) => <ActionsCell row={row} />,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: [
        {
          id: sorting.sortBy,
          desc: sorting.sortDirection === SortDirection.Desc,
        },
      ],
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    pageCount: Math.max(
      1,
      Math.ceil(totalCount / Math.max(1, pagination.pageSize)),
    ),
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
    getRowId: (row, _relativeIndex, parent) => (parent ? parent.id : row.id),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: (updaterOrValue) => {
      const newSorting =
        typeof updaterOrValue === "function"
          ? updaterOrValue(table.getState().sorting)
          : updaterOrValue;

      if (newSorting.length > 0) {
        setSorting({
          sortBy: newSorting[0].id as GetTenantsSortBy,
          sortDirection: newSorting[0].desc
            ? SortDirection.Desc
            : SortDirection.Asc,
        });
      } else {
        setSorting({
          sortBy: GetTenantsSortBy.Name,
          sortDirection: SortDirection.Asc,
        });
      }
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,

    enableRowSelection: true,
    manualPagination: true,
    manualFiltering: true,
  });

  const hasSelectedRows = table.getSelectedRowModel().rows.length > 0;

  const handleRowClicked = (row: Row<TenantDto>): void => {
    router.push(
      `${replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, activeOrganization.slug)}/${row.original.id}`,
    );
  };

  return (
    <div className="relative flex flex-col overflow-hidden">
      <ScrollArea verticalScrollBar horizontalScrollBar className="h-full">
        <DataTable
          fixedHeader
          table={table}
          wrapperClassName="h-[calc(100svh-161px)] overflow-visible"
          onRowClicked={handleRowClicked}
        />
      </ScrollArea>
      <DataTablePagination table={table} />
      {isLoading && <CenteredSpinner />}
      {hasSelectedRows && <TenantsBulkActions table={table} />}
    </div>
  );
}

function ActionsCell({ row }: { row: Row<TenantDto> }): React.JSX.Element {
  const activeOrganization = useActiveOrganization();
  const handleShowDeleteTenantModal = (): void => {
    NiceModal.show(DeleteTenantModal, { tenant: row.original });
  };
  return (
    <DropdownMenu modal={false}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              className="ml-auto mr-4 flex size-8 data-[state=open]:bg-muted"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontalIcon className="size-4 shrink-0" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>Menu</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Tenants, activeOrganization.slug)}/${row.original.id}`}
          >
            Editar
            <DropdownMenuShortcut>
              <SquarePenIcon className="h-4 w-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, activeOrganization.slug)}/${row.original.id}`}
          >
            Enviar mensagem
            <DropdownMenuShortcut>
              <SendIcon className="h-4 w-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        {row.original.assetsContractCount > 0 && (
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link
              href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, activeOrganization.slug)}/${row.original.id}`}
            >
              Terminar a locação
              <DropdownMenuShortcut>
                <FileXIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Tenants, activeOrganization.slug)}/${row.original.id}`}
          >
            Saldo do inquilino
            <DropdownMenuShortcut>
              <DollarSignIcon className="h-4 w-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Tenants, activeOrganization.slug)}/${row.original.id}`}
          >
            {row.original.archived
              ? "Desarquivar inquilino"
              : "Arquivar inquilino"}
            <DropdownMenuShortcut>
              {row.original.archived ? (
                <ArchiveRestoreIcon className="h-4 w-4" />
              ) : (
                <ArchiveIcon className="h-4 w-4" />
              )}
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer !text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            handleShowDeleteTenantModal();
          }}
        >
          Excluir
          <DropdownMenuShortcut>
            <Trash2Icon className="h-4 w-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
