import { InvitationStatus } from "@workspace/database";

export const tenantStatusColor: Record<InvitationStatus, string> = {
  [InvitationStatus.ACCEPTED]:
    "bg-green-600 ring-1 ring-green-100 dark:ring-green-900",
  [InvitationStatus.PENDING]:
    "bg-orange-600  ring-1 ring-orange-100 dark:ring-yellow-900",
  [InvitationStatus.REVOKED]:
    "bg-red-600 ring-1 ring-red-100 dark:ring-red-900",
};
