import 'server-only';

import { cookies } from 'next/headers';

import { getAuthContext } from '@workspace/auth/context';
import { AuthCookies } from '@workspace/auth/cookies';
import { prisma } from '@workspace/database/client';

import type { SessionDto } from '~/types/dtos/session-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getSessions(): Promise<SessionDto[]> {
  const ctx = await getAuthContext();

  const cookieStore = await cookies();
  const currrentSessionToken =
    cookieStore.get(AuthCookies.SessionToken)?.value ?? '';

  const now = new Date();
  const sessions = await prisma.session.findMany({
    where: {
      userId: ctx.session.user.id,
      expires: {
        gt: now
      }
    },
    select: {
      id: true,
      sessionToken: true,
      expires: true
    },
    orderBy: {
      expires: SortDirection.Desc
    }
  });

  return sessions.map((s) => ({
    id: s.id,
    isCurrent: s.sessionToken === currrentSessionToken,
    expires: s.expires
  }));
}
