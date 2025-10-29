import React from "react";
import { Search, Calendar, Users, Briefcase, Tag } from "lucide-react";

interface TransactionFiltersProps {
  onDateRangeClick?: () => void;
  onBusinessClick?: () => void;
  onAffiliatesClick?: () => void;
  onEventTypeClick?: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  onDateRangeClick,
  onBusinessClick,
  onAffiliatesClick,
  onEventTypeClick,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="space-y-4">
      {/* Filter Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Date Range Filter */}
        <div className="space-y-2">
          <label className="text-sm font-[400]  text-[#4A4A4A]">
            Date Range
          </label>
          <button
            onClick={onDateRangeClick}
            className="w-full flex items-center gap-2 px-4 py-2.5 bg-white border border-[#BBBBBB] rounded-[50px] text-sm text-[#6B7280] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Calendar className="w-4 h-4" />
            <span className="text-[13px]">Select date range</span>
          </button>
        </div>

        {/* Business Filter */}
        <div className="space-y-2">
          <label className="text-sm font-[400]  text-[#4A4A4A]">Business</label>
          <button
            onClick={onBusinessClick}
            className="w-full flex items-center gap-2 px-4 py-2.5 bg-white border border-[#BBBBBB] rounded-[50px] text-sm text-[#6B7280] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-[13px]">All Business</span>
          </button>
        </div>

        {/* Affiliates Filter */}
        <div className="space-y-2">
          <label className="text-sm font-[400]  text-[#4A4A4A]">
            Affiliates
          </label>
          <button
            onClick={onAffiliatesClick}
            className="w-full flex items-center gap-2 px-4 py-2.5 bg-white border border-[#BBBBBB] rounded-[50px] text-sm text-[#6B7280] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Users className="w-4 h-4" />
            <span className="text-[13px]">All Affiliates</span>
          </button>
        </div>

        {/* Event Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-[400]  text-[#4A4A4A]">
            Event Type
          </label>
          <button
            onClick={onEventTypeClick}
            className="w-full flex items-center gap-2 px-4 py-2.5 bg-white border border-[#BBBBBB] rounded-[50px] text-sm text-[#6B7280] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Tag className="w-4 h-4" />
            <span className="text-[13px]">All Event Types</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-fit">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-[190px] h-[44px] pl-10 pr-4 py-2.5 bg-[#4169E11A] rounded-[50px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
