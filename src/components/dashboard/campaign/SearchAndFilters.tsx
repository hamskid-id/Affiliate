import React from "react";
import { Search, ChevronDown } from "lucide-react";
import CustomDropdown, {
  DropdownItem,
} from "@/src/components/ui/custom-dropdown";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  showFilter: string;
  sortBy: string;
  showDropdownItems: DropdownItem[];
  sortByDropdownItems: DropdownItem[];
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  onSearchChange,
  showFilter,
  sortBy,
  showDropdownItems,
  sortByDropdownItems,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:p-[20px] p-[15px] items-start lg:items-center justify-between bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      {/* Search Input */}
      <div className="relative w-full lg:w-[400px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
        <input
          type="text"
          placeholder="Search campaigns, types, performers..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#4169E11A] rounded-[50px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-[#6B7280]">Show:</span>
        <CustomDropdown
          trigger={
            <button className="px-4 py-2 border border-[#E5E7EB] rounded-[50px] text-xs bg-[#3333331A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
              {showFilter}
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={showDropdownItems}
          className="w-[180px]"
        />

        <span className="text-sm text-[#6B7280]">Sort by:</span>
        <CustomDropdown
          trigger={
            <button className="px-4 py-2 rounded-[50px] text-xs bg-[#3333331A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2">
              {sortBy}
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={sortByDropdownItems}
          className="w-[180px]"
        />
      </div>
    </div>
  );
};
