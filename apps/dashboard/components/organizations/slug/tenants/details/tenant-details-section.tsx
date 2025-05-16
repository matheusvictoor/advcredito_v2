"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import {
  IdCardIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SquareDashedKanbanIcon,
  TrashIcon,
  UploadIcon,
} from "lucide-react";
import { FormProvider, type SubmitHandler } from "react-hook-form";

import { TenantRecord } from "@workspace/database";
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import { ImageDropzone } from "@workspace/ui/components/image-dropzone";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { toast } from "@workspace/ui/components/sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";

import { updateTenantImage } from "~/actions/tenants/update-tenant-image";
import { updateTenantProperties } from "~/actions/tenants/update-tenant-properties";
import { CropPhotoModal } from "~/components/organizations/slug/settings/account/profile/crop-photo-modal";
import { useZodForm } from "~/hooks/use-zod-form";
import { FileUploadAction, MAX_IMAGE_SIZE } from "~/lib/file-upload";
import { tenantRecordLabel } from "~/lib/labels";
import {
  updateTenantPropertiesSchema,
  type UpdateTenantPropertiesSchema,
} from "~/schemas/tenants/update-tenant-properties-schema";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import { Separator } from "@workspace/ui/components/separator";

export type TenantDetailsSectionProps =
  React.HtmlHTMLAttributes<HTMLDivElement> & {
    tenant: TenantDto;
  };

export function TenantDetailsSection({
  tenant,
  ...others
}: TenantDetailsSectionProps): React.JSX.Element {
  return (
    <section {...others}>
      <TenantImage {...tenant} />
      <Properties {...tenant} />
    </section>
  );
}

function TenantImage(tenant: TenantDto): React.JSX.Element {
  const handleDrop = async (files: File[]): Promise<void> => {
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > MAX_IMAGE_SIZE) {
        toast.error(
          `A imagem enviada não deve exceder ${MAX_IMAGE_SIZE / 1000000} MB de tamanho`,
        );
      } else {
        const base64Image: string = await NiceModal.show(CropPhotoModal, {
          file,
          aspectRatio: 1,
          circularCrop: tenant.record === TenantRecord.PERSON,
        });
        if (base64Image) {
          const result = await updateTenantImage({
            id: tenant.id,
            action: FileUploadAction.Update,
            image: base64Image,
          });
          if (!result?.serverError && !result?.validationErrors) {
            toast.success("Imagem atualizada");
          } else {
            toast.error("Não foi possível atualizar a imagem");
          }
        }
      }
    }
  };
  const handleRemoveImage = async (): Promise<void> => {
    const result = await updateTenantImage({
      id: tenant.id,
      action: FileUploadAction.Delete,
      image: undefined,
    });
    if (!result?.serverError && !result?.validationErrors) {
      toast.success("Imagem removida");
    } else {
      toast.error("Não foi possível remover a imagem");
    }
  };
  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative">
        <ImageDropzone
          accept={{ "image/*": [] }}
          multiple={false}
          onDrop={handleDrop}
          borderRadius={tenant.record === TenantRecord.PERSON ? "full" : "md"}
          src={tenant.image}
          className="max-h-[120px] min-h-[120px] w-[120px] p-0.5"
        >
          <Avatar
            className={cn(
              "size-28",
              tenant.record === TenantRecord.PERSON
                ? "rounded-full"
                : "rounded-md",
            )}
          >
            <AvatarFallback
              className={cn(
                "size-28 text-2xl",
                tenant.record === TenantRecord.PERSON
                  ? "rounded-full"
                  : "rounded-md",
              )}
            >
              <UploadIcon className="size-5 shrink-0 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </ImageDropzone>
        {tenant.image && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="absolute -bottom-1 -right-1 z-10 size-8 rounded-full bg-background"
                onClick={handleRemoveImage}
              >
                <TrashIcon className="size-4 shrink-0" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Remover imagem</TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

function Properties(tenant: TenantDto): React.JSX.Element {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const methods = useZodForm({
    schema: updateTenantPropertiesSchema,
    mode: "onSubmit",
    defaultValues: {
      id: tenant.id,
      record: tenant.record,
      name: tenant.name,
      email: tenant.email,
      phone: tenant.phone,
      street: tenant.street,
      number: tenant.number,
      neighborhood: tenant.neighborhood,
      zipcode: tenant.zipcode,
      city: tenant.city,
      complement: tenant.complement,
      state: tenant.state,
    },
  });
  const canSubmit = !methods.formState.isSubmitting;
  const handleEnableEditMode = async (): Promise<void> => {
    setEditMode(true);
  };
  const handleCancel = async (): Promise<void> => {
    methods.reset(methods.formState.defaultValues);
    setEditMode(false);
  };
  const onSubmit: SubmitHandler<UpdateTenantPropertiesSchema> = async (
    values,
  ) => {
    if (!canSubmit) {
      return;
    }
    const result = await updateTenantProperties(values);
    if (!result?.serverError && !result?.validationErrors) {
      toast.success("Informações atualizadas");
      setEditMode(false);
    } else {
      toast.error("Não foi possível atualizar as informações");
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        className="space-y-2 px-6 pb-6"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-tight">Informações</h3>
          {editMode ? (
            <div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-success hover:text-success min-w-fit"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-success hover:text-success min-w-fit"
                disabled={!canSubmit}
                onClick={methods.handleSubmit(onSubmit)}
              >
                Salvar
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-success hover:text-success min-w-fit"
              disabled={methods.formState.isSubmitting}
              onClick={handleEnableEditMode}
            >
              Editar
            </Button>
          )}
        </div>
        <dl className="space-y-1 text-sm">
          <Property
            icon={<SquareDashedKanbanIcon className="size-3 shrink-0" />}
            term="Tipo"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="record"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Select
                          required
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={methods.formState.isSubmitting}
                        >
                          <SelectTrigger className="h-7 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.values(TenantRecord).map((value) => (
                              <SelectItem key={value} value={value}>
                                {tenantRecordLabel[value as TenantRecord]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenantRecordLabel[tenant.record]
              )
            }
            placeholder="Nenhum tipo disponível"
          />
          <Property
            icon={<IdCardIcon className="size-3 shrink-0" />}
            term="Nome"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={70}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.name
              )
            }
            placeholder="Nenhum nome disponível"
          />
          <Property
            icon={<MailIcon className="size-3 shrink-0" />}
            term="Email"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="email"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.email
              )
            }
            placeholder="Nenhum email disponível"
          />
          <Property
            icon={<PhoneIcon className="size-3 shrink-0" />}
            term="Telefone"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="tel"
                          maxLength={70}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.phone
              )
            }
            placeholder="Nenhum whatsapp disponível"
          />
          <h3 className="text-sm font-semibold tracking-tight py-2">Endereço</h3>
          <Property
            icon={<MapPinIcon className="size-3 shrink-0" />}
            term="Rua"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="street"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.street
              )
            }
            placeholder="Nenhum rua disponível"
          />

          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Número"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.number
              )
            }
            placeholder="Nenhum número disponível"
          />
          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Bairro"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="neighborhood"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.neighborhood
              )
            }
            placeholder="Nenhum bairro disponível"
          />
          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Cep"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="zipcode"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.zipcode
              )
            }
            placeholder="Nenhum cep disponível"
          />
          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Cidade"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.city
              )
            }
            placeholder="Nenhuma cidade disponível"
          />
          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Estado"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.state
              )
            }
            placeholder="Nenhum estado disponível"
          />
          <Property
            icon={<Separator orientation="vertical" className="flex items-center h-8 m-1.5 "/>}
            term="Compl."
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="complement"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          maxLength={255}
                          required
                          className="h-7"
                          disabled={methods.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                tenant.complement
              )
            }
            placeholder="Nenhuma informção disponível"
          />
        </dl>
      </form>
    </FormProvider>
  );
}

type PropertyProps = {
  icon?: React.ReactNode;
  term: string;
  details?: React.ReactNode;
  placeholder?: string;
};

function Property({
  icon,
  term,
  details,
  placeholder,
}: PropertyProps): React.JSX.Element {
  return (
    <div className="flex h-7 flex-row items-center whitespace-nowrap">
      <dt className="flex h-7 min-w-24 flex-row items-center gap-2 text-muted-foreground">
        {icon}
        {term}
      </dt>
      <dd className="flex h-7 w-full max-w-[196px] flex-row items-center overflow-hidden text-ellipsis">
        {details ? (
          details
        ) : (
          <p className="text-muted-foreground opacity-65">{placeholder}</p>
        )}
      </dd>
    </div>
  );
}
