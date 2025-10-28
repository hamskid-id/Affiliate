import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { StatusBadge } from "./StatusBadge";
import { AffiliateActions } from "./AffiliateActions";
import { Affiliate } from "@/src/types/merchant-affiliate";

interface AffiliatesTableProps {
  affiliates: Affiliate[];
  selectedAffiliates: string[];
  selectAll: boolean;
  onSelectAll: () => void;
  onSelectAffiliate: (id: string) => void;
  onApprove?: (id: string) => void;
  onDeny?: (id: string) => void;
  onSuspend?: (id: string) => void;
  onView?: (id: string) => void;
}

export const AffiliatesTable: React.FC<AffiliatesTableProps> = ({
  affiliates,
  selectedAffiliates,
  selectAll,
  onSelectAll,
  onSelectAffiliate,
  onApprove,
  onDeny,
  onSuspend,
  onView,
}) => {
  const columns: TableColumn[] = [
    {
      key: "checkbox",
      label: (
        <input
          type="checkbox"
          checked={selectAll}
          onChange={onSelectAll}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
      ),
      width: "w-[50px]",
    },
    { key: "affiliateCell", label: "Affiliate Details", width: "w-[250px]" },
    { key: "emailCell", label: "Email", width: "w-[200px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "clicksCell", label: "Clicks", width: "w-[80px]" },
    { key: "conversionsCell", label: "Conversions", width: "w-[100px]" },
    { key: "commissionCell", label: "Commission", width: "w-[120px]" },
    { key: "dateCell", label: "Date Joined", width: "w-[120px]" },
    { key: "actionsCell", label: "Actions", width: "w-[150px]" },
  ];

  const rows = affiliates.map((affiliate) => ({
    checkbox: (
      <input
        type="checkbox"
        checked={selectedAffiliates.includes(affiliate.id)}
        onChange={() => onSelectAffiliate(affiliate.id)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    affiliateCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={affiliate.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {affiliate.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">ID: {affiliate.id}</span>
        </div>
      </div>
    ),
    emailCell: (
      <span className="text-sm text-[#111827]">{affiliate.email}</span>
    ),
    statusCell: <StatusBadge status={affiliate.status} />,
    clicksCell: (
      <span className="text-sm text-[#111827]">{affiliate.clicks}</span>
    ),
    conversionsCell: (
      <span className="text-sm text-[#111827]">{affiliate.conversions}</span>
    ),
    commissionCell: (
      <span className="text-sm font-medium text-[#111827]">
        {affiliate.commission}
      </span>
    ),
    dateCell: (
      <span className="text-sm text-[#111827]">{affiliate.dateJoined}</span>
    ),
    actionsCell: (
      <AffiliateActions
        affiliate={affiliate}
        onApprove={onApprove}
        onDeny={onDeny}
        onSuspend={onSuspend}
        onView={onView}
      />
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
