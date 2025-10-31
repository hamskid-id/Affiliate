import React from "react";
import CustomAvatar from "@/src/components/ui/custom-avatar";

interface BusinessListItemProps {
  name: string;
  value: string;
  isGrowth?: boolean;
}

export const BusinessListItem: React.FC<BusinessListItemProps> = ({
  name,
  value,
  isGrowth = false,
}) => {
  return (
    <div className="flex items-center justify-between p-[12px] bg-[#F9F9F9] rounded-[16px]">
      <div className="flex items-center gap-3">
        <CustomAvatar name={name} />
        <span className="text-[15px] font-[600] text-[#111827]">{name}</span>
      </div>
      <span
        className={`text-[15px] font-[600] ${
          isGrowth ? "text-[#10B981]" : "text-[#111827]"
        }`}
      >
        {value}
      </span>
    </div>
  );
};
