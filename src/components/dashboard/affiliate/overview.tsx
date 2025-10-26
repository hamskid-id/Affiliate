"use client";

import React from "react";
import StatsCard, { StatsCardProps } from "@/src/components/shared/StatsCard";
import CustomButton from "@/src/components/ui/custom-button";
import CustomTable, {
  TableAction,
  TableColumn,
} from "@/src/components/ui/custom-table";
import { Copy, ExternalLink, Link as LinkIcon, Percent } from "lucide-react";
import { Button } from "../../ui/button";
import { SearchAndFilters } from "../../shared/SearchAndFilters";
import { ActiveFilters } from "../../shared/ActiveFilters";
import { useAffiliateFilters } from "@/src/hooks/affiliate/use-affiliate-filters";

const AffiliateOverview: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useAffiliateFilters();
  const stats: StatsCardProps[] = [
    {
      title: "Total Clicks",
      value: "847,293",
      change: "+12.5%",
      trend: "up",
      subtitle: "vs. 756,241 last month",
      icon: (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E7F2FF] text-[#1E80FF]">
          <LinkIcon className="w-5 h-5" />
        </div>
      ),
      iconBg: "",
      iconColor: "",
    },
    {
      title: "Conversions",
      value: "23,847",
      change: "+8.2%",
      trend: "up",
      subtitle: "2.8% conversion rate",
      icon: (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E8FFF3] text-[#10B981]">
          <Percent className="w-5 h-5" />
        </div>
      ),
      iconBg: "",
      iconColor: "",
    },
    {
      title: "Pending Payouts",
      value: "₦1,847,892",
      change: "+3.1%",
      trend: "down",
      subtitle: "127 pending payments",
      icon: (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFF7E6] text-[#F59E0B]">
          ₦
        </div>
      ),
      iconBg: "",
      iconColor: "",
    },
    {
      title: "Paid Commissions",
      value: "₦5,035,713",
      change: "+15.7%",
      trend: "up",
      subtitle: "All-time earnings",
      icon: (
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FDEDEE] text-[#EF4444]">
          ₦
        </div>
      ),
      iconBg: "",
      iconColor: "",
    },
  ];

  // Referral + Coupon
  const referralLink = "https://affiliatepro.com/ref/sarah-chen-2024";
  const couponCode = "SARAH25";

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // no-op
    }
  };

  // Recent conversions table
  const columns: TableColumn[] = [
    { key: "date", label: "Date" },
    { key: "source", label: "Referral Source" },
    { key: "event", label: "Event" },
    { key: "amount", label: "Commission Earned" },
    { key: "status", label: "Status" },
    { key: "actions", label: "Actions" },
  ];

  const badge = (label: string, color: string) => (
    <span className={`px-2 py-1 rounded-full text-[12px] font-[500] ${color}`}>
      {label}
    </span>
  );

  const rows = [
    {
      date: "Mar 15, 2025",
      source: "Website",
      event: badge("Registration", "bg-green-100 text-green-600"),
      amount: "₦1,000",
      status: badge("Paid", "bg-green-100 text-green-700"),
      actions: (
        <button className="text-[#4169E1] text-sm font-medium">
          View Details
        </button>
      ),
    },
    {
      date: "Mar 15, 2025",
      source: "Social Media",
      event: badge("Purchase", "bg-blue-100 text-blue-600"),
      amount: "₦1,000",
      status: badge("Pending", "bg-yellow-100 text-yellow-700"),
      actions: (
        <button className="text-[#4169E1] text-sm font-medium">
          View Details
        </button>
      ),
    },
    {
      date: "Mar 15, 2025",
      source: "Direct",
      event: badge("Approved", "bg-purple-100 text-purple-700"),
      amount: "₦1,000",
      status: badge("Approved", "bg-[#E8F0FF] text-[#4169E1]"),
      actions: (
        <button className="text-[#4169E1] text-sm font-medium">
          View Details
        </button>
      ),
    },
  ];

  const actions: TableAction[] = [
    { label: "View Details", onClick: (_, i) => console.log("row:", i) },
  ];

  return (
    <div className="space-y-6">
      {/* Referral link */}
      <div className="bg-white rounded-[20px] p-4 shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
        <p className="text-sm font-semibold">Your Referral Link</p>
        <p className="text-xs text-neutral-500 mb-2">
          Share this link to earn commission on every successful referral
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between border p-4 rounded-lg">
          <p className="text-black/50">{referralLink}</p>
          <div className="flex gap-2">
            <Button
              className="bg-secondary-300/10 text-secondary-300 hover:bg-secondary-300/5 rounded-full"
              onClick={() => copy(referralLink)}
            >
              <Copy size={20} className="" /> Copy Link
            </Button>
            <Button className="bg-secondary-300/10 text-secondary-300 hover:bg-secondary-300/5 rounded-full">
              {" "}
              <ExternalLink size={20} className="" /> Share
            </Button>
          </div>
        </div>
        <div className="mt-4 border-0 flex items-center md:w-full p-5 rounded-2xl bg-brand-primary/10">
          <div className="flex items-center w-full justify-between gap-3">
            <div>
              <p className="font-bold">Your Coupon Code</p>
              <p className="text-brand-primary font-semibold">{couponCode}</p>
              <p className="text-xs text-neutral-500">
                <span className="font-medium text-sm text-black">
                  25% discount
                </span>{" "}
                • Valid until Dec 31, 2024
              </p>
            </div>
          </div>
          <Button
            onClick={() => copy(couponCode)}
            className="bg-brand-primary hover:bg-brand-primary/80 rounded-full ml-auto"
          >
            <Copy className="w-4 h-4" /> Copy Code
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, i) => (
          <StatsCard key={i} {...s} />
        ))}
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <SearchAndFilters
          placeholder=""
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showFilter={showFilter}
          onShowFilterChange={() => {}}
          sortBy={sortBy}
          onSortByChange={() => {}}
          showDropdownItems={showDropdownItems}
          sortByDropdownItems={sortByDropdownItems}
        />
        <ActiveFilters filters={activeFilters} onRemoveFilter={removeFilter} />
      </div>

      {/* Recent Conversions */}
      <div className="bg-white rounded-[20px] p-4 border shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <h2 className="text-lg font-bold">Recent Conversions</h2>
          <CustomButton title="Export CSV" />
        </div>
        <CustomTable
          columns={columns}
          rows={rows}
          actions={actions}
          emptyMessage="No conversions found"
        />
      </div>
    </div>
  );
};

export default AffiliateOverview;
