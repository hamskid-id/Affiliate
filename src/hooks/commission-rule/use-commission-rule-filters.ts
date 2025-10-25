import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useCommissionRuleFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Rules");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Rule type",
    "Status",
    "High Performers",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "All Rules", onClick: () => setShowFilter("All Rules") },
      { label: "Active Only", onClick: () => setShowFilter("Active Only") },
      { label: "Inactive Only", onClick: () => setShowFilter("Inactive Only") },
      { label: "Flat Type", onClick: () => setShowFilter("Flat Type") },
      {
        label: "Percentage Type",
        onClick: () => setShowFilter("Percentage Type"),
      },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Name (A-Z)", onClick: () => setSortBy("Name (A-Z)") },
      { label: "Conversions", onClick: () => setSortBy("Conversions") },
      { label: "Value", onClick: () => setSortBy("Value") },
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
