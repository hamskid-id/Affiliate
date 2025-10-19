"use client";

import React from "react";
import { Check } from "lucide-react";
import { CampaignCreationSteps } from "@/src/contants/campaign";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  console.log(totalSteps);
  const steps = CampaignCreationSteps;
  return (
    <div className="flex items-center justify-between mb-8 md:w-[70%] w-full m-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold transition-all ${
                step.number < currentStep
                  ? "bg-[#0066FF] text-white"
                  : step.number === currentStep
                    ? "bg-[#0066FF] text-white"
                    : "bg-[#F5F5F5] dark:bg-neutral-800 text-[#A3A3A3]"
              }`}
            >
              {step.number < currentStep ? <Check size={16} /> : step.number}
            </div>
            <span
              className={`text-[12px] font-medium hidden sm:block ${
                step.number <= currentStep
                  ? "text-[#4169E1] "
                  : "text-[#A3A3A3]"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-[2px] mx-2 ${
                step.number < currentStep
                  ? "bg-[#0066FF]"
                  : "bg-[#e5e5e5] dark:bg-neutral-800"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
