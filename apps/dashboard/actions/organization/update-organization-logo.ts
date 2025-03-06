'use server';

import { createHash } from 'crypto';
import { revalidateTag } from 'next/cache';

import type { Maybe } from '@workspace/common/maybe';
import { type Prisma } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { decodeBase64Image } from '@workspace/image-processing/decode-base64-image';
import { resizeImage } from '@workspace/image-processing/resize-image';
import { getOrganizationLogoUrl } from '@workspace/routes';

import { authOrganizationActionClient } from '~/actions/safe-action';
import { Caching, OrganizationCacheKey, UserCacheKey } from '~/data/caching';
import { FileUploadAction } from '~/lib/file-upload';
import { updateOrganizationLogoSchema } from '~/schemas/organization/update-organization-logo-schema';

type Transaction = Prisma.PrismaPromise<unknown>;

export const updateOrganizationLogo = authOrganizationActionClient
  .metadata({ actionName: 'updateOrganizationLogo' })
  .schema(updateOrganizationLogoSchema)
  .action(async ({ parsedInput, ctx }) => {
    const transactions: Transaction[] = [];
    let logoUrl: Maybe<string> = undefined;

    if (parsedInput.action === FileUploadAction.Update && parsedInput.logo) {
      const { buffer, mimeType } = decodeBase64Image(parsedInput.logo);
      const data = await resizeImage(buffer, mimeType);
      const hash = createHash('sha256').update(data).digest('hex');

      transactions.push(
        prisma.organizationLogo.deleteMany({
          where: { organizationId: ctx.organization.id }
        })
      );

      transactions.push(
        prisma.organizationLogo.create({
          data: {
            organizationId: ctx.organization.id,
            data,
            contentType: mimeType,
            hash
          },
          select: {
            id: true // SELECT NONE
          }
        })
      );

      logoUrl = getOrganizationLogoUrl(ctx.organization.id, hash);
    }
    if (parsedInput.action === FileUploadAction.Delete) {
      transactions.push(
        prisma.organizationLogo.deleteMany({
          where: { organizationId: ctx.organization.id }
        })
      );

      logoUrl = null;
    }

    transactions.push(
      prisma.organization.update({
        where: { id: ctx.organization.id },
        data: { logo: logoUrl },
        select: {
          id: true // SELECT NONE
        }
      })
    );

    await prisma.$transaction(transactions);

    revalidateTag(
      Caching.createOrganizationTag(
        OrganizationCacheKey.OrganizationLogo,
        ctx.organization.id
      )
    );

    for (const membership of ctx.organization.memberships) {
      revalidateTag(
        Caching.createUserTag(UserCacheKey.Organizations, membership.userId)
      );
    }
  });
