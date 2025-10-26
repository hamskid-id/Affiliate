"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/src/components/ui/form";
import CustomButton from "@/src/components/ui/custom-button";
import CustomInputField from "@/src/components/ui/custom-input-field";
import InlineAlert from "@/src/components/ui/inline-alert";
import { FormFieldType } from "@/src/types";
import { Landmark, Info } from "lucide-react";
import { Button } from "../../../ui/button";

const RequestPayouts: React.FC = () => {
  const isPending = false;

  const form = useForm({
    defaultValues: {
      amount: "",
    },
  });

  const onSubmit = (values: unknown) => {
    console.log("request-payout:", values);
  };

  return (
    <main className="w-full flex flex-col gap-4">
      <section className="w-full rounded-[20px] bg-white p-4 sm:p-6">
        <div className="grid gap-4">
          <div className="">
            <p className="text-sm text-neutral-500">Pending Balance</p>
            <p className="text-2xl font-bold mt-1">₦1,847,892</p>
            <p className="text-sm text-neutral-500 mt-1">
              Available for withdrawal
            </p>
            <div className="mt-4 grid gap-1 bg-neutral-100 rounded-xl p-4 text-xs text-neutral-500">
              <div className="flex justify-between">
                <span>Last payout</span>
                <span>₦139,250.00 • Aug 15, 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Total earned</span>
                <span>₦800,475.25</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Payment method</h2>

            <div className="rounded-[16px] bg-[#4169E11A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-[40px] flex items-center justify-center rounded-xl bg-[#E9EFFD] text-[#4169E1]">
                  <Landmark className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">Bank Account</p>
                  <p className="text-neutral-500 text-sm">
                    **** **** **** 4521
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="text-sm text-[#4169E1] font-medium px-4 py-2 bg-transparent border-[#4169E1] rounded-full"
              >
                Change
              </Button>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1.5">
                <h2 className="font-semibold text-lg mb-2">Request Amount</h2>
                <label className="block text-sm text-neutral-600 mt-2">
                  Amount to withdraw
                </label>
                <CustomInputField
                  name="amount"
                  control={form.control}
                  fieldType={FormFieldType.NUMBER}
                  placeholder="₦ 1,000"
                  disabled={isPending}
                />
                <p className="text-xs text-neutral-500">Minimum: ₦15,000</p>
              </div>

              <div className="flex justify-end">
                <CustomButton type="submit" title="Request Payout" />
              </div>
            </form>
          </Form>
        </div>
      </section>
      <InlineAlert
        title="Processing Information"
        className="mx-auto"
        icon={<Info fill="#FFBC40" stroke="#FFFFFF" className="size-6" />}
      >
        <p>
          Payouts are processed manually by merchants. You’ll be notified when
          marked as paid. Processing typically takes 3–5 business days.
        </p>
      </InlineAlert>
    </main>
  );
};

export default RequestPayouts;
