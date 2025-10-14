"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/src/components/ui/sidebar";
import { AppSidebarData } from "@/src/types/navigation";
import { SideBarCollapseTrigger } from "@/src/svg";
import { NavMain } from "./AppSidebarMain";
import { LogOut } from "lucide-react";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: AppSidebarData;
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  const { toggleSidebar, state } = useSidebar();
  const { navMain, logoIcon: LogoComponent } = data;

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="!shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]
"
    >
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="mt-0 mb-[1rem] h-[71px] data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground !px-1"
            >
              {LogoComponent && !isCollapsed && <LogoComponent />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div
          onClick={toggleSidebar}
          className="cursor-pointer mr-[-3rem] w-fit absolute top-[2.5rem] right-[1rem]"
        >
          <SideBarCollapseTrigger />
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="px-3 custom-scroll">
        <NavMain items={navMain} />
      </SidebarContent>

      {/* Footer with Logout */}
      <SidebarFooter className="px-1 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="flex items-center gap-2 text-sm font-medium "
              onClick={() => {
                // Handle logout here
                console.log("Logging out...");
              }}
            >
              <LogOut className="h-4 w-4 text-[#FF5C5C]" />
              {!isCollapsed && <span className="text-[#FF5C5C]">Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
