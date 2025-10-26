import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Plus } from "lucide-react";

interface CommissionRulesTableHeaderProps {
  onCreateNew: () => void;
}

export const CommissionRulesTableHeader: React.FC<
  CommissionRulesTableHeaderProps
> = ({ onCreateNew }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <div>
        <h2 className="text-lg font-bold text-[#111827]">
          Active Commission Rules
        </h2>
        <p className="text-sm text-[#6B7280] mt-1">
          Currently active rules processing commissions
        </p>
      </div>
      <CustomButton
        title="Create New Rule"
        icon={<Plus className="w-4 h-4" />}
        showIcon={true}
        onClick={onCreateNew}
        className="mt-4 sm:mt-0 bg-[#FF5212] hover:bg-[#E54A10] w-[200px]"
      />
    </div>
  );
};
