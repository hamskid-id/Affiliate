"use client";

import {
  Controller,
  Control,
  FieldValues,
  Path,
  ControllerRenderProps,
  FieldPath,
} from "react-hook-form";
import { memo, ReactNode, useState } from "react";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { FormFieldType } from "@/src/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";

type Option = string | { label: string; value: string };

interface CustomProps<T extends FieldValues> {
  control: Control<T>;
  fieldType: FormFieldType;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  options?: Option[];
  iconSrc?: string;
  iconAlt?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  className?: string;
  renderSkeleton?: (field: ControllerRenderProps<T, FieldPath<T>>) => ReactNode;
  description?: string;
  radioLayout?: "vertical" | "horizontal";
}

interface RenderFieldProps<T extends FieldValues> {
  field: ControllerRenderProps<T, FieldPath<T>>;
  props: CustomProps<T>;
}

const InputWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      "border border-[#f5f5f5] md:border-[#e5e5e5] dark:border-neutral-800 dark:bg-transparent px-4 rounded-[50px] h-[48px] overflow-hidden flex items-center gap-x-4 focus-within:border-[#FDC316]",
      className,
    )}
  >
    {children}
  </div>
);

const RenderField = <T extends FieldValues>({
  field,
  props,
}: RenderFieldProps<T>) => {
  const {
    fieldType,
    disabled,
    placeholder,
    options,
    className,
    icon,
    iconSrc,
    iconAlt,
    radioLayout = "vertical",
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const renderIcon = () =>
    typeof iconSrc === "string" ? (
      <Image src={iconSrc} height={24} width={24} alt={iconAlt || "icon"} />
    ) : (
      icon
    );

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full bg-transparent text-[#171717] dark:text-white text-[12px] placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
          {renderIcon()}
        </InputWrapper>
      );

    case FormFieldType.EMAIL:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            type="email"
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full bg-transparent text-[#171717] dark:text-white text-[12px] placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
          {renderIcon()}
        </InputWrapper>
      );

    case FormFieldType.PASSWORD:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            type={isPasswordVisible ? "text" : "password"}
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full bg-transparent text-[#171717] dark:text-white text-[12px] placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <Eye className="text-[#A3A3A3]" size={20} />
            ) : (
              <EyeClosed className="text-[#A3A3A3]" size={20} />
            )}
          </button>
        </InputWrapper>
      );

    case FormFieldType.PHONE_INPUT:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            type="tel"
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full text-[12px] bg-transparent text-[#171717] dark:text-white placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
        </InputWrapper>
      );

    case FormFieldType.NUMBER:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            type="number"
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full text-[12px]  bg-transparent text-[#171717] dark:text-white placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
          {renderIcon()}
        </InputWrapper>
      );

    case FormFieldType.DATE:
      return (
        <InputWrapper className={className}>
          <input
            {...field}
            type="date"
            disabled={disabled}
            placeholder={placeholder}
            className="w-full h-full text-[12px]  bg-transparent text-[#171717] dark:text-white text-sm md:text-base placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
          {renderIcon()}
        </InputWrapper>
      );

    case FormFieldType.TEXTAREA:
      return (
        <InputWrapper
          className={cn(className, "min-h-[9rem] h-[9rem] rounded-lg")}
        >
          <textarea
            {...field}
            disabled={disabled}
            placeholder={placeholder}
            className="py-4 w-full h-full bg-transparent text-[#171717] dark:text-white text-[12px] placeholder:text-[#A3A3A3] dark:placeholder:text-neutral-400 placeholder:font-light outline-none"
          />
        </InputWrapper>
      );

    case FormFieldType.SELECT:
      return (
        <InputWrapper className={className}>
          <Select
            onValueChange={field.onChange}
            value={field.value || ""}
            disabled={disabled}
          >
            <SelectTrigger className="w-full border-none bg-none h-12 p-0 dark:border-neutral-800 rounded-lg text-left dark:bg-transparent focus:ring-0 focus:ring-none">
              <SelectValue placeholder={placeholder || "Select an option..."} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => {
                const value =
                  typeof option === "string" ? option : option.value;
                const label =
                  typeof option === "string" ? option : option.label;
                return (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </InputWrapper>
      );

    case FormFieldType.RADIO:
      return (
        <RadioGroup
          onValueChange={field.onChange}
          value={field.value}
          disabled={disabled}
          className={cn(
            "flex gap-4",
            radioLayout === "vertical" ? "flex-col" : "flex-row flex-wrap",
            className,
          )}
        >
          {options?.map((option) => {
            const value = typeof option === "string" ? option : option.value;
            const label = typeof option === "string" ? option : option.label;

            return (
              <div key={value} className="flex items-center space-x-3">
                <RadioGroupItem value={value} id={`${field.name}-${value}`} />
                <label
                  htmlFor={`${field.name}-${value}`}
                  className="text-[12px] md:text-sm text-[#171717] dark:text-white cursor-pointer"
                >
                  {label}
                </label>
              </div>
            );
          })}
        </RadioGroup>
      );

    default:
      return null;
  }
};

const CustomFormField = <T extends FieldValues>(props: CustomProps<T>) => {
  const { control, fieldType, label, name, description } = props;

  return (
    <div className="flex flex-col gap-y-2">
      {fieldType !== FormFieldType.CHECKBOX && label && (
        <label className="md:text-sm text-[12px] md:text-base capitalize font-[500] text-[#344054] dark:text-white">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <RenderField field={field} props={props} />
            {fieldState.error && (
              <p className="text-sm font-normal text-red-400">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
      {description && (
        <p className="text-xs text-[#737373] dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(CustomFormField) as typeof CustomFormField;
