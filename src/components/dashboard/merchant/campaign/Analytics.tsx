"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import CampaignSvg from "@/public/assets/Icon.svg";
import ActiveCampaignSvg from "@/public/assets/active_campaign.svg";
import TotalClicks from "@/public/assets/total_clicks.svg";
import CoversionRatesSvg from "@/public/assets/conversion_rates.svg";
import { CustomImage } from "../../../ui/custom-image";

interface isDashboardAnalytics {
  reduceOnMobile?: boolean;
}

const DashboardAnalytics: React.FC<isDashboardAnalytics> = ({
  reduceOnMobile,
}) => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Campaigns",
      value: "8,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. last month",
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
      title: "Active Campaigns",
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={ActiveCampaignSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Clicks",
      value: "1K",
      change: "+4.2%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={TotalClicks}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "-2.1%",
      trend: "down",
      subtitle: "2.8% conversion rate",
      icon: (
        <CustomImage
          src={CoversionRatesSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={
            reduceOnMobile && index > 0
              ? "hidden sm:block" // Hide all but the first card on mobile
              : ""
          }
        >
          <StatsCard {...stat} />
        </div>
      ))}
    </div>
  );
};

export default DashboardAnalytics;
