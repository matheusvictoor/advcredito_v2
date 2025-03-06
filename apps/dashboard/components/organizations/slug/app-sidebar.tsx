'use client';

import * as React from 'react';

import { ScrollArea } from '@workspace/ui/components/scroll-area';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@workspace/ui/components/sidebar';

import { NavFavorites } from '~/components/organizations/slug/nav-favorites';
import { NavMain } from '~/components/organizations/slug/nav-main';
import { NavSupport } from '~/components/organizations/slug/nav-support';
import { NavUser } from '~/components/organizations/slug/nav-user';
import { OrganizationSwitcher } from '~/components/organizations/slug/organization-switcher';
import type { FavoriteDto } from '~/types/dtos/favorite-dto';
import type { OrganizationDto } from '~/types/dtos/organization-dto';
import type { ProfileDto } from '~/types/dtos/profile-dto';

export type AppSidebarProps = {
  organizations: OrganizationDto[];
  favorites: FavoriteDto[];
  profile: ProfileDto;
};

export function AppSidebar({
  organizations,
  favorites,
  profile
}: AppSidebarProps): React.JSX.Element {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex h-14 flex-row items-center py-0">
        <OrganizationSwitcher organizations={organizations} />
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <ScrollArea
          verticalScrollBar
          /* Overriding the hardcoded { disply:table } to get full flex height */
          className="h-full [&>[data-radix-scroll-area-viewport]>div]:!flex [&>[data-radix-scroll-area-viewport]>div]:h-full [&>[data-radix-scroll-area-viewport]>div]:flex-col"
        >
          <NavMain />
          <NavFavorites favorites={favorites} />
          <NavSupport
            profile={profile}
            className="mt-auto pb-0"
          />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="h-14">
        <NavUser
          profile={profile}
          className="p-0"
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
