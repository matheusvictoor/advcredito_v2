export type TenantNoteDto = {
  id: string;
  tenantId: string;
  text?: string;
  edited: boolean;
  createdAt: Date;
  updatedAt: Date;
  sender: {
    id: string;
    name: string;
    image?: string;
  };
};
