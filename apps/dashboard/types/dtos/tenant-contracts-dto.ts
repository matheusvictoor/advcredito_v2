import {
  PropertyType,
  StatusContract,
  PropertyUse,
} from "@workspace/database";
import Decimal from "decimal.js";

export type TenantContractsDto = {
  id: string;
  startContract: Date;
  endContract: Date;
  rental: Decimal;
  totalCharges: Decimal;
  floor: number | null;
  dueRental: Date;
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
  createdAt: Date;
  updatedAt: Date;
};