import * as React from 'react';
import { UsersIcon } from 'lucide-react';

import { EmptyState } from '@workspace/ui/components/empty-state';

import { AddContactButton } from '~/components/organizations/slug/contacts/add-contact-button';

export function ContactsEmptyState(): React.JSX.Element {
  return (
    <div className="p-6">
      <EmptyState
        icon={
          <div className="flex size-12 items-center justify-center rounded-md border">
            <UsersIcon className="size-6 shrink-0 text-muted-foreground" />
          </div>
        }
        title="No contact yet"
        description="Add contacts and they will show up here."
      >
        <AddContactButton />
      </EmptyState>
    </div>
  );
}
