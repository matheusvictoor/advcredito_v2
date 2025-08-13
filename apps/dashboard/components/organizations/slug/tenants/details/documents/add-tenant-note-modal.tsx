"use client";

import NiceModal, { type NiceModalHocProps } from "@ebay/nice-modal-react";
import { type SubmitHandler } from "react-hook-form";

import { convertHtmlToMarkdown } from "@workspace/markdown/convert-html-to-markdown";
import { convertMarkdownToHtml } from "@workspace/markdown/convert-markdown-to-html";
import { Button } from "@workspace/ui/components/button";
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
  FormMessage,
  FormProvider,
} from "@workspace/ui/components/form";
import { toast } from "@workspace/ui/components/sonner";
import { TextEditor } from "@workspace/ui/components/text-editor";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { MediaQueries } from "@workspace/ui/lib/media-queries";
import { cn } from "@workspace/ui/lib/utils";

import { addTenantNote } from "~/actions/tenants/add-tenant-note";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  addTenantNoteSchema,
  type AddTenantNoteSchema,
} from "~/schemas/tenants/add-tenant-note-schema";

export type AddTenantNoteModalProps = NiceModalHocProps & {
  tenantId: string;
};

export const AddTenantNoteModal = NiceModal.create<AddTenantNoteModalProps>(
  ({ tenantId }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: addTenantNoteSchema,
      mode: "onSubmit",
      defaultValues: {
        tenantId,
        text: "",
      },
    });
    const title = "Adicionar nota";
    const description = "Crie uma nova nota preenchendo o formulário abaixo.";
    const canSubmit =
      !methods.formState.isSubmitting &&
      (!methods.formState.isSubmitted || methods.formState.isDirty);
    const onSubmit: SubmitHandler<AddTenantNoteSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await addTenantNote(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Nota adicionada com sucesso");
        modal.handleClose();
      } else {
        toast.error("Não foi possível adicionar a nota");
      }
    };
    const renderForm = (
      <form
        className={cn("space-y-4", !mdUp && "p-4")}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          className="hidden"
          disabled={methods.formState.isSubmitting}
          {...methods.register("tenantId")}
        />
        <FormField
          control={methods.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormControl>
                <TextEditor
                  getText={() => convertMarkdownToHtml(field.value || "")}
                  setText={(value: string) =>
                    field.onChange(convertHtmlToMarkdown(value))
                  }
                  height="300px"
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
              className="max-w-xl"
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
