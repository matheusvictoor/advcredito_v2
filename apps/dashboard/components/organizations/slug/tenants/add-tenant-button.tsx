"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";

import { Button } from "@workspace/ui/components/button";

import { AddTenantModal } from "~/components/organizations/slug/tenants/add-tenant-modal";
import { PlusCircleIcon } from "lucide-react";

export function AddTenantButton(): React.JSX.Element {
  const handleShowAddTenantModal = (): void => {
    NiceModal.show(AddTenantModal);
  };
  return (
    <Button
      type="button"
      variant="default"
      size="default"
      className="whitespace-nowrap"
      onClick={handleShowAddTenantModal}
    >
      <PlusCircleIcon className="h-4 w-4 mr-2" />
      Adicionar inquilino
    </Button>
  );
}
