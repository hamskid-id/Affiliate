"use client";

import React, { useState } from "react";
import { PayoutsTableHeader } from "./PayoutsTableHeader";
import { PayoutsTable } from "./PayoutsTable";
import { MOCK_PAYOUTS_DATA } from "@/src/contants/merchant-payout";
import { usePayoutSelection } from "@/src/hooks/merchant-payout/use-payout-selection";
import { usePayoutFilters } from "@/src/hooks/merchant-payout/use-payout-filters";
import { Payout } from "@/src/types/merchant-payout";
import ExportPayoutCSVModal from "../ExportPayoutCSVModal";
import ConfirmPayoutModal from "../ConfirmPayoutModal";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";

const PayoutsList: React.FC = () => {
  const payoutsData = MOCK_PAYOUTS_DATA;

  const { selectedPayouts, selectAll, handleSelectAll, handleSelectPayout } =
    usePayoutSelection(payoutsData);

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = usePayoutFilters();

  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [confirmPayoutModalOpen, setConfirmPayoutModalOpen] = useState(false);
  const [selectedPayout, setSelectedPayout] = useState<Payout | null>(null);

  const handleExport = () => {
    setExportModalOpen(true);
  };

  const handleExportCSV = (dateRange: string, status: string) => {
    console.log("Exporting CSV with filters:", { dateRange, status });
    // Add your export logic here
  };

  const handleMarkAsPaid = (payout: Payout) => {
    setSelectedPayout(payout);
    setConfirmPayoutModalOpen(true);
  };

  const handleConfirmPayout = (paymentMethod: string) => {
    console.log("Confirming payout with payment method:", paymentMethod);
    console.log("Selected payout:", selectedPayout);
    // Add your confirm logic here
  };

  const handleView = (payout: Payout) => {
    console.log("View payout:", payout);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Search and Filter Section */}
        <SearchAndFilters
          placeholder="Search Affiliates, clicks, status..."
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showFilter={showFilter}
          sortBy={sortBy}
          showDropdownItems={showDropdownItems}
          sortByDropdownItems={sortByDropdownItems}
        />

        {/* Active Filters */}
        <ActiveFilters filters={activeFilters} onRemoveFilter={removeFilter} />

        {/* Table Section */}
        <div className="bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] overflow-hidden">
          <PayoutsTableHeader onExport={handleExport} />

          <PayoutsTable
            payouts={payoutsData}
            selectedPayouts={selectedPayouts}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
            onSelectPayout={handleSelectPayout}
            onMarkAsPaid={handleMarkAsPaid}
            onView={handleView}
          />
        </div>
      </div>

      {/* Modals */}
      <ExportPayoutCSVModal
        open={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        onExport={handleExportCSV}
      />

      <ConfirmPayoutModal
        open={confirmPayoutModalOpen}
        onClose={() => {
          setConfirmPayoutModalOpen(false);
          setSelectedPayout(null);
        }}
        payout={selectedPayout}
        onConfirm={handleConfirmPayout}
      />
    </>
  );
};
export default PayoutsList;
