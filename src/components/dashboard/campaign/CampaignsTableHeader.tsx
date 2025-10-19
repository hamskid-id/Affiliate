import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Plus } from "lucide-react";

interface CampaignsTableHeaderProps {
  selectedCount: number;
  onCreateNew: () => void;
}

export const CampaignsTableHeader: React.FC<CampaignsTableHeaderProps> = ({
  selectedCount,
  onCreateNew,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold text-[#111827]">Campaigns List</h2>
        {selectedCount > 0 && (
          <span className="text-sm text-[#6B7280] bg-blue-50 px-3 py-1 rounded-full">
            {selectedCount} selected
          </span>
        )}
      </div>
      <CustomButton
        title="Create New Campaign"
        icon={<Plus className="w-4 h-4" />}
        showIcon={true}
        onClick={onCreateNew}
        className="ms-auto mt-4 sm:mt-0"
      />
    </div>
  );
};
