import { type ActionType, type Prisma } from '@workspace/database';

export type ActivityTimelineEventDto = {
  id: string;
  contactId: string;
  type: 'activity';
  actionType: ActionType;
  metadata: Prisma.JsonValue;
  occurredAt: Date;
  actor: {
    id: string;
    name: string;
    image?: string;
  };
};

export type CommentTimelineEventDto = {
  id: string;
  contactId: string;
  type: 'comment';
  text: string;
  edited: boolean;
  createdAt: Date;
  updatedAt: Date;
  sender: {
    id: string;
    name: string;
    image?: string;
  };
};

export type TimelineEventDto =
  | ActivityTimelineEventDto
  | CommentTimelineEventDto;
