import {
  ChargeType,
  PaymentType,
  PropertyType,
  StatusContract,
  PropertyUse,
} from "@workspace/database";

export type TenantContractDto = {
  id: string;
  tenantId: string;
  startContract: Date;
  endContract: Date;
  rental: string;
  totalCharges: string;
  furnished: boolean;
  floor: number;
  dueRental: Date;
  forumCity: string;
  observation: string;
  createdAt: Date;
  updatedAt: Date;
  paymentType: PaymentType;
  propertyType: PropertyType;
  propertyUse: PropertyUse;
  status: StatusContract;

  p_street: string;
  p_number: string;
  p_neighborhood: string;
  p_zipcode: string;
  p_city: string;
  p_state: string;
  p_country: string;
  p_complement?: string;

  l_name: string;
  l_doc: string;
  l_email: string;
  l_phone: string;
  l_street: string;
  l_number: string;
  l_neighborhood: string;
  l_zipcode: string;
  l_city: string;
  l_state: string;
  l_country: string;
  l_complement?: string;

  t_name: string;
  t_doc: string;
  t_email: string;
  t_phone: string;
  t_street?: string;
  t_number?: string;
  t_neighborhood?: string;
  t_zipcode?: string;
  t_city?: string;
  t_state?: string;
  t_country?: string;
  t_complement?: string;

  charges: TenantChargesDto;
};

export type TenantChargesDto = {
  type: ChargeType;
  description?: string;
  value: string;
};
