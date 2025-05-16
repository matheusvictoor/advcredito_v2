export type ContactCommentDto = {
  id: string;
  text: string;
  edited: boolean;
  createdAt: Date;
  sender: {
    name: string;
    image?: string;
  };
};

// excluir esse arquivo
