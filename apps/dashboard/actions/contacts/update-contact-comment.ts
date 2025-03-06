'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateContactCommentSchema } from '~/schemas/contacts/update-contact-comment-schema';

export const updateContactComment = authOrganizationActionClient
  .metadata({ actionName: 'updateContactComment' })
  .schema(updateContactCommentSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.contactComment.count({
      where: {
        id: parsedInput.id,
        contact: {
          organizationId: ctx.organization.id
        }
      }
    });
    if (count < 1) {
      throw new NotFoundError('Contact comment not found');
    }

    const comment = await prisma.contactComment.update({
      where: { id: parsedInput.id },
      data: { text: parsedInput.text },
      select: { contactId: true }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactTimelineEvents,
        ctx.organization.id,
        comment.contactId
      )
    );
  });
