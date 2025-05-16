import "server-only";

import { unstable_cache as cache } from "next/cache";

import { getAuthOrganizationContext } from "@workspace/auth/context";
import { ValidationError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
  UserCacheKey,
} from "~/data/caching";
import {
  getTenantIsInFavoritesSchema,
  type GetTenantAddedToFavoritesSchema,
} from "~/schemas/tenants/get-tenant-is-in-favorites-schema";

export async function getTenantIsInFavorites(
  input: GetTenantAddedToFavoritesSchema,
): Promise<boolean> {
  const ctx = await getAuthOrganizationContext();

  const result = getTenantIsInFavoritesSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const count = await prisma.favorite.count({
        where: {
          userId: ctx.session.user.id,
          tenantId: parsedInput.tenantId,
        },
      });

      return count > 0;
    },
    Caching.createUserKeyParts(
      UserCacheKey.TenantIsInFavorites,
      ctx.session.user.id,
      parsedInput.tenantId,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createUserTag(
          UserCacheKey.TenantIsInFavorites,
          ctx.session.user.id,
          parsedInput.tenantId,
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Favorites,
          ctx.organization.id,
          ctx.session.user.id,
        ),
      ],
    },
  )();
}
