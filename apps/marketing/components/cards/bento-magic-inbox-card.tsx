'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRightIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import AppleCalendar from '~/public/assets/features/apple-calendar.svg';
import GoogleCalendar from '~/public/assets/features/google-calendar.svg';
import OutlookCalendar from '~/public/assets/features/outlook-calendar.svg';

const DATA_MAGIC_INBOX = [
  { icon: AppleCalendar },
  { icon: GoogleCalendar },
  { icon: OutlookCalendar }
];

const MotionCard = motion.create(Card);

export function BentoMagicInboxCard({
  className,
  ...other
}: React.ComponentPropsWithoutRef<typeof MotionCard>): React.JSX.Element {
  const [active, setActive] = React.useState<number>(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <MotionCard
      className={cn(
        'relative h-[300px] max-h-[300px] overflow-hidden',
        className
      )}
      {...other}
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Magic Inbox</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          Centralize all customer communications in one shared inbox.
        </p>
        <div
          aria-hidden="true"
          className="pointer-events-none relative h-[142px] flex-auto select-none overflow-hidden"
        >
          <div className="relative flex h-full flex-col items-center justify-center">
            {/* Rings */}
            <div className="absolute blur-[1px]">
              <div className="absolute left-1/2 top-1/2 ml-[calc(-216/2/16*1rem)] mt-[calc(-216/2/16*1rem)] size-[calc(216/16*1rem)] rounded-full border opacity-60 dark:opacity-100" />
              <div className="opacity-12.5 absolute left-1/2 top-1/2 ml-[calc(-280/2/16*1rem)] mt-[calc(-280/2/16*1rem)] size-[calc(280/16*1rem)] rounded-full border opacity-50 dark:opacity-90" />
              <div className="absolute left-1/2 top-1/2 ml-[calc(-344/2/16*1rem)] mt-[calc(-344/2/16*1rem)] size-[calc(344/16*1rem)] rounded-full border opacity-40 dark:opacity-80" />
              <div className="opacity-7.5 absolute left-1/2 top-1/2 ml-[calc(-408/2/16*1rem)] mt-[calc(-408/2/16*1rem)] size-[calc(408/16*1rem)] rounded-full border opacity-30 dark:opacity-70" />
            </div>
            {/* Icons */}
            <div className="flex flex-row gap-4">
              {DATA_MAGIC_INBOX.map(({ icon: Icon }, index) => (
                <div
                  key={index}
                  className={cn(
                    'transition duration-1000',
                    active === index ? 'opacity-100' : 'opacity-25'
                  )}
                >
                  <div className="size-10 rounded-full border-2 border-background ring-1 ring-border/80">
                    <Icon
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[128/55] w-32">
              {/* Connector */}
              <svg
                viewBox="0 0 128 55"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-neutral-200 opacity-80 dark:stroke-neutral-800"
              >
                <path d="M64 0v25M8 0v8c0 8.837 7.163 16 16 16h24c8.837 0 16 7.163 16 16v15M120 0v8c0 8.837-7.163 16-16 16H80c-5.922 0-11.093 3.218-13.86 8" />
              </svg>
            </div>
            {/* Text */}
            <div className="mt-px flex flex-row items-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-sm text-foreground">
              Chat
              <ArrowLeftRightIcon className="size-3 shrink-0" />
              Email
            </div>
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
}
