import React from "react";

export const SetupProgress: React.FC = () => (
  <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] flex flex-col gap-3">
    <div className="flex justify-between items-center gap-4">
      <div>
        <h2 className="text-sm font-semibold text-gray-700">Setup Progress</h2>
        <p className="text-xs text-gray-500">
          Complete all required steps to unlock your affiliate program
        </p>
      </div>
      <div className="flex flex-col">
        <span className="text-[20px] font-bold text-[#4169E1] text-end">
          0 of 4
        </span>
        <span className="text-xs font-[400] text-[#606060] text-end">
          Steps Completed
        </span>
      </div>
    </div>
    <div className="w-full bg-[#F3F4F6] rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-[#4169E1] rounded-full transition-all duration-500"
        style={{ width: `20%` }}
      ></div>
    </div>
    <div className="flex justify-between w-full">
      <span className="text-xs font-[400] text-[#606060]">Getting Started</span>
      <span className="text-xs font-[400] text-[#606060]">Ready to launch</span>
    </div>
  </div>
);
