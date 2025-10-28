"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/src/components/ui/form";
import CustomInputField from "@/src/components/ui/custom-input-field";
import CustomButton from "@/src/components/ui/custom-button";
import { FormFieldType } from "@/src/types";
import { CAMPAIGN_OPTIONS } from "@/src/contants/static";
import { WaitlistFormData, WaitlistFormSchema } from "@/src/schema/static";

const WaitlistSection: React.FC = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(WaitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      campaign: "",
    },
  });

  const handleSubmitForm = async (values: WaitlistFormData) => {
    setIsPending(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Waitlist submission:", values);
    setIsPending(false);
    setIsSuccess(true);

    form.reset();

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-12 lg:px-20 w-full bg-[#FF5212]"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="sm:text-[40px] text-[25px] font-semibold mb-4 leading-tight">
            Join Our Waitlist
          </h2>
          <p className="sm:text-[20px] text-[16px] font-normal leading-relaxed opacity-95">
            {`We're almost ready to launch! Sign up now to get early access,
            exclusive onboarding perks, and priority updates as we go live.`}
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-[#333333] sm:text-[20px] text-[18px] font-semibold mb-2">
                Be the first to experience a faster way to grow through
                affiliate marketing
              </h3>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmitForm)}
                className="flex w-full flex-col gap-4"
              >
                <CustomInputField
                  name="name"
                  label="Name"
                  control={form.control}
                  fieldType={FormFieldType.INPUT}
                  placeholder="Enter your full name"
                  disabled={isPending}
                />
                <CustomInputField
                  name="email"
                  label="Email"
                  control={form.control}
                  fieldType={FormFieldType.EMAIL}
                  placeholder="Enter your email"
                  disabled={isPending}
                />
                <CustomInputField
                  name="campaign"
                  label="Role Campaign"
                  control={form.control}
                  fieldType={FormFieldType.SELECT}
                  placeholder="Select campaign"
                  options={CAMPAIGN_OPTIONS}
                  disabled={isPending}
                />
                <CustomButton
                  disabled={isPending}
                  isLoading={isPending}
                  title="Join The Waitlist"
                  className="w-full bg-[#FF5212] hover:bg-[#E54A10] mt-2 !sm:h-[55px] !h-[49px]"
                />
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
