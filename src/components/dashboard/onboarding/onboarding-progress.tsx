import { Progress } from "@/components/ui/progress";
import React from "react";

const OnboardingProgress = () => {
  return (
    <div className="shadow-[rgba(88, 92, 95, 0.1)] w-full rounded-[20px] border p-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="font-semibold text-lg">Setup Progress</p>
          <p className="text-gray-400">
            Complete these essential steps to activate your affiliate program
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-secondary-300">0 of 4</p>
          <p className="text-gray-400">steps completed</p>
        </div>
      </div>

      <Progress
        className="mt-5 h-[16px] bg-secondary-300/10"
        value={20}
        indicatorClassName="bg-secondary-300"
      />
    </div>
  );
};

export default OnboardingProgress;
