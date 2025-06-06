import "server-only";

import { unstable_cache as cache } from "next/cache";

import { getAuthOrganizationContext } from "@workspace/auth/context";
import { ValidationError } from "@workspace/common/errors";
import { prisma } from "@workspace/database/client";

import {
  Caching,
  defaultRevalidateTimeInSeconds,
  OrganizationCacheKey,
} from "~/data/caching";
import {
  getContactNotesSchema,
  type GetContactNotesSchema,
} from "~/schemas/contacts/get-contact-notes-schema";
import type { ContactNoteDto } from "~/types/dtos/contact-note-dto";
import { SortDirection } from "~/types/sort-direction";

export async function getContactNotes(
  input: GetContactNotesSchema,
): Promise<ContactNoteDto[]> {
  const ctx = await getAuthOrganizationContext();

  const result = getContactNotesSchema.safeParse(input);
  if (!result.success) {
    throw new ValidationError(JSON.stringify(result.error.flatten()));
  }
  const parsedInput = result.data;

  return cache(
    async () => {
      const notes = await prisma.contactNote.findMany({
        where: {
          contactId: parsedInput.contactId,
          contact: {
            organizationId: ctx.organization.id,
          },
        },
        select: {
          id: true,
          contactId: true,
          text: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
        orderBy: {
          createdAt: SortDirection.Asc,
        },
      });

      const mapped: ContactNoteDto[] = notes.map((note) => ({
        id: note.id,
        contactId: note.contactId,
        text: note.text ?? undefined,
        edited: note.createdAt.getTime() !== note.updatedAt.getTime(),
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        sender: {
          id: note.user.id,
          name: note.user.name,
          image: note.user.image ?? undefined,
        },
      }));

      return mapped;
    },
    Caching.createOrganizationKeyParts(
      OrganizationCacheKey.ContactNotes,
      ctx.organization.id,
      parsedInput.contactId,
    ),
    {
      revalidate: defaultRevalidateTimeInSeconds,
      tags: [
        Caching.createOrganizationTag(
          OrganizationCacheKey.ContactNotes,
          ctx.organization.id,
          parsedInput.contactId,
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contact,
          ctx.organization.id,
          parsedInput.contactId,
        ),
        Caching.createOrganizationTag(
          OrganizationCacheKey.Contacts,
          ctx.organization.id,
        ),
      ],
    },
  )();
}
