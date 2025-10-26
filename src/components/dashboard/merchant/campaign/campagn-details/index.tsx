"use client";

import React from "react";
import TotalClicksSvg from "@/public/assets/details_total_clicks_svg.svg";
import ConversionsSvg from "@/public/assets/conversions_svg.svg";
import ConversionRateSvg from "@/public/assets/conversion_rate_svg.svg";
import AttributedRevenueSvg from "@/public/assets/attributed_revenue_svg.svg";
import PendingCommissionSvg from "@/public/assets/pending_commission_svg.svg";
import PaidCommissionSvg from "@/public/assets/paid_commission_svg.svg";
import StatsCard, { StatsCardProps } from "@/src/components/shared/StatsCard";
import { CustomImage } from "@/src/components/ui/custom-image";
import PerformanceTrendsChart from "./PerformanceTrendsChart";
import GeographicPerformance from "./GeographicPerformance";
import TrafficSources from "./TrafficSources";
import DevicePerformance from "./DevicePerformance";
import ConversionsList from "./campaign-details-table/ConversionsList";
import { ChevronRight } from "lucide-react";
import { StatusBadge } from "../campaign-table/StatusBadge";

const CampaignDetails: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Clicks",
      value: "847,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. 756,241 last month",
      icon: (
        <CustomImage
          src={TotalClicksSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Conversions",
      value: "23,847",
      change: "+8.2%",
      trend: "up",
      subtitle: "2.8% conversion rate",
      icon: (
        <CustomImage
          src={ConversionsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Conversion Rate",
      value: "₦1,847,892",
      change: "+3.1%",
      trend: "up",
      subtitle: "127 pending payments",
      icon: (
        <CustomImage
          src={ConversionRateSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Attributed Revenue",
      value: "₦1,847,892",
      change: "+3.1%",
      trend: "up",
      subtitle: "127 pending payments",
      icon: (
        <CustomImage
          src={AttributedRevenueSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Pending Commission",
      value: "₦1,005,257",
      change: "+15.7%",
      trend: "up",
      subtitle: "All-time earnings",
      icon: (
        <CustomImage
          src={PendingCommissionSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Paid Commission",
      value: "₦5,035,713",
      change: "+10.7%",
      trend: "up",
      subtitle: "All-time earnings",
      icon: (
        <CustomImage
          src={PaidCommissionSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-[12px] bg-white rounded-[12px] sm:px-[20px] py-[12px] px-[15px]">
        <span className="text-[#A3A3A3] font-[500] text-[14px]">Campaigns</span>
        <span className="text-[#A3A3A3]">
          <ChevronRight className="w-4 h-4" />
        </span>
        <span className="text-[#A3A3A3] font-[500] text-[14px]">View</span>
        <span className="text-[#A3A3A3]">
          <ChevronRight className="w-4 h-4" />
        </span>
        <span className="text-[#171717] font-[500] text-[14px]">
          Summer Promo 2025
        </span>
      </div>

      <div className="bg-white rounded-[20px]  sm:p-[20px] p-[15px]">
        <div className="flex gap-2 items-center flex-wrap">
          <h1 className="md:text-[22px] text-xl font-bold text-[#171717] dark:text-white mb-1">
            Summer Promo 2025
          </h1>
          <StatusBadge status={"Active"} />
        </div>
        <p className="text-sm text-[#737373] dark:text-neutral-400">
          Track your clicks, conversions, and commissions for this campaign.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceTrendsChart />
        </div>
        <div className="lg:col-span-1">
          <TrafficSources />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GeographicPerformance />

        <DevicePerformance />
      </div>

      <ConversionsList />
    </div>
  );
};

export default CampaignDetails;
