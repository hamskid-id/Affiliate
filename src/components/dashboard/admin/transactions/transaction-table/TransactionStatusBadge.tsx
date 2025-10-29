import { STATUS_STYLES } from "@/src/contants/admin-transaction";
import { Transaction } from "@/src/types/admin-transaction";
import React from "react";

interface TransactionStatusBadgeProps {
  status: Transaction["status"];
}

export const TransactionStatusBadge: React.FC<TransactionStatusBadgeProps> = ({
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
