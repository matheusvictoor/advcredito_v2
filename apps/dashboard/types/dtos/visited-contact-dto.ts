import { type ContactRecord } from '@workspace/database';

export type VisitedContactDto = {
  id: string;
  name: string;
  image?: string;
  record: ContactRecord;
  pageVisits: number;
};
