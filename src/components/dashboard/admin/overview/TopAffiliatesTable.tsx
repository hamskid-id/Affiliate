import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { StatusBadge } from "./StatusBadge";
import { TopAffiliate } from "@/src/types/admin-dashboard";

interface TopAffiliatesTableProps {
  affiliates: TopAffiliate[];
}

export const TopAffiliatesTable: React.FC<TopAffiliatesTableProps> = ({
  affiliates,
}) => {
  const columns: TableColumn[] = [
    { key: "affiliateCell", label: "Affiliate", width: "w-[200px]" },
    { key: "clicksCell", label: "Clicks", width: "w-[120px]" },
    { key: "conversionsCell", label: "Conversions", width: "w-[120px]" },
    { key: "earningsCell", label: "Earnings", width: "w-[150px]" },
  ];

  const rows = affiliates.map((affiliate) => ({
    affiliateCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={affiliate.name} />
        <div className="flex flex-col">
          <span className="text-[14px] font-[500] text-[#111827]">
            {affiliate.name}
          </span>
          <StatusBadge status={affiliate.status} />
        </div>
      </div>
    ),
    clicksCell: (
      <span className="text-[14px] text-[#111827]">
        {affiliate.clicks.toLocaleString()}
      </span>
    ),
    conversionsCell: (
      <span className="text-[14px] text-[#111827]">
        {affiliate.conversions.toLocaleString()}
      </span>
    ),
    earningsCell: (
      <span className="text-[14px] font-[600] text-[#111827]">
        {affiliate.earnings}
      </span>
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No affiliates found"
    />
  );
};
