"use client";

import { NotificationIcon } from "@/src/svg";

export default function SetupHeader() {
  return (
    <header className="w-full sm:h-18 h-20 bg-white flex items-center justify-between sm:px-6 px-3 shadow-[0px_16px_40px_-8px_rgba(88,92,95,0.16)]">
      <h1 className="text-[22px] font-[700]">Get Started</h1>
      <div className="cursor-pointer">
        <NotificationIcon />
      </div>
    </header>
  );
}
