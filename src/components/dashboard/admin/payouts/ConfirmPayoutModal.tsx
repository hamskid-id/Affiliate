"use client";

import React, { useState } from "react";
import { CustomModal } from "@/src/components/ui/custom-modal";
import CustomButton from "@/src/components/ui/custom-button";
import CustomDropdown, {
  DropdownItem,
} from "@/src/components/ui/custom-dropdown";
import { ChevronDown, Check } from "lucide-react";
import { Payout } from "@/src/types/admin-payout";

interface ConfirmPayoutModalProps {
  open: boolean;
  onClose: () => void;
  payout: Payout | null;
  onConfirm: (paymentMethod: string) => void;
}

const ConfirmPayoutModal: React.FC<ConfirmPayoutModalProps> = ({
  open,
  onClose,
  payout,
  onConfirm,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<string>(
    payout?.paymentMethod || "Paypal",
  );

  const paymentMethodItems: DropdownItem[] = [
    { label: "Paypal", onClick: () => setPaymentMethod("Paypal") },
    {
      label: "Bank Transfer",
      onClick: () => setPaymentMethod("Bank Transfer"),
    },
    { label: "Stripe", onClick: () => setPaymentMethod("Stripe") },
  ];

  const handleConfirm = () => {
    onConfirm(paymentMethod);
    onClose();
  };

  if (!payout) return null;

  return (
    <CustomModal
      open={open}
      setOpen={onClose}
      title="Confirm Payout"
      width="sm:max-w-[440px]"
      description="You are about to mark this payout as paid. This action will update the affiliate's payout status in the system."
    >
      <div className="space-y-6">
        {/* Payout Details */}
        <div className="space-y-2 bg-[#4169E11A] rounded-[20px] p-[16px]">
          <div className="flex justify-between items-start">
            <span className="text-xs text-[#606060]">Affiliate Name:</span>
            <span className="text-sm font-medium text-[#111827]">
              {payout.affiliateName}
            </span>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-xs text-[#606060]">Total Amount:</span>
            <span className="text-sm font-semibold text-[#111827]">
              {payout.amount}
            </span>
          </div>

          {/* Payment Method Field */}
          <div className="flex justify-between items-center">
            <label className="text-xs text-[#606060] flex-1 justify-between flex items-center gap-2">
              Payment Method:
              {paymentMethod === "Paypal" && <span>🅿️</span>}
              {paymentMethod === "Bank Transfer" && <span>🏦</span>}
              {paymentMethod === "Stripe" && <span>💳</span>}
            </label>
            <CustomDropdown
              trigger={
                <button className="w-fit text-sm text-[#111827] hover:bg-gray-50 flex items-center justify-between">
                  {paymentMethod}
                  <ChevronDown className="w-4 h-4 text-[#6B7280]" />
                </button>
              }
              items={paymentMethodItems}
              className="w-full"
            />
          </div>

          <div className="flex justify-between items-start">
            <span className="text-xs text-[#606060]">Payout Date:</span>
            <span className="text-sm font-medium text-[#111827]">
              August 31st, 2025
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <CustomButton
            title="Cancel"
            className="flex-1 bg-white border-2 border-[#606060] text-[#606060] hover:bg-gray-50 shadow-none"
            onClick={onClose}
          />
          <CustomButton
            title="Confirm & Mark as Paid"
            className="flex-1 bg-[#FF5212] hover:bg-[#E54A10]"
            icon={<Check className="w-4 h-4" />}
            showIcon={true}
            onClick={handleConfirm}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default ConfirmPayoutModal;
