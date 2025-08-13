"use client";

import * as React from "react";
import { FormProvider, type SubmitHandler } from "react-hook-form";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  type CardProps,
} from "@workspace/ui/components/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@workspace/ui/components/form";
import { Label } from "@workspace/ui/components/label";
import { Separator } from "@workspace/ui/components/separator";
import { toast } from "@workspace/ui/components/sonner";
import { Switch } from "@workspace/ui/components/switch";

import { updateTransactionalEmails } from "~/actions/account/update-transactional-emails";
import { useZodForm } from "~/hooks/use-zod-form";
import {
  updateTransactionalEmailsSchema,
  type UpdateTransactionalEmailsSchema,
} from "~/schemas/account/update-transactional-emails-schema";
import type { TransactionalEmailsDto } from "~/types/dtos/transactional-emails-dto";

export type TransactionalEmailsCardProps = CardProps & {
  settings: TransactionalEmailsDto;
};

export function TransactionalEmailsCard({
  settings,
  ...other
}: TransactionalEmailsCardProps): React.JSX.Element {
  const methods = useZodForm({
    schema: updateTransactionalEmailsSchema,
    mode: "onSubmit",
    defaultValues: settings,
  });
  const canSubmit = !methods.formState.isSubmitting;
  const onSubmit: SubmitHandler<UpdateTransactionalEmailsSchema> = async (
    values,
  ) => {
    if (!canSubmit) {
      return;
    }
    const result = await updateTransactionalEmails(values);
    if (!result?.serverError && !result?.validationErrors) {
      toast.success("Emails transacionais atualizados");
    } else {
      toast.error("Não foi possível atualizar os emails transacionais");
    }
  };
  return (
    <FormProvider {...methods}>
      <Card {...other}>
        <CardContent className="pt-6">
          <form className="space-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <FormField
              control={methods.control}
              name="enabledContactsNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                  <div className="space-y-0.5">
                    <FormLabel>Contacts</FormLabel>
                    <FormDescription>
                      Alguém na sua equipe adcionou ou alterou uma lead.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={methods.formState.isSubmitting}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="enabledInboxNotifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                  <div className="space-y-0.5">
                    <FormLabel>Inbox</FormLabel>
                    <FormDescription>
                      A mesangem foi atribuída a mim ou fui mencionado.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={methods.formState.isSubmitting}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="enabledWeeklySummary"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between">
                  <div className="space-y-0.5">
                    <FormLabel>Weekly summary</FormLabel>
                    <FormDescription>
                      Resumo de todas as atividades relevantes da semana passada.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={methods.formState.isSubmitting}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-row items-center justify-between">
              <div className="space-y-0.5">
                <Label>Emails de segunrança</Label>
                <FormDescription>
                  Alterações que não exigem confirmação por e-mail.
                </FormDescription>
              </div>
              <Switch checked disabled />
            </div>
          </form>
        </CardContent>
        <Separator />
        <CardFooter className="flex w-full justify-end pt-6">
          <Button
            type="button"
            variant="default"
            size="default"
            disabled={!canSubmit}
            loading={methods.formState.isSubmitting}
            onClick={methods.handleSubmit(onSubmit)}
          >
            Salvar
          </Button>
        </CardFooter>
      </Card>
    </FormProvider>
  );
}
