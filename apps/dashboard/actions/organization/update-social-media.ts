'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateSocialMediaSchema } from '~/schemas/organization/update-social-media-schema';

export const updateSocialMedia = authOrganizationActionClient
  .metadata({ actionName: 'updateSocialMedia' })
  .schema(updateSocialMediaSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.organization.update({
      where: { id: ctx.organization.id },
      data: {
        linkedInProfile: parsedInput.linkedInProfile,
        instagramProfile: parsedInput.instagramProfile,
        youTubeChannel: parsedInput.youTubeChannel,
        xProfile: parsedInput.xProfile,
        tikTokProfile: parsedInput.tikTokProfile,
        facebookPage: parsedInput.facebookPage
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.SocialMedia,
        ctx.organization.id
      )
    );
  });
