export type BillingLineItemDto = {
  name: string;
  quantity: number;
  unitPrice: number;
  currency: string;
  totalPrice: number;
  subscriptionId: string;
  status: 'upcoming' | 'active' | 'canceled' | 'trialing';
};

export type TaxDto = {
  amount: number;
  taxRateId: string;
};

export type BillingBreakdownDto = {
  lineItems: BillingLineItemDto[];
  taxes?: TaxDto[];
  currency: string;
  totalCurrentAmount: number;
  totalProjectedAmount: number;
};
