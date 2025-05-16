"use client";

import * as React from "react";
import { StarIcon } from "lucide-react";

import { Button, type ButtonProps } from "@workspace/ui/components/button";
import { toast } from "@workspace/ui/components/sonner";
import { cn } from "@workspace/ui/lib/utils";

import { addFavorite } from "~/actions/favorites/add-favorite";
import { removeFavorite } from "~/actions/favorites/remove-favorite";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type TenantFavoriteToggleProps = ButtonProps & {
  tenant: TenantDto;
  addedToFavorites: boolean;
};

export function TenantFavoriteToggle({
  tenant,
  addedToFavorites,
  className,
  ...other
}: TenantFavoriteToggleProps): React.JSX.Element {
  const description = addedToFavorites ? "Remover favorito" : "Adicionar favorito";
  const handleToggleFavorite = async (): Promise<void> => {
    if (addedToFavorites) {
      const result = await removeFavorite({ tenantId: tenant.id });
      if (result?.serverError || result?.validationErrors) {
        toast.error("Não foi possível remover o favorito");
      }
    } else {
      const result = await addFavorite({ tenantId: tenant.id });
      if (result?.serverError || result?.validationErrors) {
        toast.error("Não foi possível adicionar o favorito");
      }
    }
  };
  return (
    <Button
      type="button"
      variant="ghost"
      title={description}
      onClick={handleToggleFavorite}
      className={cn("size-9", className)}
      {...other}
    >
      <StarIcon
        className={cn("size-4 shrink-0", addedToFavorites && "fill-primary")}
      />
      <span className="sr-only">{description}</span>
    </Button>
  );
}
