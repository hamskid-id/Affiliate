"use client";

import React from "react";
import CustomAvatar from "../../../ui/custom-avatar";

interface Affiliate {
  id: string;
  name: string;
  avatar?: string;
  revenue: string;
  clicks: string;
  conversions: string;
}

const TopPerformingAffiliates: React.FC = () => {
  const topAffiliates: Affiliate[] = [
    {
      id: "1",
      name: "John Doe",
      revenue: "₦500,000",
      clicks: "10,000",
      conversions: "57.8%",
    },
    {
      id: "2",
      name: "Jane Smith",
      revenue: "₦450,000",
      clicks: "9,200",
      conversions: "54.3%",
    },
    {
      id: "3",
      name: "Michael Johnson",
      revenue: "₦420,000",
      clicks: "8,700",
      conversions: "51.5%",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold text-[#111827] mb-4">
        Top Performing Affiliates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topAffiliates.map((affiliate) => (
          <div
            key={affiliate.id}
            className="sm:p-[20px] p-[15px] bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <CustomAvatar
              className="w-[50px] h-[50px] mb-2"
              name={affiliate.name}
            />

            {/* Name */}
            <h3 className="text-base font-semibold text-[#111827] mb-4">
              {affiliate.name}
            </h3>

            {/* Stats */}
            <div className="w-full flex justify-between items-center gap-2 space-y-2">
              {/* Revenue */}
              <div className="flex flex-col items-center justify-between">
                <span className="text-xs text-[#6B7280]">Revenue</span>
                <span className="text-sm font-semibold text-green-600">
                  {affiliate.revenue}
                </span>
              </div>

              {/* Clicks */}
              <div className="flex flex-col items-center justify-between">
                <span className="text-xs text-[#6B7280]">Clicks</span>
                <span className="text-sm font-semibold text-[#111827]">
                  {affiliate.clicks}
                </span>
              </div>

              {/* Conversions */}
              <div className="flex flex-col items-center justify-between">
                <span className="text-xs text-[#6B7280]">Conversions</span>
                <span className="text-sm font-semibold text-[#111827]">
                  {affiliate.conversions}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingAffiliates;
