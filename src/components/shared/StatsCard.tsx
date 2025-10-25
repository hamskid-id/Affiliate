"use client";

import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  trend,
  subtitle,
  icon,
}) => {
  return (
    <div className="gap-2 flex flex-col justify-between shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] bg-white rounded-[20px] p-[20px]">
      <div className="flex justify-between items-center">
        <div>{icon}</div>
        <div className="flex items-center gap-1">
          {trend === "up" ? (
            <ArrowUp className="w-4 h-4 text-green-400" />
          ) : (
            <ArrowDown className="w-4 h-4 text-red-600" />
          )}
          <span
            className={`text-sm font-semibold ${trend === "up" ? "text-green-400" : "text-red-600"}`}
          >
            {change}
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-1 gap-1">
          <p className="text-sm text-[#6B7280] font-medium">{title}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-2">
            {value}
          </h3>
          <p className="text-xs text-[#9CA3AF] mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
