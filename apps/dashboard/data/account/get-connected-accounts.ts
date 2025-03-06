import 'server-only';

import { getAuthContext } from '@workspace/auth/context';
import { providers } from '@workspace/auth/providers';
import { OAuthProvider } from '@workspace/auth/providers.types';
import { prisma } from '@workspace/database/client';

import type { ConnectedAccountDto } from '~/types/dtos/connected-account-dto';

export async function getConnectedAccounts(): Promise<ConnectedAccountDto[]> {
  const ctx = await getAuthContext();

  const linked = await prisma.account.findMany({
    where: {
      OR: [{ type: 'oauth' }, { type: 'oidc' }],
      user: { id: ctx.session.user.id }
    },
    select: { provider: true }
  });
  const linkedIds = linked.map((a) => a.provider);

  const connectedAccounts: ConnectedAccountDto[] = providers
    .filter((p) => p.type === 'oauth' || p.type === 'oidc')
    .map((p) => ({
      id: p.id as OAuthProvider,
      name: p.name,
      type: p.type,
      linked: linkedIds.includes(p.id)
    }));

  return connectedAccounts;
}
