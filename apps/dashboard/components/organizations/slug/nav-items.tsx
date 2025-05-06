import {
  BellIcon,
  CodeIcon,
  CreditCardIcon,
  LockKeyholeIcon,
  StoreIcon,
  UserIcon,
  UserPlus2Icon,
  UsersIcon,
  LayoutDashboardIcon,
  LandmarkIcon,
  HouseIcon,
  FileTextIcon,
  MessageSquareTextIcon,
  UsersRoundIcon,
  KeySquareIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { replaceOrgSlug, routes } from "@workspace/routes";

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
      title: "Dashboard",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Home, slug),
      icon: LayoutDashboardIcon,
    },
    {
      title: "Inquilinos",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Tenants, slug),
      icon: UsersIcon,
    },
    {
      title: "Propriedades",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: HouseIcon,
    },
    {
      title: "Proprietários",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: UsersRoundIcon,
    },
    {
      title: "Aluguéis",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: KeySquareIcon,
    },
    {
      title: "Financeiro",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: LandmarkIcon,
    },
    {
      title: "Documentos",
      href: replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, slug),
      icon: FileTextIcon,
    },
    {
      title: "Chat",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.Index,
        slug,
      ),
      icon: MessageSquareTextIcon,
    },
  ];
}

export function createAccountNavItems(slug: string): NavItem[] {
  return [
    {
      title: "Perfil",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Profile,
        slug,
      ),
      icon: UserIcon,
    },
    {
      title: "Segurança",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Security,
        slug,
      ),
      icon: LockKeyholeIcon,
    },
    {
      title: "Notificações",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.account.Notifications,
        slug,
      ),
      icon: BellIcon,
    },
  ];
}

export function createOrganizationNavItems(slug: string): NavItem[] {
  return [
    {
      title: "Geral",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.General,
        slug,
      ),
      icon: StoreIcon,
    },
    {
      title: "Membros",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Members,
        slug,
      ),
      icon: UserPlus2Icon,
    },
    {
      title: "Faturamento",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Billing,
        slug,
      ),
      icon: CreditCardIcon,
    },
    {
      title: "Desenvolvedores",
      href: replaceOrgSlug(
        routes.dashboard.organizations.slug.settings.organization.Developers,
        slug,
      ),
      icon: CodeIcon,
    },
  ];
}
