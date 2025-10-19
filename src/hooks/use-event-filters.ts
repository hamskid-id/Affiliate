import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useEventFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Events");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Registration",
    "Active",
    "High Conversions",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "All Events", onClick: () => setShowFilter("All Events") },
      { label: "Purchase Only", onClick: () => setShowFilter("Purchase Only") },
      {
        label: "Registration Only",
        onClick: () => setShowFilter("Registration Only"),
      },
      { label: "Active Only", onClick: () => setShowFilter("Active Only") },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Name (A-Z)", onClick: () => setSortBy("Name (A-Z)") },
      { label: "Conversions", onClick: () => setSortBy("Conversions") },
      { label: "Type", onClick: () => setSortBy("Type") },
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
