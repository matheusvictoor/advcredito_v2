"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";
import { ptBR } from "date-fns/locale";

import { cn } from "../lib/utils";
import { Button, type ButtonProps } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const defaultPresets = [
  { value: 0, label: "Hoje" },
  { value: 1, label: "Amanhã" },
  { value: 3, label: "Em 3 dias" },
  { value: 7, label: "Em uma semana" },
];

export type DatePickerProps = ButtonProps & {
  date?: Date;
  onDateChange?: (date?: Date) => void;
  placeholder?: string;
  presets?: { value: number; label: string }[];
};
function DatePicker({
  date,
  onDateChange,
  placeholder = "Escolha uma data",
  presets = defaultPresets,
  className,
  variant,
  ...other
}: DatePickerProps): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={variant || "outline"}
          className={cn(
            "justify-start whitespace-nowrap text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
          {...other}
        >
          <CalendarIcon className="mr-2 size-4 shrink-0" />
          {date ? format(date, "dd LLLL y", { locale: ptBR }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex w-auto flex-row gap-2 divide-x p-2"
      >
        <ul className="w-full list-none space-y-1">
          {presets.map((preset) => (
            <li key={preset.value}>
              <Button
                type="button"
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  onDateChange?.(addDays(new Date(), preset.value));
                }}
              >
                {preset.label}
              </Button>
            </li>
          ))}
        </ul>
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          onSelect={(e) => {
            onDateChange?.(e);
          }}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = "DatePicker";

export type DateRangePickerElement = HTMLDivElement;
export type DateRangePickerProps = React.HTMLAttributes<HTMLDivElement> & {
  dateRange?: DateRange;
  onDateRangeChange?: (range?: DateRange) => void;
  disabled?: boolean;
};
function DateRangePicker({
  dateRange,
  onDateRangeChange,
  disabled,
  className,
  ...other
}: DateRangePickerProps): React.JSX.Element {
  return (
    <div className={cn("grid gap-2", className)} {...other}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !dateRange && "text-muted-foreground",
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 size-4 shrink-0" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "dd LLL, y", { locale: ptBR })} -{" "}
                  {format(dateRange.to, "dd LLL, y", { locale: ptBR })}
                </>
              ) : (
                format(dateRange.from, "dd LLL, y", { locale: ptBR })
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            locale={ptBR}
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(d) => {
              onDateRangeChange?.(d);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
DateRangePicker.displayName = "DateRangePicker";

export { DatePicker, DateRangePicker, DateRange };
