import React from "react";
import CustomDropdown, {
  DropdownItem,
} from "@/src/components/ui/custom-dropdown";
import { ChevronDown } from "lucide-react";

interface TransactionsTableHeaderProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const TransactionsTableHeader: React.FC<
  TransactionsTableHeaderProps
> = ({ sortBy, onSortChange }) => {
  const sortByItems: DropdownItem[] = [
    { label: "All", onClick: () => onSortChange("All") },
    { label: "Pending", onClick: () => onSortChange("Pending") },
    { label: "Approved", onClick: () => onSortChange("Approved") },
    {
      label: "Paid",
      onClick: () => onSortChange("Paid"),
    },
    {
      label: "Rejected",
      onClick: () => onSortChange("Rejected"),
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:p-[20px] p-[15px] border-b border-gray-100">
      <h2 className="text-lg font-bold text-[#111827]">All Transactions</h2>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#6B7280]">Sort by:</span>
        <CustomDropdown
          trigger={
            <button className="px-4 py-2 border border-[#E5E7EB] rounded-[50px] text-xs bg-[#3333331A] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2 !w-[143px]">
              {sortBy}
              <ChevronDown className="w-4 h-4" />
            </button>
          }
          items={sortByItems}
          className="w-[200px]"
        />
      </div>
    </div>
  );
};
