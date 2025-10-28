"use client";

import React from "react";
import Link from "next/link";
import { TopMerchantsTable } from "./TopMerchantsTable";
import { TopAffiliatesTable } from "./TopAffiliatesTable";
import {
  MOCK_TOP_AFFILIATES,
  MOCK_TOP_MERCHANTS,
} from "@/src/contants/admin-dashboard";

export const TopTables: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-semibold text-[#111827]">
            Top Merchants
          </h3>
          <Link
            href="/merchants"
            className="text-[14px] font-medium text-[#4F46E5] hover:text-[#4338CA] transition-colors"
          >
            View All
          </Link>
        </div>

        <TopMerchantsTable merchants={MOCK_TOP_MERCHANTS} />
      </div>

      <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-semibold text-[#111827]">
            Top Affiliates
          </h3>
          <Link
            href="/affiliates"
            className="text-[14px] font-medium text-[#4F46E5] hover:text-[#4338CA] transition-colors"
          >
            View All
          </Link>
        </div>

        <TopAffiliatesTable affiliates={MOCK_TOP_AFFILIATES} />
      </div>
    </div>
  );
};
