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

import { deleteContacts } from "~/actions/contacts/delete-contacts";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  deleteContactsSchema,
  type DeleteContactsSchema,
} from "~/schemas/contacts/delete-contacts-schema";
import type { ContactDto } from "~/types/dtos/contact-dto";

export type DeleteContactsModalProps = NiceModalHocProps & {
  contacts: ContactDto[];
};

export const DeleteContactsModal = NiceModal.create<DeleteContactsModalProps>(
  ({ contacts }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: deleteContactsSchema,
      mode: "all",
      defaultValues: {
        ids: contacts.map((contact) => contact.id),
      },
    });
    const amount = contacts.length;
    const subject = amount === 1 ? "Contact" : "Contacts";
    const title = `Delete ${subject.toLowerCase()}?`;
    const canSubmit =
      !methods.formState.isSubmitting && methods.formState.isValid;
    const onSubmit: SubmitHandler<DeleteContactsSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await deleteContacts(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success(`${subject} deleted`);
        modal.handleClose();
      } else {
        toast.error(`${subject} couldn't be deleted`);
      }
    };
    const renderDescription = (
      <>
        You're about to delete{" "}
        <strong className="text-foreground font-medium">{`${amount} ${subject.toLowerCase()}`}</strong>
        . This action cannot be undone.
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
          Cancel
        </Button>
        <Button
          type="button"
          variant="destructive"
          disabled={!canSubmit}
          loading={methods.formState.isSubmitting}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Yes, delete
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
