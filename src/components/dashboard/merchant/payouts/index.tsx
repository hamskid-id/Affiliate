"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import { CustomImage } from "../../../ui/custom-image";

import PendingPayoutsSvg from "@/public/assets/pending_payouts_svg.svg";
import TotalPaidSvg from "@/public/assets/total_paid_svg.svg";
import ProcessingPayoutsSvg from "@/public/assets/processing_payouts_svg.svg";
import FailedPayoutsSvg from "@/public/assets/failed_payouts_svg.svg";
import PayoutsList from "./payouts-table/PayoutsList";
import PayoutSettingsForm from "./PayoutSettingsForm";

const PayoutDashboard: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total affiliates due for payout",
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
      title: "Total amount payable",
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
      title: "Affiliates below threshold",
      value: "92",
      change: "+18%",
      trend: "up",
      subtitle: "vs. last month",
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
      title: "Next scheduled payout date",
      value: "Dec 1st",
      change: "+2.1%",
      trend: "up",
      subtitle: "2 weeks remaining",
      icon: (
        <CustomImage
          src={FailedPayoutsSvg}
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

      <PayoutSettingsForm />
    </div>
  );
};

export default PayoutDashboard;
