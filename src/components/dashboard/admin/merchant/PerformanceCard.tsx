import React from "react";
import { BusinessListItem } from "./BusinessListItem";
import { TopPerformingBusiness } from "@/src/types/admin-merchant";

interface PerformanceCardProps {
  title: string;
  businesses: TopPerformingBusiness[];
  type: "revenue" | "affiliates" | "growth";
}

export const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  businesses,
  type,
}) => {
  const getValue = (business: TopPerformingBusiness) => {
    switch (type) {
      case "revenue":
        return business.revenue;
      case "affiliates":
        return business.affiliates.toLocaleString();
      case "growth":
        return business.growthRate;
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h3 className="text-[18px] font-semibold text-[#111827] mb-6">{title}</h3>
      <div className="space-y-3">
        {businesses.map((business) => (
          <BusinessListItem
            key={business.id}
            name={business.name}
            value={getValue(business)}
            isGrowth={type === "growth"}
          />
        ))}
      </div>
    </div>
  );
};
