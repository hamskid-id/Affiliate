import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useAffiliateFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Affiliates");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Joins",
    "Conversions",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      {
        label: "All Affiliates",
        onClick: () => setShowFilter("All Affiliates"),
      },
      { label: "Pending Only", onClick: () => setShowFilter("Pending Only") },
      { label: "Approved Only", onClick: () => setShowFilter("Approved Only") },
      { label: "Rejected Only", onClick: () => setShowFilter("Rejected Only") },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Name (A-Z)", onClick: () => setSortBy("Name (A-Z)") },
      { label: "Commission", onClick: () => setSortBy("Commission") },
      { label: "Conversions", onClick: () => setSortBy("Conversions") },
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
