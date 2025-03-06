import * as React from 'react';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';

import { replaceOrgSlug, routes } from '@workspace/routes';

import { createTitle } from '~/lib/formatters';

const paramsCache = createSearchParamsCache({
  slug: parseAsString.withDefault('')
});

export const metadata: Metadata = {
  title: createTitle('Organization')
};

export default async function UnmatchedRouteRedirectToOrgHomePage(
  props: NextPageProps
): Promise<React.JSX.Element> {
  const params = await paramsCache.parse(props.params);

  return redirect(
    replaceOrgSlug(routes.dashboard.organizations.slug.Home, params.slug)
  );
}
