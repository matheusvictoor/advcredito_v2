import * as React from 'react';

import { searchParamsCache } from '~/components/organizations/slug/home/home-search-params';
import { LeadGenerationCard } from '~/components/organizations/slug/home/lead-generation-card';
import { getLeadGenerationData } from '~/data/home/get-lead-generation-data';

export default async function LeadGenerationPage({
  searchParams
}: NextPageProps): Promise<React.JSX.Element> {
  const parsedSearchParams = await searchParamsCache.parse(searchParams);
  const data = await getLeadGenerationData(parsedSearchParams);

  return <LeadGenerationCard data={data} />;
}
