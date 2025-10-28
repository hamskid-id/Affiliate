"use client";

import React from "react";
import { ConversionsTableHeader } from "./ConversionsTableHeader";
import { ConversionsTable } from "./ConversionsTable";
import { MOCK_CONVERSIONS_DATA } from "@/src/contants/merchant-campaign";
import { useConversionFilters } from "@/src/hooks/merchant-campaign/use-conversion-filters";
import { Conversion } from "@/src/types/merchant-campaign";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";

const ConversionsList: React.FC = () => {
  const conversionsData = MOCK_CONVERSIONS_DATA;

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useConversionFilters();

  const handleExport = () => {
    console.log("Export CSV");
  };

  const handleDelete = (conversion: Conversion) => {
    console.log("Delete conversion:", conversion);
  };

  return (
    <div className="space-y-6 p-6 bg-[#F9FAFB]">
      {/* Search and Filter Section */}
      <SearchAndFilters
        placeholder="Search campaigns, types, performers..."
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
        <ConversionsTableHeader onExport={handleExport} />

        <ConversionsTable
          conversions={conversionsData}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ConversionsList;
