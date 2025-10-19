import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useCampaignFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Campaigns");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Referral Links (15)",
    "Coupon Codes (8)",
    "High Performers",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "All Campaigns", onClick: () => setShowFilter("All Campaigns") },
      { label: "Active Only", onClick: () => setShowFilter("Active Only") },
      { label: "Paused Only", onClick: () => setShowFilter("Paused Only") },
      {
        label: "Completed Only",
        onClick: () => setShowFilter("Completed Only"),
      },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Name (A-Z)", onClick: () => setSortBy("Name (A-Z)") },
      { label: "Performance", onClick: () => setSortBy("Performance") },
      { label: "Status", onClick: () => setSortBy("Status") },
    ],
    [],
  );

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return {
    searchQuery,
    setSearchQuery,
    showFilter,
    sortBy,
    activeFilters,
    showDropdownItems,
    sortByDropdownItems,
    removeFilter,
  };
};
