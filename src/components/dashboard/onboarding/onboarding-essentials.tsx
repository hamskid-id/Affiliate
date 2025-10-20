import React from "react";
import CustomButton from "../../ui/custom-button";
import { BookText, Calendar, Megaphone, UserPlus } from "lucide-react";

const OnboardingEssentials = () => {
  const steps = [
    {
      name: "Create Your First Campaign",
      description:
        "Set up a referral link or coupon code that affiliates can use to promote your business and track their performance.",
      timeline: "2 minutes",
      btnText: "Create Campaign",
      icon: Megaphone,
      isActive: true,
      to: "/dashboard/campaigns/create",
    },
    {
      name: "Define Your First Event",
      description:
        "Choose what actions you want to track and reward, such as signups, purchases, or subscription upgrades.",
      timeline: "1 minute",
      btnText: "Define Event",
      icon: Calendar,
    },
    {
      name: "Set a Commission Rule",
      description:
        "Decide how affiliates get rewarded — choose between flat fees, percentage commissions, or tiered structures.",
      timeline: "3 minutes",
      btnText: "Set Commission",
      icon: BookText,
    },
    {
      name: "Invite Affiliates",
      description:
        "Invite partners, influencers, or team members to start promoting your business and earning commissions.",
      timeline: "2 minutes",
      btnText: "Invite Affiliates",
      icon: UserPlus,
    },
  ];

  return (
    <div className="w-full rounded-[20px] border p-6 bg-white">
      <h2 className="font-bold text-[28px]">Essential Setup Steps</h2>

      <div className="space-y-6 mt-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="p-4 relative rounded-[20px] border border-neutral-300 flex flex-wrap items-start gap-4"
          >
            {s.icon && (
              <s.icon
                stroke="#FFAA8A"
                className="size-6 absolute right-4 top-4"
              />
            )}
            <div className="flex items-center justify-center rounded-full size-[40px] border font-semibold border-neutral-300">
              {i + 1}
            </div>

            <div className="space-y-3 max-w-[540px]">
              <h3 className="font-semibold text-[20px]">{s.name}</h3>
              <p className="text-neutral-400">{s.description}</p>

              <div className="flex items-center gap-2">
                <CustomButton
                  size={"lg"}
                  className="disabled:bg-black disabled:opacity-60"
                  disabled={!s.isActive}
                  to={s.to}
                >
                  {s.btnText}
                </CustomButton>
                <p className="text-neutral-400">~ {s.timeline}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingEssentials;
