'use server';

import { revalidateTag } from 'next/cache';

import { ForbiddenError, NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { changeRoleSchema } from '~/schemas/members/change-role-schema';

export const changeRole = authOrganizationActionClient
  .metadata({ actionName: 'changeRole' })
  .schema(changeRoleSchema)
  .action(async ({ parsedInput, ctx }) => {
    const membership = await prisma.membership.findFirst({
      where: {
        userId: parsedInput.id,
        organizationId: ctx.organization.id
      },
      select: { isOwner: true }
    });
    if (!membership) {
      throw new NotFoundError('Membership not found.');
    }
    if (membership.isOwner) {
      throw new ForbiddenError('Owners have to be admin.');
    }

    await prisma.membership.updateMany({
      where: { userId: parsedInput.id },
      data: { role: parsedInput.role }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Members,
        ctx.organization.id
      )
    );
    revalidateTag(
      Caching.createUserTag(UserCacheKey.PersonalDetails, parsedInput.id)
    );
  });
