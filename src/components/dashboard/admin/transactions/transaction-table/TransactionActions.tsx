import React from "react";
import { Check, X, MoreVertical } from "lucide-react";
import { Transaction } from "@/src/types/admin-transaction";

interface TransactionActionsProps {
  transaction: Transaction;
  onApprove?: () => void;
  onReject?: () => void;
  onView?: () => void;
  onMore?: () => void;
}

export const TransactionActions: React.FC<TransactionActionsProps> = ({
  transaction,
  onApprove,
  onReject,
  onView,
  onMore,
}) => {
  if (transaction.status === "Pending") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={onApprove}
          className="flex items-center gap-1 text-xs text-[#065F46] hover:text-[#047857] font-medium"
        >
          <Check className="w-3 h-3" />
          Approve
        </button>
        <button
          onClick={onReject}
          className="flex items-center gap-1 text-xs text-[#DC2626] hover:text-[#B91C1C] font-medium"
        >
          <X className="w-3 h-3" />
          Reject
        </button>
        <button
          onClick={onMore}
          className="text-[#6B7280] hover:text-[#4B5563] p-1"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between  gap-2">
      <button
        onClick={onView}
        className="text-[#4F46E5] hover:text-[#4338CA] text-sm font-medium"
      >
        View
      </button>
      <button
        onClick={onMore}
        className="text-[#6B7280] hover:text-[#4B5563] p-1"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
};
