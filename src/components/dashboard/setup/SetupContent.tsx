import React from "react";
import { SetupStep } from "./SetupStep";
import {
  SetupStepFourSvg,
  SetupStepOneSvg,
  SetupStepThreeSvg,
  SetupStepTwoSvg,
} from "@/src/svg";

interface StepData {
  number: number;
  title: string;
  description: string;
  buttonText: string;
  icon: React.ReactNode;
}

export const SetupContent: React.FC = () => {
  const steps: StepData[] = [
    {
      number: 1,
      title: "Create Your First Campaign",
      description:
        "Set up a referral link or coupon code that affiliates can use to promote your business and track their performance.",
      buttonText: "Create Campaign",
      icon: <SetupStepOneSvg />,
    },
    {
      number: 2,
      title: "Define Your First Event",
      description:
        "Choose what actions you want to track and reward, such as signups, purchases, or subscription upgrades.",
      buttonText: "Define Event",
      icon: <SetupStepTwoSvg />,
    },
    {
      number: 3,
      title: "Set a Commission Rate",
      description:
        "Decide how affiliates get rewarded — choose between flat fees, percentage commissions, or tiered structures.",
      buttonText: "Set Commission",
      icon: <SetupStepThreeSvg />,
    },
    {
      number: 4,
      title: "Invite Affiliates",
      description:
        "Invite partners, influencers, or team members to start promoting your business and earning commissions.",
      buttonText: "Invite Affiliates",
      icon: <SetupStepFourSvg />,
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] flex flex-col gap-3">
      <h2 className="text-lg font-bold text-gray-900 ">
        Essential Setup Steps
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <SetupStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            buttonText={step.buttonText}
            icon={step.icon}
          />
        ))}
      </div>
    </div>
  );
};
