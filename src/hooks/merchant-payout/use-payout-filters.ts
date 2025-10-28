import { useState, useMemo } from "react";
import { DropdownItem } from "@/src/components/ui/custom-dropdown";

export const usePayoutFilters = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilter, setShowFilter] = useState<string>("All Payouts");
  const [sortBy, setSortBy] = useState<string>("Date Created");
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Commissions Period",
    "Paid",
    "Paypal",
  ]);

  const showDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "All Payouts", onClick: () => setShowFilter("All Payouts") },
      { label: "Paid Only", onClick: () => setShowFilter("Paid Only") },
      { label: "Pending Only", onClick: () => setShowFilter("Pending Only") },
      { label: "Approved Only", onClick: () => setShowFilter("Approved Only") },
    ],
    [],
  );

  const sortByDropdownItems: DropdownItem[] = useMemo(
    () => [
      { label: "Date Created", onClick: () => setSortBy("Date Created") },
      { label: "Amount", onClick: () => setSortBy("Amount") },
      { label: "Affiliate Name", onClick: () => setSortBy("Affiliate Name") },
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
