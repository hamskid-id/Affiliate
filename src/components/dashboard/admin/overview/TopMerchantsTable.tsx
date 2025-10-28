import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { TopMerchant } from "@/src/types/admin-dashboard";

interface TopMerchantsTableProps {
  merchants: TopMerchant[];
}

export const TopMerchantsTable: React.FC<TopMerchantsTableProps> = ({
  merchants,
}) => {
  const columns: TableColumn[] = [
    { key: "merchantCell", label: "Merchant", width: "w-[200px]" },
    { key: "campaignsCell", label: "Campaigns", width: "w-[120px]" },
    { key: "affiliatesCell", label: "Affiliates", width: "w-[120px]" },
    { key: "revenueCell", label: "Revenue", width: "w-[150px]" },
  ];

  const rows = merchants.map((merchant) => ({
    merchantCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={merchant.name} />
        <div className="flex flex-col">
          <span className="text-[14px] font-[500] text-[#111827]">
            {merchant.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {merchant.category}
          </span>
        </div>
      </div>
    ),
    campaignsCell: (
      <span className="text-[14px] text-[#111827]">{merchant.campaigns}</span>
    ),
    affiliatesCell: (
      <span className="text-[14px] text-[#111827]">{merchant.affiliates}</span>
    ),
    revenueCell: (
      <span className="text-[14px] font-[600] text-[#111827]">
        {merchant.revenue}
      </span>
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No merchants found"
    />
  );
};
