'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { replaceOrgSlug, routes } from '@workspace/routes';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { ContactAvatar } from '~/components/organizations/slug/contacts/details/contact-avatar';
import { useActiveOrganization } from '~/hooks/use-active-organization';
import type { VisitedContactDto } from '~/types/dtos/visited-contact-dto';

export type VisitedContactListProps = React.HTMLAttributes<HTMLDivElement> & {
  contacts: VisitedContactDto[];
};

export function VisitedContactList({
  contacts,
  className,
  ...other
}: VisitedContactListProps): React.JSX.Element {
  return (
    <div
      className={cn('flex flex-col space-y-1', className)}
      {...other}
    >
      {contacts.map((contact) => (
        <VisitedContactListItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}

type VisitedContactListItemProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  contact: VisitedContactDto;
};

function VisitedContactListItem({
  contact,
  className,
  ...other
}: VisitedContactListItemProps): React.JSX.Element {
  const activeOrganization = useActiveOrganization();
  return (
    <Link
      href={`${replaceOrgSlug(routes.dashboard.organizations.slug.Contacts, activeOrganization.slug)}/${contact.id}`}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'default' }),
        'group w-full items-center justify-between px-3',
        className
      )}
      {...other}
    >
      <div className="flex flex-row items-center gap-2">
        <ContactAvatar
          record={contact.record}
          src={contact.image}
        />
        <span className="text-sm font-normal">{contact.name}</span>
      </div>
      <span className="group-hover:hidden">{contact.pageVisits}</span>
      <ArrowRightIcon className="hidden size-4 shrink-0 group-hover:inline" />
    </Link>
  );
}
