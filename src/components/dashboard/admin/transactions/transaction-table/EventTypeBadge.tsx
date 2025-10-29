import { EVENT_TYPE_STYLES } from "@/src/contants/admin-transaction";
import { Transaction } from "@/src/types/admin-transaction";
import React from "react";

interface EventTypeBadgeProps {
  type: Transaction["eventType"];
}

export const EventTypeBadge: React.FC<EventTypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-md font-medium ${EVENT_TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};
