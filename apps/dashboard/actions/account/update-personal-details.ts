'use server';

import { createHash } from 'crypto';
import { revalidateTag } from 'next/cache';

import type { Maybe } from '@workspace/common/maybe';
import { type Prisma } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { decodeBase64Image } from '@workspace/image-processing/decode-base64-image';
import { resizeImage } from '@workspace/image-processing/resize-image';
import { getUserImageUrl } from '@workspace/routes';

import { authActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { FileUploadAction } from '~/lib/file-upload';
import { updatePersonalDetailsSchema } from '~/schemas/account/update-personal-details-schema';

type Transaction = Prisma.PrismaPromise<unknown>;

export const updatePersonalDetails = authActionClient
  .metadata({ actionName: 'updatePersonalDetails' })
  .schema(updatePersonalDetailsSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transactions: Transaction[] = [];
    let imageUrl: Maybe<string> = undefined;

    if (parsedInput.action === FileUploadAction.Update && parsedInput.image) {
      const { buffer, mimeType } = decodeBase64Image(parsedInput.image);
      const data = await resizeImage(buffer, mimeType);
      const hash = createHash('sha256').update(data).digest('hex');

      transactions.push(
        prisma.userImage.deleteMany({
          where: { userId: ctx.session.user.id }
        })
      );

      transactions.push(
        prisma.userImage.create({
          data: {
            userId: ctx.session.user.id,
            data,
            contentType: mimeType,
            hash
          },
          select: {
            id: true // SELECT NONE
          }
        })
      );

      imageUrl = getUserImageUrl(ctx.session.user.id, hash);
    }
    if (parsedInput.action === FileUploadAction.Delete) {
      transactions.push(
        prisma.userImage.deleteMany({
          where: { userId: ctx.session.user.id }
        })
      );

      imageUrl = null;
    }

    transactions.push(
      prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          image: imageUrl,
          name: parsedInput.name,
          phone: parsedInput.phone
        },
        select: {
          id: true // SELECT NONE
        }
      })
    );

    await prisma.$transaction(transactions);

    revalidateTag(
      Caching.createUserTag(UserCacheKey.PersonalDetails, ctx.session.user.id)
    );

    for (const membership of ctx.session.user.memberships) {
      revalidateTag(
        Caching.createOrganizationTag(
          OrganizationCacheKey.Members,
          membership.organizationId
        )
      );
    }
  });
