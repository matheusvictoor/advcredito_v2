import * as React from 'react';
import { type Metadata } from 'next';
import Link from 'next/link';

import { GitHubIcon, XIcon } from '@workspace/ui/components/brand-icons';
import { buttonVariants } from '@workspace/ui/components/button';
import {
  Page,
  PageActions,
  PageBody,
  PageHeader,
  PagePrimaryBar,
  PageSecondaryBar
} from '@workspace/ui/components/page';

import { HomeFilters } from '~/components/organizations/slug/home/home-filters';
import { HomeSpinner } from '~/components/organizations/slug/home/home-spinner';
import { OrganizationPageTitle } from '~/components/organizations/slug/organization-page-title';
import { TransitionProvider } from '~/hooks/use-transition-context';
import { createTitle } from '~/lib/formatters';

export const metadata: Metadata = {
  title: createTitle('Home')
};

export type HomeLayoutProps = {
  leadGeneration: React.ReactNode;
  mostVisitedContacts: React.ReactNode;
  leastVisitedContacts: React.ReactNode;
};

export default function HomeLayout({
  leadGeneration,
  mostVisitedContacts,
  leastVisitedContacts
}: HomeLayoutProps): React.JSX.Element {
  return (
    <TransitionProvider>
      <Page>
        <PageHeader>
          <PagePrimaryBar>
            <OrganizationPageTitle
              title="Overview"
              info=" Lead and contact engagement metrics"
            />
            <PageActions>
              <Link
                href="https://github.com/achromaticlabs/pro"
                target="_blank"
                className={buttonVariants({ variant: 'ghost', size: 'icon' })}
              >
                <GitHubIcon className="size-4 shrink-0" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/achromaticlabs"
                target="_blank"
                className={buttonVariants({ variant: 'ghost', size: 'icon' })}
              >
                <XIcon className="size-4 shrink-0" />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
            </PageActions>
          </PagePrimaryBar>
          <PageSecondaryBar>
            <HomeFilters />
          </PageSecondaryBar>
        </PageHeader>
        <PageBody>
          <div className="mx-auto max-w-6xl space-y-2 p-2 sm:space-y-8 sm:p-6">
            {leadGeneration}
            <div className="grid grid-cols-1 gap-2 sm:gap-8 md:grid-cols-2">
              {mostVisitedContacts}
              {leastVisitedContacts}
            </div>
          </div>
          <HomeSpinner />
        </PageBody>
      </Page>
    </TransitionProvider>
  );
}
