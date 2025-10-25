import React, { useState } from "react";
import CustomButton from "../../ui/custom-button";

interface SetupStepProps {
  number: number;
  title: string;
  description: string;
  buttonText: string;
  completed?: boolean;
  icon: React.ReactNode;
}

export const SetupStep: React.FC<SetupStepProps> = ({
  number,
  title,
  description,
  buttonText,
  icon,
  completed = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-[20px] sm:p-[20px] p-[15px] border mb-4 transition-all
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="border border-[#D2D2D2] rounded-full flex items-center justify-center w-[40px] h-[40px] text-xs font-semibold">
              {number}
            </span>
            <h3 className="text-[20px] font-semibold text-gray-900">{title}</h3>
          </div>
          <div className="md:max-w-[50%] max-w-full">
            <p className="text-sm text-gray-600 mb-4">{description}</p>
          </div>
          <CustomButton
            className="min-w-[190px]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {buttonText}
          </CustomButton>
        </div>
        {icon}
      </div>
    </div>
  );
};
