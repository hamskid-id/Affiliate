"use client";

import React from "react";
import { Header } from "./Header";
import { SetupProgress } from "./SetupProgress";
import { SetupContent } from "./SetupContent";
import { AnalyticsDashboard } from "./AnalyticsDashboard";
import { CTASection } from "./CTASection";

const DashboardSetup = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="bg-gray-50 px-4 md:px-8 py-6 flex flex-col gap-5">
        <SetupProgress />
        <SetupContent />
        <AnalyticsDashboard />
        <CTASection />
      </div>
    </div>
  );
};

export default DashboardSetup;
