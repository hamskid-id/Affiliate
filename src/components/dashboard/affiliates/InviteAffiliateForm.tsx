"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Send, X } from "lucide-react";
import { Form } from "@/src/components/ui/form";
import CustomButton from "@/src/components/ui/custom-button";
import { FormFieldType } from "@/src/types";
import {
  InviteAffiliateFormData,
  InviteAffiliateSchema,
} from "@/src/schema/affiliate";
import CustomInputField from "../../ui/custom-input-field";
import { Checkbox } from "@/src/components/ui/checkbox";

const InviteAffiliateForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InviteAffiliateFormData>({
    resolver: zodResolver(InviteAffiliateSchema),
    defaultValues: {
      affiliateName: "",
      email: "",
      campaignId: "",
      commissionRuleId: "",
      personalMessage: "",
      invitationExpires: "7",
      sendWelcomeEmail: false,
    },
  });

  const handleSubmitForm = async (values: InviteAffiliateFormData) => {
    try {
      setIsSubmitting(true);
      console.log("Invite Affiliate Data:", values);

      // Example API call here:
      // await affiliateService.invite(values);

      toast.success("Invitation sent successfully!");
      form.reset();
    } catch (err: any) {
      toast.error(err?.message || "Failed to send invitation");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock data — replace with API data
  const campaigns = [
    { label: "Summer Sale 2025", value: "summer_sale_2025" },
    { label: "Black Friday Blitz", value: "black_friday_blitz" },
    { label: "Valentine's Special", value: "valentine_special" },
  ];

  const commissionRules = [
    { label: "10% Per Sale", value: "10_percent" },
    { label: "15% Per Sale", value: "15_percent" },
    { label: "$5 Per Click", value: "5_per_click" },
  ];

  const expirationOptions = [
    { label: "1 day", value: "1" },
    { label: "3 days", value: "3" },
    { label: "7 days", value: "7" },
    { label: "14 days", value: "14" },
    { label: "30 days", value: "30" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-[12px] bg-white rounded-[12px] sm:px-[20px] py-[12px] px-[15px]">
          <span className="text-[#A3A3A3] font-[500] text-[14px]">
            Affiliates
          </span>
          <span className="text-[#A3A3A3]">
            <ChevronRight className="w-4 h-4" />
          </span>
          <span className="text-[#171717] font-[500] text-[14px]">
            Invite Affiliate
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[20px]  sm:p-[20px] p-[15px]">
            <h1 className="md:text-[22px] text-xl font-bold text-[#171717] dark:text-white mb-1">
              Invite Affiliate
            </h1>
            <p className="text-sm text-[#737373] dark:text-neutral-400">
              Add new affiliates by sending them an invitation link or email.
            </p>
          </div>
          {/* Header */}
          <div className="bg-white rounded-[20px]  sm:p-[20px] p-[15px]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-1">
                Invitation Details
              </h2>
              <p className="text-sm text-[#6B7280]">
                Fill in the details to send an invitation to a new affiliate
                partner.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmitForm)}
                className="space-y-6"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInputField
                    name="affiliateName"
                    label="Affiliate Name"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="Enter affiliate full name"
                    disabled={isSubmitting}
                  />
                  <CustomInputField
                    name="email"
                    label="Email Address"
                    control={form.control}
                    fieldType={FormFieldType.EMAIL}
                    placeholder="Enter affiliate email"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Row 2: Campaign & Commission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInputField
                    name="campaignId"
                    label="Assign Campaign"
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    options={campaigns}
                    placeholder="Select a campaign"
                    disabled={isSubmitting}
                  />
                  <CustomInputField
                    name="commissionRuleId"
                    label="Commission Rule"
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    options={commissionRules}
                    placeholder="Select commission rule"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Row 3: Message & Expiration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInputField
                    name="personalMessage"
                    label="Personal Message (Optional)"
                    control={form.control}
                    fieldType={FormFieldType.TEXTAREA}
                    placeholder="Add a personal message to your invitation..."
                    disabled={isSubmitting}
                    description="This message will be included in the invitation email to make it more personal."
                  />
                  <div className="flex flex-col">
                    <CustomInputField
                      name="invitationExpires"
                      label="Invitation Expires"
                      control={form.control}
                      fieldType={FormFieldType.SELECT}
                      options={expirationOptions}
                      placeholder="Select expiry"
                      disabled={isSubmitting}
                    />
                    {/* Welcome Email Checkbox */}
                    <div className="flex items-start gap-2 mt-2">
                      <Checkbox
                        id="sendWelcomeEmail"
                        checked={form.watch("sendWelcomeEmail")}
                        onCheckedChange={(checked) =>
                          form.setValue("sendWelcomeEmail", checked as boolean)
                        }
                        disabled={isSubmitting}
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="sendWelcomeEmail"
                        className="text-sm text-[#374151] cursor-pointer"
                      >
                        Send welcome email after affiliate accepts invitation
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4">
                  <CustomButton
                    type="button"
                    disabled={isSubmitting}
                    withSideIcon
                    sideIcon={<X className="w-4 h-4" />}
                    className="bg-white hover:bg-white border border-black text-gray-700"
                  >
                    Cancel
                  </CustomButton>

                  <CustomButton
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    title="Send Invite"
                    className="bg-[#FF5212] hover:bg-[#E54A10] px-6"
                    sideIcon={<Send className="text-white w-4 h-4" />}
                    withSideIcon
                  />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteAffiliateForm;
