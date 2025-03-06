import * as React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  type CardProps
} from '@workspace/ui/components/card';
import { EmptyText } from '@workspace/ui/components/empty-text';

import { VisitedContactList } from '~/components/organizations/slug/home/visited-contact-list';
import type { VisitedContactDto } from '~/types/dtos/visited-contact-dto';

export type LeastVisitedContactsCardProps = CardProps & {
  contacts: VisitedContactDto[];
};

export function LeastVisitedContactsCard({
  contacts,
  ...props
}: LeastVisitedContactsCardProps): React.JSX.Element {
  const hasContacts = contacts.length > 0;
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-sm">Least visited contacts</CardTitle>
      </CardHeader>
      <CardContent>
        {hasContacts ? (
          <VisitedContactList contacts={contacts} />
        ) : (
          <EmptyText>There's no data available for your selection.</EmptyText>
        )}
      </CardContent>
    </Card>
  );
}
