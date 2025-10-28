import React from "react";
import { cn } from "@/src/lib/utils";

interface StatusBadgeProps {
  status: "Active" | "Inactive";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={cn(
        "text-xs px-3 py-1 rounded-full font-medium w-fit",
        status === "Active"
          ? "bg-[#D1FAE5] text-[#065F46]"
          : "bg-[#F3F4F6] text-[#6B7280]"
      )}
    >
      {status}
    </span>
  );
};
