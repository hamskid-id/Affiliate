"use client";

import React, { useState } from "react";
import { Copy, UserPlus2 } from "lucide-react";
import CustomButton from "../../../ui/custom-button";
import { CustomModal } from "../../../ui/custom-modal";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  campaignUrl: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onClose,
  campaignUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(campaignUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CustomModal
      open={open}
      setOpen={onClose}
      title="Your Campaign is Live!"
      width="sm:max-w-[400px]"
      description=" Your affiliates can now start sharing referral links and coupon codes."
    >
      <div className="space-y-4 relative">
        <div className="space-y-2">
          <div className="flex items-center gap-2 justify-between bg-[#4169E11A] rounded-lg p-3">
            <div className="flex flex-col">
              <label className="text-[12px] font-medium text-[#4A4A4A]  mb-1 block">
                Short URL
              </label>
              <span className="text-[12px] text-[#204BCD] flex-1 truncate">
                {campaignUrl}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1 border border-[#204BCD] rounded-full text-[12px] text-[#204BCD] hover:bg-[#f5f5f5] transition-colors"
            >
              <Copy size={14} fill="#204BCD" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Campaign Details */}
        <div className="grid grid-cols-2 gap-4 text-[12px] mt-4">
          <div>
            <label className="text-[#737373] dark:text-neutral-400 block mb-1">
              Created on
            </label>
            <p className="text-[#171717] dark:text-white font-medium">
              May 25 2025, 8:30:35PM GMT
            </p>
          </div>
          <div>
            <label className="text-[#737373] dark:text-neutral-400 block mb-1">
              Total Clicks
            </label>
            <p className="text-[#171717] dark:text-white font-medium">0</p>
          </div>
          <div>
            <label className="text-[#737373] dark:text-neutral-400 block mb-1">
              Conversions
            </label>
            <p className="text-[#171717] dark:text-white font-medium">0</p>
          </div>
          <div>
            <label className="text-[#737373] dark:text-neutral-400 block mb-1">
              Earnings
            </label>
            <p className="text-[#171717] dark:text-white font-medium">
              ₦0 initially
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <CustomButton
            title="Invite Affiliates"
            className="flex-1 bg-white border-2 border-[#606060] text-[#606060]"
            textClassName="text-[#333333]"
            iconPosition="left"
            withSideIcon
            sideIcon={
              <UserPlus2 className="w-4 h-4 text-[#333333]" fill="#333333" />
            }
            onClick={onClose}
          />
          <CustomButton
            title="Go to Dashboard"
            className="flex-1"
            onClick={onClose}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default SuccessModal;
