"use client";

import React from "react";
import { cn } from "@/src/lib/utils";

interface InlineAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
}

const InlineAlert: React.FC<InlineAlertProps> = ({
  title,
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mt-4 rounded-[20px] border bg-[#FFA5001A] text-black/70 p-3 text-sm flex gap-3 items-start md:w-[70%] w-full",
        "border-[#FFA500]",
        className,
      )}
      {...props}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      <div className="w-full">
        <p className="text-lg font-medium">{title}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default InlineAlert;
