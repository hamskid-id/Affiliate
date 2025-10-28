"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ChevronRight, AlertCircle } from "lucide-react";
import { Form } from "@/src/components/ui/form";
import { Switch } from "@/src/components/ui/switch";
import CustomButton from "@/src/components/ui/custom-button";
import { FormFieldType } from "@/src/types";
import CustomInputField from "@/src/components/ui/custom-input-field";
import { events } from "@/src/contants/merchant-commission-rule";
import {
  CreateRuleFormData,
  CreateRuleSchema,
} from "@/src/schema/merchant-commission-rule";

const CreateRuleForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRuleEnabled, setIsRuleEnabled] = useState(true);

  const form = useForm<CreateRuleFormData>({
    resolver: zodResolver(CreateRuleSchema),
    defaultValues: {
      event: "",
      commissionType: "flat",
      commissionValue: "",
    },
  });

  const commissionType = form.watch("commissionType");
  const selectedEvent = form.watch("event");
  const commissionValue = form.watch("commissionValue");

  const handleSubmitForm = async (values: CreateRuleFormData) => {
    setIsSubmitting(true);
    console.log("Create Rule Data:", values, "Status:", isRuleEnabled);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="flex lg:col-span-2 items-center gap-2 text-sm bg-white rounded-[20px] sm:p-[20px] p-[15px]">
          <span className="text-[#A3A3A3] font-[400] text-[14px]">
            Commission Rules
          </span>
          <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
          <span className="text-[#171717] font-[400] text-[14px]">
            Create New Rule
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-sm bg-white rounded-[20px] sm:p-[20px] p-[15px]">
          <span className="text-[#A3A3A3] font-[400] text-[14px]">
            How It Pays
          </span>
          <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
          <span className="text-[#171717] font-[400] text-[14px]">Try it</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
            <h1 className="md:text-[22px] text-xl font-bold text-[#171717] mb-1">
              Create New Rule
            </h1>
            <p className="text-sm text-[#4A4A4A]">
              Set how much affiliates earn when this event occurs.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmitForm)}
              className="flex flex-col gap-5"
            >
              <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] space-y-6">
                <h2 className="text-lg font-semibold text-[#171717]">
                  Rule Configuration
                </h2>

                <CustomInputField
                  name="event"
                  label="Event"
                  control={form.control}
                  fieldType={FormFieldType.SELECT}
                  options={events}
                  placeholder="Select an event"
                  disabled={isSubmitting}
                  description="Choose the event that triggers commission payment"
                />

                <CustomInputField
                  name="commissionType"
                  label="Commission Type"
                  control={form.control}
                  fieldType={FormFieldType.RADIO}
                  options={[
                    { label: "₦ Flat Amount", value: "flat" },
                    { label: "% Percentage", value: "percentage" },
                  ]}
                  radioLayout="horizontal"
                  disabled={isSubmitting}
                />

                <CustomInputField
                  name="commissionValue"
                  label="Commission Value"
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  placeholder={commissionType === "flat" ? "₦ 0.00" : "0.00"}
                  disabled={isSubmitting}
                  description={
                    commissionType === "flat"
                      ? "Enter the commission amount in naira"
                      : "Enter the commission amount in percentage"
                  }
                />
              </div>

              <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
                <h2 className="text-lg font-semibold text-[#171717] mb-4">
                  Status
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#4A4A4A]">
                    Enable or disable this commission rule
                  </span>
                  <Switch
                    checked={isRuleEnabled}
                    onCheckedChange={setIsRuleEnabled}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <CustomButton
                  type="button"
                  disabled={isSubmitting}
                  className="flex-1 bg-white border-2 border-[#4A4A4A] text-[#171717] hover:bg-gray-50 !h-[53px]"
                >
                  Save Draft
                </CustomButton>

                <CustomButton
                  type="button"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#EF4444] text-white hover:bg-[#DC2626] !h-[53px]"
                >
                  Cancel
                </CustomButton>

                <CustomButton
                  type="submit"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  title="Activate Rule"
                  className="flex-1 bg-[#F97316] text-white hover:bg-[#EA580C] !h-[53px]"
                />
              </div>
            </form>
          </Form>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex lg:hidden items-center gap-2 text-sm bg-white rounded-[20px] sm:p-[20px] p-[15px]">
            <span className="text-[#A3A3A3] font-[400] text-[14px]">
              How It Pays
            </span>
            <ChevronRight className="w-4 h-4 text-[#A3A3A3]" />
            <span className="text-[#171717] font-[400] text-[14px]">
              Try it
            </span>
          </div>

          <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] sticky top-6">
            <h3 className="text-lg font-semibold text-[#171717] mb-1">
              Payment Preview
            </h3>
            <p className="text-sm text-[#4A4A4A] mb-6">
              Live preview of what you are editing
            </p>

            <div className="space-y-2 mb-6 bg-[#F9F9F9] p-[16px] rounded-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4A4A4A]">Event</span>
                <span className="text-sm font-medium text-[#171717]">
                  {selectedEvent || "purchase_completed"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4A4A4A]">Pays</span>
                <span className="text-sm font-medium text-[#171717]">
                  {commissionValue
                    ? commissionType === "flat"
                      ? `₦ ${commissionValue} flat`
                      : `${commissionValue}%`
                    : "₦ 0.00 flat"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4A4A4A]">Status</span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    isRuleEnabled
                      ? "bg-[#CBFDCB] text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {isRuleEnabled ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-[#FFA500] rounded-[20px] p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                Payout is created when this event is attributed to an affiliate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRuleForm;
