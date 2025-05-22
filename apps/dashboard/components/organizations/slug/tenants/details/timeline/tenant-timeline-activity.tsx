"use client";

import * as React from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";

import { ActionType } from "@workspace/database";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";

import { capitalize, getInitials } from "~/lib/formatters";
import { tenantRecordLabel, tenantStatusLabel } from "~/lib/labels";
import type { ActivityTimelineEventDto } from "~/types/dtos/timeline-event-dto";

export interface TenantTimelineActivityProps {
  event: ActivityTimelineEventDto;
}

export function TenantTimelineActivity({
  event,
}: TenantTimelineActivityProps): React.JSX.Element {
  const changes = React.useMemo(() => {
    if (!event.metadata) return null;
    return Object.entries(event.metadata).map(([key, value]) => ({
      key,
      oldValue: value.old || "Empty",
      newValue: value.new || "Empty",
    }));
  }, [event.metadata]);

  return (
    <div className="flex w-full items-start space-x-4">
      <Avatar
        title={event.actor.name}
        className="relative ml-0.5 size-6 flex-none rounded-full"
      >
        <AvatarImage src={event.actor.image} alt="avatar" />
        <AvatarFallback className="size-6 text-[10px]">
          {getInitials(event.actor.name)}
        </AvatarFallback>
      </Avatar>
      <div className="mt-1 min-w-0 grow space-y-2">
        <h3 className="text-xs font-medium">
          {event.actor.name}{" "}
          <span className="font-normal text-muted-foreground">
            {actionTypeToText[event.actionType]}
          </span>
        </h3>
        {changes && (
          <div className="space-y-2 rounded-lg border p-4">
            {changes.map(({ key, oldValue, newValue }) => (
              <div key={key} className="flex w-full flex-col gap-2">
                <span className="block text-xs font-medium text-muted-foreground">
                  {capitalize(key)}
                </span>
                <div className="flex w-full flex-row items-center gap-2">
                  <div className="min-w-0 flex-1">
                    <ValueBadge property={key} value={oldValue} variant="Old" />
                  </div>
                  <ArrowRightIcon
                    className="block size-3 shrink-0 text-muted-foreground opacity-65"
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <ValueBadge property={key} value={newValue} variant="New" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div className="flex w-fit items-center space-x-1 text-xs text-muted-foreground">
              <ClockIcon className="size-3 shrink-0" />
              <time suppressHydrationWarning>
                {formatDistanceToNow(event.occurredAt, { addSuffix: true, locale: ptBR })}
              </time>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {format(event.occurredAt, "d MMM yyyy HH:mm:ss", { locale: ptBR })}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

const actionTypeToText: Record<ActionType, string> = {
  [ActionType.CREATE]: "inquilino criado.",
  [ActionType.UPDATE]: "inquilino atualizado.",
  [ActionType.DELETE]: "inquilino excluído.",
};

type ValueBadgeProps = {
  property: string;
  value: string;
  variant: "Old" | "New";
};

const propertyLabelMap: Record<string, Record<string, string>> = {
  record: tenantRecordLabel,
  status: tenantStatusLabel,
};

function ValueBadge({
  property,
  value,
  variant,
}: ValueBadgeProps): React.JSX.Element {
  const text = React.useMemo(() => {
    if (!value) return "Empty";
    return propertyLabelMap[property]?.[value] || value;
  }, [property, value]);

  const isEmpty = !value;

  return (
    <Badge
      className={cn(
        "block w-full truncate font-normal",
        variant === "Old" && "line-through",
        isEmpty &&
          "border-neutral-300 text-muted-foreground opacity-65 dark:border-neutral-700",
      )}
      variant={isEmpty ? "secondary" : "outline"}
      title={text}
    >
      {text}
    </Badge>
  );
}
