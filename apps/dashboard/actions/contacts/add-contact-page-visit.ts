'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { addContactPageVisitSchema } from '~/schemas/contacts/add-contact-page-visit-schema';

export const addContactPageVisit = authOrganizationActionClient
  .metadata({ actionName: 'addContactPageVisit' })
  .schema(addContactPageVisitSchema)
  .action(async ({ parsedInput, ctx }) => {
    const countContacts = await prisma.contact.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.contactId
      }
    });
    if (countContacts < 1) {
      throw new NotFoundError('Contact not found');
    }

    await prisma.contactPageVisit.create({
      data: {
        contactId: parsedInput.contactId,
        userId: ctx.session.user.id
      },
      select: {
        id: true // SELECT NONE
      }
    });

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.ContactPageVisits,
        ctx.organization.id
      )
    );
  });
