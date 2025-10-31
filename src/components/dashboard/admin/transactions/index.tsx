"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../../shared/StatsCard";
import { CustomImage } from "../../../ui/custom-image";

import TotalTransactionsSvg from "@/public/assets/Icon (1).svg";
import TotalCommissionsSvg from "@/public/assets/total_revenue_svg.svg";
import PendingApprovalSvg from "@/public/assets/pending_payouts_svg.svg";
import AvgCommissionSvg from "@/public/assets/avg_commission_svg.svg";
import TransactionList from "./transaction-table/TransactionList";

const AdminTransaction: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Transactions",
      value: "87,453",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. 756,241 last month",
      icon: (
        <CustomImage
          src={TotalTransactionsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Commissions",
      value: "23,847",
      change: "+8.2%",
      trend: "up",
      subtitle: "vs. 56,241 last month",
      icon: (
        <CustomImage
          src={TotalCommissionsSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Pending Approval",
      value: "₦5,035,713",
      change: "+15.7%",
      trend: "up",
      subtitle: "vs. 56,241 last month",
      icon: (
        <CustomImage
          src={PendingApprovalSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Avg. Commission",
      value: "₦55,713",
      change: "+3.1%",
      trend: "up",
      subtitle: "vs. 56,241 last month",
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
      <TransactionList />
    </div>
  );
};

export default AdminTransaction;
