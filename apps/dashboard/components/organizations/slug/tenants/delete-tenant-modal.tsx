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

import { deleteTenant } from "~/actions/tenants/delete-tenant";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  deleteTenantSchema,
  type DeleteTenantSchema,
} from "~/schemas/tenants/delete-tenant-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";

export type DeleteTenantModalProps = NiceModalHocProps & {
  tenant: TenantDto;
};

export const DeleteTenantModal = NiceModal.create<DeleteTenantModalProps>(
  ({ tenant }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: deleteTenantSchema,
      mode: "all",
      defaultValues: {
        id: tenant.id,
      },
    });
    const title = "Excluir esse inquilino?";
    const canSubmit =
      !methods.formState.isSubmitting && methods.formState.isValid;
    const onSubmit: SubmitHandler<DeleteTenantSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await deleteTenant(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Inquilino excluído com sucesso");
        modal.resolve(true);
        modal.handleClose();
      } else {
        toast.error("Não foi possível excluir o inquilino");
      }
    };
    const renderDescription = (
      <>
        O inquilino{" "}
        <strong className="text-foreground font-medium">{tenant.name}</strong>{" "}
        será removido permanentemente. Você tem certeza que deseja continuar?
      </>
    );
    const renderForm = (
      <form className="hidden" onSubmit={methods.handleSubmit(onSubmit)}>
        <input type="hidden" className="hidden" {...methods.register("id")} />
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
  },
);
