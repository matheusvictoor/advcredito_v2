import * as React from "react";
import { UsersIcon } from "lucide-react";

import { EmptyState } from "@workspace/ui/components/empty-state";

import { AddTenantButton } from "~/components/organizations/slug/tenants/add-tenant-button";

export function TenantsEmptyState(): React.JSX.Element {
  return (
    <div className="p-6">
      <EmptyState
        icon={
          <div className="flex size-12 items-center justify-center rounded-md border">
            <UsersIcon className="size-6 shrink-0 text-muted-foreground" />
          </div>
        }
        title="Nenhum inquilino ainda"
        description="Adicione inquilinos e eles aparecerão aqui."
      >
        <AddTenantButton />
      </EmptyState>
    </div>
  );
}
