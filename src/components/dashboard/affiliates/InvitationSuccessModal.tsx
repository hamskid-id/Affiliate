"use client";

import React, { useState } from "react";
import { Copy, UserPlus2 } from "lucide-react";
import CustomButton from "../../ui/custom-button";
import { CustomModal } from "../../ui/custom-modal";

interface InvitationSuccessModalProps {
  open: boolean;
  onClose?: () => void;
  affiliateEmail: string;
  invitationUrl: string;
}

const InvitationSuccessModal: React.FC<InvitationSuccessModalProps> = ({
  open,
  onClose,
  affiliateEmail,
  invitationUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CustomModal
      open={open}
      setOpen={onClose}
      title="Invitation Sent Successfully"
      width="sm:max-w-[480px]"
      description="Your affiliate will receive an email."
    >
      <div className="space-y-4 relative">
        {/* Invitation Message */}
        <div className="text-sm text-[#4A5568] leading-relaxed">
          Your invitation has been sent to{" "}
          <span className="text-[#FF5212] font-medium">{affiliateEmail}</span>{" "}
          with all the details to join your program and start promoting your
          products.
        </div>

        {/* URL Box */}
        <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-[20px] px-[20px] py-[16px] flex items-center justify-between">
          <span className="text-sm text-[#1E40AF] font-medium truncate flex-1">
            {invitationUrl}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#1E40AF] rounded-[50px] h-[37px] text-sm text-[#1E40AF] hover:bg-[#F0F9FF] transition-colors ml-3 flex-shrink-0"
          >
            <Copy size={16} className="text-[#1E40AF]" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Helper Text */}
        <p className="text-xs text-[#6B7280]">
          {` Share this link directly if you'd like them to sign up faster`}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <CustomButton
            title="Resend Invite"
            className="flex-1 bg-white border-2 border-[#606060] text-[#606060] hover:bg-gray-50 shadow-none"
            textClassName="text-[#374151] font-medium"
            iconPosition="left"
            withSideIcon
            sideIcon={<UserPlus2 className="w-4 h-4 text-[#374151]" />}
            onClick={onClose}
          />
          <CustomButton
            title="Go to Dashboard"
            className="flex-1 bg-[#FF5212] hover:bg-[#E64A0F]"
            textClassName="text-white font-medium"
            onClick={onClose}
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default InvitationSuccessModal;
