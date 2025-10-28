import { STATUS_STYLES } from "@/src/contants/admin-merchant";
import { Business } from "@/src/types/admin-merchant";
import React from "react";

interface BusinessStatusBadgeProps {
  status: Business["status"];
}

export const BusinessStatusBadge: React.FC<BusinessStatusBadgeProps> = ({
  status,
}) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
};
