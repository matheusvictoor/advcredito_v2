'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, MessageSquareIcon } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@workspace/ui/components/card';
import {
  Autoplay,
  Carousel,
  CarouselContent,
  CarouselItem
} from '@workspace/ui/components/carousel';
import { cn } from '@workspace/ui/lib/utils';

const DATA = [
  {
    type: 'email',
    icon: MailIcon,
    title: 'Welcome Email',
    timing: 'Sent upon customer registration'
  },
  {
    type: 'message',
    icon: MessageSquareIcon,
    title: 'Appointment Reminder',
    timing: '24 hours before appointment'
  },
  {
    type: 'email',
    icon: MailIcon,
    title: 'Follow-up Email',
    timing: '2 days after initial contact'
  },
  {
    type: 'message',
    icon: MessageSquareIcon,
    title: 'Feedback Request',
    timing: '48 hours after service completion'
  },
  {
    type: 'email',
    icon: MailIcon,
    title: 'Exclusive Offer Email',
    timing: 'Sent 7 days after inactivity'
  },
  {
    type: 'message',
    icon: MessageSquareIcon,
    title: 'Personalized Check-in',
    timing: '30 days after last interaction'
  },
  {
    type: 'email',
    icon: MailIcon,
    title: 'Special Event Invitation',
    timing: '14 days before the event'
  },
  {
    type: 'message',
    icon: MessageSquareIcon,
    title: 'Reactivation Campaign',
    timing: '90 days after inactivity'
  }
];

const MotionCard = motion.create(Card);

export function BentoCampaignsCard({
  className,
  ...other
}: React.ComponentPropsWithoutRef<typeof MotionCard>): React.JSX.Element {
  return (
    <MotionCard
      className={cn(
        'relative h-[300px] max-h-[300px] overflow-hidden',
        className
      )}
      {...other}
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          Set up campaigns to notify your customer segment.
        </p>
        <Carousel
          opts={{
            align: 'start',
            skipSnaps: true,
            loop: true,
            dragFree: true
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
          orientation="vertical"
          className="pointer-events-none size-full select-none"
        >
          <CarouselContent className="pointer-events-none -mt-1 h-[232px] select-none sm:h-[146px]">
            {DATA.map(({ title, timing, icon: Icon }, index) => (
              <CarouselItem
                key={index}
                className="pointer-events-none basis-1/4 select-none pt-1 will-change-transform"
              >
                <Card className="m-1">
                  <CardContent className="flex w-full flex-row items-center justify-start gap-4 p-6">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <Icon className="size-5 shrink-0" />
                    </div>
                    <div>
                      <div className="text-xs font-medium sm:text-sm">
                        {title}
                      </div>
                      <div className="text-[10px] text-muted-foreground sm:text-xs">
                        {timing}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </MotionCard>
  );
}
