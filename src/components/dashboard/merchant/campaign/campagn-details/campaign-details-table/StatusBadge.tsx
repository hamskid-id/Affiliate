import { CONVERSIONS_STATUS_STYLES } from "@/src/contants/campaign";
import { Conversion } from "@/src/types/campaign";
import React from "react";

interface StatusBadgeProps {
  status: Conversion["status"];
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${CONVERSIONS_STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
};
