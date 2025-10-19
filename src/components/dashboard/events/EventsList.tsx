"use client";

import React from "react";
import { SearchAndFilters } from "./SearchAndFilters";
import { ActiveFilters } from "./ActiveFilters";
import { EventsTableHeader } from "./EventsTableHeader";
import { EventsTable } from "./EventsTable";
import { useEventsData } from "@/src/hooks/use-events-data";
import { useEventFilters } from "@/src/hooks/use-event-filters";
import { Event } from "@/src/types/event";

const EventsList: React.FC = () => {
  const { eventsData, handleStatusToggle } = useEventsData();

  const {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  } = useEventFilters();

  const handleCreateNew = () => {
    console.log("Create new event");
  };

  const handleView = (event: Event) => {
    console.log("View event:", event);
  };

  const handleEdit = (event: Event) => {
    console.log("Edit event:", event);
  };

  const handleDelete = (event: Event) => {
    console.log("Delete event:", event);
  };

  const handleMore = (event: Event) => {
    console.log("More options:", event);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <SearchAndFilters
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
        <EventsTableHeader onCreateNew={handleCreateNew} />

        <EventsTable
          events={eventsData}
          onStatusToggle={handleStatusToggle}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMore={handleMore}
        />
      </div>
    </div>
  );
};

export default EventsList;
