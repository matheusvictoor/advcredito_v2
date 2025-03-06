import * as React from 'react';
import Link from 'next/link';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';

import { APP_NAME } from '@workspace/common/app';
import { routes } from '@workspace/routes';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

enum Feature {
  AICustomerScoring = 'AI Contact Scoring',
  SmartEmailAnalysis = 'Smart Email Analysis',
  TeamSeats = 'Team Seats',
  LeadPredictions = 'Lead Predictions',
  SentimentAnalysis = 'Sentiment Analysis',
  DataStorage = 'Data Storage',
  EnterpriseSupport = 'Enterprise Support'
}

const plans = {
  free: {
    [Feature.AICustomerScoring]: '100 contacts/mo',
    [Feature.SmartEmailAnalysis]: '1,000 emails/mo',
    [Feature.TeamSeats]: 'Up to 2'
  },
  pro: {
    [Feature.AICustomerScoring]: 'Unlimited contacts',
    [Feature.SmartEmailAnalysis]: 'Unlimited emails',
    [Feature.LeadPredictions]: 'Advanced AI models',
    [Feature.SentimentAnalysis]: 'Real-time & Advanced',
    [Feature.TeamSeats]: 'Up to 120'
  },
  enterprise: {
    [Feature.AICustomerScoring]: 'Custom volume & features',
    [Feature.SmartEmailAnalysis]: 'Unlimited emails',
    [Feature.LeadPredictions]: 'Custom AI models',
    [Feature.SentimentAnalysis]: 'Real-time & Advanced',
    [Feature.TeamSeats]: 'Unlimited',
    [Feature.DataStorage]: 'Custom storage',
    [Feature.EnterpriseSupport]: '24/7 support & tailored solutions'
  }
} as const;

export function PricingPlans(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container space-y-20 py-20">
        <SiteHeading
          badge="Pricing"
          title="Plans for your business"
          description={`From early-stage startups to growing enterprises, ${APP_NAME} has you covered.`}
        />

        <div className="max-w-7xl">
          <div className="flex justify-center">
            <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <FreeTierCard />
              <ProTierCard />
              <EnterpriseTierCard />
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

function FreeTierCard(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col rounded-lg border p-8">
      <div className="relative z-10 grow">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Free</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$0</span>
            <span className="ml-2 text-muted-foreground">/seat/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For small teams starting with AI
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          {Object.keys(plans.free).map((key) => (
            <li
              key={key}
              className="flex items-start"
            >
              <CheckIcon className="mt-1 size-4 text-muted-foreground" />
              <div className="ml-3">
                <div className="text-sm font-medium">{key}</div>
                <div className="text-sm text-muted-foreground">
                  {plans.free[key as keyof typeof plans.free]}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={routes.dashboard.auth.SignUp}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium shadow-none transition-colors duration-200'
        )}
      >
        Start Free
        <ChevronRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function ProTierCard(): React.JSX.Element {
  return (
    <div className="relative flex h-full flex-col rounded-lg border border-primary p-8">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase text-primary-foreground">
          Recommended
        </span>
      </div>
      <div className="relative z-10 grow border-b">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Pro</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">$25</span>
            <span className="ml-2 text-muted-foreground">/seat/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For businesses scaling with AI
          </p>
        </div>
        <ul className="mb-8 space-y-4">
          {Object.keys(plans.pro).map((key) => (
            <li
              key={key}
              className="flex items-start"
            >
              <CheckIcon className="mt-1 size-4" />
              <div className="ml-3">
                <div className="text-sm font-medium">{key}</div>
                <div className="text-sm text-muted-foreground">
                  {plans.pro[key as keyof typeof plans.free]}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={routes.dashboard.organizations.Index}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'group mt-auto h-11 w-full rounded-xl text-sm font-medium shadow-none transition-colors duration-200'
        )}
      >
        Upgrade to Pro
        <ChevronRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function EnterpriseTierCard(): React.JSX.Element {
  return (
    <div className="relative col-span-1 flex h-full flex-col rounded-lg border p-8 md:col-span-2 lg:col-span-1">
      <div className="relative z-10 flex grow flex-col justify-start md:flex-row md:justify-between lg:flex-col lg:justify-start">
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-medium">Enterprise</h2>
          <div className="mb-2 flex items-baseline">
            <span className="text-4xl font-bold">Custom</span>
            <span className="ml-2 text-muted-foreground">/seat/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For large-scale organizations
          </p>
        </div>
        <ul className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {Object.keys(plans.enterprise).map((key) => (
            <li
              key={key}
              className="flex items-start"
            >
              <CheckIcon className="mt-1 size-4 text-muted-foreground" />
              <div className="ml-3">
                <div className="text-sm font-medium">{key}</div>
                <div className="text-sm text-muted-foreground">
                  {plans.enterprise[key as keyof typeof plans.enterprise]}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={routes.marketing.Contact}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'group mt-auto h-11 w-full rounded-xl bg-blue-600 text-white shadow-none transition-colors duration-200 hover:bg-blue-700'
        )}
      >
        Contact Us
        <ChevronRightIcon className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
