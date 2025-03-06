import { randomBytes } from 'crypto';

import { API_KEY_PREFIX, API_KEY_RANDOM_SIZE } from './constants';

export function generateApiKey(): string {
  return `${API_KEY_PREFIX}${randomBytes(API_KEY_RANDOM_SIZE).toString('hex')}`;
}
