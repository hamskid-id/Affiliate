"use client";

import * as React from "react";
import { Button as ShadcnButton } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

interface CustomButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  title?: string;
  icon?: React.ReactNode;
  sideIcon?: React.ReactNode;
  withSideIcon?: boolean;
  iconPosition?: "left" | "right" | "center";
  isLoading?: boolean;
  showIcon?: boolean;
  textClassName?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      title,
      icon,
      sideIcon,
      withSideIcon = false,
      iconPosition = "left",
      isLoading = false,
      showIcon = false,
      textClassName,
      onClick,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <ShadcnButton
        ref={ref}
        onClick={onClick}
        disabled={isLoading || props.disabled}
        className={cn(
          // Base layout
          "flex items-center gap-2 !sm:h-[45px] !h-[43px] rounded-[50px] px-[20px]",
          // Background and shadow styles
          "bg-[#FF5212] text-white font-bold text-[16px] leading-[21px]",
          "rounded-full shadow-[inset_0px_6px_10px_rgba(255,255,255,0.7)]",
          "transition-all duration-300",
          // Hover and disabled states
          "hover:bg-[#ff6a33] hover:shadow-[inset_0px_6px_20px_rgba(255,255,255,0.8),_0_4px_10px_rgba(0,0,0,0.2)]",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          // Icon positioning logic
          iconPosition === "right" && "flex-row-reverse",
          iconPosition === "center" && "justify-center",
          withSideIcon && "pl-4 border w-fit",
          className,
        )}
        {...props}
      >
        {/* Optional side icon */}
        {withSideIcon && (
          <span className="transition-transform group-hover:scale-110 group-hover:rotate-6">
            {sideIcon}
          </span>
        )}

        {/* Loader or main icon */}
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          showIcon && icon
        )}

        {/* Text or custom children */}
        {title ? (
          <span className={cn("!md:text-[13px] !text-[13px]", textClassName)}>
            {title}
          </span>
        ) : (
          children
        )}
      </ShadcnButton>
    );
  },
);

Button.displayName = "Button";

export default React.memo(Button);
