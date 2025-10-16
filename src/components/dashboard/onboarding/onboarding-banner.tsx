"use client";
import React from "react";
import { CustomImage } from "../../ui/custom-image";
import RocketFill from "@/public/assets/rocket.svg";
import Tick from "@/public/assets/checked-box.svg";

const OnboardingBanner = () => {
  return (
    <section className="bg-linear-to-r absolute w-full left-0 from-brand-primary to-[#952800] px-4 py-20 text-white text-center flex flex-col gap-4 items-center justify-center">
      <div className="bg-white/20 rounded-full size-[64px] flex items-center justify-center">
        <CustomImage src={RocketFill} style="size-[24px]" />
      </div>

      <h2 className="font-bold text-3xl ">
        Welcome to Affiliate Saas Platform
      </h2>
      <p className="text-lg max-w-[700px]">
        Let's set up your first affiliate program so partners can start
        promoting your business and driving results.
      </p>

      <div className="flex items-center flex-wrap justify-center gap-4">
        <TickItem title="Easy 5-minute setup" />
        <TickItem title="Real-time tracking" />
        <TickItem title="Automated payouts" />
      </div>
    </section>
  );
};

export default OnboardingBanner;

const TickItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2">
      <CustomImage src={Tick} style="size-[24px]" />
      <p>{title}</p>
    </div>
  );
};
