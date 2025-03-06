import { createHash } from 'crypto';
import type { Account, NextAuthConfig, Profile, User } from 'next-auth';

import { APP_NAME } from '@workspace/common/app';
import { prisma } from '@workspace/database/client';
import { sendConnectedAccountSecurityAlertEmail } from '@workspace/email/send-connected-account-security-alert-email';
import { sendWelcomeEmail } from '@workspace/email/send-welcome-email';
import { resizeImage } from '@workspace/image-processing/resize-image';
import { baseUrl, getUserImageUrl, routes } from '@workspace/routes';

import { OAuthProvider } from './providers.types';
import { verifyEmail } from './verification';

export const events = {
  async signIn({ user, account, profile, isNewUser }) {
    if (user && user.id) {
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
        select: {
          id: true // SELECT NONE
        }
      });

      if (isNewUser && user.email) {
        if (account?.provider === OAuthProvider.Google) {
          await verifyEmail(user.email);
          await tryCopyGoogleImage(user, profile);
          if (user.name) {
            await sendWelcomeEmail({
              recipient: user.email!,
              appName: APP_NAME,
              name: user.name,
              getStartedLink: routes.dashboard.organizations.Index
            });
          }
        }
        if (account?.provider === OAuthProvider.MicrosoftEntraId) {
          await verifyEmail(user.email);
          await tryCopyMicrosoftGraphImage(user, account);
          if (user.name) {
            await sendWelcomeEmail({
              recipient: user.email!,
              appName: APP_NAME,
              name: user.name,
              getStartedLink: routes.dashboard.organizations.Index
            });
          }
        }
      }
    }
  },
  async signOut(message) {
    if ('session' in message && message.session?.sessionToken) {
      await prisma.session.deleteMany({
        where: { sessionToken: message.session.sessionToken }
      });
    }
  },
  async linkAccount({ user, account }) {
    if (user && user.name && user.email && account && account.provider) {
      // Here we check if the user just has been created using an OAuth provider
      // - If yes -> No need to send out security alert
      // - If no (which means linked using an existing account) -> Send out security alert
      const newUser = await prisma.user.findFirst({
        where: {
          email: user.email,
          lastLogin: null
        },
        select: {
          _count: {
            select: { accounts: true }
          }
        }
      });
      const isNewUser = newUser && newUser._count.accounts < 2;
      if (!isNewUser) {
        try {
          await sendConnectedAccountSecurityAlertEmail({
            recipient: user.email,
            appName: APP_NAME,
            name: user.name,
            action: 'connected',
            provider: account.provider
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
} satisfies NextAuthConfig['events'];

type ResizedImage = {
  bytes?: Buffer;
  contentType?: string;
  hash?: string;
};

async function fetchAndResizeRemoteImage(url?: string): Promise<ResizedImage> {
  let bytes: Buffer | undefined;
  let contentType: string | undefined;
  let hash: string | undefined;

  if (url) {
    try {
      if (new URL(url).origin === new URL(baseUrl.Dashboard).origin) {
        throw Error('Cannot fetch images from the same origin. Security risk.');
      }

      const response = await fetch(url);
      if (response.ok) {
        const mimeType = response.headers.get('content-type');
        if (mimeType) {
          const jsBuffer = await response.arrayBuffer();
          const buffer = Buffer.from(new Uint8Array(jsBuffer));
          bytes = await resizeImage(buffer, mimeType);
          if (bytes) {
            contentType = mimeType;
            hash = createHash('sha256').update(bytes).digest('hex');
          }
        }
      } else {
        console.warn(`Failed to fetch image from ${url}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    bytes,
    contentType,
    hash
  };
}

async function tryCopyGoogleImage(
  user: User,
  profile?: Profile
): Promise<void> {
  try {
    if (profile?.picture) {
      const image = await fetchAndResizeRemoteImage(profile.picture);
      if (image.bytes && image.contentType && image.hash) {
        const imageUrl = getUserImageUrl(user.id!, image.hash);
        await prisma.$transaction([
          prisma.userImage.create({
            data: {
              userId: user.id!,
              data: image.bytes,
              contentType: image.contentType,
              hash: image.hash
            },
            select: {
              id: true // SELECT NONE
            }
          }),
          prisma.user.update({
            where: { id: user.id },
            data: { image: imageUrl },
            select: {
              id: true // SELECT NONE
            }
          })
        ]);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

async function tryCopyMicrosoftGraphImage(
  user: User,
  account: Account
): Promise<void> {
  try {
    const profilePhotoSize = 96;
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`,
      { headers: { Authorization: `Bearer ${account.access_token}` } }
    );

    if (response.ok) {
      const mimeType = response.headers.get('content-type');
      if (mimeType) {
        const jsBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(new Uint8Array(jsBuffer));
        const bytes = await resizeImage(buffer, mimeType);
        const contentType = mimeType;
        const hash = createHash('sha256').update(bytes).digest('hex');
        if (bytes && contentType && hash) {
          const imageUrl = getUserImageUrl(user.id!, hash);
          await prisma.$transaction([
            prisma.userImage.create({
              data: {
                userId: user.id!,
                data: bytes,
                contentType: contentType,
                hash: hash
              },
              select: {
                id: true // SELECT NONE
              }
            }),
            prisma.user.update({
              where: { id: user.id },
              data: { image: imageUrl },
              select: {
                id: true // SELECT NONE
              }
            })
          ]);
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
}
