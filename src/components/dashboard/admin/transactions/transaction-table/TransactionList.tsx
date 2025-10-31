"use client";

import React, { useState } from "react";
import { TransactionFilters } from "./TransactionFilters";
import { TransactionsTableHeader } from "./TransactionsTableHeader";
import { TransactionsTable } from "./TransactionsTable";
import { MOCK_TRANSACTIONS_DATA } from "@/src/contants/admin-transaction";
import { Transaction } from "@/src/types/admin-transaction";

const TransactionList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("All");
  const transactionsData = MOCK_TRANSACTIONS_DATA;

  const handleApprove = (transaction: Transaction) => {
    console.log("Approve transaction:", transaction);
  };

  const handleReject = (transaction: Transaction) => {
    console.log("Reject transaction:", transaction);
  };

  const handleView = (transaction: Transaction) => {
    console.log("View transaction:", transaction);
  };

  const handleMore = (transaction: Transaction) => {
    console.log("More options:", transaction);
  };

  return (
    <div className="space-y-6 py-6 bg-[#F9FAFB]">
      {/* Filters */}
      <TransactionFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onDateRangeClick={() => console.log("Date range clicked")}
        onBusinessClick={() => console.log("Business clicked")}
        onAffiliatesClick={() => console.log("Affiliates clicked")}
        onEventTypeClick={() => console.log("Event type clicked")}
      />

      {/* Table Section */}
      <div className="bg-white rounded-[20px] shadow-[0_16px_32px_-12px_rgba(88,92,95,0.10)] overflow-hidden">
        <TransactionsTableHeader sortBy={sortBy} onSortChange={setSortBy} />
        <TransactionsTable
          transactions={transactionsData}
          onApprove={handleApprove}
          onReject={handleReject}
          onView={handleView}
          onMore={handleMore}
        />
      </div>
    </div>
  );
};

export default TransactionList;
