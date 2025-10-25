import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Download } from "lucide-react";

interface ConversionsTableHeaderProps {
  onExport: () => void;
}

export const ConversionsTableHeader: React.FC<ConversionsTableHeaderProps> = ({
  onExport,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <h2 className="text-lg font-bold text-[#111827]">Recent Conversions</h2>
      <CustomButton
        title="Export CSV"
        icon={<Download className="w-4 h-4" />}
        showIcon={true}
        onClick={onExport}
        className="mt-4 sm:mt-0 bg-[#FF5212] hover:bg-[#E54A10] w-[200px]"
      />
    </div>
  );
};
