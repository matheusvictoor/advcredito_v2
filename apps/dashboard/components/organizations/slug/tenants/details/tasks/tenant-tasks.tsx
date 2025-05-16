"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { CheckSquare2Icon } from "lucide-react";

import { TenantTaskStatus } from "@workspace/database";
import { Button } from "@workspace/ui/components/button";
import { EmptyText } from "@workspace/ui/components/empty-text";
import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { AddTenantTaskModal } from "~/components/organizations/slug/tenants/details/tasks/add-tenant-task-modal";
import { TenantTaskList } from "~/components/organizations/slug/tenants/details/tasks/tenant-task-list";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import type { TenantTaskDto } from "~/types/dtos/tenant-task-dto";

export type TenantTasksProps = {
  tenant: TenantDto;
  tasks: TenantTaskDto[];
};

export function TenantTasks({
  tenant,
  tasks,
}: TenantTasksProps): React.JSX.Element {
  const openTasks = tasks.filter(
    (task) => task.status === TenantTaskStatus.OPEN,
  );
  const completedTasks = tasks.filter(
    (task) => task.status === TenantTaskStatus.COMPLETED,
  );
  const handleShowAddTaskModal = (): void => {
    NiceModal.show(AddTenantTaskModal, { tenantId: tenant.id });
  };
  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="divide-y border-b">
        <div className="flex h-14 flex-row items-center justify-between gap-2 px-6">
          <h1 className="text-sm font-semibold">
            Todas as tarefas{" "}
            <span className="text-muted-foreground">({tasks.length})</span>
          </h1>
          <Button
            type="button"
            variant="outline"
            size="default"
            onClick={handleShowAddTaskModal}
          >
            <CheckSquare2Icon className="mr-2 size-4 shrink-0" />
            Adicionar tarefa
          </Button>
        </div>
        <Heading>Em aberto</Heading>
        {openTasks.length > 0 ? (
          <TenantTaskList tasks={openTasks} />
        ) : (
          <EmptyText className="p-6">
            Não há nenhuma tarefa aberta para este inquilino.
          </EmptyText>
        )}
        <Heading>Concluídas</Heading>
        {completedTasks.length > 0 ? (
          <TenantTaskList tasks={completedTasks} />
        ) : (
          <EmptyText className="p-6">
            Não há nenhuma tarefa concluída para este inquilino.
          </EmptyText>
        )}
      </div>
    </ResponsiveScrollArea>
  );
}

function Heading(props: React.PropsWithChildren): React.JSX.Element {
  return (
    <h4 className="bg-neutral-50 px-6 py-3 text-sm font-medium text-muted-foreground dark:bg-neutral-900">
      {props.children}
    </h4>
  );
}
