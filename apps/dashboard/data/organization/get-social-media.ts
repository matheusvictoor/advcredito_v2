import 'server-only';

import { unstable_cache as cache } from 'next/cache';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import type { SocialMediaDto } from '~/types/dtos/social-media-dto';

export async function getSocialMedia(): Promise<SocialMediaDto> {
  const ctx = await getAuthOrganizationContext();

  return cache(
    async () => {
      const organization = await prisma.organization.findFirst({
        where: { id: ctx.organization.id },
        select: {
          linkedInProfile: true,
          youTubeChannel: true,
          instagramProfile: true,
          xProfile: true,
          tikTokProfile: true,
          facebookPage: true
        }
      });
      if (!organization) {
        throw new NotFoundError('Organization not found');
      }

      const response: SocialMediaDto = {
        linkedInProfile: organization.linkedInProfile
          ? organization.linkedInProfile
          : undefined,
        instagramProfile: organization.instagramProfile
          ? organization.instagramProfile
          : undefined,
        youTubeChannel: organization.youTubeChannel
          ? organization.youTubeChannel
          : undefined,
        xProfile: organization.xProfile ? organization.xProfile : undefined,
        tikTokProfile: organization.tikTokProfile
          ? organization.tikTokProfile
          : undefined,
        facebookPage: organization.facebookPage
          ? organization.facebookPage
          : undefined
      };

      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.SocialMedia,
      ctx.organization.id
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.SocialMedia,
          ctx.organization.id
        )
      ]
    }
  )();
}
