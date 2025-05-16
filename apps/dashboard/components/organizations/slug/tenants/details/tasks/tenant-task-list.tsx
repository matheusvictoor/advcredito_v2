"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import { MoreHorizontalIcon } from "lucide-react";

import { TenantTaskStatus } from "@workspace/database";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { DatePicker } from "@workspace/ui/components/date-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Label } from "@workspace/ui/components/label";
import { toast } from "@workspace/ui/components/sonner";
import { cn } from "@workspace/ui/lib/utils";

import { updateTenantTask } from "~/actions/tenants/update-tenant-task";
import { DeleteTenantTaskModal } from "~/components/organizations/slug/tenants/details/tasks/delete-tenant-task-modal";
import { EditTenantTaskModal } from "~/components/organizations/slug/tenants/details/tasks/edit-tenant-task-modal";
import type { TenantTaskDto } from "~/types/dtos/tenant-task-dto";

export type TenantTaskListProps =
  React.HtmlHTMLAttributes<HTMLUListElement> & {
    tasks: TenantTaskDto[];
  };

export function TenantTaskList({
  tasks,
  className,
  ...other
}: TenantTaskListProps): React.JSX.Element {
  const handleStatusChange = async (
    taskId: string,
    status: TenantTaskStatus,
  ) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      const result = await updateTenantTask({ ...task, status });
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Status atualizado");
      } else {
        toast.error("Não foi possível atualizar o status");
      }
    }
  };
  const handleDueDateChange = async (taskId: string, dueDate?: Date) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      const result = await updateTenantTask({ ...task, dueDate });
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Data de vencimento atualizada");
      } else {
        toast.error("Não foi possível atualizar a data de vencimento");
      }
    }
  };
  const handleShowEditTaskModal = (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      NiceModal.show(EditTenantTaskModal, { task });
    }
  };
  const handleShowDeleteTaskModal = (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      NiceModal.show(DeleteTenantTaskModal, { task });
    }
  };
  return (
    <ul
      role="list"
      className={cn("m-0 list-none divide-y p-0", className)}
      {...other}
    >
      {tasks.map((task) => (
        <TenantTaskListItem
          key={task.id}
          {...task}
          onStatusChange={(status) => handleStatusChange(task.id, status)}
          onDueDateChange={(dueDate) => handleDueDateChange(task.id, dueDate)}
          onEdit={() => handleShowEditTaskModal(task.id)}
          onDelete={() => handleShowDeleteTaskModal(task.id)}
        />
      ))}
    </ul>
  );
}

type TenantTaskListItemProps = TenantTaskDto & {
  onStatusChange: (status: TenantTaskStatus) => void;
  onDueDateChange: (dueDate?: Date) => void;
  onEdit: () => void;
  onDelete: () => void;
};

function TenantTaskListItem({
  id,
  status,
  title,
  dueDate,
  onStatusChange,
  onDueDateChange,
  onEdit,
  onDelete,
}: TenantTaskListItemProps): React.JSX.Element {
  return (
    <li role="listitem" className="px-6 py-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex min-w-0 flex-1 flex-row items-center gap-2">
          <Checkbox
            id={id}
            checked={status === TenantTaskStatus.COMPLETED}
            className="rounded-full"
            onCheckedChange={(value) =>
              onStatusChange(
                value ? TenantTaskStatus.COMPLETED : TenantTaskStatus.OPEN,
              )
            }
          />
          <Label
            htmlFor={id}
            className={cn(
              "cursor-pointer truncate",
              status === TenantTaskStatus.COMPLETED && "line-through",
            )}
          >
            {title}
          </Label>
        </div>
        <div className="flex shrink-0 flex-row items-center gap-1.5">
          <DatePicker
            date={dueDate}
            onDateChange={onDueDateChange}
            placeholder="Due date"
            variant="ghost"
            className="hidden sm:inline-flex"
          />
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
              <DropdownMenuItem className="cursor-pointer" onClick={onEdit}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="!text-destructive cursor-pointer"
                onClick={onDelete}
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </li>
  );
}
