import * as React from 'react';
import { InfoIcon } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@workspace/ui/components/table';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@workspace/ui/components/tooltip';
import { cn } from '@workspace/ui/lib/utils';

import type { BillingBreakdownDto } from '~/types/dtos/billing-breakdown-dto';

export type BillingBreakdownTableProps = {
  billingBreakdown: BillingBreakdownDto;
  className?: string;
};

export function BillingBreakdownTable({
  billingBreakdown,
  className,
  ...other
}: BillingBreakdownTableProps): React.JSX.Element {
  const {
    lineItems,
    currency,
    totalCurrentAmount,
    totalProjectedAmount,
    taxes
  } = billingBreakdown;

  return (
    <Table
      className={cn('w-full', className)}
      {...other}
    >
      <TableHeader>
        <TableRow className="border-b hover:bg-inherit">
          <TableHead className="max-w-[200px] truncate text-left font-medium text-inherit">
            Item
          </TableHead>
          <TableHead className="pr-4 text-right font-medium text-inherit">
            Quantity
          </TableHead>
          <TableHead className="max-w-[200px] truncate text-left font-medium text-inherit">
            Unit price
          </TableHead>
          <TableHead className="text-right font-medium text-inherit">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lineItems.map((item, index) => (
          <TableRow
            key={index}
            className="border-b hover:bg-inherit"
          >
            <TableCell className="max-w-[200px] truncate">
              {item.name}
              {item.status === 'canceled' && (
                <span className="ml-2 text-muted-foreground">(Canceled)</span>
              )}
              {item.status === 'trialing' && (
                <span className="ml-2 text-muted-foreground">(Trial)</span>
              )}
            </TableCell>
            <TableCell className="pr-4 text-right">{item.quantity}</TableCell>
            <TableCell className="max-w-[200px] truncate">
              {item.unitPrice === 0
                ? 'Free'
                : formatCurrency(item.unitPrice, item.currency)}
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(item.totalPrice, item.currency)}
            </TableCell>
          </TableRow>
        ))}

        {taxes?.map((tax, index) => (
          <TableRow
            key={`tax-${index}`}
            className="hover:bg-inherit"
          >
            <TableCell
              colSpan={3}
              className="pl-8 text-muted-foreground"
            >
              Tax
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <InfoIcon className="ml-2 inline size-3.5 shrink-0 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[450px]">
                  Tax rate ID: {tax.taxRateId}
                </TooltipContent>
              </Tooltip>
            </TableCell>
            <TableCell className="text-right text-muted-foreground">
              {formatCurrency(tax.amount, currency)}
            </TableCell>
          </TableRow>
        ))}

        <TableRow className="border-t hover:bg-inherit">
          <TableCell colSpan={3}>
            <span className="mr-2 font-medium">Current costs</span>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <InfoIcon className="inline size-3.5 shrink-0 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[450px]">
                Costs accumulated from the beginning of the billing cycle up to
                now.
              </TooltipContent>
            </Tooltip>
          </TableCell>
          <TableCell className="text-right font-semibold">
            {formatCurrency(totalCurrentAmount, currency)}
          </TableCell>
        </TableRow>

        <TableRow className="border-t hover:bg-inherit">
          <TableCell colSpan={3}>
            <span className="mr-2 font-medium">Projected costs</span>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <InfoIcon className="inline size-3.5 shrink-0 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[450px]">
                Projected costs at the end of the billing cycle.
              </TooltipContent>
            </Tooltip>
          </TableCell>
          <TableCell className="text-right font-semibold">
            {formatCurrency(totalProjectedAmount, currency)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase()
  }).format(amount);
}
