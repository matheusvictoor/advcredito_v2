"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { routes } from "@workspace/routes";
import { Button } from "@workspace/ui/components/button";

export default function NotFound(): React.JSX.Element {
  const router = useRouter();
  const handleGoBack = (): void => {
    router.back();
  };
  const handleBackToHome = (): void => {
    router.push(routes.marketing.Index);
  };
  return (
    <div className="flex flex-col py-32 items-center justify-center text-center">
      <span className="text-[10rem] font-semibold leading-none">404</span>
      <h2 className="font-heading my-2 text-2xl font-bold">
        Página não encontrada
      </h2>
      <p>
        A página que você está procurando não existe ou foi movida.
      </p>
      <div className="mt-8 flex justify-center gap-2">
        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={handleGoBack}
        >
          Voltar
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="lg"
          onClick={handleBackToHome}
        >
          Voltar para o início
        </Button>
      </div>
    </div>
  );
}
