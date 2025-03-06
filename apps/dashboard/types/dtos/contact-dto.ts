import { type ContactRecord, type ContactStage } from '@workspace/database';

import type { TagDto } from '~/types/dtos/tag-dto';

export type ContactDto = {
  id: string;
  record: ContactRecord;
  image?: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  stage: ContactStage;
  createdAt: Date;
  tags: TagDto[];
};
