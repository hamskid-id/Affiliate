"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomDropdown, { DropdownItem } from "../../ui/custom-dropdown";

interface ChartDataPoint {
  name: string;
  clicks: number;
  Coversions: number;
}

const EventPerformanceTrends: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>("This month");

  const chartData: ChartDataPoint[] = [
    { name: "Jan 1", clicks: 50, Coversions: 30 },
    { name: "Jan 8", clicks: 80, Coversions: 60 },
    { name: "Jan 15", clicks: 70, Coversions: 50 },
    { name: "Jan 22", clicks: 120, Coversions: 90 },
    { name: "Jan 29", clicks: 100, Coversions: 70 },
    { name: "Feb 5", clicks: 140, Coversions: 100 },
    { name: "Feb 12", clicks: 120, Coversions: 90 },
    { name: "Feb 19", clicks: 160, Coversions: 120 },
    { name: "Feb 26", clicks: 180, Coversions: 140 },
  ];

  const filterDropdownItems: DropdownItem[] = [
    { label: "All Campaigns", onClick: () => setFilterValue("All Campaigns") },
    {
      label: "Active Campaigns",
      onClick: () => setFilterValue("Active Campaigns"),
    },
    {
      label: "Paused Campaigns",
      onClick: () => setFilterValue("Paused Campaigns"),
    },
    {
      label: "Completed Campaigns",
      onClick: () => setFilterValue("Completed Campaigns"),
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h2 className="text-lg font-[600] text-[#111827]">
          Events Performance Trends
        </h2>
        <div className="flex items-center  ms-auto">
          <CustomDropdown
            trigger={
              <button className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
                {filterValue}
                <ChevronDown className="w-4 h-4" />
              </button>
            }
            items={filterDropdownItems}
            className="w-[200px]"
          />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorclicks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            domain={[0, 300]}
            ticks={[0, 50, 100, 150, 200, 250, 300]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="#FF6B6B"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorclicks)"
          />
          <Area
            type="monotone"
            dataKey="Performance"
            stroke="#4ECDC4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPerformance)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 mx-auto mt-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
          <span className="text-sm text-[#6B7280]">Events</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4ECDC4]"></div>
          <span className="text-sm text-[#6B7280]">Coversions</span>
        </div>
      </div>
    </div>
  );
};

export default EventPerformanceTrends;
