"use client";

import NiceModal, { type NiceModalHocProps } from "@ebay/nice-modal-react";
import { type SubmitHandler } from "react-hook-form";
import { ptBR } from "date-fns/locale"

import { TenantTaskStatus } from "@workspace/database";
import { Button } from "@workspace/ui/components/button";
import { DatePicker } from "@workspace/ui/components/date-picker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { toast } from "@workspace/ui/components/sonner";
import { Textarea } from "@workspace/ui/components/textarea";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { MediaQueries } from "@workspace/ui/lib/media-queries";
import { cn } from "@workspace/ui/lib/utils";

import { addTenantTask } from "~/actions/tenants/add-tenant-task";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  addTenantTaskSchema,
  type AddTenantTaskSchema,
} from "~/schemas/tenants/add-tenant-task-schema";

export type AddTenantTaskModalProps = NiceModalHocProps & {
  tenantId: string;
};

export const AddTenantTaskModal = NiceModal.create<AddTenantTaskModalProps>(
  ({ tenantId }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: addTenantTaskSchema,
      mode: "onSubmit",
      defaultValues: {
        title: "",
        tenantId: tenantId,
        dueDate: undefined,
        status: TenantTaskStatus.OPEN,
        description: "",
      },
    });
    const title = "Adicionar tarefa";
    const description = "Crie uma nova tarefa preenchendo o formulário abaixo.";
    const canSubmit =
      !methods.formState.isSubmitting &&
      (!methods.formState.isSubmitted || methods.formState.isDirty);
    const onSubmit: SubmitHandler<AddTenantTaskSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await addTenantTask(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Tarefa adicionada com sucesso");
        modal.handleClose();
      } else {
        toast.error("Não foi possível adicionar a tarefa");
      }
    };
    const renderForm = (
      <form
        className={cn("space-y-4", !mdUp && "p-4")}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormField
          control={methods.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel required>Título</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  maxLength={64}
                  required
                  disabled={methods.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row space-x-4">
          <FormField
            control={methods.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={methods.formState.isSubmitting}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={TenantTaskStatus.OPEN}>
                        <div className="flex flex-row items-center gap-1.5">
                          <div className="size-2 shrink-0 rounded-full bg-red-600" />
                          <span>Em aberto</span>
                        </div>
                      </SelectItem>
                      <SelectItem value={TenantTaskStatus.COMPLETED}>
                        <div className="flex flex-row items-center gap-1.5">
                          <div className="size-2 shrink-0 rounded-full bg-green-600" />
                          <span>Concluído</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>Data de vencimento</FormLabel>
                <FormControl>
                  <DatePicker
                    date={field.value}
                    onDateChange={field.onChange}
                    disabled={methods.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={methods.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  maxLength={8000}
                  required
                  rows={4}
                  disabled={methods.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    );
    const renderButtons = (
      <>
        <Button type="button" variant="outline" onClick={modal.handleClose}>
          Cancelar
        </Button>
        <Button
          type="button"
          variant="default"
          disabled={!canSubmit}
          loading={methods.formState.isSubmitting}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      </>
    );
    return (
      <FormProvider {...methods}>
        {mdUp ? (
          <Dialog open={modal.visible}>
            <DialogContent
              className="max-w-md"
              onClose={modal.handleClose}
              onAnimationEndCapture={modal.handleAnimationEndCapture}
            >
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription className="sr-only">
                  {description}
                </DialogDescription>
              </DialogHeader>
              {renderForm}
              <DialogFooter>{renderButtons}</DialogFooter>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={modal.visible} onOpenChange={modal.handleOpenChange}>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription className="sr-only">
                  {description}
                </DrawerDescription>
              </DrawerHeader>
              {renderForm}
              <DrawerFooter className="flex-col-reverse pt-4">
                {renderButtons}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </FormProvider>
    );
  },
);
