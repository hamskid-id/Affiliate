"use client";

import React from "react";
import { AffiliatesTableHeader } from "./AffiliatesTableHeader";
import { AffiliatesTable } from "./AffiliatesTable";
import { MOCK_AFFILIATES_DATA } from "@/src/contants/affiliate";
import { useAffiliateSelection } from "@/src/hooks/affiliate/use-affiliate-selection";
import { useAffiliateFilters } from "@/src/hooks/affiliate/use-affiliate-filters";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";

const AffiliatesList: React.FC = () => {
  const affiliatesData = MOCK_AFFILIATES_DATA;

  const {
    selectedAffiliates,
    selectAll,
    handleSelectAll,
    handleSelectAffiliate,
  } = useAffiliateSelection(affiliatesData);

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
    console.log("Approve all affiliates");
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <SearchAndFilters
        placeholder="Search Affiliates, clicks, status..."
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showFilter={showFilter}
        onShowFilterChange={() => {}}
        sortBy={sortBy}
        onSortByChange={() => {}}
        showDropdownItems={showDropdownItems}
        sortByDropdownItems={sortByDropdownItems}
      />

      {/* Active Filters */}
      <ActiveFilters filters={activeFilters} onRemoveFilter={removeFilter} />

      {/* Table Section */}
      <div className="bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] overflow-hidden">
        <AffiliatesTableHeader
          selectedCount={selectedAffiliates.length}
          onApproveAll={handleApproveAll}
        />

        <AffiliatesTable
          affiliates={affiliatesData}
          selectedAffiliates={selectedAffiliates}
          selectAll={selectAll}
          onSelectAll={handleSelectAll}
          onSelectAffiliate={handleSelectAffiliate}
          onApprove={handleApprove}
          onDeny={handleDeny}
          onSuspend={handleSuspend}
          onView={handleView}
        />
      </div>
    </div>
  );
};

export default AffiliatesList;
