'use server';

import { createHash } from 'crypto';
import { revalidateTag } from 'next/cache';

import { NotFoundError } from '@workspace/common/errors';
import type { Maybe } from '@workspace/common/maybe';
import { prisma } from '@workspace/database/client';
import { decodeBase64Image } from '@workspace/image-processing/decode-base64-image';
import { resizeImage } from '@workspace/image-processing/resize-image';
import { getContactImageUrl } from '@workspace/routes';

import { updateContactAndCaptureEvent } from '~/actions/contacts/_contact-event-capture';
import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey } from '~/data/caching';
import { FileUploadAction } from '~/lib/file-upload';
import { updateContactImageSchema } from '~/schemas/contacts/update-contact-image-schema';

export const updateContactImage = authOrganizationActionClient
  .metadata({ actionName: 'updateContactImage' })
  .schema(updateContactImageSchema)
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

    let imageUrl: Maybe<string> = undefined;

    if (parsedInput.action === FileUploadAction.Update && parsedInput.image) {
      const { buffer, mimeType } = decodeBase64Image(parsedInput.image);
      const data = await resizeImage(buffer, mimeType);
      const hash = createHash('sha256').update(data).digest('hex');

      await prisma.$transaction([
        prisma.contactImage.deleteMany({
          where: { contactId: parsedInput.id }
        }),
        prisma.contactImage.create({
          data: {
            contactId: parsedInput.id,
            data,
            contentType: mimeType,
            hash
          }
        })
      ]);

      imageUrl = getContactImageUrl(parsedInput.id, hash);
    }
    if (parsedInput.action === FileUploadAction.Delete) {
      await prisma.contactImage.deleteMany({
        where: { contactId: parsedInput.id }
      });

      imageUrl = null;
    }

    await updateContactAndCaptureEvent(
      parsedInput.id,
      { image: imageUrl },
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
