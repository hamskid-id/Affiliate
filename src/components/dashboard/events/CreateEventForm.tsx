"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Copy, X } from "lucide-react";
import { Form } from "@/src/components/ui/form";
import CustomButton from "@/src/components/ui/custom-button";
import { FormFieldType } from "@/src/types";
import CustomInputField from "@/src/components/ui/custom-input-field";
import { CreateEventFormData, CreateEventSchema } from "@/src/schema/events";
import { campaigns, eventTypes, iconOptions } from "@/src/contants/event";

const CreateEventForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string>(iconOptions[0]);

  const form = useForm<CreateEventFormData>({
    resolver: zodResolver(CreateEventSchema),
    defaultValues: {
      campaignId: "",
      eventName: "",
      eventType: "",
      eventDescription: "",
      trackingUrl: "",
      rate: "",
      testUrl: "",
    },
  });

  const handleSubmitForm = async (values: CreateEventFormData) => {
    setIsSubmitting(true);
    console.log("Create Event Data:", values);
  };

  const handleCopyUrl = () => {
    const url = form.watch("trackingUrl");
    if (url) {
      navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard!");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] bg-white rounded-[12px] sm:px-[20px] py-[12px] px-[15px]">
          <span className="text-[#A3A3A3] font-[500] text-[14px]">Events</span>
          <span className="text-[#A3A3A3]">
            <ChevronRight className="w-4 h-4" />
          </span>
          <span className="text-[#171717] font-[500] text-[14px]">
            Create New Event
          </span>
        </div>

        <div className="flex flex-col gap-5">
          {/* Page Header */}
          <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
            <h1 className="md:text-[22px] text-xl font-bold text-[#171717] dark:text-white mb-1">
              Create New Event
            </h1>
            <p className="text-sm text-[#737373] dark:text-neutral-400">
              Configure tracking events for your affiliate program to monitor
              key user actions and conversions.
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-1">
                Event Setup
              </h2>
              <p className="text-sm text-[#6B7280]">
                Define the tracking event that will monitor user interactions on
                your website.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmitForm)}
                className="space-y-6"
              >
                {/* Campaign Selection */}
                <CustomInputField
                  name="campaignId"
                  label="Campaign"
                  control={form.control}
                  fieldType={FormFieldType.SELECT}
                  options={campaigns}
                  placeholder="Select a campaign"
                  disabled={isSubmitting}
                  description="Select which campaign this event belongs to"
                />

                {/* Event Name */}
                <CustomInputField
                  name="eventName"
                  label="Event Name"
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  placeholder="e.g. Purchase Complete"
                  disabled={isSubmitting}
                  description="Choose a descriptive name that clearly identifies the action you want to track"
                />

                {/* Event Type */}
                <CustomInputField
                  name="eventType"
                  label="Event Type"
                  control={form.control}
                  fieldType={FormFieldType.SELECT}
                  options={eventTypes}
                  placeholder="Select event type"
                  disabled={isSubmitting}
                  description="Select the type of action or interaction you want to track for conversions attribution."
                />

                <CustomInputField
                  name="rate"
                  label="Amount/Rate"
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  placeholder="₦ 0.0"
                  disabled={isSubmitting}
                  description="Choose a descriptive name that clearly identifies the action you want to track"
                />

                {/* Event Description */}
                <CustomInputField
                  name="eventDescription"
                  label="Event Description"
                  control={form.control}
                  fieldType={FormFieldType.TEXTAREA}
                  placeholder="Provide a detailed description of this event including where it should trigger and any special conditions..."
                  disabled={isSubmitting}
                  description="Provide more context to help you and your affiliate commission."
                />

                {/* Event Icon Selection */}
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-medium text-[#111827]">
                    Event Icon
                  </label>

                  {/* Icon Grid */}
                  <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
                    {/* Selected Icon Display */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#FF5212] flex items-center justify-center text-2xl">
                        {selectedIcon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111827]">
                          Selected Icon
                        </p>
                        <p className="text-xs text-[#6B7280]">Cart Icon</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 gap-2 ">
                      {iconOptions.map((icon, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedIcon(icon)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl hover:bg-gray-100 transition-colors ${
                            selectedIcon === icon
                              ? "bg-[#FF5212] ring-2 ring-[#FF5212]"
                              : "bg-gray-50"
                          }`}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <CustomInputField
                  name="eventName"
                  label="Test URL"
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  icon={
                    <button
                      type="button"
                      onClick={handleCopyUrl}
                      className=" p-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Copy className="w-4 h-4 text-[#6B7280]" />
                    </button>
                  }
                  placeholder="Optional: Enter event tracking/webhook test URL"
                  disabled={isSubmitting}
                  description="Use this URL to test the event webhook and make it easier to
                    debug commission."
                />

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
                    title="Save Event"
                    className="bg-[#FF5212] hover:bg-[#E54A10] px-6"
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

export default CreateEventForm;
