import React from "react";
import CustomButton from "../../ui/custom-button";

export const CTASection: React.FC = () => (
  <div className="bg-white border border-gray-200 rounded-[20px] p-8 text-center flex flex-col gap-3">
    <h2 className="text-[24px] font-bold text-gray-900">
      Ready to Get Started?
    </h2>
    <p className="text-sm text-gray-600 mb-2">
      Complete your setup now or come back later - your progress is
      automatically saved.
    </p>

    <div className="flex flex-col gap-3 sm:w-[445px] w-full m-auto">
      <CustomButton>Complete Setup</CustomButton>
      <CustomButton className="flex-1 bg-white border border-[#606060] text-[#606060]">
        Skip for Now
      </CustomButton>
    </div>
    <p className="text-xs text-gray-600">
      You can finish setup anytime from your dashboard.
    </p>
  </div>
);
