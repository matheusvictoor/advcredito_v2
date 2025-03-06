import { addHours } from 'date-fns';

import { prisma } from '@workspace/database/client';

import { keys } from '../keys';
import { EMAIL_VERIFICATION_EXPIRY_HOURS } from './constants';

/** Web compatible method to create a hash, using SHA256 */
async function createHash(message: string): Promise<string> {
  const data = new TextEncoder().encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toString();
}

/** Web compatible method to create a random string of a given length */
function randomString(size: number): string {
  const i2hex = (i: number) => ('0' + i.toString(16)).slice(-2);
  const r = (a: string, i: number): string => a + i2hex(i);
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes).reduce(r, '');
}

export async function createOtpTokens(
  email: string
): Promise<{ otp: string; hashedOtp: string }> {
  const key = keys().AUTH_SECRET;
  const otp = randomString(3).toUpperCase();
  const hashedOtp = await createHash(`${otp}${key}`);

  await prisma.verificationToken.create({
    data: {
      identifier: email,
      token: hashedOtp,
      expires: addHours(new Date(), EMAIL_VERIFICATION_EXPIRY_HOURS)
    },
    select: {
      identifier: true // SELECT NONE
    }
  });

  return { otp, hashedOtp };
}

export async function findVerificationTokenFromOtp(
  otp: string
): Promise<{ identifier: string; expires: Date } | null> {
  const key = keys().AUTH_SECRET;
  const hashedOtp = await createHash(`${otp.toUpperCase()}${key}`);
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { token: hashedOtp },
    select: { identifier: true, expires: true }
  });

  return verificationToken;
}

export async function verifyEmail(email: string): Promise<void> {
  await prisma.$transaction([
    prisma.verificationToken.updateMany({
      where: { identifier: email },
      data: { expires: new Date(+0) }
    }),
    prisma.changeEmailRequest.deleteMany({
      where: { email }
    }),
    prisma.resetPasswordRequest.deleteMany({
      where: { email }
    }),
    prisma.user.updateMany({
      where: { email },
      data: { emailVerified: new Date() }
    })
  ]);
}
