import type { BillingAddressDto } from '~/types/dtos/billing-address-dto';
import type { BillingBreakdownDto } from '~/types/dtos/billing-breakdown-dto';
import type { BillingEmailDto } from '~/types/dtos/billing-email-dto';
import type { InvoiceDto } from '~/types/dtos/invoice-dto';
import type { SubscriptionPlanDto } from '~/types/dtos/subscription-plan-dto';

export type BillingDetailsDto = {
  plan: SubscriptionPlanDto;
  breakdown: BillingBreakdownDto;
  email: BillingEmailDto;
  address: BillingAddressDto;
  invoices: InvoiceDto[];
};
