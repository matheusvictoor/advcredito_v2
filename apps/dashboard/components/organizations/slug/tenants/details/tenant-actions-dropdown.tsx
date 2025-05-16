"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import NiceModal from "@ebay/nice-modal-react";
import { MoreHorizontalIcon } from "lucide-react";

import { replaceOrgSlug, routes } from "@workspace/routes";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { toast } from "@workspace/ui/components/sonner";

import { addFavorite } from "~/actions/favorites/add-favorite";
import { removeFavorite } from "~/actions/favorites/remove-favorite";
import { DeleteTenantModal } from "~/components/organizations/slug/tenants/delete-tenant-modal";
import { useActiveOrganization } from "~/hooks/use-active-organization";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantActionsDropdownProps = {
  tenant: TenantDto;
  addedToFavorites: boolean;
};

export function TenantActionsDropdown({
  tenant,
  addedToFavorites,
}: TenantActionsDropdownProps): React.JSX.Element {
  const router = useRouter();
  const activeOrganization = useActiveOrganization();
  const copyToClipboard = useCopyToClipboard();
  const handleShowDeleteTenantModal = async (): Promise<void> => {
    const deleted: boolean = await NiceModal.show(DeleteTenantModal, {
      tenant,
    });
    if (deleted) {
      router.push(
        replaceOrgSlug(
          routes.dashboard.organizations.slug.Tenants,
          activeOrganization.slug,
        ),
      );
    }
  };
  const handleCopyTenantId = async (): Promise<void> => {
    await copyToClipboard(tenant.id);
    toast.success("Copied!");
  };
  const handleCopyPageUrl = async (): Promise<void> => {
    await copyToClipboard(window.location.href);
    toast.success("Copied!");
  };
  const handleAddFavorite = async (): Promise<void> => {
    const result = await addFavorite({ tenantId: tenant.id });
    if (result?.serverError || result?.validationErrors) {
      toast.error("Couldn't add favorite");
    }
  };
  const handleRemoveFavorite = async (): Promise<void> => {
    const result = await removeFavorite({ tenantId: tenant.id });
    if (result?.serverError || result?.validationErrors) {
      toast.error("Couldn't remove favorite");
    }
  };
  return (
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
        <DropdownMenuSeparator />
        {addedToFavorites ? (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleRemoveFavorite}
          >
            Remover favorito
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleAddFavorite}
          >
            Adicionar aos favoritos
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="!text-destructive cursor-pointer"
          onClick={handleShowDeleteTenantModal}
        >
          Deletar inquilino
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
