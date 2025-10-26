"use client";

import React from "react";
import { UserPlus, ShoppingCart, Award, Layers } from "lucide-react";

interface RuleTemplate {
  name: string;
  icon: React.ReactNode;
  description: string;
  type: string;
  typeColor: string;
  buttonText: string;
  buttonColor: string;
  iconBg: string;
}

const QuickRuleTemplates: React.FC = () => {
  const templates: RuleTemplate[] = [
    {
      name: "Signup Bonus",
      icon: <UserPlus className="w-5 h-5 text-green-600" fill="#08CE08" />,
      description: "Flat ₦10 commission for each new user signup",
      type: "Flat Rate",
      typeColor: "bg-green-50 text-green-600",
      buttonText: "Use Template",
      buttonColor: "text-orange-600",
      iconBg: "bg-green-100",
    },
    {
      name: "Purchase Commission",
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
      description: "3% commission on all purchase transactions",
      type: "Percentage",
      typeColor: "bg-blue-50 text-blue-600",
      buttonText: "Use Template",
      buttonColor: "text-orange-600",
      iconBg: "bg-blue-100",
    },
    {
      name: "Tiered Commissions",
      icon: <Layers className="w-5 h-5 text-yellow-600" />,
      description: "Increasing rates based on performance levels",
      type: "Tiered",
      typeColor: "bg-yellow-50 text-yellow-600",
      buttonText: "Use Template",
      buttonColor: "text-orange-600",
      iconBg: "bg-yellow-100",
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[#111827]">
          Quick Rule Templates
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          Get started with pre-configured commission structures
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template, index) => (
          <div
            key={index}
            className="border border-[#E5E7EB] rounded-[20px] p-4 hover:border-[#FF5212] transition-colors flex flex-col gap-3"
          >
            {/* Icon and Name */}
            <div className="flex items-start gap-3">
              <div
                className={`${template.iconBg} w-[32px] h-[32px] rounded-[12px] flex items-center justify-center flex-shrink-0`}
              >
                {template.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#111827]">
                  {template.name}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-[#6B7280]">{template.description}</p>

            {/* Button */}
            <div className="flex justify-between items-center">
              <span
                className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${template.typeColor}`}
              >
                {template.type}
              </span>
              <button
                className={`text-sm font-medium  ${template.buttonColor}`}
              >
                {template.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickRuleTemplates;
