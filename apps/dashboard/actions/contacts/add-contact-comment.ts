'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addContactCommentSchema } from '~/schemas/contacts/add-contact-comment-schema';

export const addContactComment = authOrganizationActionClient
  .metadata({ actionName: 'addContactComment' })
  .schema(addContactCommentSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.contactComment.create({
      data: {
        contactId: parsedInput.contactId,
        text: parsedInput.text,
        userId: ctx.session.user.id
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactTimelineEvents,
        ctx.organization.id,
        parsedInput.contactId
      )
    );
  });
