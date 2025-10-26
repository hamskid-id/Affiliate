import { Payout } from "@/src/types/payout";
import React from "react";

interface PaymentMethodBadgeProps {
  method: Payout["paymentMethod"];
}

export const PaymentMethodBadge: React.FC<PaymentMethodBadgeProps> = ({
  method,
}) => {
  const getIcon = () => {
    switch (method) {
      case "Paypal":
        return "🅿️";
      case "Bank Transfer":
        return "🏦";
      case "Stripe":
        return "💳";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-base">{getIcon()}</span>
      <span className="text-sm text-[#111827]">{method}</span>
    </div>
  );
};
