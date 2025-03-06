'use server';

import crypto from 'crypto';
import { revalidateTag } from 'next/cache';
import { returnValidationErrors } from 'next-safe-action';
import { authenticator } from 'otplib';

import { symmetricEncrypt } from '@workspace/auth/encryption';
import { PreConditionError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authActionClient } from '~/actions/safe-action';
import { Caching, UserCacheKey } from '~/data/caching';
import { env } from '~/env';
import { enableAuthenticatorAppSchema } from '~/schemas/account/enable-authenticator-app-schema';

export const enableAuthenticatorApp = authActionClient
  .metadata({ actionName: 'enableAuthenticatorApp' })
  .schema(enableAuthenticatorAppSchema)
  .action(async ({ parsedInput, ctx }) => {
    const isValidToken = authenticator.check(
      parsedInput.totpCode,
      parsedInput.secret
    );
    if (!isValidToken) {
      return returnValidationErrors(enableAuthenticatorAppSchema, {
        totpCode: {
          _errors: ['The entered code is not valid.']
        }
      });
    }

    const count = await prisma.authenticatorApp.count({
      where: { userId: ctx.session.user.id }
    });
    if (count > 0) {
      throw new PreConditionError('Authenticator app is already enabled');
    }

    const recoveryCodes = Array.from(Array(10), () =>
      crypto.randomBytes(5).toString('hex')
    );

    const key = env.AUTH_SECRET;
    await prisma.authenticatorApp.create({
      data: {
        userId: ctx.session.user.id,
        accountName: parsedInput.accountName,
        issuer: parsedInput.issuer,
        secret: symmetricEncrypt(parsedInput.secret, key),
        recoveryCodes: symmetricEncrypt(JSON.stringify(recoveryCodes), key)
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createUserTag(
        UserCacheKey.MultiFactorAuthentication,
        ctx.session.user.id
      )
    );

    return { recoveryCodes };
  });
