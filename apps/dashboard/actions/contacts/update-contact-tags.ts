'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { updateContactAndCaptureEvent } from '~/actions/contacts/_contact-event-capture';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateContactTagsSchema } from '~/schemas/contacts/update-contact-tags-schema';

export const updateContactTags = authOrganizationActionClient
  .metadata({ actionName: 'updateContactTags' })
  .schema(updateContactTagsSchema)
  .action(async ({ parsedInput, ctx }) => {
    const contact = await prisma.contact.findFirst({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      },
      select: {
        tags: {
          select: {
            id: true,
            text: true
          }
        }
      }
    });
    if (!contact) {
      throw new NotFoundError('Contact not found');
    }

    await updateContactAndCaptureEvent(
      parsedInput.id,
      {
        tags: {
          connectOrCreate: parsedInput.tags.map((tag) => ({
            where: { text: tag.text },
            create: { text: tag.text }
          })),
          disconnect: contact.tags
            .filter(
              (tag) => !parsedInput.tags.map((t) => t.text).includes(tag.text)
            )
            .map((tag) => ({ id: tag.id }))
        }
      },
      ctx.session.user.id
    );

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Contacts,
        ctx.organization.id
      )
    );
    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.Contact,
        ctx.organization.id,
        parsedInput.id
      )
    );
  });
