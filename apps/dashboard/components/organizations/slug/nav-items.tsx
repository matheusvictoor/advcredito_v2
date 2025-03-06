import {
  BellIcon,
  CodeIcon,
  CreditCardIcon,
  HomeIcon,
  LockKeyholeIcon,
  SettingsIcon,
  StoreIcon,
  UserIcon,
  UserPlus2Icon,
  UsersIcon
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { replaceOrgSlug, routes } from '@workspace/routes';

type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon: LucideIcon;
};

export function createMainNavItems(slug: string): NavItem[] {
  return [
    {
      title: 'Home',
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Home, slug),
      icon: HomeIcon
    },
    {
      title: 'Contacts',
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: UsersIcon
    },
    {
      title: 'Settings',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.Index,
        slug
      ),
      icon: SettingsIcon
    }
  ];
}

export function createAccountNavItems(slug: string): NavItem[] {
  return [
    {
      title: 'Profile',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Profile,
        slug
      ),
      icon: UserIcon
    },
    {
      title: 'Security',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Security,
        slug
      ),
      icon: LockKeyholeIcon
    },
    {
      title: 'Notifications',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Notifications,
        slug
      ),
      icon: BellIcon
    }
  ];
}

export function createOrganizationNavItems(slug: string): NavItem[] {
  return [
    {
      title: 'General',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.General,
        slug
      ),
      icon: StoreIcon
    },
    {
      title: 'Members',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Members,
        slug
      ),
      icon: UserPlus2Icon
    },
    {
      title: 'Billing',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Billing,
        slug
      ),
      icon: CreditCardIcon
    },
    {
      title: 'Developers',
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Developers,
        slug
      ),
      icon: CodeIcon
    }
  ];
}
