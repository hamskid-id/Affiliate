import { STATUS_STYLES } from "@/src/contants/affiliate";
import { Affiliate } from "@/src/types/affiliate";
import React from "react";

interface StatusBadgeProps {
  status: Affiliate["status"];
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
};
