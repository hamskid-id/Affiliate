import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { PayoutStatusBadge } from "./PayoutStatusBadge";
import { PaymentMethodBadge } from "./PaymentMethodBadge";
import { PayoutActions } from "./PayoutActions";
import { Payout } from "@/src/types/payout";

interface PayoutsTableProps {
  payouts: Payout[];
  selectedPayouts: string[];
  selectAll: boolean;
  onSelectAll: () => void;
  onSelectPayout: (id: string) => void;
  onMarkAsPaid?: (payout: Payout) => void;
  onView?: (payout: Payout) => void;
}

export const PayoutsTable: React.FC<PayoutsTableProps> = ({
  payouts,
  selectedPayouts,
  selectAll,
  onSelectAll,
  onSelectPayout,
  onMarkAsPaid,
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
    { key: "affiliateCell", label: "Affiliates", width: "w-[250px]" },
    { key: "amountCell", label: "Amount Owed", width: "w-[150px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "lastUpdatedCell", label: "Last Updated", width: "w-[150px]" },
    { key: "commissionCell", label: "Commission Period", width: "w-[150px]" },
    { key: "paymentCell", label: "Payment Method", width: "w-[150px]" },
    { key: "actionsCell", label: "Actions", width: "w-[180px]" },
  ];

  const rows = payouts.map((payout) => ({
    checkbox: (
      <input
        type="checkbox"
        checked={selectedPayouts.includes(payout.id)}
        onChange={() => onSelectPayout(payout.id)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    affiliateCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={payout.affiliateName} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {payout.affiliateName}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {payout.affiliateEmail}
          </span>
        </div>
      </div>
    ),
    amountCell: (
      <div className="flex flex-col">
        <span className="text-[14px] font-[600] text-[#111827]">
          {payout.amount}
        </span>
        <span className="text-[11px] text-[#9CA3AF]">
          {payout.conversions} conversions
        </span>
      </div>
    ),
    statusCell: <PayoutStatusBadge status={payout.status} />,
    lastUpdatedCell: (
      <div className="flex flex-col">
        <span className="text-sm text-[#111827]">{payout.lastUpdated}</span>
        <span className="text-xs text-[#9CA3AF]">{payout.lastUpdatedTime}</span>
      </div>
    ),
    commissionCell: (
      <div className="flex flex-col">
        <span className="text-sm text-[#111827]">
          {payout.commissionPeriod}
        </span>
        <span className="text-xs text-[#9CA3AF]">
          {payout.commissionFrequency}
        </span>
      </div>
    ),
    paymentCell: <PaymentMethodBadge method={payout.paymentMethod} />,
    actionsCell: (
      <PayoutActions
        payout={payout}
        onMarkAsPaid={() => onMarkAsPaid?.(payout)}
        onView={() => onView?.(payout)}
      />
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No payouts found"
    />
  );
};
