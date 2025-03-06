'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { baseUrl, getPathname } from '@workspace/routes';
import { cn } from '@workspace/ui/lib/utils';

import { DocsSearch } from '~/components/docs/docs-search';
import { DOCS_LINKS } from '~/components/marketing-links';

export function DocsSidebar(): React.JSX.Element {
  const pathname = usePathname();
  if (DOCS_LINKS.length === 0) {
    return <></>;
  }
  return (
    <div className="w-full space-y-4">
      <div className="mb-8 p-1">
        <DocsSearch />
      </div>
      {DOCS_LINKS.map((item, index) => (
        <div
          key={index}
          className="pb-4"
        >
          <h4 className="mb-1 flex flex-row items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold">
            {item.icon}
            {item.title}
          </h4>
          {item?.items?.length && (
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {item.items.map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      'group flex w-full items-center rounded-lg border border-transparent px-2 py-1 hover:underline',
                      pathname === getPathname(item.href, baseUrl.Marketing)
                        ? 'font-medium text-foreground bg-accent'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span
                    key={index}
                    className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                  >
                    {item.title}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
