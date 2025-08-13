"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { format } from "date-fns";
import { ClockIcon, MoreHorizontalIcon } from "lucide-react";

import { convertMarkdownToHtml } from "@workspace/markdown/convert-markdown-to-html";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardFooter,
  CardHeader,
  type CardProps,
} from "@workspace/ui/components/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { EmptyText } from "@workspace/ui/components/empty-text";
import { Separator } from "@workspace/ui/components/separator";

import { DeleteTenantNoteModal } from "~/components/organizations/slug/tenants/details/notes/delete-tenant-note-modal";
import { EditTenantNoteModal } from "~/components/organizations/slug/tenants/details/notes/edit-tenant-note-modal";
import { getInitials } from "~/lib/formatters";
import type { TenantNoteDto } from "~/types/dtos/tenant-note-dto";

type TenantNoteCardProps = CardProps & {
  note: TenantNoteDto;
};

export function TenantNoteCard({
  note,
  ...others
}: TenantNoteCardProps): React.JSX.Element {
  const handleShowEditTenantNoteModal = (): void => {
    NiceModal.show(EditTenantNoteModal, { note });
  };
  const handleShowDeleteTenantNoteModal = (): void => {
    NiceModal.show(DeleteTenantNoteModal, { note });
  };
  return (
    <Card {...others}>
      <CardHeader className="flex flex-row justify-between space-y-0 py-3">
        <div className="flex flex-row items-center gap-2">
          <Avatar className="relative size-6 flex-none rounded-full">
            <AvatarImage src={note.sender.image} alt="avatar" />
            <AvatarFallback className="size-6 text-[10px]">
              {getInitials(note.sender.name)}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm">{note.sender.name}</p>
        </div>
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
          <DropdownMenuContent>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={handleShowEditTenantNoteModal}
            >
              Editar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="!text-destructive cursor-pointer"
              onClick={handleShowDeleteTenantNoteModal}
            >
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Separator />
      <Button
        type="button"
        className="h-[calc(100%-60px-48px)] w-full items-start justify-start overflow-y-auto overflow-x-hidden !bg-transparent p-6 text-left text-sm font-normal"
        variant="ghost"
        onClick={handleShowEditTenantNoteModal}
      >
        {note.text ? (
          <div className="text-wrap break-all [&_h1]:mb-5 [&_h1]:text-[25px] [&_h1]:font-bold [&_h2]:mb-5 [&_h2]:text-xl [&_h2]:font-bold [&_li]:mx-8 [&_li]:my-0 [&_ol]:mb-3 [&_p:last-child]:mb-0 [&_p]:relative [&_p]:m-0 [&_ul]:mb-3">
            <div
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHtml(note.text),
              }}
            />
          </div>
        ) : (
          <EmptyText className="opacity-65">Vazio</EmptyText>
        )}
      </Button>
      <Separator />
      <CardFooter className="flex h-12 flex-row items-center justify-between py-0">
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <ClockIcon className="size-3 shrink-0" />
          <time>{format(note.createdAt, "MMM dd, yyyy")}</time>
        </div>
      </CardFooter>
    </Card>
  );
}
