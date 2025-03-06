'use client';

import * as React from 'react';
import Link from 'next/link';
import { MoreHorizontalIcon } from 'lucide-react';

import { Badge, type BadgeProps } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@workspace/ui/components/dropdown-menu';
import { cn } from '@workspace/ui/lib/utils';

import { capitalize } from '~/lib/formatters';
import type { InvoiceDto, InvoiceStatus } from '~/types/dtos/invoice-dto';

export type InvoiceListProps = React.HtmlHTMLAttributes<HTMLUListElement> & {
  invoices: InvoiceDto[];
};

export function InvoiceList({
  invoices,
  className,
  ...other
}: InvoiceListProps): React.JSX.Element {
  return (
    <ul
      role="list"
      className={cn('m-0 list-none divide-y p-0', className)}
      {...other}
    >
      {invoices.map((invoice) => (
        <InvoiceListItem
          key={invoice.id}
          invoice={invoice}
        />
      ))}
    </ul>
  );
}

type InvoiceListItemProps = React.HtmlHTMLAttributes<HTMLLIElement> & {
  invoice: InvoiceDto;
};

function InvoiceListItem({
  invoice,
  className,
  ...other
}: InvoiceListItemProps): React.JSX.Element {
  return (
    <li
      role="listitem"
      className={cn('flex w-full flex-row justify-between p-6', className)}
      {...other}
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-row items-center gap-2 text-sm font-medium">
          #{invoice.number}
          {!!invoice.status && (
            <Badge variant={mapInvoiceStatusToBadgeVariant(invoice.status)}>
              {capitalize(invoice.status)}
            </Badge>
          )}
        </div>
        <div className="mt-1 text-xs font-normal text-muted-foreground">
          {formatDate(invoice.date)}
          <span className="mx-1">•</span>
          <span>{formatAmount(invoice.amount, invoice.currency)}</span>
        </div>
      </div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="size-8 p-0"
            title="Open menu"
          >
            <MoreHorizontalIcon className="size-4 shrink-0" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            asChild
            className="cursor-pointer"
            disabled={!invoice.invoicePdfUrl}
          >
            <Link href={invoice.invoicePdfUrl ?? '~/'}>Download</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

function mapInvoiceStatusToBadgeVariant(
  status: InvoiceStatus
): BadgeProps['variant'] {
  switch (status) {
    case 'draft':
    case 'open': {
      return 'outline';
    }

    case 'paid':
    case 'void': {
      return 'secondary';
    }

    case 'uncollectible': {
      return 'destructive';
    }

    default: {
      return 'default';
    }
  }
}

function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
}
