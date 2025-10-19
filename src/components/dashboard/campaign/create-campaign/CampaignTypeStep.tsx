"use client";

import React from "react";
import { Check } from "lucide-react";
import { CampaignType } from "@/src/types/campaign";
import { cn } from "@/src/lib/utils";
import { CampaignTypes } from "@/src/contants/campaign";

interface CampaignTypeStepProps {
  selectedType: CampaignType | null;
  onSelectType: (type: CampaignType) => void;
}

const CampaignTypeStep: React.FC<CampaignTypeStepProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-[#171717] dark:text-white mb-1">
          Step 2: Campaign Type
        </h2>
        <p className="text-[12px] text-[#737373] dark:text-neutral-400">
          Select the type and format of campaign to run with your affiliates.
          You can change this later in your campaign settings.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {CampaignTypes.map((type) => {
          const isSelected = selectedType === type.id;

          return (
            <button
              key={type.id}
              onClick={() => onSelectType(type.id)}
              className={cn(
                "relative p-5 rounded-2xl border-2 text-left transition-all duration-200 ease-in-out hover:shadow-md focus:outline-none",
                isSelected
                  ? "border-[#FF5212]"
                  : "border-[#e5e5e5] hover:border-[#FDC316]",
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  type.gradient,
                )}
              >
                {type.icon}
              </div>

              <h3 className="text-base font-semibold text-[#171717] dark:text-white mb-2">
                {type.title}
              </h3>

              <p className="text-[11px] text-[#737373] dark:text-neutral-400 mb-3 leading-relaxed">
                {type.description}
              </p>

              <ul className="space-y-1">
                {type.features.map((feature, idx) => (
                  <li
                    key={`${type.id}-${idx}`}
                    className="flex items-center gap-2 text-[11px] text-[#737373] dark:text-neutral-400"
                  >
                    <Check size={14} className="text-[#10B981] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {isSelected && (
                <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#FF5212] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CampaignTypeStep;
