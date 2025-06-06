import type { Role } from "@workspace/database";

export type MemberDto = {
  id: string;
  image?: string;
  name: string;
  email: string;
  role: Role;
  isOwner: boolean;
  dateAdded: Date;
  lastLogin?: Date;
};
