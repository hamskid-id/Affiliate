"use client";

import { navItems } from "@/src/contants/navigation";
import { Plus, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import CustomButton from "../../ui/custom-button";
import { Input } from "../../ui/input";
import NotificationBell from "../../ui/notification-bell";

interface IAppHeader {
  notificationsCount?: number;
}

const AppHeader: React.FC<IAppHeader> = ({ notificationsCount = 0 }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState("");

  // Find exact match first
  let activeItem = navItems.find((item) => pathname === item.url);

  // If no exact match, find the longest matching parent route
  if (!activeItem) {
    const matchingItems = navItems.filter((item) => {
      // Check if current path starts with the nav item's url and is a subroute
      return pathname.startsWith(item.url + "/");
    });

    // Sort by URL length (descending) to get the most specific match
    if (matchingItems.length > 0) {
      activeItem = matchingItems.sort((a, b) => b.url.length - a.url.length)[0];
    }
  }

  // If no active item found, don't render the header
  if (!activeItem) return null;
  if (activeItem.hideHeader) return null;

  // Check if we're on a subroute (not the exact main route)
  const isSubRoute = pathname !== activeItem.url;

  const handleActionClick = () => {
    // Priority 1: Use actionButtonUrl for navigation
    if (activeItem.actionButtonUrl) {
      router.push(activeItem.actionButtonUrl);
      return;
    }

    // Priority 2: Use custom onActionClick handler
    if (activeItem.onActionClick) {
      activeItem.onActionClick();
    }
  };

  return (
    <header
      className="!shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]
  w-full sm:h-22 h-20 sm:py-4 py-0 bg-white flex items-center justify-between sm:px-6 px-3"
    >
      {/* Left Section - Title and Description */}
      <div className="flex gap-4 items-center h-full py-2">
        <div className="flex flex-col">
          <h1 className="text-[#FF5C00] text-[22px] font-[700]">
            {activeItem.title}
          </h1>
          {activeItem.description && (
            <p className="text-sm text-[#667085] font-normal">
              {activeItem.description}
            </p>
          )}
        </div>
        <div className="px-4 h-full sm:flex hidden border-l-2 border-[#777777] items-center text-[14px] font-[400] text-[#8E8E8E]">
          <p>Last login 27th May, 2025</p>
        </div>
      </div>

      {activeItem.showRightSection && !isSubRoute && (
        <div className="md:flex hidden items-center gap-4">
          {/* Search Bar */}
          {activeItem.showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#667085]" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-[220px] h-[45px] pl-10 pr-4 rounded-[50px] bg-[#4169E11A]"
              />
            </div>
          )}

          {/* Notifications */}
          <NotificationBell notificationsCount={notificationsCount} />

          {/* Action Button */}
          {activeItem.showActionButton && (
            <CustomButton
              onClick={handleActionClick}
              withSideIcon
              sideIcon={<Plus className="w-5 h-5" />}
              iconPosition="left"
            >
              {activeItem.actionButtonText || "Add New"}
            </CustomButton>
          )}
        </div>
      )}
    </header>
  );
};

export default AppHeader;
