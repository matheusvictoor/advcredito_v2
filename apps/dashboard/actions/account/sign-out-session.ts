'use server';

import { cookies } from 'next/headers';

import { signOut } from '@workspace/auth';
import { AuthCookies } from '@workspace/auth/cookies';
import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { authActionClient } from '~/actions/safe-action';
import { signOutSessionSchema } from '~/schemas/account/sign-out-session-schema';

export const signOutSession = authActionClient
  .metadata({ actionName: 'signOutSession' })
  .schema(signOutSessionSchema)
  .action(async ({ parsedInput, ctx }) => {
    const sessionFromDb = await prisma.session.findFirst({
      where: {
        userId: ctx.session.user.id,
        id: parsedInput.id
      },
      select: { sessionToken: true }
    });

    if (sessionFromDb) {
      const cookieStore = await cookies();
      const currentSessionToken =
        cookieStore.get(AuthCookies.SessionToken)?.value ?? '';
      if (
        currentSessionToken &&
        sessionFromDb.sessionToken === currentSessionToken
      ) {
        return await signOut({
          redirect: true,
          redirectTo: routes.dashboard.auth.SignIn
        });
      } else {
        await prisma.session.deleteMany({
          where: {
            userId: ctx.session.user.id,
            id: parsedInput.id
          }
        });
      }
    }
  });
