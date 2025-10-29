import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { EventTypeBadge } from "./EventTypeBadge";
import { TransactionStatusBadge } from "./TransactionStatusBadge";
import { TransactionActions } from "./TransactionActions";
import { Transaction } from "@/src/types/admin-transaction";

interface TransactionsTableProps {
  transactions: Transaction[];
  onApprove?: (transaction: Transaction) => void;
  onReject?: (transaction: Transaction) => void;
  onView?: (transaction: Transaction) => void;
  onMore?: (transaction: Transaction) => void;
}

export const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
  onApprove,
  onReject,
  onView,
  onMore,
}) => {
  const columns: TableColumn[] = [
    { key: "dateCell", label: "Date/Time", width: "w-[120px]" },
    { key: "merchantCell", label: "Merchant", width: "w-[200px]" },
    { key: "affiliateCell", label: "Affiliates", width: "w-[200px]" },
    { key: "eventCell", label: "Event", width: "w-[130px]" },
    { key: "amountCell", label: "Amount", width: "w-[120px]" },
    { key: "commissionCell", label: "Commission", width: "w-[120px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "actionsCell", label: "Actions", width: "w-[180px]" },
  ];

  const rows = transactions.map((transaction) => ({
    dateCell: (
      <div className="flex flex-col">
        <span className="text-[13px] text-[#111827]">
          {transaction.dateTime.split("\n")[0]}
        </span>
        <span className="text-[12px] text-[#9CA3AF]">
          {transaction.dateTime.split("\n")[1]}
        </span>
      </div>
    ),
    merchantCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={transaction.merchant.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {transaction.merchant.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {transaction.merchant.category}
          </span>
        </div>
      </div>
    ),
    affiliateCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={transaction.affiliate.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {transaction.affiliate.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {transaction.affiliate.email}
          </span>
        </div>
      </div>
    ),
    eventCell: <EventTypeBadge type={transaction.eventType} />,
    amountCell: (
      <span className="text-sm font-medium text-[#111827]">
        {transaction.amount}
      </span>
    ),
    commissionCell: (
      <span className="text-sm font-medium text-[#111827]">
        {transaction.commission}
      </span>
    ),
    statusCell: <TransactionStatusBadge status={transaction.status} />,
    actionsCell: (
      <TransactionActions
        transaction={transaction}
        onApprove={() => onApprove?.(transaction)}
        onReject={() => onReject?.(transaction)}
        onView={() => onView?.(transaction)}
        onMore={() => onMore?.(transaction)}
      />
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No transactions found"
    />
  );
};
