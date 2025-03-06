import 'server-only';

import { getAuthContext } from '@workspace/auth/context';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

export async function getHasPasswordSet(): Promise<boolean> {
  const ctx = await getAuthContext();

  const user = await prisma.user.findFirst({
    where: { id: ctx.session.user.id },
    select: { password: true }
  });
  if (!user) {
    throw new NotFoundError('User not found.');
  }

  return !!user.password;
}
