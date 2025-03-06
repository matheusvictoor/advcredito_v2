import { type ContactRecord } from '@workspace/database';

export type FavoriteDto = {
  id: string;
  order: number;
  contactId: string;
  name: string;
  record: ContactRecord;
  image?: string;
};
