"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { ResponsiveScrollArea } from "@workspace/ui/components/scroll-area";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { TenantTimelineActivity } from "~/components/organizations/slug/tenants/details/timeline/tenant-timeline-activity";
import { TenantTimelineAddComment } from "~/components/organizations/slug/tenants/details/timeline/tenant-timeline-add-comment";
import { TenantTimelineComment } from "~/components/organizations/slug/tenants/details/timeline/tenant-timeline-comment";
import type { TenantDto } from "~/types/dtos/tenant-dto";
import type { ProfileDto } from "~/types/dtos/profile-dto";
import type { TimelineEventDto } from "~/types/dtos/timeline-event-dto";

const threshold = 6;

export type TenantActivityProps = {
  profile: ProfileDto;
  tenant: TenantDto;
  events: TimelineEventDto[];
};

export function TenantActivity({
  profile,
  tenant,
  events,
}: TenantActivityProps): React.JSX.Element {
  const [showComments, setShowComments] = React.useState<boolean>(true);
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const amount = showComments
    ? events.length
    : events.filter((event) => event.type !== "comment").length;
  const handleToggleShowMore = (): void => {
    setShowMore((value) => !value);
  };
  return (
    <ResponsiveScrollArea
      breakpoint={MediaQueries.MdUp}
      mediaQueryOptions={{ ssr: true }}
      className="h-full"
    >
      <div className="size-full max-w-xl grow p-6">
        <div className="overflow-visible border-none bg-transparent">
          <ul role="list" className="space-y-6">
            <li className="relative flex gap-x-4">
              <Line position="start" />
              <TenantTimelineAddComment
                profile={profile}
                tenant={tenant}
                showComments={showComments}
                onShowCommentsChange={setShowComments}
              />
            </li>
            {events
              .filter((event) => showComments || event.type !== "comment")
              .slice(0, showMore ? amount : threshold)
              .map((event, index) => (
                <li key={event.id} className="relative flex gap-x-4 py-2">
                  <Line
                    position={
                      index ===
                      (showMore ? amount : Math.min(amount, threshold)) - 1
                        ? "end"
                        : "middle"
                    }
                  />
                  {event.type === "activity" && (
                    <TenantTimelineActivity event={event} />
                  )}
                  {event.type === "comment" && (
                    <TenantTimelineComment profile={profile} event={event} />
                  )}
                </li>
              ))}
            {amount > threshold && (
              <li className="ml-8">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleToggleShowMore}
                >
                  {showMore ? "Mostrar menos" : "Mostrar mais"}
                  {showMore ? (
                    <ChevronUpIcon className="ml-1 size-4 shrink-0" />
                  ) : (
                    <ChevronDownIcon className="ml-1 size-4 shrink-0" />
                  )}
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </ResponsiveScrollArea>
  );
}

type LineProps = {
  position: "start" | "middle" | "end";
};

function Line({ position }: LineProps): React.JSX.Element {
  if (position === "start") {
    return (
      <div className="absolute -bottom-6 left-0 top-3 flex w-6 justify-center">
        <div className="w-px bg-gray-200 dark:bg-gray-800" />
      </div>
    );
  }

  if (position === "middle") {
    return (
      <div className="absolute -bottom-6 left-0 top-0 flex w-6 justify-center">
        <div className="w-px bg-gray-200 dark:bg-gray-800" />
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-0 flex size-6 justify-center">
      <div className="w-px bg-gray-200 dark:bg-gray-800" />
    </div>
  );
}
