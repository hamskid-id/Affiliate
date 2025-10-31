import { Transaction } from "../types/admin-transaction";

export const MOCK_TRANSACTIONS_DATA: Transaction[] = [
  {
    id: "TXN-001",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Purchase",
    eventType: "Purchase",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Pending",
  },
  {
    id: "TXN-002",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Registration",
    eventType: "Registration",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Approved",
  },
  {
    id: "TXN-003",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Sign Up",
    eventType: "Sign Up",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Rejected",
  },
  {
    id: "TXN-004",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Purchase",
    eventType: "Purchase",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Pending",
  },
  {
    id: "TXN-005",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Subscription",
    eventType: "Subscription",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Paid",
  },
  {
    id: "TXN-006",
    dateTime: "Mar 15, 2025\n2:34 PM",
    merchant: {
      name: "John Smith",
      category: "Software Store",
    },
    affiliate: {
      name: "John Smith",
      email: "sarah@example.com",
    },
    event: "Page View",
    eventType: "Page View",
    amount: "₦30,513",
    commission: "₦3,513",
    status: "Approved",
  },
];

export const EVENT_TYPE_STYLES = {
  Purchase: "bg-[#EEF2FF] text-[#4F46E5]",
  Registration: "bg-[#D1FAE5] text-[#065F46]",
  "Sign Up": "bg-[#FEE2E2] text-[#991B1B]",
  Subscription: "bg-[#DBEAFE] text-[#1E40AF]",
  "Page View": "bg-[#FEF3C7] text-[#92400E]",
};

export const STATUS_STYLES = {
  Pending: "bg-[#FEF3C7] text-[#92400E]",
  Approved: "bg-[#D1FAE5] text-[#065F46]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
  Paid: "bg-[#DBEAFE] text-[#1E40AF]",
};
