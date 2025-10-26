"use client";

import React, { useMemo } from "react";
import CustomDropdown, { DropdownItem } from "../../../ui/custom-dropdown";
import { ChevronDown } from "lucide-react";

interface CommissionType {
  name: string;
  amount: string;
  percentage: string;
  color: string;
}

const CommissionDistribution: React.FC = () => {
  const commissionTypes: CommissionType[] = [
    {
      name: "Signup Commissions",
      amount: "₦501,000",
      percentage: "42.2%",
      color: "#FF5212",
    },
    {
      name: "Purchase Commissions",
      amount: "₦392,070",
      percentage: "33.0%",
      color: "#4F46E5",
    },
    {
      name: "Premium Signups",
      amount: "₦200,007",
      percentage: "16.8%",
      color: "#10B981",
    },
    {
      name: "Renewals",
      amount: "₦134,458",
      percentage: "11.3%",
      color: "#F59E0B",
    },
  ];

  const filterDropdownItems: DropdownItem[] = useMemo(
    () => [
      {
        label: "This month",
      },
      { label: "Next Month" },
    ],
    [],
  );

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-[#111827]">
          Commission Distribution
        </h2>
        <CustomDropdown
          trigger={
            <button className="px-4 py-2 rounded-[50px] text-xs bg-[#3333331A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
              filterBy
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={filterDropdownItems}
          className="w-[180px]"
        />
      </div>

      <div className="space-y-[20px]">
        {commissionTypes.map((type, index) => (
          <div key={index} className="space-y-2">
            {/* Name and Amount */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-sm font-medium text-[#111827]">
                  {type.name}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-[#111827]">
                  {type.amount}
                </p>
                <p className="text-xs text-[#6B7280]">{type.percentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommissionDistribution;
