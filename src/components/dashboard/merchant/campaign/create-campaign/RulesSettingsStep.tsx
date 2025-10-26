"use client";

import React from "react";
import { Switch } from "@/src/components/ui/switch";
import { CustomImage } from "@/src/components/ui/custom-image";
import CustomInputField from "../../../../ui/state-custom-input-field";
import { CampaignFormData, CampaignType } from "@/src/types/campaign";

import CampaignSvg from "@/public/assets/step-active-campaign-icon.svg";
import AffiliateSvg from "@/public/assets/approved-affiliate-icon.svg";
import { CampaignTimezone } from "@/src/contants/campaign";

interface RulesSettingsStepProps {
  formData: CampaignFormData;
  updateFormData: (data: Partial<CampaignFormData>) => void;
  campaignType: CampaignType | null;
}

const RulesSettingsStep: React.FC<RulesSettingsStepProps> = ({
  formData,
  updateFormData,
}) => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#171717] dark:text-white mb-1">
          Step 3: Rules & Settings
        </h2>
        <p className="text-xs text-[#737373] dark:text-neutral-400">
          Configure timing, campaign status, and advanced rules for your
          affiliates.
        </p>
      </div>

      <div className="space-y-5">
        <CustomInputField
          label="Start Date"
          type="text"
          placeholder="Select start date"
          value={formData.startDate || ""}
          onChange={(value) => updateFormData({ startDate: value })}
          description="Campaign will begin accepting affiliate registrations from this date."
        />

        <CustomInputField
          label="End Date (Optional)"
          type="text"
          placeholder="Select end date"
          value={formData.endDate || ""}
          onChange={(value) => updateFormData({ endDate: value })}
          description="Leave empty to run campaign indefinitely."
        />

        <div className="bg-[#FFF4E6] border border-[#FF5212] rounded-xl p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <CustomImage src={CampaignSvg} style="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold text-[#171717] dark:text-white mb-1">
                  Campaign Status
                </h4>
                <p className="text-[11px] text-[#737373] dark:text-neutral-400">
                  Toggle to activate or pause this campaign.
                </p>
              </div>
            </div>
            <Switch
              checked={formData.campaignStatus || false}
              onCheckedChange={(checked) =>
                updateFormData({ campaignStatus: checked })
              }
              className="data-[state=checked]:bg-[#FF5212]"
            />
          </div>
        </div>

        <CustomInputField
          label="Time Zone"
          type="select"
          placeholder="Select time zone"
          value={formData.timezone || ""}
          onChange={(value) => updateFormData({ timezone: value })}
          options={CampaignTimezone}
          description="Select the timezone that applies to your campaign's active hours."
        />

        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[#171717] dark:text-white">
            Advanced Rules
          </h4>

          <CustomInputField
            label="Minimum Payout Threshold"
            type="text"
            placeholder="Enter amount"
            value={formData.minimumPayoutThreshold || ""}
            onChange={(value) =>
              updateFormData({ minimumPayoutThreshold: value })
            }
            description="Minimum earnings required before affiliates can request payout."
          />

          <CustomInputField
            label="Cookie Duration (Days)"
            type="text"
            placeholder="E.g. 30"
            value={formData.cookieDuration || ""}
            onChange={(value) => updateFormData({ cookieDuration: value })}
            description="How long to track affiliate referrals after click."
          />
        </div>

        <div className="bg-[#FFF4E6] border border-[#FF5212] rounded-xl p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <CustomImage src={AffiliateSvg} style="w-10 h-10 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold text-[#171717] dark:text-white mb-1">
                  Auto-Approve Affiliates
                </h4>
                <p className="text-[11px] text-[#737373] dark:text-neutral-400">
                  Automatically approve affiliate applications without manual
                  review.
                </p>
              </div>
            </div>
            <Switch
              checked={formData.autoApproveAffiliates || false}
              onCheckedChange={(checked) =>
                updateFormData({ autoApproveAffiliates: checked })
              }
              className="data-[state=checked]:bg-[#FF5212]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesSettingsStep;
