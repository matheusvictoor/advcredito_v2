import * as React from 'react';

import { ScrollArea } from '@workspace/ui/components/scroll-area';

import { DocsSidebar } from '~/components/docs/docs-sidebar';

export default function DocLayout(
  props: React.PropsWithChildren
): React.JSX.Element {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100svh-3.5rem)] w-full shrink-0 border-r lg:sticky lg:block">
          <ScrollArea className="h-full py-6 pr-6">
            <DocsSidebar />
          </ScrollArea>
        </aside>
        {props.children}
      </div>
    </div>
  );
}
