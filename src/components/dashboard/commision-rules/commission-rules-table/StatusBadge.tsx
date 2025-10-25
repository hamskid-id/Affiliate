import { STATUS_STYLES } from "@/src/contants/commission-rule";
import { CommissionRule } from "@/src/types/commission-rule";
import React from "react";

interface StatusBadgeProps {
  status: CommissionRule["status"];
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
