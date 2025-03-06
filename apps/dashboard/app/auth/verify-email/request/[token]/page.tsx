import * as React from 'react';
import { type Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { isAfter } from 'date-fns';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';

import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { verifyEmailWithToken } from '~/actions/auth/verify-email-with-token';
import { createTitle } from '~/lib/formatters';

const paramsCache = createSearchParamsCache({
  token: parseAsString.withDefault('')
});

export const metadata: Metadata = {
  title: createTitle('Email Verification')
};

export default async function EmailVerificationPage({
  params
}: NextPageProps): Promise<React.JSX.Element> {
  const { token } = await paramsCache.parse(params);
  if (!token) {
    return notFound();
  }
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { token },
    select: { identifier: true, expires: true }
  });
  if (!verificationToken) {
    return notFound();
  }
  const user = await prisma.user.findFirst({
    where: { email: verificationToken.identifier },
    select: { emailVerified: true }
  });
  if (!user) {
    return notFound();
  }
  if (user.emailVerified) {
    return redirect(routes.dashboard.auth.verifyEmail.Success);
  }

  if (isAfter(new Date(), verificationToken.expires)) {
    return redirect(
      `${routes.dashboard.auth.verifyEmail.Expired}?email=${verificationToken.identifier}`
    );
  }

  await verifyEmailWithToken({ token: token });

  return redirect(routes.dashboard.auth.verifyEmail.Success);
}
