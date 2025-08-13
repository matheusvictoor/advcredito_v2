"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { FilePlus2Icon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { EmptyText } from "@workspace/ui/components/empty-text";
import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { AddTenantNoteModal } from "~/components/organizations/slug/tenants/details/notes/add-tenant-note-modal";
import { TenantNoteCard } from "~/components/organizations/slug/tenants/details/notes/tenant-note-card";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import type { TenantNoteDto } from "~/types/dtos/tenant-note-dto";

export type TenantNotesProps = {
  tenant: TenantDto;
  notes: TenantNoteDto[];
};

export function TenantNotes({
  tenant,
  notes,
}: TenantNotesProps): React.JSX.Element {
  const handleShowAddCTenantNoteModal = async (): Promise<void> => {
    NiceModal.show(AddTenantNoteModal, { tenantId: tenant.id });
  };
  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="flex h-14 flex-row items-center justify-between gap-2 px-6">
        <h1 className="text-sm font-semibold">
          Todas as notas{" "}
          <span className="text-muted-foreground">({notes.length})</span>
        </h1>
        <Button
          type="button"
          variant="outline"
          size="default"
          onClick={handleShowAddCTenantNoteModal}
        >
          <FilePlus2Icon className="mr-2 size-4 shrink-0" />
          Adicionar nota
        </Button>
      </div>
      <div className="h-full p-6 pt-0">
        {notes.length > 0 ? (
          <div className="grid size-full grid-cols-1 gap-12 sm:grid-cols-2 2xl:grid-cols-3">
            {notes.map((note) => (
              <TenantNoteCard
                key={note.id}
                note={note}
                className="h-[300px]"
              />
            ))}
          </div>
        ) : (
          <EmptyText>
            Não há notas associadas a este contato.
          </EmptyText>
        )}
      </div>
    </ResponsiveScrollArea>
  );
}
