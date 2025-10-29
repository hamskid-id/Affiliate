"use client";

import React from "react";
import { BusinessTableHeader } from "./BusinessTableHeader";
import { BusinessTable } from "./BusinessTable";
import { MOCK_BUSINESSES_DATA } from "@/src/contants/admin-merchant";
import { useBusinessFilters } from "@/src/hooks/admin-merchant/use-business-filters";
import { Business } from "@/src/types/admin-merchant";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";

const ManageBusinessList: React.FC = () => {
  const businessesData = MOCK_BUSINESSES_DATA;

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useBusinessFilters();

  const handleAddNew = () => {
    console.log("Add new business");
  };

  const handleEdit = (business: Business) => {
    console.log("Edit business:", business);
  };

  const handleToggleStatus = (business: Business) => {
    console.log("Toggle status:", business);
  };

  const handleDelete = (business: Business) => {
    console.log("Delete business:", business);
  };

  const handleMore = (business: Business) => {
    console.log("More options:", business);
  };

  return (
    <div className="space-y-6 py-6 bg-[#F9FAFB]">
      {/* Search and Filter Section */}
      <SearchAndFilters
        searchQuery={searchQuery}
        placeholder="Search businesses, transaction, status..."
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
        <BusinessTableHeader onAddNew={handleAddNew} />

        <BusinessTable
          businesses={businessesData}
          onEdit={handleEdit}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          onMore={handleMore}
        />
      </div>
    </div>
  );
};

export default ManageBusinessList;
