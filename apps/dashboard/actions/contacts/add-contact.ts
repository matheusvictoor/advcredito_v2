'use server';

import { revalidateTag } from 'next/cache';

import { createContactAndCaptureEvent } from '~/actions/contacts/_contact-event-capture';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addContactSchema } from '~/schemas/contacts/add-contact-schema';

export const addContact = authOrganizationActionClient
  .metadata({ actionName: 'addContact' })
  .schema(addContactSchema)
  .action(async ({ parsedInput, ctx }) => {
    await createContactAndCaptureEvent(
      {
        record: parsedInput.record,
        name: parsedInput.name,
        email: parsedInput.email,
        phone: parsedInput.phone,
        organization: {
          connect: {
            id: ctx.organization.id
          }
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

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          membership.userId
        )
      );
    }
  });
