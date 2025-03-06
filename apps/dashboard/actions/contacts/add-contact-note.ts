'use server';

import { revalidateTag } from 'next/cache';

import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addContactNoteSchema } from '~/schemas/contacts/add-contact-note-schema';

export const addContactNote = authOrganizationActionClient
  .metadata({ actionName: 'addContactNote' })
  .schema(addContactNoteSchema)
  .action(async ({ parsedInput, ctx }) => {
    await prisma.contactNote.create({
      data: {
        contactId: parsedInput.contactId,
        text: parsedInput.text ? parsedInput.text : undefined,
        userId: ctx.session.user.id
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactNotes,
        ctx.organization.id,
        parsedInput.contactId
      )
    );
  });
