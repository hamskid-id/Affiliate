"use client";

import React from "react";
import { PayoutTableHeader } from "./PayoutTableHeader";
import { PayoutsTable } from "./PayoutTable";
import { useAffiliateFilters } from "@/src/hooks/merchant-affiliate/use-affiliate-filters";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";
import { usePayoutSelection } from "@/src/hooks/admin-dashboard/use-payout-selection";
import { MOCK_PAYOUTS_DATA } from "@/src/contants/admin-dashboard";

const PayoutList: React.FC = () => {
  const PayoutData = MOCK_PAYOUTS_DATA;

  const { selectedPayouts, selectAll, handleSelectAll, handleSelectPayout } =
    usePayoutSelection(PayoutData);

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

  const handleApprove = (id: string) => {
    console.log("Approve affiliate:", id);
  };

  const handleDeny = (id: string) => {
    console.log("Deny affiliate:", id);
  };

  const handleSuspend = (id: string) => {
    console.log("Suspend affiliate:", id);
  };

  const handleView = (id: string) => {
    console.log("View affiliate:", id);
  };

  const handleApproveAll = () => {
    console.log("Approve all Payout");
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      {/* <SearchAndFilters
        placeholder="Search Payout, clicks, status..."
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showFilter={showFilter}
        onShowFilterChange={() => {}}
        sortBy={sortBy}
        onSortByChange={() => {}}
        showDropdownItems={showDropdownItems}
        sortByDropdownItems={sortByDropdownItems}
      /> */}

      {/* Active Filters */}
      {/* <ActiveFilters filters={activeFilters} onRemoveFilter={removeFilter} /> */}

      {/* Table Section */}
      <div className="bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] overflow-hidden">
        <PayoutTableHeader
          selectedCount={selectedPayouts.length}
          onApproveAll={handleApproveAll}
        />

        <PayoutsTable
          Payouts={PayoutData}
          selectedPayouts={selectedPayouts}
          selectAll={selectAll}
          onSelectAll={handleSelectAll}
          onSelectPayout={handleSelectPayout}
          onApprove={handleApprove}
          onDeny={handleDeny}
          onSuspend={handleSuspend}
          onView={handleView}
        />
      </div>
    </div>
  );
};

export default PayoutList;
