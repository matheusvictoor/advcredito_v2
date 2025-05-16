import * as React from "react";
import { ActivityIcon, CheckSquare2Icon, FileIcon } from "lucide-react";

import { Separator } from "@workspace/ui/components/separator";
import {
  UnderlinedTabs,
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger,
} from "@workspace/ui/components/tabs";

import { TenantActivityTab } from "~/components/organizations/slug/tenants/details/timeline/tenant-activity-tab";
import { TenantNotesTab } from "~/components/organizations/slug/tenants/details/notes/contact-notes-tab";
import { TenantTasksTab } from "~/components/organizations/slug/tenants/details/tasks/tenant-tasks-tab";
import type { TenantDto } from "~/types/dtos/tenant-dto";

enum Tab {
  Activity = "activity",
  Notes = "notes",
  Tasks = "tasks",
}

const tabList = [
  {
    icon: ActivityIcon,
    label: "Atividades",
    value: Tab.Activity,
  },
  {
    icon: FileIcon,
    label: "Notas",
    value: Tab.Notes,
  },
  {
    icon: CheckSquare2Icon,
    label: "Tarefas",
    value: Tab.Tasks,
  },
];

export type TenantTabsProps = {
  tenant: TenantDto;
};

export async function TenantTabs({
  tenant,
}: TenantTabsProps): Promise<React.JSX.Element> {
  return (
    <UnderlinedTabs
      defaultValue={Tab.Activity}
      className="flex size-full flex-col"
    >
      <UnderlinedTabsList className="h-12 max-h-12 min-h-12 gap-x-2 overflow-x-auto border-none px-4">
        {tabList.map((item) => (
          <UnderlinedTabsTrigger
            key={item.value}
            value={item.value}
            className="mx-0 border-t-4 border-t-transparent"
          >
            <div className="flex flex-row items-center gap-2 rounded-md px-2 py-1 hover:bg-accent">
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </div>
          </UnderlinedTabsTrigger>
        ))}
      </UnderlinedTabsList>
      <Separator />
      <UnderlinedTabsContent
        value={Tab.Activity}
        className="m-0 p-0 md:grow md:overflow-hidden"
      >
        <React.Suspense>
          <TenantActivityTab tenant={tenant} />
        </React.Suspense>
      </UnderlinedTabsContent>
      <UnderlinedTabsContent
        value={Tab.Notes}
        className="m-0 p-0 md:grow md:overflow-hidden"
      >
        <React.Suspense>
          <TenantNotesTab tenant={tenant} />
        </React.Suspense>
      </UnderlinedTabsContent>
      <UnderlinedTabsContent
        value={Tab.Tasks}
        className="m-0 p-0 md:grow md:overflow-hidden"
      >
        <React.Suspense>
          <TenantTasksTab tenant={tenant} />
        </React.Suspense>
      </UnderlinedTabsContent>
    </UnderlinedTabs>
  );
}
