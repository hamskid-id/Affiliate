"use client";

import React from "react";
import { CampaignsTableHeader } from "./CampaignsTableHeader";
import { CampaignsTable } from "./CampaignsTable";
import { MOCK_CAMPAIGNS_DATA } from "@/src/contants/campaign";
import { useCampaignSelection } from "@/src/hooks/campaign/use-campaign-selection";
import { useCampaignFilters } from "@/src/hooks/campaign/use-campaign-filters";
import { Campaign } from "@/src/types/campaign";
import { useRouter } from "nextjs-toploader/app";
import { SearchAndFilters } from "@/src/components/shared/SearchAndFilters";
import { ActiveFilters } from "@/src/components/shared/ActiveFilters";

const CampaignsList: React.FC = () => {
  const campaignsData = MOCK_CAMPAIGNS_DATA;
  const router = useRouter();
  const navigateToCampaignPage = (id: string) =>
    router.push(`/dashboard/campaigns/${id}`);

  const {
    selectedCampaigns,
    selectAll,
    handleSelectAll,
    handleSelectCampaign,
  } = useCampaignSelection(campaignsData);

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useCampaignFilters();

  const handleCreateNew = () => {
    console.log("Create new campaign");
  };

  const handleView = (campaign: Campaign) => {
    navigateToCampaignPage(campaign.id);
    console.log("View campaign:", campaign);
  };

  const handleEdit = (campaign: Campaign) => {
    console.log("Edit campaign:", campaign);
  };

  const handleMoreOptions = (campaign: Campaign) => {
    console.log("More options:", campaign);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <SearchAndFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showFilter={showFilter}
        placeholder="Search campaigns, types, performers..."
        sortBy={sortBy}
        showDropdownItems={showDropdownItems}
        sortByDropdownItems={sortByDropdownItems}
      />

      {/* Active Filters */}
      <ActiveFilters filters={activeFilters} onRemoveFilter={removeFilter} />

      {/* Table Section */}
      <div className="bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] overflow-hidden">
        <CampaignsTableHeader
          selectedCount={selectedCampaigns.length}
          onCreateNew={handleCreateNew}
        />

        <CampaignsTable
          campaigns={campaignsData}
          selectedCampaigns={selectedCampaigns}
          selectAll={selectAll}
          onSelectAll={handleSelectAll}
          onSelectCampaign={handleSelectCampaign}
          onView={handleView}
          onEdit={handleEdit}
          onMoreOptions={handleMoreOptions}
        />
      </div>
    </div>
  );
};

export default CampaignsList;
