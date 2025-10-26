"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import TopPerformingAffiliates from "./TopPerformingAffiliates";
import AffiliateSvg from "@/public/assets/Icon.svg";
import ActiveAffiliateSvg from "@/public/assets/active_campaign.svg";
import TotalClicks from "@/public/assets/total_clicks.svg";
import CoversionRatesSvg from "@/public/assets/conversion_rates.svg";
import { CustomImage } from "../../../ui/custom-image";
import AffiliatesList from "./affiliates-table/AffiliatesList";

const Affiliate: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Affiliates",
      value: "8,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={AffiliateSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Active Affiliates",
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={ActiveAffiliateSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending Affiliates",
      value: "1K",
      change: "+4.2%",
      trend: "up",
      subtitle: "vs. 56,241 yesterday",
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
      title: "Total Commission",
      value: "3.8%",
      change: "-2.1%",
      trend: "down",
      subtitle: "vs. 56,241 yesterday",
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
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <TopPerformingAffiliates />
      <AffiliatesList />
    </div>
  );
};

export default Affiliate;
