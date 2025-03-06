import * as React from 'react';

import { searchParamsCache } from '~/components/organizations/slug/home/home-search-params';
import { LeastVisitedContactsCard } from '~/components/organizations/slug/home/least-visited-contacts-card';
import { getLeastVisitedContacts } from '~/data/home/get-least-visited-contacts';

export default async function LeastVisitedContactsPage({
  searchParams
}: NextPageProps): Promise<React.JSX.Element> {
  const parsedSearchParams = await searchParamsCache.parse(searchParams);
  const contacts = await getLeastVisitedContacts(parsedSearchParams);

  return (
    <LeastVisitedContactsCard
      contacts={contacts}
      className="col-span-2 md:col-span-1"
    />
  );
}
