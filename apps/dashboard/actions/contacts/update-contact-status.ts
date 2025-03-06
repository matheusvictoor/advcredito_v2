'use server';

import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import { prisma } from '@workspace/database/client';

import { updateContactAndCaptureEvent } from '~/actions/contacts/_contact-event-capture';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { updateContactStageSchema } from '~/schemas/contacts/update-contact-stage-schema';

export const updateContactStage = authOrganizationActionClient
  .metadata({ actionName: 'updateContactStage' })
  .schema(updateContactStageSchema)
  .action(async ({ parsedInput, ctx }) => {
    const count = await prisma.contact.count({
      where: {
        organizationId: ctx.organization.id,
        id: parsedInput.id
      }
    });
    if (count < 1) {
      throw new NotFoundError('Contact not found');
    }

    await updateContactAndCaptureEvent(
      parsedInput.id,
      { stage: parsedInput.stage },
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
