"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import { CustomImage } from "../../../ui/custom-image";

import PendingPayoutsSvg from "@/public/assets/pending_payouts_svg.svg";
import TotalPaidSvg from "@/public/assets/processing_payouts_svg.svg";
import ProcessingPayoutsSvg from "@/public/assets/active_campaign.svg";
import TotalBusinessSvg from "@/public/assets/total_revenue_svg.svg";
import SystemOverview from "./SystemOverview";
import TopPerformingCampaigns from "./TopPerformingCampaigns";
import { TopTables } from "./TopTables";
import TrafficSources from "./TrafficSources";
import GeographicPerformance from "./GeographicPerformance";
import PayoutList from "./payout-table/PayoutList";

const AdminDashboard: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Business",
      value: "847,293",
      change: "+12%",
      trend: "up",
      subtitle: "vs. 756,241 last month",
      icon: (
        <CustomImage
          src={TotalBusinessSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Total Affiliate",
      value: "23,847",
      change: "+3%",
      trend: "up",
      subtitle: "vs. 56,241 last month",
      icon: (
        <CustomImage
          src={TotalPaidSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Transactions Today",
      value: "₦1,847,892",
      change: "+18%",
      trend: "up",
      subtitle: "vs. 56,241 yesterday",
      icon: (
        <CustomImage
          src={ProcessingPayoutsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending Payouts",
      value: "₦5,035,713",
      change: "+2.1%",
      trend: "up",
      subtitle: "127 pending payments",
      icon: (
        <CustomImage
          src={PendingPayoutsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SystemOverview />
        </div>
        <div className="lg:col-span-1">
          <TopPerformingCampaigns />
        </div>
      </div>
      <TopTables />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrafficSources />
        <GeographicPerformance />
      </div>
      <PayoutList />
    </div>
  );
};

export default AdminDashboard;
