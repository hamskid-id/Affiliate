"use client";

import React from "react";
import CustomInputField from "../../../../ui/state-custom-input-field";
import { CampaignFormData } from "@/src/types/campaign";
import {
  CampaignCategoryOption,
  CampaignPriority,
} from "@/src/contants/campaign";

interface CampaignDetailsStepProps {
  formData: CampaignFormData;
  updateFormData: (data: Partial<CampaignFormData>) => void;
}

const CampaignDetailsStep: React.FC<CampaignDetailsStepProps> = ({
  formData,
  updateFormData,
}) => {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-[#171717] dark:text-white mb-1">
          Step 1: Campaign Details
        </h2>
        <p className="text-[12px] text-[#737373] dark:text-neutral-400">
          Provide basic information about your affiliate campaign
        </p>
      </div>

      <CustomInputField
        label="Campaign Name *"
        placeholder="E.g. Summer Sale 2024"
        description="This name will be visible to your affiliates"
        value={formData.campaignName}
        onChange={(value) => updateFormData({ campaignName: value })}
      />

      <CustomInputField
        label="Campaign Description"
        placeholder="Provide a short description about this campaign"
        value={formData.campaignDescription}
        onChange={(value) => updateFormData({ campaignDescription: value })}
        description="Help affiliates understand what they're promoting (optional but recommended)"
        type="textarea"
      />

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        <CustomInputField
          label="Campaign Category"
          value={formData.category || ""}
          onChange={(value) => updateFormData({ category: value })}
          type="select"
          placeholder="Select..."
          options={CampaignCategoryOption}
        />

        <CustomInputField
          label="Priority"
          value={formData.priority || ""}
          onChange={(value) => updateFormData({ priority: value })}
          type="select"
          placeholder="Select..."
          options={CampaignPriority}
        />
      </div>

      <CustomInputField
        label="Target URL"
        placeholder="https://yoursite.com/special-offer"
        value={formData.targetUrl}
        onChange={(value) => updateFormData({ targetUrl: value })}
        description="The destination URL where traffic will be directed"
      />
    </div>
  );
};

export default CampaignDetailsStep;
