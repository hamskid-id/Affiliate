import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Download } from "lucide-react";

interface PayoutsTableHeaderProps {
  onExport: () => void;
}

export const PayoutsTableHeader: React.FC<PayoutsTableHeaderProps> = ({
  onExport,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <div>
        <h2 className="text-lg font-bold text-[#111827]">Payouts</h2>
        <p className="text-sm text-[#6B7280] mt-1">
          Review and manage affiliate payouts
        </p>
      </div>
      <CustomButton
        title="Export CSV"
        icon={<Download className="w-4 h-4" />}
        showIcon={true}
        onClick={onExport}
        className="w-[200px] mt-4 sm:mt-0 bg-[#FF5212] hover:bg-[#E54A10]"
      />
    </div>
  );
};
