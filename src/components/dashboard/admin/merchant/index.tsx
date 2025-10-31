"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import { CustomImage } from "../../../ui/custom-image";

import PendingPayoutsSvg from "@/public/assets/avg_commission_svg.svg";
import ProcessingPayoutsSvg from "@/public/assets/inactive_rules_svg.svg";
import ActiveAccountSvg from "@/public/assets/active_campaign.svg";
import TotalBusinessSvg from "@/public/assets/total_revenue_svg.svg";
import { TopPerformingBusinesses } from "./TopPerformingBusinesses";
import ManageBusinessList from "./business-table/ManageBusinessList";

const AdminMerchant: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Business",
      value: "87,453",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. 756,241 last month",
      icon: (
        <CustomImage
          src={TotalBusinessSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Active Accounts",
      value: "23,847",
      change: "+8.2%",
      trend: "up",
      subtitle: "vs. 56,241 last month",
      icon: (
        <CustomImage
          src={ActiveAccountSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Suspended",
      value: "7,892",
      change: "-3.1%",
      trend: "down",
      subtitle: "vs. 56,241 yesterday",
      icon: (
        <CustomImage
          src={ProcessingPayoutsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Monthly Revenue",
      value: "₦5,035,713",
      change: "+15.7%",
      trend: "up",
      subtitle: "vs. 56,241 yesterday",
      icon: (
        <CustomImage
          src={PendingPayoutsSvg}
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
      <TopPerformingBusinesses />
      <ManageBusinessList />
    </div>
  );
};

export default AdminMerchant;
