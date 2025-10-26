"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "./textarea";

interface Option {
  label: string;
  value: string;
}

interface CustomInputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "textarea" | "select";
  icon?: React.ReactNode;
  description?: string;
  options?: Option[];
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  icon,
  description,
  options = [],
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] md:text-sm font-medium text-[#344054] dark:text-white">
        {label}
      </label>

      {/* Text Input */}
      {type === "text" && (
        <div className="border border-[#f5f5f5] md:border-[#e5e5e5] dark:border-neutral-800 px-4 rounded-[50px] h-[43px] sm:h-[45px] flex items-center gap-4 focus-within:border-[#FDC316]">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full border-none bg-transparent text-[#171717] text-[12px] outline-none"
          />
          {icon}
        </div>
      )}

      {/* Textarea */}
      {type === "textarea" && (
        <div className="border border-[#f5f5f5] md:border-[#e5e5e5] dark:border-neutral-800 p-4 min-h-[9rem] h-[9rem] rounded-lg flex items-center gap-4 focus-within:border-[#FDC316]">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full border-none bg-transparent text-[#171717] text-[12px] outline-none"
          />
        </div>
      )}

      {/* Select Dropdown */}
      {type === "select" && (
        <div className="border border-[#f5f5f5] md:border-[#e5e5e5] dark:border-neutral-800 px-4 rounded-[50px] h-[43px] sm:h-[45px] flex items-center gap-4 focus-within:border-[#FDC316]">
          <Select onValueChange={onChange} value={value || ""}>
            <SelectTrigger className="w-full border-none bg-none h-full p-0 dark:border-neutral-800 text-left dark:bg-transparent focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {description && (
        <p className="text-xs text-[#737373] dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomInputField;
