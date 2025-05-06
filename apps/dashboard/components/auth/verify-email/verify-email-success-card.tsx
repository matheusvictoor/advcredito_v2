import * as React from "react";
import Link from "next/link";

import { routes } from "@workspace/routes";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  type CardProps,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

export function VerifyEmailSuccessCard({
  className,
  ...other
}: CardProps): React.JSX.Element {
  return (
    <Card
      className={cn(
        "w-full px-4 py-2 border-transparent dark:border-border",
        className,
      )}
      {...other}
    >
      <CardHeader>
        <CardTitle className="text-base lg:text-lg">
          E-mail verificado
        </CardTitle>
        <CardDescription>
          Seu e-mail foi verificado com sucesso. Você pode fazer login com sua
          conta agora.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center text-sm">
        <Link
          href={routes.dashboard.auth.SignIn}
          className="text-foreground underline"
        >
          Voltar para fazer login
        </Link>
      </CardFooter>
    </Card>
  );
}
