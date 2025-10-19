"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "../../shared/StatsCard";
import EventSvg from "@/public/assets/total_event_svg.svg";
import ActiveEventSvg from "@/public/assets/active_events_svg.svg";
import TotalClicks from "@/public/assets/conversion_rates.svg";
import CoversionRatesSvg from "@/public/assets/top_events_svg.svg";
import { CustomImage } from "../../ui/custom-image";
import EventsList from "./EventsList";
import EventPerformanceTrends from "./EventsPerformanceTrends";
import EventTypeDistribution from "./EventTypeDistribution";

const Event: React.FC = () => {
  const statsData: StatsCardProps[] = [
    {
      title: "Total Events",
      value: "8,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage src={EventSvg} style="w-[40px] h-[40px] rounded-[50px]" />
      ),
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Active Events",
      value: "2,847",
      change: "+8.3%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={ActiveEventSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Conversions Today",
      value: "1K",
      change: "+4.2%",
      trend: "up",
      subtitle: "vs. last month",
      icon: (
        <CustomImage
          src={TotalClicks}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Top Events",
      value: "Purchase",
      subtitle: "142 conversions",
      icon: (
        <CustomImage
          src={CoversionRatesSvg}
          style="w-[40px] h-[40px] rounded-[50px]"
        />
      ),
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventPerformanceTrends />
        </div>
        <div className="lg:col-span-1">
          <EventTypeDistribution />
        </div>
      </div>

      <EventsList />
    </div>
  );
};

export default Event;
