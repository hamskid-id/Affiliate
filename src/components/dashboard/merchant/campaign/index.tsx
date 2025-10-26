"use client";

import React from "react";
import TopPerformingCampaigns from "./TopPerformingCampaigns";
import PerformanceTrendsChart from "./PerformanceTrendsChart";
import CampaignsList from "./campaign-table/CampaignsList";
import DashboardAnalytics from "./Analytics";

const CampaignDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <DashboardAnalytics />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceTrendsChart />
        </div>
        <div className="lg:col-span-1">
          <TopPerformingCampaigns />
        </div>
      </div>

      <CampaignsList />
    </div>
  );
};

export default CampaignDetails;
