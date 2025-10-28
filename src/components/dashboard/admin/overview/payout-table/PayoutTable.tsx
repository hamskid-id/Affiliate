import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { StatusBadge } from "./StatusBadge";
import { PayoutActions } from "./PayoutActions";
import { Payouts } from "@/src/types/admin-dashboard";

interface PayoutsTableProps {
  Payouts: Payouts[];
  selectedPayouts: string[];
  selectAll: boolean;
  onSelectAll: () => void;
  onSelectPayout: (id: string) => void;
  onApprove?: (id: string) => void;
  onDeny?: (id: string) => void;
  onSuspend?: (id: string) => void;
  onView?: (id: string) => void;
}

export const PayoutsTable: React.FC<PayoutsTableProps> = ({
  Payouts,
  selectedPayouts,
  selectAll,
  onSelectAll,
  onSelectPayout,
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
    { key: "PayoutCell", label: "Payout Details", width: "w-[250px]" },
    { key: "amountCell", label: "Amount", width: "w-[200px]" },
    { key: "dateCell", label: "Period", width: "w-[120px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "actionsCell", label: "Actions", width: "w-[150px]" },
  ];

  const rows = Payouts.map((Payout) => ({
    checkbox: (
      <input
        type="checkbox"
        checked={selectedPayouts.includes(Payout.id)}
        onChange={() => onSelectPayout(Payout.id)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    PayoutCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={Payout.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {Payout.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">ID: {Payout.id}</span>
        </div>
      </div>
    ),
    amountCell: <span className="text-sm text-[#111827]">{Payout.amount}</span>,
    dateCell: <span className="text-sm text-[#111827]">{Payout.period}</span>,
    statusCell: <StatusBadge status={Payout.status} />,

    actionsCell: (
      <PayoutActions
        payout={Payout}
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
      emptyMessage="No Payouts found"
    />
  );
};
