"use client";

import React from "react";
import CustomTable, {
  TableAction,
  TableColumn,
} from "../../../ui/custom-table";
import CustomButton from "../../../ui/custom-button";
import CustomAvatar from "../../../ui/custom-avatar";

interface PayoutData {
  name: string;
  email: string;
  amount: string;
  status: "Paid" | "Pending";
  date: string;
  method: string;
  avatar: string;
}

const RecentPayouts: React.FC = () => {
  const payoutsData: PayoutData[] = [
    {
      name: "Sarah Johnson",
      email: "sarah@email.com",
      amount: "₦325,847",
      status: "Pending",
      date: "Mar 15, 2025",
      method: "PayPal",
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      email: "mike@email.com",
      amount: "₦23,098",
      status: "Pending",
      date: "Mar 18, 2025",
      method: "Bank Transfer",
      avatar: "MC",
    },
    {
      name: "Emma Williams",
      email: "emma@email.com",
      amount: "₦450,000",
      status: "Paid",
      date: "Mar 12, 2025",
      method: "Stripe",
      avatar: "EW",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@email.com",
      amount: "₦150,000",
      status: "Pending",
      date: "Mar 12, 2025",
      method: "PayPal",
      avatar: "SJ",
    },
  ];

  const getStatusBadge = (status: "Paid" | "Pending") => {
    const colors =
      status === "Paid"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700";
    return (
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${colors}`}>
        {status}
      </span>
    );
  };

  const columns: TableColumn[] = [
    { key: "nameCell", label: "Name" },
    { key: "amount", label: "Amount" },
    { key: "statusCell", label: "Status" },
    { key: "date", label: "Date" },
    { key: "method", label: "Method" },
  ];

  const rows = payoutsData.map((payout) => ({
    nameCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={payout.avatar} />
        <div>
          <p className="text-sm font-semibold text-[#111827]">{payout.name}</p>
          <p className="text-xs text-[#9CA3AF]">{payout.email}</p>
        </div>
      </div>
    ),
    amount: (
      <span className="font-semibold text-[#111827]">{payout.amount}</span>
    ),
    statusCell: getStatusBadge(payout.status),
    date: payout.date,
    method: payout.method,
  }));

  const actions: TableAction[] = [
    {
      label: "View Details",
      onClick: (_, index) => {
        console.log("View details for:", payoutsData[index]);
      },
    },
  ];

  return (
    <div className="bg-white rounded-[20px] sm:p-[20px] p-[15px] h-full shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-lg font-bold text-[#111827]">Recent Payouts</h2>
        <div className="flex items-center gap-5 ms-auto">
          <p className="text-[#FF7F50] font-[500]">Export CSV</p>
          <CustomButton
            title="Process Payment"
            className="bg-[#4169E1] shadow-none"
            onClick={() => console.log("Process payment clicked")}
          />
        </div>
      </div>

      <CustomTable
        columns={columns}
        rows={rows}
        actions={actions}
        emptyMessage="No payouts found"
      />
    </div>
  );
};

export default RecentPayouts;
