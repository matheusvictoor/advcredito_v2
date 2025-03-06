import * as React from 'react';
import Link from 'next/link';
import { Doc } from 'content-collections';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { DOCS_LINKS } from '~/components/marketing-links';

export type DocsPagerProps = {
  doc: Doc;
};

export function DocsPager({ doc }: DocsPagerProps): React.JSX.Element {
  const pager = getPagerForDoc(doc);
  if (!pager) {
    return <></>;
  }
  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: 'outline' })}
        >
          <ChevronLeftIcon className="mr-2 size-4 shrink-0" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: 'outline' }), 'ml-auto')}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 size-4 shrink-0" />
        </Link>
      )}
    </div>
  );
}

function normalizeLink(link: string): string {
  if (!link) {
    return link;
  }

  return link.replace('\\index', '').replace('\\', '/');
}

function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flattenItems(DOCS_LINKS), null];
  const activeIndex = flattenedLinks.findIndex(
    (link) => normalizeLink(doc.slug) === normalizeLink(link?.href)
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next
  };
}

function flattenItems<T>(items: T) {
  if (!Array.isArray(items)) {
    throw new Error('Input should be an array');
  }

  return items.reduce((acc, { title, href, items }) => {
    if (href) acc.push({ title, href });
    if (Array.isArray(items) && items.length > 0) {
      acc.push(...flattenItems(items));
    }
    return acc;
  }, [] as T);
}
