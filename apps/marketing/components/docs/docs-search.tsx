'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@workspace/ui/components/command';
import { type DialogProps } from '@workspace/ui/components/dialog';

import { DOCS_LINKS } from '~/components/marketing-links';

export function DocsSearch(props: DialogProps): React.JSX.Element {
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative size-8 w-full justify-start rounded-md pl-2 pr-12 text-sm font-normal text-muted-foreground shadow-none"
        onClick={() => setOpen(true)}
        {...props}
      >
        <SearchIcon className="mr-2 size-3 shrink-0" />
        <span>Search docs</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          placeholder="Search docs (i.e. integrations, importing or billing)..."
          className="!p-0"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {DOCS_LINKS.map((group) => (
            <CommandGroup
              key={group.title}
              heading={
                <div className="mb-1 flex flex-row items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
                  {group.icon}
                  {group.title}
                </div>
              }
            >
              {group.items.map((item) => (
                <CommandItem
                  key={item.href + item.title}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(item.href as string));
                  }}
                >
                  <span className="pl-3 text-muted-foreground">
                    {item.title}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
