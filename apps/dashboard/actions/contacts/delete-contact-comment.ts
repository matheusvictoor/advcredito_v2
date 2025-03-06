'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { deleteContactCommentSchema } from '~/schemas/contacts/delete-contact-comment-schema';

export const deleteContactComment = authOrganizationActionClient
  .metadata({ actionName: 'deleteContactComment' })
  .schema(deleteContactCommentSchema)
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

    const comment = await prisma.contactComment.delete({
      where: { id: parsedInput.id },
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
