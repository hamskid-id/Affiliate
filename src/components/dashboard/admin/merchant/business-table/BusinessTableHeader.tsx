import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Plus } from "lucide-react";

interface BusinessTableHeaderProps {
  onAddNew: () => void;
}

export const BusinessTableHeader: React.FC<BusinessTableHeaderProps> = ({
  onAddNew,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:p-[20px] p-[15px] border-b border-gray-100">
      <h2 className="text-lg font-bold text-[#111827]">Manage Business</h2>
      <CustomButton
        title="Add New Business"
        icon={<Plus className="w-4 h-4" />}
        showIcon={true}
        onClick={onAddNew}
        className="mt-4 sm:mt-0 bg-[#FF5212] hover:bg-[#E54A10]"
      />
    </div>
  );
};
