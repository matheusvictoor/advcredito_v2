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

import { deleteTenants } from "~/actions/tenants/delete-tenants";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  deleteTenantsSchema,
  type DeleteTenantsSchema,
} from "~/schemas/tenants/delete-tenants-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import { pluralize } from "~/lib/formatters";

export type DeleteTenantsModalProps = NiceModalHocProps & {
  tenants: TenantDto[];
};

export const DeleteTenantsModal = NiceModal.create<DeleteTenantsModalProps>(
  ({ tenants }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: deleteTenantsSchema,
      mode: "all",
      defaultValues: {
        ids: tenants.map((tenant) => tenant.id),
      },
    });
    const amount = tenants.length;
    const subject = pluralize("Inquilino", amount);
    const title = `Excluir ${pluralize("esse", amount)} ${pluralize("Inquilino", amount).toLowerCase()}?`;
    const canSubmit =
      !methods.formState.isSubmitting && methods.formState.isValid;
    const onSubmit: SubmitHandler<DeleteTenantsSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await deleteTenants(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success(
          `${subject} ${pluralize("excluído", amount)} com sucesso`,
        );
        modal.handleClose();
      } else {
        toast.error(
          `${subject} não pode(m) ser ${pluralize("excluído", amount)}`,
        );
      }
    };
    const renderDescription = (
      <>
        Você está prestes a excluir{" "}
        <strong className="text-foreground font-medium">{`${amount} ${subject.toLowerCase()}`}</strong>
        . Esta ação não pode ser desfeita.
      </>
    );
    const renderForm = (
      <form className="hidden" onSubmit={methods.handleSubmit(onSubmit)}>
        <input type="hidden" className="hidden" {...methods.register("ids")} />
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
