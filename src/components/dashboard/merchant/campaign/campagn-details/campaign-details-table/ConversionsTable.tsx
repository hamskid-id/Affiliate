import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { EventTypeBadge } from "./EventTypeBadge";
import { StatusBadge } from "./StatusBadge";
import { Conversion } from "@/src/types/merchant-campaign";

interface ConversionsTableProps {
  conversions: Conversion[];
  onDelete?: (conversion: Conversion) => void;
}

export const ConversionsTable: React.FC<ConversionsTableProps> = ({
  conversions,
  onDelete,
}) => {
  const columns: TableColumn[] = [
    { key: "dateCell", label: "Date", width: "w-[120px]" },
    { key: "eventTypeCell", label: "Event Type", width: "w-[130px]" },
    { key: "fromUserCell", label: "From User", width: "w-[220px]" },
    { key: "affiliateCell", label: "Affiliate", width: "w-[220px]" },
    { key: "orderValueCell", label: "Order Value", width: "w-[120px]" },
    { key: "commissionCell", label: "Commission", width: "w-[120px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "actionsCell", label: "Actions", width: "w-[100px]" },
  ];

  const rows = conversions.map((conversion) => ({
    dateCell: <span className="text-sm text-[#111827]">{conversion.date}</span>,
    eventTypeCell: <EventTypeBadge type={conversion.eventType} />,
    fromUserCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={conversion.fromUser.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {conversion.fromUser.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {conversion.fromUser.email}
          </span>
        </div>
      </div>
    ),
    affiliateCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={conversion.affiliate.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {conversion.affiliate.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {conversion.affiliate.email}
          </span>
        </div>
      </div>
    ),
    orderValueCell: (
      <span className="text-sm font-medium text-[#111827]">
        {conversion.orderValue}
      </span>
    ),
    commissionCell: (
      <span className="text-sm font-medium text-[#111827]">
        {conversion.commission}
      </span>
    ),
    statusCell: <StatusBadge status={conversion.status} />,
    actionsCell: (
      <button
        onClick={() => onDelete?.(conversion)}
        className="text-[#DC2626] hover:text-[#B91C1C] text-sm font-medium"
      >
        Delete
      </button>
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No conversions found"
    />
  );
};
