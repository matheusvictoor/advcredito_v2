"use client";

import NiceModal, { type NiceModalHocProps } from "@ebay/nice-modal-react";
import { type SubmitHandler } from "react-hook-form";

import { Role } from "@workspace/database";
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
  FormLabel,
  FormMessage,
  FormProvider,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { toast } from "@workspace/ui/components/sonner";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { MediaQueries } from "@workspace/ui/lib/media-queries";
import { cn } from "@workspace/ui/lib/utils";

import { changeRole } from "~/actions/members/change-role";
import { useEnhancedModal } from "~/hooks/use-enhanced-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import { roleLabels } from "~/lib/labels";
import {
  changeRoleSchema,
  type ChangeRoleSchema,
} from "~/schemas/members/change-role-schema";
import type { MemberDto } from "~/types/dtos/member-dto";
import type { ProfileDto } from "~/types/dtos/profile-dto";

export type ChangeRoleModalProps = NiceModalHocProps & {
  profile: ProfileDto;
  member: MemberDto;
};

export const ChangeRoleModal = NiceModal.create<ChangeRoleModalProps>(
  ({ profile, member }) => {
    const modal = useEnhancedModal();
    const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
    const methods = useZodForm({
      schema: changeRoleSchema,
      mode: "onSubmit",
      defaultValues: {
        id: member.id,
        role: member.role,
      },
    });
    const title = "Change role";
    const description = "There needs to be at least one admin on the team.";
    const canSubmit =
      !methods.formState.isSubmitting &&
      (!methods.formState.isSubmitted || methods.formState.isDirty);
    const onSubmit: SubmitHandler<ChangeRoleSchema> = async (values) => {
      if (!canSubmit) {
        return;
      }
      const result = await changeRole(values);
      if (!result?.serverError && !result?.validationErrors) {
        toast.success("Role changed");
        modal.handleClose();
      } else {
        toast.error("Couldn't change role");
      }
    };
    const renderForm = (
      <form
        className={cn("flex flex-col gap-4", !mdUp && "p-4")}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <input
          type="hidden"
          className="hidden"
          disabled={methods.formState.isSubmitting}
          {...methods.register("id")}
        />
        <FormField
          control={methods.control}
          name="role"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel required>Role</FormLabel>
              <FormControl>
                <Select
                  required
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={
                    methods.formState.isSubmitting ||
                    profile.role === Role.MEMBER
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(Role).map((value) => (
                      <SelectItem key={value} value={value}>
                        {roleLabels[value as Role]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
          Cancel
        </Button>
        <Button
          type="button"
          variant="default"
          disabled={!canSubmit}
          loading={methods.formState.isSubmitting}
          onClick={methods.handleSubmit(onSubmit)}
        >
          Change
        </Button>
      </>
    );
    return (
      <FormProvider {...methods}>
        {mdUp ? (
          <Dialog open={modal.visible}>
            <DialogContent
              className="max-w-sm"
              onClose={modal.handleClose}
              onAnimationEndCapture={modal.handleAnimationEndCapture}
            >
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
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
                <DrawerDescription>{description}</DrawerDescription>
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
