"use client";

import React from "react";
import { PerformanceCard } from "./PerformanceCard";
import { TOP_PERFORMING_BUSINESSES } from "@/src/types/admin-merchant";

export const TopPerformingBusinesses: React.FC = () => {
  return (
    <section>
      {/* Header */}
      <div className="mb-4 mt-2">
        <h2 className="sm:text-[20px] text-[18px] font-[700] text-[#333333]">
          Top Performing Businesses
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Highest Revenue */}
        <div>
          <PerformanceCard
            title="Highest Revenue"
            businesses={TOP_PERFORMING_BUSINESSES}
            type="revenue"
          />
        </div>

        {/* Most Affiliates */}
        <div>
          <PerformanceCard
            title="Most Affiliates"
            businesses={TOP_PERFORMING_BUSINESSES}
            type="affiliates"
          />
        </div>

        {/* Fastest Growing */}
        <div>
          <PerformanceCard
            title="Fastest Growing"
            businesses={TOP_PERFORMING_BUSINESSES}
            type="growth"
          />
        </div>
      </div>
    </section>
  );
};
