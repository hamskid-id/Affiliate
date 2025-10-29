"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Form } from "@/src/components/ui/form";
import { Switch } from "@/src/components/ui/switch";
import { FormFieldType } from "@/src/types";
import CustomInputField from "@/src/components/ui/custom-input-field";
import {
  PayoutSettingsFormData,
  PayoutSettingsSchema,
} from "@/src/schema/merchant-payout";
import {
  campaignsOptions,
  frequencyOptions,
} from "@/src/contants/merchant-payout";

const PayoutSettingsForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCampaignOverride, setIsCampaignOverride] = useState(true);
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([
    "summer-sale-2025",
    "flash-sale-25",
  ]);

  const form = useForm<PayoutSettingsFormData>({
    resolver: zodResolver(PayoutSettingsSchema),
    defaultValues: {
      frequency: "weekly",
      threshold: "1000",
      campaigns: selectedCampaigns,
    },
  });

  const handleSubmitForm = async (values: PayoutSettingsFormData) => {
    setIsSubmitting(true);
    console.log("Payout Settings Data:", {
      ...values,
      campaignOverride: isCampaignOverride,
      campaigns: selectedCampaigns,
    });
    // Add your submission logic here
    setIsSubmitting(false);
  };

  const handleRemoveCampaign = (campaignValue: string) => {
    setSelectedCampaigns((prev) => prev.filter((c) => c !== campaignValue));
  };

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#171717] mb-1">
          Payout Settings
        </h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="space-y-6"
        >
          {/* Campaign Override Section */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#344054]">
                Campaign Override
              </label>
            </div>

            {/* Frequency */}
            <CustomInputField
              name="frequency"
              label="Frequency"
              control={form.control}
              fieldType={FormFieldType.SELECT}
              options={frequencyOptions}
              placeholder="Select frequency"
              disabled={isSubmitting}
            />

            {/* Threshold */}
            <CustomInputField
              name="threshold"
              label="Threshold"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              placeholder="₦ 1000"
              disabled={isSubmitting}
            />

            {/* Campaign Override Toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-[#344054]">
                    Campaign Override
                  </label>
                  <p className="text-sm text-[#737373] mt-1">
                    Enable custom settings for selected campaigns.
                  </p>
                </div>
                <Switch
                  checked={isCampaignOverride}
                  onCheckedChange={setIsCampaignOverride}
                  disabled={isSubmitting}
                />
              </div>

              {/* Campaigns Multi-select */}
              {isCampaignOverride && (
                <div className="flex flex-col gap-y-3">
                  <label className="text-sm font-medium text-[#344054]">
                    Campaigns
                  </label>

                  <div className="border border-[#E8E8E8] rounded-[50px] p-3 min-h-[44px] flex flex-wrap gap-2 items-center">
                    {selectedCampaigns.map((campaign) => {
                      const campaignLabel = campaignsOptions.find(
                        (c) => c.value === campaign,
                      )?.label;
                      return (
                        <div
                          key={campaign}
                          className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-[20px]"
                        >
                          <span>{campaignLabel}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveCampaign(campaign)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      );
                    })}

                    <button type="button" className="ml-auto text-gray-400">
                      <ChevronDown />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PayoutSettingsForm;
