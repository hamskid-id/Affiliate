"use client";

import {
  FacebookTrafficSvg,
  GoogleAdsSvg,
  InstagramSvg,
  MailSvg,
} from "@/src/svg";
import React from "react";

interface TrafficSource {
  name: string;
  icon: React.ReactNode;
  visits: string;
  change: string;
  category: string;
}

const TrafficSources: React.FC = () => {
  const sources: TrafficSource[] = [
    {
      name: "Google Ads",
      icon: <GoogleAdsSvg />,
      visits: "342,891",
      change: "+8.2%",
      category: "Search campaigns",
    },
    {
      name: "Social Media",
      icon: <FacebookTrafficSvg />,
      visits: "198,472",
      change: "+5.1%",
      category: "Social media",
    },
    {
      name: "Instagram",
      icon: <InstagramSvg />,
      visits: "156,203",
      change: "+12.4%",
      category: "Influencer posts",
    },
    {
      name: "Email",
      icon: <MailSvg />,
      visits: "98,765",
      change: "+3.2%",
      category: "Email campaigns",
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h2 className="text-lg font-bold text-[#111827] mb-4">Traffic Sources</h2>
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-[13px] rounded-[12px] bg-[#F9F9F9]"
          >
            <div
              className={`bg-[#FF5212] w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl`}
            >
              {source.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-[#111827]">
                {source.name}
              </h3>
              <p className="text-xs text-[#9CA3AF]">{source.category}</p>
            </div>
            <div>
              <p className="text-[13px] font-[400]">{source.visits}</p>
              <span className="text-xs font-semibold text-green-600">
                {source.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficSources;
