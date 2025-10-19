import React from "react";

interface ActiveFiltersProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter,
}) => {
  if (filters.length === 0) return null;

  return (
    <div className="flex items-center gap-3 flex-wrap p-4 bg-white border border-[#FF5212] rounded-xl">
      <span className="text-sm font-medium text-[#6B7280]">Active search:</span>
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#FFD4C5] font-[500] rounded-full"
        >
          <span className="text-xs text-[#4A4A4A]">{filter}</span>
          <button
            onClick={() => onRemoveFilter(filter)}
            className="text-[#4A4A4A] hover:text-[#FF5212] transition-colors"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};
