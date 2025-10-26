import { EVENT_TYPE_STYLES } from "@/src/contants/campaign";
import { Conversion } from "@/src/types/campaign";
import React from "react";

interface EventTypeBadgeProps {
  type: Conversion["eventType"];
}

export const EventTypeBadge: React.FC<EventTypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${EVENT_TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};
