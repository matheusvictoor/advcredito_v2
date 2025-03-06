import * as React from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { SidebarInset } from '@workspace/ui/components/sidebar';

import { SidebarRenderer } from '~/components/organizations/slug/sidebar-renderer';
import { getProfile } from '~/data/account/get-profile';
import { getFavorites } from '~/data/favorites/get-favorites';
import { getOrganizations } from '~/data/organization/get-organizations';
import { createTitle } from '~/lib/formatters';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: createTitle('Organization')
};

export default async function OrganizationLayout(
  props: NextPageProps & React.PropsWithChildren
): Promise<React.JSX.Element> {
  const ctx = await getAuthOrganizationContext();
  const [cookieStore, organizations, favorites, profile] = await Promise.all([
    cookies(),
    getOrganizations(),
    getFavorites(),
    getProfile()
  ]);
  return (
    <div className="flex flex-col size-full overflow-hidden">
      <Providers
        organization={ctx.organization}
        defaultOpen={
          (cookieStore.get('sidebar:state')?.value ?? 'true') === 'true'
        }
        defaultWidth={cookieStore.get('sidebar:width')?.value}
      >
        <SidebarRenderer
          organizations={organizations}
          favorites={favorites}
          profile={profile}
        />
        {/* Set max-width so full-width tables can overflow horizontally correctly */}
        <SidebarInset
          id="skip"
          className="size-full lg:[transition:max-width_0.2s_linear] lg:peer-data-[state=collapsed]:max-w-[calc(100svw-var(--sidebar-width-icon))] lg:peer-data-[state=expanded]:max-w-[calc(100svw-var(--sidebar-width))]"
        >
          {props.children}
        </SidebarInset>
      </Providers>
    </div>
  );
}
