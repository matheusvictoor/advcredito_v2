import 'server-only';

import { unstable_cache as cache } from 'next/cache';
import { endOfDay, startOfDay } from 'date-fns';

import { getAuthOrganizationContext } from '@workspace/auth/context';
import { ValidationError } from '@workspace/common/errors';
import { Prisma } from '@workspace/database';
import { prisma } from '@workspace/database/client';

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey
} from '~/data/caching';
import {
  getMostVisitedContactsSchema,
  type GetMostVisitedContactsSchema
} from '~/schemas/home/get-most-vistied-contacts-schema';
import type { VisitedContactDto } from '~/types/dtos/visited-contact-dto';
import { SortDirection } from '~/types/sort-direction';

export async function getMostVisitedContacts(
  input: GetMostVisitedContactsSchema
): Promise<VisitedContactDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getMostVisitedContactsSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const [contacts] = await prisma.$transaction(
        [
          prisma.contact.findMany({
            where: { organizationId: ctx.organization.id },
            select: {
              id: true,
              name: true,
              image: true,
              record: true,
              _count: {
                select: {
                  pageVisits: {
                    where: {
                      timestamp: {
                        gte: startOfDay(parsedInput.from),
                        lte: endOfDay(parsedInput.to)
                      }
                    }
                  }
                }
              }
            },
            orderBy: {
              pageVisits: {
                _count: SortDirection.Desc
              }
            },
            take: 6
          })
        ],
        {
          isolationLevel: Prisma.TransactionIsolationLevel.ReadUncommitted
        }
      );

      const response: VisitedContactDto[] = contacts.map((contact) => ({
        id: contact.id,
        name: contact.name,
        image: contact.image ?? undefined,
        record: contact.record,
        pageVisits: contact._count.pageVisits
      }));
      return response;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.ContactPageVisits,
      ctx.organization.id,
      parsedInput.from.toISOString(),
      parsedInput.to.toISOString()
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.ContactPageVisits,
          ctx.organization.id
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contacts,
          ctx.organization.id
        )
      ]
    }
  )();
}
