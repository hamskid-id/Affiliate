"use client";

import React from "react";

interface Affiliate {
  name: string;
  value: number;
  color: string;
}

const TopAffiliates: React.FC = () => {
  const affiliates: Affiliate[] = [
    { name: "Sarah", value: 90, color: "#FF5722" },
    { name: "Mike", value: 75, color: "#4169E1" },
    { name: "Emma", value: 70, color: "#4169E1" },
    { name: "John", value: 60, color: "#4169E1" },
    { name: "Lisa", value: 45, color: "#4169E1" },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-[#111827]">Top Affiliates</h2>
        <button className="text-sm text-[#4169E1] font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {affiliates.map((affiliate, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-sm text-[#6B7280] w-12">
              {affiliate.name}
            </span>
            <div className="flex-1 relative">
              <div className="w-full bg-[#F3F4F6] rounded-[8px] h-8 overflow-hidden">
                <div
                  className="h-full rounded-[8px] transition-all duration-500"
                  style={{
                    width: `${affiliate.value}%`,
                    backgroundColor: affiliate.color,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAffiliates;
