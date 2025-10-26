"use client";

import React, { useMemo } from "react";
import { ChevronDown, TabletIcon } from "lucide-react";
import CustomDropdown, {
  DropdownItem,
} from "@/src/components/ui/custom-dropdown";
import { DesktopIcon, MobileIcon } from "@/src/svg";

interface DeviceType {
  name: string;
  clicks: string;
  conversions: string;
  percentage: string;
  color: string;
  icon: React.ReactNode;
}

const DevicePerformance: React.FC = () => {
  const deviceTypes: DeviceType[] = [
    {
      name: "Desktop",
      clicks: "12,847 clicks",
      conversions: "1118 conversions",
      percentage: "8.7%",
      color: "#4F46E5",
      icon: <DesktopIcon />,
    },
    {
      name: "Mobile",
      clicks: "8,234 clicks",
      conversions: "510 conversions",
      percentage: "6.2%",
      color: "#FF5212",
      icon: <MobileIcon />,
    },
    {
      name: "Tablet",
      clicks: "3,708 clicks",
      conversions: "294 conversions",
      percentage: "7.8%",
      color: "#10B981",
      icon: <TabletIcon />,
    },
  ];

  const filterDropdownItems: DropdownItem[] = useMemo(
    () => [
      {
        label: "This month",
      },
      { label: "Next Month" },
    ],
    [],
  );

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#111827]">Device Performance</h2>
        <CustomDropdown
          trigger={
            <button className="px-4 py-2 rounded-[50px] text-xs bg-[#3333331A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
              filterBy
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={filterDropdownItems}
          className="w-[180px]"
        />
      </div>

      <div className="space-y-5">
        {deviceTypes.map((device, index) => (
          <div key={index} className="space-y-2">
            {/* Device Name and Progress Bar */}
            <div className="flex items-center gap-3 justify-between">
              <div className="flex gap-2 items-center">
                {device.icon}
                <span className="text-sm font-medium text-[#111827] min-w-[60px]">
                  {device.name}
                </span>
              </div>
              <span className="text-sm font-bold text-[#111827] ml-2">
                {device.percentage}
              </span>
            </div>
            <div className="flex-1 bg-[#F3F4F6] rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  backgroundColor: device.color,
                  width: device.percentage,
                }}
              />
            </div>

            {/* Clicks and Conversions */}
            <div className="text-xs text-[#6B7280]">
              {device.clicks} • {device.conversions}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicePerformance;
