import { PAYOUT_STATUS_STYLES } from "@/src/contants/merchant-payout";
import { Payout } from "@/src/types/merchant-payout";
import React from "react";

interface PayoutStatusBadgeProps {
  status: Payout["status"];
}

export const PayoutStatusBadge: React.FC<PayoutStatusBadgeProps> = ({
  status,
}) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${PAYOUT_STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
};
