import { Payouts } from "@/src/types/admin-dashboard";
import { Check, Pause } from "lucide-react";
import React from "react";

interface PayoutActionsProps {
  payout: Payouts;
  onApprove?: (id: string) => void;
  onDeny?: (id: string) => void;
  onSuspend?: (id: string) => void;
  onView?: (id: string) => void;
}

export const PayoutActions: React.FC<PayoutActionsProps> = ({
  payout,
  onApprove,
  onDeny,
  onSuspend,
  onView,
}) => {
  if (payout.status === "Pending") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => onApprove?.(payout.id)}
          className="flex items-center gap-1 text-xs text-[#065F46] hover:text-[#047857] font-medium"
        >
          <Check className="w-3 h-3" />
          Approve
        </button>
        <button
          onClick={() => onDeny?.(payout.id)}
          className="flex items-center gap-1 text-xs text-[#DC2626] hover:text-[#B91C1C] font-medium"
        >
          <span>✕</span>
          Deny
        </button>
      </div>
    );
  }

  if (payout.status === "Approved") {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => onSuspend?.(payout.id)}
          className="flex items-center gap-1 text-xs text-[#DC2626] hover:text-[#B91C1C] font-medium"
        >
          <Pause className="w-3 h-3" />
          Suspend
        </button>
        <button
          onClick={() => onView?.(payout.id)}
          className="text-xs text-[#4F46E5] hover:text-[#4338CA] font-medium"
        >
          View
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => onView?.(payout.id)}
      className="text-xs text-[#4F46E5] hover:text-[#4338CA] font-medium"
    >
      View
    </button>
  );
};
