import * as React from 'react';
import { type Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { isAfter } from 'date-fns';
import { createSearchParamsCache, parseAsString } from 'nuqs/server';

import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { ResetPasswordCard } from '~/components/auth/reset-password/reset-password-card';
import { createTitle } from '~/lib/formatters';

const paramsCache = createSearchParamsCache({
  requestId: parseAsString.withDefault('')
});

export const metadata: Metadata = {
  title: createTitle('Reset password')
};

export default async function ResetPasswordPage({
  params
}: NextPageProps): Promise<React.JSX.Element> {
  const { requestId } = await paramsCache.parse(params);
  if (!requestId) {
    return notFound();
  }

  const resetPasswordRequest = await prisma.resetPasswordRequest.findUnique({
    where: { id: requestId },
    select: {
      id: true,
      expires: true
    }
  });

  if (!resetPasswordRequest) {
    return notFound();
  }

  if (isAfter(new Date(), resetPasswordRequest.expires)) {
    return redirect(routes.dashboard.auth.resetPassword.Expired);
  }

  return (
    <ResetPasswordCard
      requestId={requestId}
      expires={resetPasswordRequest.expires}
    />
  );
}
