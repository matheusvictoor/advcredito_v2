import {
  type PropertyType,
  type InvitationStatus,
  type TenantRecord,
} from "@workspace/database";

export type TenantDto = {
  id: string;
  record: TenantRecord;
  name: string;
  cpf?: string;
  cnpj?: string;
  image?: string;
  email?: string;
  phone?: string;
  status: InvitationStatus;
  archived: boolean;
  solde: string;
  createdAt: Date;
  propertyType: PropertyType;
  propertyNumber: string;
  pendingInstallmentsCount: number;
  assetsContractCount: number;
};
