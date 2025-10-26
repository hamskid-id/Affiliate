"use client";

import React from "react";
import { Award, Users, ShoppingCart } from "lucide-react";

interface PerformingRule {
  name: string;
  description: string;
  amount: string;
  conversions: string;
  icon: React.ReactNode;
  iconBg: string;
  rank: number;
}

const TopPerformingRules: React.FC = () => {
  const rules: PerformingRule[] = [
    {
      name: "Premium Signup Rule",
      description: "₦5,000 flat commission",
      amount: "₦50,091",
      conversions: "11 conversions",
      icon: <Award className="w-5 h-5 text-white" />,
      iconBg: "bg-[#FF5212]",
      rank: 1,
    },
    {
      name: "Basic Signup Rule",
      description: "₦1,000 flat commission",
      amount: "₦50,091",
      conversions: "51 conversions",
      icon: <Users className="w-5 h-5 text-white" />,
      iconBg: "bg-[#FF5212]",
      rank: 2,
    },
    {
      name: "Purchase Commission",
      description: "2% of purchase value",
      amount: "₦50,091",
      conversions: "32 conversions",
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      iconBg: "bg-[#FF5212]",
      rank: 3,
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h2 className="text-lg font-bold text-[#111827] mb-4">
        Top Performing Rules
      </h2>

      <div className="space-y-3">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-[12px] bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors"
          >
            {/* Icon */}
            <div
              className={`${rule.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              {rule.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#111827] mb-0.5">
                {rule.name}
              </h3>
              <p className="text-xs text-[#6B7280]">{rule.description}</p>
            </div>

            {/* Stats */}
            <div className="text-right">
              <p className="text-base font-bold text-[#111827]">
                {rule.amount}
              </p>
              <p className="text-xs text-[#6B7280]">{rule.conversions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingRules;
