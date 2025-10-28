import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useBusinessFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Events");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Software",
    "Sarah",
    "Active",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "All Events", onClick: () => setShowFilter("All Events") },
      { label: "Active Only", onClick: () => setShowFilter("Active Only") },
      {
        label: "Suspended Only",
        onClick: () => setShowFilter("Suspended Only"),
      },
      { label: "Inactive Only", onClick: () => setShowFilter("Inactive Only") },
    ],
    []
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Name (A-Z)", onClick: () => setSortBy("Name (A-Z)") },
      { label: "Transaction", onClick: () => setSortBy("Transaction") },
      { label: "Affiliates", onClick: () => setSortBy("Affiliates") },
    ],
    []
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
