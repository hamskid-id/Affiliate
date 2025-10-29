"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import { CustomImage } from "../../../ui/custom-image";

import PendingPayoutsSvg from "@/public/assets/pending_payouts_svg.svg";
import TotalPaidSvg from "@/public/assets/total_paid_svg.svg";
import ProcessingPayoutsSvg from "@/public/assets/processing_payout_svg.svg";
import FailedPayoutsSvg from "@/public/assets/inactive_rules_svg.svg";
import PayoutsList from "./payouts-table/PayoutsList";
import PayoutSettingsForm from "./PayoutSettingsForm";

const AdminPayout: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Pending Payouts",
      value: "₦200,847",
      change: "+12%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={PendingPayoutsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Total Paid",
      value: "₦1,847,892",
      change: "+3%",
      trend: "up",
      subtitle: "Ready for payout",
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
      title: "Failed Payouts",
      value: "92",
      change: "+18%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={FailedPayoutsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Processing Time",
      value: "2 - 3",
      change: "+2.1%",
      trend: "up",
      subtitle: "days average",
      icon: (
        <CustomImage
          src={ProcessingPayoutsSvg}
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

      <PayoutsList />
    </div>
  );
};

export default AdminPayout;
