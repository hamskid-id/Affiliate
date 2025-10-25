"use client";

import React from "react";
import { CommissionRulesTableHeader } from "./CommissionRulesTableHeader";
import { CommissionRulesTable } from "./CommissionRulesTable";
import { MOCK_COMMISSION_RULES_DATA } from "@/src/contants/commission-rule";
import { useCommissionRuleFilters } from "@/src/hooks/commission-rule/use-commission-rule-filters";
import { CommissionRule } from "@/src/types/commission-rule";
import { SearchAndFilters } from "../../../shared/SearchAndFilters";
import { ActiveFilters } from "../../../shared/ActiveFilters";
import { useRouter } from "nextjs-toploader/app";

const CommissionRulesList: React.FC = () => {
  const router = useRouter();
  const rulesData = MOCK_COMMISSION_RULES_DATA;

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useCommissionRuleFilters();

  const handleCreateNew = () =>
    router.push("/dashboard/commission-rules/create");

  const handleEdit = (rule: CommissionRule) => {
    console.log("Edit rule:", rule);
  };

  const handleToggleStatus = (rule: CommissionRule) => {
    console.log("Toggle status:", rule);
  };

  const handleDelete = (rule: CommissionRule) => {
    console.log("Delete rule:", rule);
  };

  const handleMore = (rule: CommissionRule) => {
    console.log("More options:", rule);
  };

  return (
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
        <CommissionRulesTableHeader onCreateNew={handleCreateNew} />

        <CommissionRulesTable
          rules={rulesData}
          onEdit={handleEdit}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          onMore={handleMore}
        />
      </div>
    </div>
  );
};

export default CommissionRulesList;
