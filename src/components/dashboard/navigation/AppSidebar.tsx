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
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import CustomAvatar from "../../ui/custom-avatar";
import { Button } from "../../ui/button";
import CustomDropdown from "../../ui/custom-dropdown";
import { cn } from "@/src/lib/utils";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: AppSidebarData;
  userProfile?: {
    name: string;
    role: string;
    avatar?: string;
  };
  campaigns?: Array<{ label: string; value: string }>;
}

export function AppSidebar({
  data,
  userProfile = {
    name: "Samuel Uchenna",
    role: "Merchant Admin",
    avatar: "/avatars/user.png",
  },
  campaigns = [
    { label: "All Campaigns", value: "All Campaigns" },
    { label: "Summer Sale 2025", value: "summer" },
    { label: "Black Friday", value: "blackfriday" },
  ],
  ...props
}: AppSidebarProps) {
  const { toggleSidebar, state } = useSidebar();
  const { navMain, logoIcon: LogoComponent } = data;
  const [selectedCampaign, setSelectedCampaign] = React.useState(
    campaigns[0].label,
  );

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="!shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]"
    >
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className={cn(
                "mt-0 mb-[1rem] h-[71px] data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground !px-1",
                isCollapsed && "h-[31px] mt-[0.8rem]",
              )}
            >
              {LogoComponent && (
                <LogoComponent
                  style={cn("", isCollapsed && "w-[46px] h-[31px]")}
                />
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div
          onClick={toggleSidebar}
          className="cursor-pointer mr-[-3rem] w-fit absolute top-[2.5rem] right-[1rem]"
        >
          <SideBarCollapseTrigger />
        </div>

        {/* Campaign Select Dropdown */}
        {!isCollapsed && (
          <div className="px-2 pb-4">
            <label className="text-xs text-[#4A4A4A] mb-2 block font-medium">
              Select Campaign
            </label>
            <CustomDropdown
              trigger={
                <Button
                  variant="outline"
                  className="bg-[#4169E11A] text-[#4A4A4A] capitalize w-full border border-[#4169E1] rounded-[50px] h-[40px] flex items-center justify-between gap-2 font-semibold text-[12px] md:text-[14px]"
                >
                  {selectedCampaign}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              }
              items={[{ label: "All" }]}
              className="w-[200px]"
            />
          </div>
        )}

        {/* Collapsed Campaign Dropdown Icon */}
        {isCollapsed && (
          <div className="px-2 pb-4 flex justify-center">
            <CustomDropdown
              trigger={
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4169E11A] border border-[#4169E1] transition-colors">
                  <ChevronDown className="w-4 h-4 text-[#4169E1]" />
                </button>
              }
              items={[{ label: "All" }]}
              className="w-[200px]"
            />
          </div>
        )}
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="px-3 custom-scroll !overflow-auto">
        <NavMain items={navMain} />
      </SidebarContent>

      {/* Footer with User Profile and Logout */}
      <SidebarFooter className="px-3 mt-auto border-t border-[#E5E7EB] pt-4">
        {/* User Profile */}
        {!isCollapsed ? (
          <div className="mb-3">
            <button className="flex items-center justify-between w-full transition-colors cursor-pointer px-3">
              <div className="flex items-center gap-3">
                <CustomAvatar
                  className="w-[40px] h-[40px]"
                  name={userProfile.name}
                  imageSrc=""
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-[#111827]">
                    {userProfile.name}
                  </span>
                  <span className="text-xs text-[#6B7280]">
                    {userProfile.role}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>
        ) : (
          <div className="mb-3 flex justify-center">
            <button className="w-8 h-8 rounded-full hover:bg-[#F3F4F6] transition-colors flex items-center justify-center">
              <CustomAvatar
                name={userProfile.name}
                imageSrc=""
                className="w-8 h-8"
              />
            </button>
          </div>
        )}

        {/* Logout Button */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="!px-3 flex items-center gap-2 text-sm font-medium hover:bg-[#FEF2F2] rounded-lg"
              onClick={() => {
                // Handle logout here
                console.log("Logging out...");
              }}
            >
              <LogOut className="h-4 w-4 text-[#FF5C5C]" />
              {!isCollapsed && <span className="text-[#FF5C5C]">Log Out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
