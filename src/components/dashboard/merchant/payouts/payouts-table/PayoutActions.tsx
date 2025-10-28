import { Payout } from "@/src/types/merchant-payout";
import React from "react";

interface PayoutActionsProps {
  payout: Payout;
  onMarkAsPaid?: () => void;
  onView?: () => void;
}

export const PayoutActions: React.FC<PayoutActionsProps> = ({
  payout,
  onMarkAsPaid,
  onView,
}) => {
  return (
    <div className="flex items-center gap-2">
      {payout.status !== "Paid" && (
        <button
          onClick={onMarkAsPaid}
          className="px-3 min-w-[90px] py-1.5 bg-[#4CAF50] text-white text-xs font-medium rounded-[50px] hover:bg-[#059669]"
        >
          Mark as paid
        </button>
      )}
      {payout.status === "Paid" && (
        <button className="min-w-[90px] px-3 py-1.5 border border-[#6B7280] text-[#6B7280] text-xs font-medium rounded-[50px]">
          Paid
        </button>
      )}
      <button
        onClick={onView}
        className="text-[#4F46E5] hover:text-[#4338CA] text-sm font-medium"
      >
        View
      </button>
    </div>
  );
};
