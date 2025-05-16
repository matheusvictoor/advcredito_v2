"use client";

import NiceModal, { type NiceModalHocProps } from "@ebay/nice-modal-react";
import { type SubmitHandler } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog";
import { Button } from "@workspace/ui/components/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer";
import { FormProvider } from "@workspace/ui/components/form";
import { toast } from "@workspace/ui/components/sonner";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { deleteTenantTask } from "~/actions/tenants/delete-tenant-task";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  deleteTenantSchema,
  type DeleteTenantSchema,
} from "~/schemas/tenants/delete-tenant-schema";
import type { TenantTaskDto } from "~/types/dtos/tenant-task-dto";

export type DeleteTenantTaskModalProps = NiceModalHocProps & {
  task: TenantTaskDto;
};

export const DeleteTenantTaskModal =
  NiceModal.create<DeleteTenantTaskModalProps>(({ task }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: deleteTenantSchema,
      mode: "all",
      defaultValues: {
        id: task.id,
      },
    });
    const title = "Excluir essa tarefa?";
    const canSubmit =
      !methods.formState.isSubmitting && methods.formState.isValid;
    const onSubmit: SubmitHandler<DeleteTenantSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await deleteTenantTask(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Tarefa excluída com sucesso");
        modal.handleClose();
      } else {
        toast.error("Não foi possível excluir a tarefa");
      }
    };
    const renderDescription = (
      <>
        A tarefa{" "}
        <strong className="text-foreground font-medium">{task.title}</strong>{" "}
        será excluída permanentemente. Você tem certeza que deseja continuar?
      </>
    );
    const renderForm = (
      <form className="hidden" onSubmit={methods.handleSubmit(onSubmit)}>
        <input
          type="hidden"
          className="hidden"
          disabled={methods.formState.isSubmitting}
          {...methods.register("id")}
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
          variant="destructive"
          disabled={!canSubmit}
          loading={methods.formState.isSubmitting}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Sim, excluir
        </Button>
      </>
    );
    return (
      <FormProvider {...methods}>
        {mdUp ? (
          <AlertDialog open={modal.visible}>
            <AlertDialogContent
              className="max-w-sm"
              onClose={modal.handleClose}
              onAnimationEndCapture={modal.handleAnimationEndCapture}
            >
              <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {renderDescription}
                </AlertDialogDescription>
              </AlertDialogHeader>
              {renderForm}
              <AlertDialogFooter>{renderButtons}</AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Drawer open={modal.visible} onOpenChange={modal.handleOpenChange}>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{renderDescription}</DrawerDescription>
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
  });
