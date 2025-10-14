"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/src/contants/navigation";
import { NotificationIcon } from "@/src/svg";
import { Search, Plus } from "lucide-react";
import CustomButton from "../../ui/custom-button";

interface IAppHeader {
  notificationsCount?: number;
}

const AppHeader: React.FC<IAppHeader> = ({ notificationsCount = 0 }) => {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = React.useState("");

  const activeItem = navItems.find((item) => pathname === item.url);

  // If no active item found, don't render the header
  if (!activeItem) return null;

  const handleActionClick = () => {
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

      {/* Right Section - Search, Notification, Action Button */}
      {activeItem.showRightSection && (
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          {activeItem.showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#667085]" />
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-[300px] h-10 pl-10 pr-4 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent"
              />
            </div>
          )}

          {/* Notifications */}
          <div className="relative cursor-pointer">
            <NotificationIcon />
            {notificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E6F5EA] text-primary_40 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {notificationsCount}
              </span>
            )}
          </div>

          {/* Action Button */}
          {activeItem.showActionButton && (
            <CustomButton
              onClick={handleActionClick}
              className="h-10 px-5 bg-[#FF5C00] hover:bg-[#E54E00] text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
              {activeItem.actionButtonText || "Add New"}
            </CustomButton>
          )}
        </div>
      )}
    </header>
  );
};

export default AppHeader;
