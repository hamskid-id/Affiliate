import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Check } from "lucide-react";

interface AffiliatesTableHeaderProps {
  selectedCount: number;
  onApproveAll: () => void;
}

export const AffiliatesTableHeader: React.FC<AffiliatesTableHeaderProps> = ({
  selectedCount,
  onApproveAll,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold text-[#111827]">Manage Affiliates</h2>
        {selectedCount > 0 && (
          <span className="text-sm text-[#6B7280] bg-blue-50 px-3 py-1 rounded-full">
            {selectedCount} selected
          </span>
        )}
      </div>
      <CustomButton
        withSideIcon
        sideIcon={<Check className="w-4 h-4 text-white" />}
        title="Approve All"
        showIcon={false}
        onClick={onApproveAll}
        className="ms-auto mt-4 sm:mt-0 bg-[#4F46E5] hover:bg-[#4338CA] shadow-none"
      />
    </div>
  );
};
