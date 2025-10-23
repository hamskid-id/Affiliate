"use client";

import { Checkbox } from "@/src/components/ui/checkbox";
import CustomButton from "@/src/components/ui/custom-button";
import { Form } from "@/src/components/ui/form";
import { Label } from "@/src/components/ui/label";
import { VerifiedCheckMark } from "@/src/svg";
import { BitcoinFill, PayPalIcon } from "@/src/svg/custom";
import { FormFieldType } from "@/src/types";
import {
  AlertTriangle,
  ChevronDown,
  Info,
  Landmark,
  Shield,
} from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import CustomInputField from "../../ui/custom-input-field";
import InlineAlert from "@/src/components/ui/inline-alert";

const Payments: React.FC = () => {
  const isPending = false;

  const form = useForm({
    defaultValues: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      accountType: "",
      paypalEmail: "",
      confirmPaypalEmail: "",
      cryptoCurrencyType: "",
      walletAddress: "",
      cryptoNetwork: "",
      ownWallet: false,
    },
  });

  const onSubmit = (values: unknown) => {
    console.log("payments:", values);
  };

  return (
    <main className="w-full flex flex-col gap-4">
      <section className="w-full rounded-[20px] border bg-white p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">Payment Details</p>
          <CustomButton>Add Payment Method</CustomButton>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-6"
          >
            <div className="flex flex-col items-center w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-[40px] flex items-center justify-center rounded-xl bg-green-100 text-green-500">
                    <Landmark />
                  </div>
                  <div>
                    <p className="font-semibold">Bank Account</p>
                    <p className="text-neutral-500 text-sm">
                      Traditional bank transfer
                    </p>
                  </div>
                </div>

                <ChevronDown className="size-5 text-neutral-500" />
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <CustomInputField
                    name="accountName"
                    label="Account Name"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="John Doe"
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <CustomInputField
                    name="accountNumber"
                    label="Account Number"
                    control={form.control}
                    fieldType={FormFieldType.NUMBER}
                    placeholder="0000000000"
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <CustomInputField
                    name="bankName"
                    label="Bank Name"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="Bank Name"
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <CustomInputField
                    name="accountType"
                    label="Account Type"
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    placeholder="Savings"
                    options={[
                      { label: "Savings", value: "savings" },
                      { label: "Current", value: "current" },
                      { label: "Checking", value: "checking" },
                    ]}
                    disabled={isPending}
                  />
                </div>
              </div>

              <InlineAlert
                title="Processing Time"
                className="border-yellow-400"
                icon={<Info fill="#FFBC40" stroke="#FFFF" className="size-6" />}
              >
                <p>
                  Bank transfers typically take 3-5 business days to process.
                </p>
              </InlineAlert>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-[40px] flex items-center justify-center rounded-xl bg-[#4169E11A]">
                    <PayPalIcon color="#4169E" fill="#4169E1" name="paypal" />
                  </div>
                  <div>
                    <p className="font-semibold">Paypal</p>
                    <p className="text-neutral-500 text-sm">
                      Fast and secure payments
                    </p>
                  </div>
                </div>

                <ChevronDown className="size-5 text-neutral-500" />
              </div>

              <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <CustomInputField
                    name="paypalEmail"
                    label="Paypal Email"
                    control={form.control}
                    fieldType={FormFieldType.EMAIL}
                    placeholder="johndoe@email.com"
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <CustomInputField
                    name="confirmPaypalEmail"
                    label="Confirm Paypal Email"
                    control={form.control}
                    fieldType={FormFieldType.EMAIL}
                    placeholder="johndoe@email.com"
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="mt-2 text-sm w-full">
                <span className="text-neutral-500">Account is verified</span>{" "}
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">
                  <VerifiedCheckMark /> Verified
                </span>
              </div>

              <InlineAlert
                title="Important"
                icon={
                  <AlertTriangle
                    fill="#FFBC40"
                    stroke="#Ffffff"
                    className="size-6"
                  />
                }
              >
                <p>
                  Ensure your PayPal account can receive payments from
                  businesses.
                </p>
              </InlineAlert>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-[40px] flex items-center justify-center rounded-xl bg-[#FF7F501A]">
                    <BitcoinFill color="#4169E" fill="#4169E1" />
                  </div>
                  <div>
                    <p className="font-semibold">Cryptocurrency</p>
                    <p className="text-neutral-500 text-sm">
                      Digital currency payments
                    </p>
                  </div>
                </div>

                <ChevronDown className="size-5 text-neutral-500" />
              </div>

              <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-1.5">
                  <CustomInputField
                    name="cryptoCurrencyType"
                    label="Currency Type"
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    placeholder="Bitcoin (BTC)"
                    options={[
                      { label: "Bitcoin (BTC)", value: "btc" },
                      { label: "Ethereum (ETH)", value: "eth" },
                      { label: "Tether (USDT)", value: "usdt" },
                    ]}
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5">
                  <CustomInputField
                    name="walletAddress"
                    label="Wallet Address"
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    placeholder="bc1qxyz..."
                    disabled={isPending}
                  />
                </div>
                <div className="space-y-1.5 col-span-2">
                  <CustomInputField
                    name="cryptoNetwork"
                    label="Network"
                    control={form.control}
                    fieldType={FormFieldType.SELECT}
                    placeholder="Bitcoin Network"
                    options={[
                      { label: "Bitcoin", value: "bitcoin" },
                      { label: "Ethereum", value: "ethereum" },
                      { label: "Tron", value: "tron" },
                    ]}
                    disabled={isPending}
                  />
                </div>
              </div>

              <div className="mt-3 w-full flex items-center gap-2">
                <Checkbox id="ownWallet" />
                <Label htmlFor="ownWallet" className="text-sm text-neutral-600">
                  I own this wallet address
                </Label>
              </div>

              <InlineAlert
                title="Security Note"
                icon={
                  <Shield fill="#FFBC40" stroke="#Ffffff" className="size-6" />
                }
              >
                <p>
                  Double-check your wallet address. Crypto transactions cannot
                  be reversed.
                </p>
              </InlineAlert>
            </div>
            <div className="flex justify-end mt-6">
              <CustomButton type="submit">Save Payment Details</CustomButton>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default Payments;
