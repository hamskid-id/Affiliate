import React from "react";

interface PerformanceBarProps {
  conversion: string;
  clicks: number;
}

export const PerformanceBar: React.FC<PerformanceBarProps> = ({
  conversion,
  clicks,
}) => {
  if (conversion === "Not Started") {
    return <span className="text-xs text-[#9CA3AF]">Not Started</span>;
  }

  const percentage = parseFloat(conversion);
  const color = percentage >= 4 ? "bg-[#069206]" : "bg-yellow-500";

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex flex-col gap-1">
        <div className="text-xs">
          {clicks > 0 ? `${clicks.toLocaleString()} clicks` : "No clicks yet"}
        </div>
        <div className="text-xs font-medium text-[#6B7280] min-w-[45px]">
          {conversion} conversion
        </div>
      </div>

      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300`}
          style={{ width: `${Math.min(percentage * 10, 100)}%` }}
        />
      </div>
    </div>
  );
};
