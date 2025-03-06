'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateContactCommentSchema } from '~/schemas/contacts/update-contact-comment-schema';

export const updateContactNote = authOrganizationActionClient
  .metadata({ actionName: 'updateContactNote' })
  .schema(updateContactCommentSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.contactNote.count({
      where: {
        id: parsedInput.id,
        contact: {
          organizationId: ctx.organization.id
        }
      }
    });
    if (count < 1) {
      throw new NotFoundError('Contact not not found');
    }

    const note = await prisma.contactNote.update({
      where: { id: parsedInput.id },
      data: { text: parsedInput.text },
      select: { contactId: true }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactNotes,
        ctx.organization.id,
        note.contactId
      )
    );
  });
