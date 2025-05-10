'use client';

import NiceModal, { type NiceModalHocProps } from '@ebay/nice-modal-react';
import { BuildingIcon, UserIcon } from 'lucide-react';
import { type SubmitHandler } from 'react-hook-form';

import { TenantRecord } from '@workspace/database';
import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@workspace/ui/components/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@workspace/ui/components/drawer';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider
} from '@workspace/ui/components/form';
import { Input } from '@workspace/ui/components/input';
import { RadioCardItem, RadioCards } from '@workspace/ui/components/radio-card';
import { toast } from '@workspace/ui/components/sonner';
import { useMediaQuery } from '@workspace/ui/hooks/use-media-query';
import { MediaQueries } from '@workspace/ui/lib/media-queries';
import { cn } from '@workspace/ui/lib/utils';

import { addTenant } from '~/actions/tenants/add-tenant';
import { useEnhancedModal } from '~/hooks/use-enhanced-modal';
import { useZodForm } from '~/hooks/use-zod-form';
import { tenantRecordLabel } from '~/lib/labels';
import {
  addTenantSchema,
  type AddTenantSchema
} from '~/schemas/tenants/add-tenant-schema';

export type AddTenantModalProps = NiceModalHocProps;

export const AddTenantModal = NiceModal.create<AddTenantModalProps>(() => {
  const modal = useEnhancedModal();
  const mdUp = useMediaQuery(MediaQueries.MdUp, { ssr: false });
  const methods = useZodForm({
    schema: addTenantSchema,
    mode: 'onSubmit',
    defaultValues: {
      record: TenantRecord.PERSON,
      name: '',
      email: '',
      phone: ''
    }
  });
  const title = 'Adicionar novo inquilino';
  const description = 'Preencha os dados do inquilino para cadastrá-lo no sistema.';
  const canSubmit =
    !methods.formState.isSubmitting &&
    (!methods.formState.isSubmitted || methods.formState.isDirty);
  const onSubmit: SubmitHandler<AddTenantSchema> = async (values) => {
    if (!canSubmit) {
      return;
    }
    const result = await addTenant(values);
    if (!result?.serverError && !result?.validationErrors) {
      toast.success('Inquilino adicionado com sucesso');
      modal.handleClose();
    } else {
      toast.error("Erro ao adicionar inquilino");
    }
  };
  const renderForm = (
    <form
      className={cn('space-y-4', !mdUp && 'p-4')}
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <FormField
        control={methods.control}
        name="record"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel>Tipo</FormLabel>
            <FormControl>
              <RadioCards
                value={field.value}
                onValueChange={field.onChange}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                disabled={methods.formState.isSubmitting}
              >
                {records.map((record) => (
                  <RadioCardItem
                    key={record.value}
                    value={record.value}
                    className="p-3"
                  >
                    <div className="flex flex-row items-center gap-2 px-2 text-sm font-medium">
                      {record.icon}
                      {record.label}
                    </div>
                  </RadioCardItem>
                ))}
              </RadioCards>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={methods.control}
        name="name"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel required>Nome</FormLabel>
            <FormControl>
              <Input
                type="text"
                maxLength={64}
                required
                disabled={methods.formState.isSubmitting}
                {...field}
              />
            </FormControl>
            {(methods.formState.touchedFields.name ||
              methods.formState.submitCount > 0) && <FormMessage />}
          </FormItem>
        )}
      />
      <FormField
        control={methods.control}
        name="email"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                maxLength={255}
                disabled={methods.formState.isSubmitting}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={methods.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel>WhatsApp</FormLabel>
            <FormControl>
              <Input
                type="tel"
                maxLength={32}
                disabled={methods.formState.isSubmitting}
                {...field}
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
      <Button
        type="button"
        variant="outline"
        onClick={modal.handleClose}
      >
        Cancel
      </Button>
      <Button
        type="button"
        variant="default"
        disabled={!canSubmit}
        loading={methods.formState.isSubmitting}
        onClick={methods.handleSubmit(onSubmit)}
      >
        Save
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
              <DialogDescription className="sr-only">
                {description}
              </DialogDescription>
            </DialogHeader>
            {renderForm}
            <DialogFooter>{renderButtons}</DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          open={modal.visible}
          onOpenChange={modal.handleOpenChange}
        >
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
});

const records = [
  {
    value: TenantRecord.PERSON,
    label: tenantRecordLabel[TenantRecord.PERSON],
    icon: <UserIcon className="size-4 shrink-0 text-muted-foreground" />
  },
  {
    value: TenantRecord.COMPANY,
    label: tenantRecordLabel[TenantRecord.COMPANY],
    icon: <BuildingIcon className="size-4 shrink-0 text-muted-foreground" />
  }
];
