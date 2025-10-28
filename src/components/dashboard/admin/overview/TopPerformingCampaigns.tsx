"use client";

import React from "react";
import Link from "next/link";

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

  const displayedCampaigns = campaigns.slice(0, 3); // show first 3

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#111827]">
          Top Performing Campaigns
        </h2>
      </div>

      <div className="space-y-4 flex flex-col">
        {displayedCampaigns.map((campaign, index) => (
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
                  className={`text-[13px] font-[400] ${
                    campaign.trend === "up" ? "text-[#08CE08]" : "text-red-600"
                  }`}
                >
                  {campaign.trend === "up" ? "+12%" : "-8%"}
                </span>
              </div>
            </div>
          </div>
        ))}

        {campaigns.length > 3 && (
          <Link
            href="/merchants"
            className="text-center m-auto w-fit text-[14px] font-medium text-[#4F46E5] hover:text-[#4338CA] transition-colors"
          >
            View All
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopPerformingCampaigns;
