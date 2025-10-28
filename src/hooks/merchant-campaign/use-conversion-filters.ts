import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const useConversionFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Conversions");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Signup 🎯",
    "Value ⭐",
    "Paid 💰",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      {
        label: "All Conversions",
        onClick: () => setShowFilter("All Conversions"),
      },
      { label: "Purchase Only", onClick: () => setShowFilter("Purchase Only") },
      { label: "Signup Only", onClick: () => setShowFilter("Signup Only") },
      { label: "Renewal Only", onClick: () => setShowFilter("Renewal Only") },
      { label: "Pending Only", onClick: () => setShowFilter("Pending Only") },
      { label: "Paid Only", onClick: () => setShowFilter("Paid Only") },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Order Value", onClick: () => setSortBy("Order Value") },
      { label: "Commission", onClick: () => setSortBy("Commission") },
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
