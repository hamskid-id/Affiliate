"use client";

import { CampaignFormData, CampaignType } from "@/src/types/merchant-campaign";
import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import CampaignDetailsStep from "./CampaignDetailsStep";
import CampaignTypeStep from "./CampaignTypeStep";
import RulesSettingsStep from "./RulesSettingsStep";
import CustomButton from "../../../../ui/custom-button";
import SuccessModal from "./SuccessModal";
import { ChevronRight } from "lucide-react";

export default function CampaignCreationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<CampaignFormData>({
    campaignName: "",
    campaignDescription: "",
    landingPage: "",
    category: "",
    targetUrl: "",
    campaignType: "referral",
  });
  const [selectedType, setSelectedType] = useState<CampaignType | null>(null);

  const updateFormData = (data: Partial<CampaignFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep === 2 && selectedType) {
      updateFormData({ campaignType: selectedType });
    }
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowSuccessModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return (
        formData.campaignName &&
        formData.campaignDescription &&
        formData.targetUrl
      );
    }
    if (currentStep === 2) {
      return selectedType !== null;
    }
    return true;
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-[12px] bg-white rounded-[12px] sm:px-[20px] py-[12px] px-[15px]">
          <span className="text-[#A3A3A3] font-[500] text-[14px]">
            Campaigns
          </span>
          <span className="text-[#A3A3A3]">
            <ChevronRight className="w-4 h-4" />
          </span>
          <span className="text-[#171717] font-[500] text-[14px]">
            Create New Campaign
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[20px]  sm:p-[20px] p-[15px]">
            <h1 className="md:text-[22px] text-xl font-bold text-[#171717] dark:text-white mb-1">
              Create New Campaign
            </h1>
            <p className="text-sm text-[#737373] dark:text-neutral-400">
              Set up a new affiliate campaign to grow your reach and maximize
              platform earnings
            </p>
          </div>

          <div className="bg-white rounded-[20px] sm:px-[20px] py-[24px] px-[15px]">
            <StepIndicator currentStep={currentStep} totalSteps={3} />

            {/* Form Steps */}
            <div className="mb-8">
              {currentStep === 1 && (
                <CampaignDetailsStep
                  formData={formData}
                  updateFormData={updateFormData}
                />
              )}

              {currentStep === 2 && (
                <CampaignTypeStep
                  selectedType={selectedType}
                  onSelectType={setSelectedType}
                />
              )}

              {currentStep === 3 && (
                <RulesSettingsStep
                  formData={formData}
                  updateFormData={updateFormData}
                  campaignType={selectedType}
                />
              )}
            </div>

            <div className="flex gap-3 justify-end">
              {currentStep > 1 && (
                <CustomButton
                  title="Back"
                  variant="outline"
                  onClick={handleBack}
                  className="px-8"
                />
              )}
              <CustomButton
                title={currentStep === 3 ? "Submit" : "Next Step"}
                onClick={handleNext}
                disabled={!canProceed()}
                iconPosition="right"
                withSideIcon
                sideIcon={<ChevronRight className="w-4 h-4 text-white" />}
                className="px-8"
              />
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        campaignUrl="https://linkly.com/funding-page"
      />
    </div>
  );
}
