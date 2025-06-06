import * as React from "react";
import { BuildingIcon, UserIcon } from "lucide-react";

import { TenantRecord } from "@workspace/database";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  type AvatarProps,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";

export type TenantAvatarProps = AvatarProps & {
  record: TenantRecord;
  src?: string;
  alt?: string;
};

export function TenantAvatar({
  record,
  src,
  alt,
  className,
  ...other
}: TenantAvatarProps): React.JSX.Element {
  return (
    <Avatar
      className={cn(
        "size-4 flex-none shrink-0",
        record === TenantRecord.PERSON && "rounded-full",
        record === TenantRecord.COMPANY && "rounded-md",
        className,
      )}
      {...other}
    >
      <AvatarImage src={src} alt={alt ?? "avatar"} />
      <AvatarFallback>
        {record === TenantRecord.COMPANY ? (
          <BuildingIcon className="size-4 shrink-0 text-muted-foreground" />
        ) : (
          <UserIcon className="size-4 shrink-0 text-muted-foreground" />
        )}
      </AvatarFallback>
    </Avatar>
  );
}
