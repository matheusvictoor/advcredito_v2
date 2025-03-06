import * as React from 'react';
import { CheckIcon } from 'lucide-react';

import type { Theme } from '@workspace/ui/hooks/use-theme';

import { capitalize } from '~/lib/formatters';

export type ThemeOptionProps = { theme: Theme };

export function ThemeOption({ theme }: ThemeOptionProps): React.JSX.Element {
  const letters = 'Aa';
  return (
    <>
      <div className="group relative flex w-[120px] cursor-pointer overflow-hidden rounded-lg border">
        {theme === 'light' && (
          <div className="group flex w-[120px] items-end bg-neutral-50 pl-6 pt-6">
            <div className="flex h-[56px] flex-1 rounded-tl-lg border-l border-t border-neutral-200 bg-white pl-2 pt-2 text-lg font-medium text-gray-700 duration-200 ease-out group-hover:scale-110">
              {letters}
            </div>
          </div>
        )}
        {theme === 'dark' && (
          <div className="group flex w-[120px] items-end bg-neutral-900 pl-6 pt-6">
            <div className="flex h-[56px] flex-1 rounded-tl-lg border-l border-t border-neutral-700 bg-neutral-800 pl-2 pt-2 text-lg font-medium text-gray-200 duration-200 ease-out group-hover:scale-110">
              {letters}
            </div>
          </div>
        )}
        {theme === 'system' && (
          <>
            <div className="flex w-[120px] items-end overflow-hidden bg-neutral-50 pl-6 pt-6">
              <div className="flex h-[56px] flex-1 rounded-tl-lg border-l border-t border-neutral-200 bg-white pl-2 pt-2 text-lg font-medium text-gray-700 duration-200 ease-out group-hover:scale-110">
                {letters}
              </div>
            </div>
            <div className="flex w-[120px] items-end overflow-hidden bg-neutral-900 pl-6 pt-6">
              <div className="bg-800 flex h-[56px] flex-1 rounded-tl-lg border-l border-t border-neutral-700 pl-2 pt-2 text-lg font-medium text-gray-200 duration-200 ease-out group-hover:scale-110">
                {letters}
              </div>
            </div>
          </>
        )}
        <span className="absolute bottom-2 right-2 hidden size-5 items-center justify-center rounded-full bg-blue-500 p-0.5 text-white">
          <CheckIcon className="size-4 shrink-0" />
        </span>
      </div>
      <div className="block w-full p-2 pb-0 text-center text-xs font-normal">
        {capitalize(theme)}
      </div>
    </>
  );
}
