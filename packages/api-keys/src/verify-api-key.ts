import { isBefore } from 'date-fns';

import { isString } from '@workspace/common/type-guards';
import { prisma } from '@workspace/database/client';

import { API_KEY_LENGTH, API_KEY_PREFIX } from './constants';
import { hashApiKey } from './hash-api-key';

type ErrorResult = {
  success: false;
  errorMessage: string;
};

type SuccessResult = {
  success: true;
  id: string;
  organizationId: string;
};

export async function verifyApiKey(token: string) {
  if (!token) {
    return {
      success: false,
      errorMessage: 'Missing API key'
    } as ErrorResult;
  }
  if (
    !isString(token) ||
    !token.startsWith(API_KEY_PREFIX) ||
    token.length !== API_KEY_LENGTH
  ) {
    return {
      success: false,
      errorMessage: 'Malformed API key'
    } as ErrorResult;
  }
  const apiKey = await prisma.apiKey.findFirst({
    where: { hashedKey: hashApiKey(token) },
    select: {
      id: true,
      expiresAt: true,
      organizationId: true
    }
  });
  if (!apiKey) {
    return {
      success: false,
      errorMessage: 'API key not found or expired'
    } as ErrorResult;
  }
  const now = new Date();
  if (!!apiKey.expiresAt && isBefore(now, apiKey.expiresAt)) {
    return {
      success: false,
      errorMessage: 'API key not found or expired'
    } as ErrorResult;
  }
  await prisma.apiKey.update({
    where: { id: apiKey.id },
    data: { lastUsedAt: now },
    select: {
      id: true // SELECT NONE
    }
  });
  return {
    success: true,
    id: apiKey.id,
    organizationId: apiKey.organizationId
  } as SuccessResult;
}
