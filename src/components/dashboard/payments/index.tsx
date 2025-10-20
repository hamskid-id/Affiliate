"use client";

import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Checkbox } from "@/src/components/ui/checkbox";

const Payments: React.FC = () => {
  return (
    <main className="w-full flex flex-col gap-4">
      <section className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[#FF5C00] text-[22px] font-[700]">Payments</h2>
            <p className="text-sm text-[#667085]">
              Configure your payment methods to receive affiliate commissions
              securely
            </p>
          </div>
          <CustomButton>Add Payment Method</CustomButton>
        </div>
      </section>

      <section className="w-full rounded-[20px] border bg-white p-4 sm:p-6">
        <p className="font-semibold text-lg">Payment Details</p>

        <div className="mt-4 space-y-6">
          <div className="rounded-[16px] border border-neutral-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Bank Account</p>
                <p className="text-neutral-500 text-sm">
                  Traditional bank transfer
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-1.5">
                <Label htmlFor="accountName">Account Name</Label>
                <Input id="accountName" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" placeholder="0000000000" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" placeholder="Bank Name" />
              </div>
              <div className="space-y-1.5">
                <Label>Account Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Savings" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="current">Current</SelectItem>
                    <SelectItem value="checking">Checking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 rounded-[12px] border border-yellow-200 bg-yellow-50 text-yellow-700 p-3 text-sm">
              Processing Time: Bank transfers typically take 3-5 business days
              to process.
            </div>
          </div>

          <div className="rounded-[16px] border border-neutral-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Paypal</p>
                <p className="text-neutral-500 text-sm">
                  Fast and secure payments
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-1.5">
                <Label htmlFor="paypalEmail">Paypal Email</Label>
                <Input
                  id="paypalEmail"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPaypalEmail">Confirm Paypal Email</Label>
                <Input
                  id="confirmPaypalEmail"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </div>
            </div>

            <div className="mt-2 text-sm">
              <span className="text-neutral-500">Account is verified</span>{" "}
              <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">
                Verified
              </span>
            </div>

            <div className="mt-4 rounded-[12px] border border-yellow-200 bg-yellow-50 text-yellow-700 p-3 text-sm">
              Important: Ensure your PayPal account can receive payments from
              businesses.
            </div>
          </div>

          <div className="rounded-[16px] border border-neutral-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Cryptocurrency</p>
                <p className="text-neutral-500 text-sm">
                  Digital currency payments
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-1.5">
                <Label>Currency Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitcoin (BTC)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                    <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                    <SelectItem value="usdt">Tether (USDT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="walletAddress">Wallet Address</Label>
                <Input id="walletAddress" placeholder="bc1qxyz..." />
              </div>
              <div className="space-y-1.5">
                <Label>Network</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitcoin Network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bitcoin">Bitcoin</SelectItem>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="tron">Tron</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <Checkbox id="ownWallet" />
              <Label htmlFor="ownWallet" className="text-sm text-neutral-600">
                I own this wallet address
              </Label>
            </div>

            <div className="mt-4 rounded-[12px] border border-yellow-200 bg-yellow-50 text-yellow-700 p-3 text-sm">
              Security Note: Double-check your wallet address. Crypto
              transactions cannot be reversed.
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <CustomButton>Save Payment Details</CustomButton>
        </div>
      </section>
    </main>
  );
};

export default Payments;
