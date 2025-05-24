"use client";

import * as React from "react";
import NiceModal from "@ebay/nice-modal-react";
import {
  IdCardIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TrashIcon,
  UploadIcon,
  CalendarIcon,
  UserIcon,
  BuildingIcon,
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
import { Badge } from "@workspace/ui/components/badge";
import StatusBadge from "./tenant-status-badge";
import { BrazilianState, brazilianStates, mask } from "~/lib/formatters";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { DatePickerDropdown } from "@workspace/ui/components/date-picker";
import { formatDateBR } from "~/lib/fomatDateBR";

export type TenantDetailsSectionProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
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
      <div className="relative space-y-6">
        <div className="flex justify-center">
          <ImageDropzone
            accept={{ "image/*": [] }}
            multiple={false}
            onDrop={handleDrop}
            borderRadius={"md"}
            src={tenant.image}
            className="max-h-[120px] min-h-[120px] w-[120px] p-0.5"
          >
            <Avatar className={cn("size-28", "rounded-md")}>
              <AvatarFallback className={cn("size-28 text-2xl", "rounded-md")}>
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
        <div className="text-center max-w-[250px] truncate space-y-2">
          <h2 className="text-lg font-bold mb-1">{tenant.name}</h2>
          <div className="flex flex-wrap justify-start gap-4 p-1">
            <StatusBadge status={tenant.status} />
            <Badge variant="default" className="py-1 rounded-md">
              {tenant.record === "PERSON"
                ? tenantRecordLabel.PERSON
                : tenantRecordLabel.COMPANY}
            </Badge>
          </div>
        </div>
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
      state: tenant.state,
      complement: tenant.complement,
      ...(tenant.record === TenantRecord.PERSON && {
        birthDate: tenant.person?.birthDate,
      }),
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
        <Separator className="w-full" />
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-tight">Informações</h3>
          {editMode ? (
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-success hover:text-success min-w-fit"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                variant="outline"
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
              variant="outline"
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
            icon={<IdCardIcon className="size-3 shrink-0" />}
            term={tenant.record === "PERSON" ? "Cpf" : "Cnpj"}
            details={
              tenant.record === "PERSON"
                ? mask.cpf(tenant.person?.cpf ?? "")
                : mask.cnpj(tenant.company?.cnpj ?? "")
            }
          />
          {editMode && (
            <Property
              icon={
                tenant.record === "PERSON" ? (
                  <UserIcon className="size-3 shrink-0" />
                ) : (
                  <BuildingIcon className="size-3 shrink-0" />
                )
              }
              term={tenant.record === "PERSON" ? "Nome" : "Razão"}
              details={
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
              }
            />
          )}
          {tenant.record === "PERSON" && (
            <Property
              icon={<CalendarIcon className="size-3 shrink-0" />}
              term="Data Nas."
              details={
                <FormField
                  control={methods.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <DatePickerDropdown
                        date={
                          field.value ??
                          (tenant.person?.birthDate
                            ? new Date(tenant.person.birthDate)
                            : undefined)
                        }
                        onDateChange={field.onChange}
                        placeholder="Selecione uma data"
                        className={`${cn(
                          "w-full h-7",
                          !editMode &&
                            "border-none disabled:text-white disabled:opacity-100",
                        )} 
                            ${editMode ? "pl-4" : "pl-0"}`}
                        disabled={methods.formState.isSubmitting || !editMode}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            />
          )}
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
                mask.phone(tenant.phone ?? "")
              )
            }
            placeholder="Nenhum whatsapp disponível"
          />
          <h3 className="text-sm font-semibold tracking-tight py-2">
            Endereço
          </h3>
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
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
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
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
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
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
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
                mask.zipcode(tenant.zipcode ?? "")
              )
            }
            placeholder="Nenhum cep disponível"
          />
          <Property
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
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
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
            term="Estado"
            details={
              editMode ? (
                <FormField
                  control={methods.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormControl>
                        <Select
                          {...field}
                          value={field.value || ""}
                          onValueChange={(value) =>
                            field.onChange(value === "none" ? "" : value)
                          }
                          disabled={methods.formState.isSubmitting}
                        >
                          <SelectTrigger className="[&>span]:truncate h-7">
                            <SelectValue placeholder="Selecione um estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <ScrollArea style={{ maxHeight: "180px" }}>
                              <SelectItem
                                className="!text-muted-foreground h-7"
                                value="none"
                              >
                                Estados
                              </SelectItem>
                              <Separator />
                              {brazilianStates.map((state: BrazilianState) => (
                                <SelectItem key={state.code} value={state.code}>
                                  {state.name}
                                </SelectItem>
                              ))}
                            </ScrollArea>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ) : (
                brazilianStates.find(
                  (state: BrazilianState) => state.code === tenant.state,
                )?.name
              )
            }
            placeholder="Nenhum estado disponível"
          />
          <Property
            icon={
              <Separator
                orientation="vertical"
                className="flex items-center h-7 m-1.5 "
              />
            }
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
                          className="h-7 wrap"
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
        <time className="flex justify-end pt-3" suppressHydrationWarning>
          <Badge
            variant="outline"
            className="ml-2 pt-1 rounded-md font-light text-muted-foreground"
          >
            Criado em: {formatDateBR(tenant.createdAt, "dd/MM/yyyy")}
          </Badge>
        </time>
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
    <div className="flex h-full flex-row items-center whitespace-nowrap">
      <dt className="flex h-7 min-w-24 flex-row items-center gap-2 text-muted-foreground">
        {icon}
        {term}
      </dt>
      <dd className="flex h-full w-full max-fit flex-row items-center truncate">
        {details ? (
          details
        ) : (
          <p className="text-muted-foreground opacity-65">{placeholder}</p>
        )}
      </dd>
    </div>
  );
}
