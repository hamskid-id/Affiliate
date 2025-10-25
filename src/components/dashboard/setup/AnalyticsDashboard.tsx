import React from "react";
import { Lock, TrendingUp, TrendingDown, LockKeyhole } from "lucide-react";
import DashboardAnalytics from "../campaign/Analytics";

export const AnalyticsDashboard: React.FC = () => (
  <div className="py-5">
    {/* Header Section */}
    <div className="text-center flex flex-col gap-3 mb-12">
      <h2 className="text-[24px] font-bold text-gray-900">
        Your Analytics Dashboard
      </h2>
      <p className="text-sm text-gray-600">
        Complete setup to unlock your performance metrics and start tracking
        your success
      </p>
    </div>

    {/* Analytics Grid */}
    <div className="relative">
      {/* Background blurred metrics */}
      <div className="min-h-[14rem]">
        <DashboardAnalytics reduceOnMobile />
      </div>

      {/* Locked Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm rounded-[20px]">
        <div className="bg-gray-200 rounded-full p-4 mb-4">
          <LockKeyhole size={32} className="text-[gray]" />
        </div>
        <h3 className="text-lg font-[600] text-gray-900 mb-1">
          Complete Setup to Unlock Analytics
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Finish the steps above to access your dashboard
        </p>
        <p className="text-xs text-[#A4A4A4] animate-bounce">
          2 steps remaining ↑
        </p>
      </div>
    </div>
  </div>
);
