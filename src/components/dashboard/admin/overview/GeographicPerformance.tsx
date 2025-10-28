"use client";

import country from "@/public/assets/country.svg";
import { CustomImage } from "@/src/components/ui/custom-image";
import React from "react";

interface Country {
  name: string;
  country: string;
  percentage: number;
}

const GeographicPerformance: React.FC = () => {
  const countries: Country[] = [
    { name: "United States", country: country, percentage: 92 },
    { name: "United Kingdom", country: country, percentage: 68 },
    { name: "Canada", country: country, percentage: 58 },
    { name: "Nigeria", country: country, percentage: 48 },
    { name: "Ghana", country: country, percentage: 39 },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h2 className="text-lg font-bold text-[#111827] mb-4">
        Geographic Performance
      </h2>

      <div className="space-y-6">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between gap-6">
            {/* Left: Flag + Name */}
            <div className="flex items-center gap-3 min-w-[150px]">
              <CustomImage
                src={country.country}
                style="w-[40px] h-[40px] rounded-full object-cover"
              />
              <span className="text-sm font-medium text-[#111827]">
                {country.name}
              </span>
            </div>

            {/* Right: Progress bar + percentage */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-full bg-[#F3F4F6] rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-green-700 rounded-full transition-all duration-500"
                  style={{ width: `${country.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-[#111827] w-[40px] text-right">
                {country.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeographicPerformance;
