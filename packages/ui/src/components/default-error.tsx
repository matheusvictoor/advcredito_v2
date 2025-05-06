"use client";

import * as React from "react";
import { TriangleAlertIcon } from "lucide-react";

import { Button } from "./button";
import { Card, CardContent } from "./card";

export type DefaultErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export function DefaultError({
  error: _error,
  reset,
}: DefaultErrorProps): React.JSX.Element {
  const handleReset = (): void => {
    reset?.();
  };
  return (
    <Card className="border-dashed shadow-none">
      <CardContent className="flex flex-col items-center justify-center gap-4 pt-6">
        <div className="flex items-center justify-center rounded-md border bg-background p-2 shadow-sm">
          <TriangleAlertIcon className="size-4 shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground">
          Ocorreu um erro inesperado.
        </p>
        <Button
          type="button"
          variant="default"
          size="default"
          onClick={handleReset}
        >
          Tente novamente
        </Button>
      </CardContent>
    </Card>
  );
}
