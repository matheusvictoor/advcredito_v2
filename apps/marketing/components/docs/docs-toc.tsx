'use client';

import * as React from 'react';

import { useMounted } from '@workspace/ui/hooks/use-mounted';
import { cn } from '@workspace/ui/lib/utils';

import { type TableOfContents } from '~/lib/toc';

type DocsTocProps = {
  toc: TableOfContents;
};

export function DocsToc({ toc }: DocsTocProps): React.JSX.Element {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1] ?? '')
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items || !mounted) {
    return <></>;
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree
        tree={toc}
        activeItem={activeHeading}
      />
    </div>
  );
}

function useActiveItem(itemIds: string[]): string | undefined {
  const [activeId, setActiveId] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

type TreeProps = {
  tree: TableOfContents;
  level?: number;
  activeItem?: string;
};

function Tree({ tree, level = 1, activeItem }: TreeProps): React.JSX.Element {
  if (!tree || !tree.items || !tree.items.length || level > 2) {
    return <></>;
  }
  return (
    <ul className={cn('m-0 list-none', { 'pl-2': level !== 1 })}>
      {tree.items.map((item, index) => (
        <li
          key={index}
          className="mt-0 pt-2"
        >
          <a
            href={item.url}
            className={cn(
              'inline-block no-underline transition-colors hover:text-foreground',
              item.url === `#${activeItem}`
                ? 'font-medium text-foreground'
                : 'text-muted-foreground'
            )}
          >
            {item.title}
          </a>
          {item.items?.length ? (
            <Tree
              tree={item}
              level={level + 1}
              activeItem={activeItem}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
