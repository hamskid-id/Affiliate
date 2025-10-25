"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../shared/StatsCard";
import { CustomImage } from "../../ui/custom-image";
import QuickRuleTemplates from "./QuickRuleTemplates";
import CommissionDistribution from "./CommissionDistribution";
import TopPerformingRules from "./TopPerformingRules";

// Import your SVG icons
import ActiveRulesSvg from "@/public/assets/active_rules_svg.svg";
import InactiveRulesSvg from "@/public/assets/inactive_rules_svg.svg";
import TotalRevenueSvg from "@/public/assets/total_revenue_svg.svg";
import AvgCommissionSvg from "@/public/assets/avg_commission_svg.svg";
import CommissionRulesList from "./commission-rules-table/CommissionRulesList";

const CommissionRules: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Active Rules",
      value: "24",
      change: "+12%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={ActiveRulesSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Inactive Rules",
      value: "6",
      change: "+3%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={InactiveRulesSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Total Revenue",
      value: "₦1,847,892",
      change: "+18%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={TotalRevenueSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Avg. Commission",
      value: "8.5%",
      change: "+2.1%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={AvgCommissionSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
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

      {/* Quick Rule Templates */}
      <QuickRuleTemplates />

      {/* Distribution and Top Performing Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommissionDistribution />
        <TopPerformingRules />
      </div>

      <CommissionRulesList />
    </div>
  );
};

export default CommissionRules;
