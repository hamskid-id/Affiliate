import { ArrowUp, LockKeyhole } from "lucide-react";
import React from "react";

const OnboardingAnalyticsSection = () => {
  return (
    <section className="py-4 text-center">
      <h2 className="text-[28px] font-bold">Your Analytics Dashboard</h2>
      <p className="text-neutral-400">
        Complete setup to unlock your performance metrics and start tracking
        your success{" "}
      </p>

      <div className="relative py-3 my-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/analytics-locked.png')] bg-contain bg-center opacity-20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="size-[52px] rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center">
            <LockKeyhole />
          </div>
          <p className="font-semibold text-[20px] mt-2">
            Unlock your analytics dashboard
          </p>
          <p className="text-neutral-400 mt-1">
            Finish the steps above to access your dashboard
          </p>
          <p className="text-sm text-neutral-400 flex items-center gap-1 mt-1">
            Two steps remaining <ArrowUp size={14} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnboardingAnalyticsSection;
