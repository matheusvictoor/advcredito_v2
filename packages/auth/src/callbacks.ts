import { cookies } from 'next/headers';
import type { NextAuthConfig } from 'next-auth';

import { prisma } from '@workspace/database/client';
import { routes } from '@workspace/routes';

import { adapter } from './adapter';
import { AuthCookies } from './cookies';
import { AuthErrorCode } from './errors';
import { OAuthProvider, Provider } from './providers.types';
import { getRedirectToTotp } from './redirect';
import { generateSessionToken, getSessionExpiryFromNow } from './session';

async function isAuthenticatorAppEnabled(userId: string): Promise<boolean> {
  const count = await prisma.authenticatorApp.count({
    where: { userId }
  });
  return count > 0;
}

export const callbacks = {
  async signIn({ user, account, profile }): Promise<string | boolean> {
    if (!account) {
      return false;
    }
    // All Credentials Provider
    if (account.type === 'credentials') {
      if (!user || !user.id) {
        return false;
      }

      // Only username/password provider
      if (account.provider === Provider.Credentials) {
        if (await isAuthenticatorAppEnabled(user.id)) {
          return getRedirectToTotp(user.id);
        }
      }

      const sessionToken = generateSessionToken();
      const sessionExpiry = getSessionExpiryFromNow();

      const createdSession = await adapter.createSession!({
        sessionToken: sessionToken,
        userId: user.id,
        expires: sessionExpiry
      });

      if (!createdSession) {
        return false;
      }

      const cookieStore = await cookies();
      cookieStore.set({
        name: AuthCookies.SessionToken,
        value: sessionToken,
        expires: sessionExpiry
      });

      // already authorized
      return true;
    }

    // All OAuth Providers
    if (!account.provider || !profile) {
      return false;
    }

    if (
      !Object.values(OAuthProvider).includes(
        account.provider.toLowerCase() as OAuthProvider
      )
    ) {
      return `${routes.dashboard.auth.Error}?error=${AuthErrorCode.IllegalOAuthProvider}`;
    }

    if (account.provider === OAuthProvider.Google) {
      if (!profile.email_verified) {
        return `${routes.dashboard.auth.Error}?error=${AuthErrorCode.UnverifiedEmail}`;
      }
    }

    if (account.provider === OAuthProvider.MicrosoftEntraId) {
      // Microsoft does not provide a verified email field
      // If you want to have verified emails, the suggestion is to use the user here, e.g.
      //
      // if (!user.emailVerified || isBefore(new Date(), user.emailVerified)) {
      //    /* send verification email */
      //    return `${routes.dashboard.auth.verifyEmail.Index}.?email=${encodeURIComponent(parsedInput.email)}`
      // }
    }

    if (user?.id && (await isAuthenticatorAppEnabled(user.id))) {
      return getRedirectToTotp(user.id);
    }

    if (user?.name) {
      user.name = user.name.substring(0, 64);
    }
    if (profile.name) {
      profile.name = profile.name.substring(0, 64);
    }

    return true;
  },
  async jwt({ token, trigger, account, user }) {
    if ((trigger === 'signIn' || trigger === 'signUp') && account) {
      token.accessToken = account.access_token;

      if (account.type === 'credentials' && user.id) {
        const expires = getSessionExpiryFromNow();
        const sessionToken = generateSessionToken();

        const session = await adapter.createSession!({
          userId: user.id,
          sessionToken,
          expires
        });

        token.sessionId = session.sessionToken;
      }
    }

    // Let's not allow the client to indirectly update the token using useSession().update()
    if (trigger === 'update') {
      return token;
    }

    return token;
  },
  async session({ trigger, session, user }) {
    if (session && user) {
      session.user.id = user.id;
    }

    // Let's not allow the client to update the session using useSession().update()
    if (trigger === 'update') {
      return session;
    }

    return session;
  }
} satisfies NextAuthConfig['callbacks'];
