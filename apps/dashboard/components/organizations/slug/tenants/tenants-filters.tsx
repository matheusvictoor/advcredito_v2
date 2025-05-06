"use client";

import * as React from "react";
import {
  ArchiveIcon,
  BuildingIcon,
  GridIcon,
  SearchIcon,
  SquareCheckBigIcon,
  UserIcon,
} from "lucide-react";
import { useQueryState } from "nuqs";

import { Button } from "@workspace/ui/components/button";
import { InputSearch } from "@workspace/ui/components/input-search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  UnderlinedTabs,
  UnderlinedTabsList,
  UnderlinedTabsTrigger,
} from "@workspace/ui/components/tabs";
import { useMediaQuery } from "@workspace/ui/hooks/use-media-query";
import { MediaQueries } from "@workspace/ui/lib/media-queries";

import { searchParams } from "~/components/organizations/slug/tenants/tenants-search-params";
import { useTransitionContext } from "~/hooks/use-transition-context";
import { RecordsOption } from "~/schemas/tenants/get-tenants-schema";
import { cn } from "@workspace/ui/lib/utils";

export type TenantsFiltersProps = {
  assetsCount: number;
  countArchived: number;
};

export function TenantsFilters({
  assetsCount,
  countArchived,
}: TenantsFiltersProps): React.JSX.Element {
  const { startTransition } = useTransitionContext();
  const [showMobileSerch, setShowMobileSearch] = React.useState<boolean>(false);
  const smUp = useMediaQuery(MediaQueries.SmUp, { fallback: false });

  const [searchQuery, setSearchQuery] = useQueryState(
    "searchQuery",
    searchParams.searchQuery.withOptions({
      startTransition,
      shallow: false,
    }),
  );

  const [records, setRecords] = useQueryState(
    "records",
    searchParams.records.withOptions({
      startTransition,
      shallow: false,
    }),
  );

  const [archived, setArchived] = useQueryState(
    "archived",
    searchParams.archived.withOptions({
      startTransition,
      shallow: false,
    }),
  );

  const [pageIndex, setPageIndex] = useQueryState(
    "pageIndex",
    searchParams.pageIndex.withOptions({
      startTransition,
      shallow: false,
    }),
  );

  const handleSearchQueryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = e.target?.value || "";
    if (value !== searchQuery) {
      setSearchQuery(value);
      if (pageIndex !== 0) {
        setPageIndex(0);
      }
    }
  };

  const handleRecordsChange = (value: string): void => {
    if (value !== records) {
      setRecords(value as RecordsOption);
      if (pageIndex !== 0) {
        setPageIndex(0);
      }
    }
  };

  const handleShowMobileSearch = (): void => {
    setShowMobileSearch(true);
  };

  const handleHideMobileSearch = (): void => {
    setShowMobileSearch(false);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <UnderlinedTabs
          value={records}
          onValueChange={handleRecordsChange}
          className="hidden sm:flex -ml-2"
        >
          <UnderlinedTabsList className="mr-2 h-12 max-h-12 min-h-12 gap-x-2 border-none">
            {recordsOptions.map((option) => (
              <UnderlinedTabsTrigger
                key={option.value}
                value={option.value}
                className="mx-0 border-t-4 border-t-transparent"
              >
                <div className="flex flex-row items-center gap-2 rounded-md px-2 py-1 hover:bg-accent">
                  {option.icon}
                  {option.label}
                </div>
              </UnderlinedTabsTrigger>
            ))}
          </UnderlinedTabsList>
        </UnderlinedTabs>
        <Select
          value={records}
          onValueChange={(value) => setRecords(value as RecordsOption)}
        >
          <SelectTrigger className="flex sm:hidden">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {recordsOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex flex-row items-center gap-2 pr-2">
                  {option.icon}
                  {option.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <div className="hidden sm:flex gap-2">
          {archivedOptions.map((option) => {
            const isSelected = archived === (option.value === "archived");
            return (
              <Button
                key={option.value}
                variant={isSelected ? "outline" : "ghost"}
                className={cn(
                  "flex items-center gap-2 border",
                  isSelected
                    ? ""
                    : "border-muted bg-background text-muted-foreground hover:bg-muted",
                )}
                onClick={() => setArchived(option.value === "archived")}
              >
                {option.icon}
                <span>{option.label}</span>
                <span
                  className={cn(
                    "ml-1 flex h-5 w-5 items-center justify-center rounded-full text-xs",
                    isSelected
                      ? "bg-green-600 text-white"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {option.value === "active" ? assetsCount : countArchived}
                </span>
              </Button>
            );
          })}
        </div>
        <Select
          value={archived ? "archived" : "active"}
          onValueChange={(value) => setArchived(value === "archived")}
        >
          <SelectTrigger className="flex sm:hidden min-w-[130px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {archivedOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-2">
                  {option.icon}
                  {option.label}
                  <span
                    className={cn(
                      "ml-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold",
                      archived === (option.value === "archived")
                        ? "bg-green-600 text-white"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {option.value === "active" ? assetsCount : countArchived}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        {smUp ? (
          <InputSearch
            placeholder="Pesquisar por nome, email ou telefone..."
            className="w-[340px]"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        ) : (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleShowMobileSearch}
            >
              <SearchIcon className="size-4 shrink-0" />
            </Button>
            {showMobileSerch && (
              <div className="absolute inset-0 z-30 bg-background pl-3 pr-5">
                <InputSearch
                  autoFocus
                  alwaysShowClearButton
                  placeholder="Pesquisar por nome, email ou telefone..."
                  className="h-12 w-full border-none !ring-0"
                  containerClassName="h-12"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  onClear={handleHideMobileSearch}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

const recordsOptions = [
  {
    label: "Todos",
    value: RecordsOption.All,
    icon: <GridIcon className="size-4 shrink-0" />,
  },
  {
    label: "Pessoa",
    value: RecordsOption.People,
    icon: <UserIcon className="size-4 shrink-0" />,
  },
  {
    label: "Empresa",
    value: RecordsOption.Companies,
    icon: <BuildingIcon className="size-4 shrink-0" />,
  },
];

const archivedOptions = [
  {
    label: "Ativo",
    value: "active",
    icon: <SquareCheckBigIcon className="size-4 shrink-0" />,
  },
  {
    label: "Arquivado",
    value: "archived",
    icon: <ArchiveIcon className="size-4 shrink-0" />,
  },
];
