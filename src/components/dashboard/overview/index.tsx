"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CustomDropdown, { DropdownItem } from "../../ui/custom-dropdown";
import StatsCard from "../../shared/StatsCard";
import ConversionTrendsChart from "./ConversionTrendsChart";
import TopAffiliates from "./TopAffiliates";
import TopPerformingCampaigns from "./TopPerformingCampaigns";
import TrafficSources from "./TrafficSources";
import GeographicPerformance from "./GeographicPerformance";
import RecentPayouts from "./RecentPayouts";
import { Button } from "../../ui/button";
import CampaignSvg from "@/public/assets/Icon.svg";
import AffiliateSvg from "@/public/assets/Icon (1).svg";
import PayoutSvg from "@/public/assets/Icon (2).svg";
import EndSvg from "@/public/assets/Icon (3).svg";
import { CustomImage } from "../../ui/custom-image";
import DashboardSetup from "../setup";

interface StatData {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const Overview: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>("All Campaigns");
  const dashboardIsSetup = false;
  const statsData: StatData[] = [
    {
      title: "Total Campaigns",
      value: "8,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "6000 active campaigns",
      icon: (
        <CustomImage
          src={CampaignSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Total Affiliates",
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      subtitle: "2000 active affiliates",
      icon: (
        <CustomImage
          src={AffiliateSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending Payouts",
      value: "₦1,847,892",
      change: "+4.2%",
      trend: "up",
      subtitle: "127 pending payments",
      icon: (
        <CustomImage src={PayoutSvg} style="w-[40px] h-[40px] rounded-[50px]" />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Commissions Earned",
      value: "₦5,035,713",
      change: "-2.1%",
      trend: "down",
      subtitle: "This month: ₦1,227,384",
      icon: (
        <CustomImage src={EndSvg} style="w-[40px] h-[40px] rounded-[50px]" />
      ),
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
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

  if (!dashboardIsSetup) return <DashboardSetup />;

  return (
    <div className="space-y-6">
      {/* Header with Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 ms-auto">
          <span className="text-sm text-[#6B7280]">Filter by:</span>
          <CustomDropdown
            trigger={
              <Button
                variant="outline"
                className="bg-[#4169E11A] w-[180px] border border-[#4169E1] rounded-[50px] h-[40px] flex items-center justify-between gap-2 text-gray-500 font-semibold text-[12px] md:text-[14px]"
              >
                {filterValue}
                <ChevronDown className="w-4 h-4" />
              </Button>
            }
            items={filterDropdownItems}
            className="w-[200px]"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ConversionTrendsChart />
        </div>
        <div className="lg:col-span-1">
          <TopAffiliates />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TopPerformingCampaigns />
        <TrafficSources />
        <GeographicPerformance />
      </div>

      <RecentPayouts />
    </div>
  );
};

export default Overview;
