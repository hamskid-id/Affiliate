"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

interface Campaign {
  name: string;
  revenue: string;
  conversionRate: string;
  trend: "up" | "down";
}

const TopPerformingCampaigns: React.FC = () => {
  const campaigns: Campaign[] = [
    {
      name: "Flash Sale Weekend",
      revenue: "₦542,891",
      conversionRate: "8.5%",
      trend: "up",
    },
    {
      name: "Valentine's Special",
      revenue: "₦132,200",
      conversionRate: "6.2%",
      trend: "up",
    },
    {
      name: "Summer Sale 2025",
      revenue: "₦78,000",
      conversionRate: "5.8%",
      trend: "up",
    },
    {
      name: "Flash Sale Weekend",
      revenue: "₦542,891",
      conversionRate: "4.1%",
      trend: "down",
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h2 className="text-lg font-bold text-[#111827] mb-4">
        Top Performing Campaigns
      </h2>
      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-[13px] rounded-[12px] bg-[#F9F9F9]"
          >
            <div>
              <h3 className="text-sm font-semibold text-[#111827]">
                {campaign.name}
              </h3>
              <p className="text-xs text-[#9CA3AF] mt-1">
                {campaign.conversionRate} conversion rate
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#111827]">
                {campaign.revenue}
              </p>
              <div className="flex items-center gap-1">
                <span
                  className={`text-[13px] font-[400] ${campaign.trend === "up" ? "text-[#08CE08]" : "text-red-600"}`}
                >
                  +12%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingCampaigns;
