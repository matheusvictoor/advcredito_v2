import * as React from 'react';
import Link from 'next/link';
import {
  CalendarIcon,
  DollarSignIcon,
  GlobeIcon,
  LineChartIcon,
  MapPinIcon,
  TagsIcon,
  User2Icon
} from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import {
  Card,
  CardContent,
  CardFooter,
  type CardProps
} from '@workspace/ui/components/card';

function VercelLogo(): React.JSX.Element {
  return (
    <svg
      height="20"
      width="20"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      aria-label="Vercel Logo"
      className="text-black dark:text-white"
    >
      <g clipPath="url(#clip0_872_3186)">
        <circle
          cx="8"
          cy="8"
          r="7.25"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
          fill="currentColor"
          className="text-white dark:text-black"
        />
      </g>
      <defs>
        <clipPath id="clip0_872_3186">
          <rect
            width="16"
            height="16"
            fill="currentColor"
            className="text-white dark:text-black"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AiAdvisorCard(props: CardProps): React.JSX.Element {
  return (
    <Card {...props}>
      <CardContent className="pt-6">
        <div className="mb-3 flex items-center gap-2">
          <VercelLogo />
          <h2 className="text-xl font-semibold">Vercel</h2>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GlobeIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Domain</span>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500"
            >
              https://vercel.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <User2Icon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">CEO</span>
            <span className="text-sm">Guillermo Rauch</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Founded</span>
            <span className="text-sm">2015</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChartIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Est. ARR</span>
            <span className="text-sm">$100-120M</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Location</span>
            <span className="text-sm">California, USA</span>
          </div>
          <div className="flex items-center gap-2">
            <TagsIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Tags</span>
            <div className="flex gap-1">
              <Badge
                variant="secondary"
                className="whitespace-nowrap pl-2 text-xs"
              >
                SaaS
              </Badge>
              <Badge
                variant="secondary"
                className="whitespace-nowrap pl-2 text-xs"
              >
                B2B
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSignIcon className="size-4 text-muted-foreground" />
            <span className="w-20 text-sm text-muted-foreground">Funding</span>
            <span className="text-sm">$250M Series E</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4 rounded-b-xl bg-neutral-50 pt-6 dark:bg-neutral-900">
        <h3 className="text-base font-semibold sm:text-lg">AI Advisor</h3>
        <div className="min-h-10 max-w-md text-sm text-muted-foreground">
          Vercel has been contacted 4 times in the past year. Suggested next
          contact is in 3 days.
        </div>
      </CardFooter>
    </Card>
  );
}
