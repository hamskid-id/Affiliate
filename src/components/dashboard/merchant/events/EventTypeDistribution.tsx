"use client";

import React from "react";

interface EventType {
  name: string;
  percentage: number;
  eventCount: number;
  color: string;
}

const EventTypeDistribution: React.FC = () => {
  const eventTypes: EventType[] = [
    {
      name: "Purchase Events",
      percentage: 42,
      eventCount: 3,
      color: "#FF6B6B",
    },
    {
      name: "Registration Events",
      percentage: 33,
      eventCount: 2,
      color: "#4F46E5",
    },
    {
      name: "Page View Events",
      percentage: 17,
      eventCount: 1,
      color: "#10B981",
    },
    {
      name: "Custom Events",
      percentage: 8,
      eventCount: 4,
      color: "#F59E0B",
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <h2 className="text-lg font-bold text-[#111827] mb-4">
        Event Type Distribution
      </h2>
      <div className="space-y-3">
        {eventTypes.map((eventType, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-[12px] bg-[#F9FAFB]"
          >
            <div className="flex items-center gap-3">
              {/* Color Dot */}
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: eventType.color }}
              />
              {/* Event Name */}
              <h3 className="text-[15px] font-semibold text-[#111827]">
                {eventType.name}
              </h3>
            </div>

            {/* Right Side - Percentage and Count */}
            <div className="text-right">
              <p className="text-[20px] font-bold text-[#111827]">
                {eventType.percentage}%
              </p>
              <p className="text-[13px] text-[#9CA3AF]">
                {eventType.eventCount} event
                {eventType.eventCount !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTypeDistribution;
