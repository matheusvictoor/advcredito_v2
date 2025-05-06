"use client";

import NiceModal from "@ebay/nice-modal-react";
import { type Table } from "@tanstack/react-table";
import { saveAs } from "file-saver";
import { ChevronsUpDownIcon } from "lucide-react";

import { HttpMethod, MediaTypeNames } from "@workspace/common/http";
import { routes } from "@workspace/routes";
import { Button } from "@workspace/ui/components/button";
import { DataTableBulkActions } from "@workspace/ui/components/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { toast } from "@workspace/ui/components/sonner";

import { DeleteTenantsModal } from "~/components/organizations/slug/tenants/delete-tenants-modal";
import { useActiveOrganization } from "~/hooks/use-active-organization";
import type { TenantDto } from "~/types/dtos/tenant-dto";

function extractFilenameFromContentDispositionHeader(header: string): string {
  const defaultFileName = "download";
  const fileNameToken = "filename*=UTF-8''";

  for (const part of header.split(";")) {
    if (part.trim().indexOf(fileNameToken) === 0) {
      return decodeURIComponent(part.trim().replace(fileNameToken, ""));
    }
  }

  return defaultFileName;
}

export type TenantsBulkActionsProps = {
  table: Table<TenantDto>;
};
export function TenantsBulkActions({
  table,
}: TenantsBulkActionsProps): React.JSX.Element {
  const activeOrganization = useActiveOrganization();
  const handleExportSelectedTenantsToCsv = async () => {
    const selectedRows = table.getSelectedRowModel().rows;
    if (selectedRows.length === 0) {
      return;
    }

    const response = await fetch(
      `${routes.dashboard.Api}/export/csv/tenant-list`,
      {
        method: HttpMethod.Post,
        headers: {
          "content-type": MediaTypeNames.Application.Json,
        },
        body: JSON.stringify({
          organizationId: activeOrganization.id,
          ids: selectedRows.map((row) => row.original.id),
        }),
      },
    );
    if (!response.ok) {
      toast.error(
        "Não foi possível exportar os inquilinos selecionados para CSV",
      );
    } else {
      const data = await response.blob();
      const disposition = response.headers.get("Content-Disposition") ?? "";
      const filename = extractFilenameFromContentDispositionHeader(disposition);

      saveAs(data, filename);
    }
  };

  const handleExportSelectedTenantsToExcel = async () => {
    const selectedRows = table.getSelectedRowModel().rows;
    if (selectedRows.length === 0) {
      return;
    }

    const response = await fetch(
      `${routes.dashboard.Api}/export/excel/tenant-list`,
      {
        method: HttpMethod.Post,
        headers: {
          "content-type": MediaTypeNames.Application.Json,
        },
        body: JSON.stringify({
          organizationId: activeOrganization.id,
          ids: selectedRows.map((row) => row.original.id),
        }),
      },
    );
    if (!response.ok) {
      toast.error(
        "Não foi possível exportar os inquilinos selecionados para Excel",
      );
    } else {
      const data = await response.blob();
      const disposition = response.headers.get("Content-Disposition") ?? "";
      const filename = extractFilenameFromContentDispositionHeader(disposition);

      saveAs(data, filename);
    }
  };

  const handleShowDeleteTenantsModal = () => {
    const selectedRows = table.getSelectedRowModel().rows;
    if (selectedRows.length === 0) {
      return;
    }

    NiceModal.show(DeleteTenantsModal, {
      tenants: selectedRows.map((row) => row.original),
    });
  };

  return (
    <DataTableBulkActions table={table}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="default"
            className="text-sm"
          >
            Ações
            <ChevronsUpDownIcon className="ml-1 size-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleExportSelectedTenantsToCsv}
          >
            Exportar para CSV
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleExportSelectedTenantsToExcel}
          >
            Exportar para Excel
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="!text-red-500 cursor-pointer"
            onClick={handleShowDeleteTenantsModal}
          >
            Excluir selecionados
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </DataTableBulkActions>
  );
}
