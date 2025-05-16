export type TenantCommentDto = {
  id: string;
  text: string;
  edited: boolean;
  createdAt: Date;
  sender: {
    name: string;
    image?: string;
  };
};
