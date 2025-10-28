import { Affiliate } from "../types/merchant-affiliate";

export const MOCK_AFFILIATES_DATA: Affiliate[] = [
  {
    id: "AFF-001",
    name: "John Smith",
    email: "sarah@example.com",
    status: "Pending",
    clicks: 124,
    conversions: 89,
    commission: "₦503,513",
    dateJoined: "Mar 15, 2025",
  },
  {
    id: "AFF-002",
    name: "John Smith",
    email: "sarah@example.com",
    status: "Approved",
    clicks: 124,
    conversions: 89,
    commission: "₦503,513",
    dateJoined: "Mar 15, 2025",
  },
  {
    id: "AFF-003",
    name: "John Smith",
    email: "sarah@example.com",
    status: "Rejected",
    clicks: 124,
    conversions: 89,
    commission: "₦503,513",
    dateJoined: "Mar 15, 2025",
  },
  {
    id: "AFF-004",
    name: "John Smith",
    email: "sarah@example.com",
    status: "Approved",
    clicks: 124,
    conversions: 89,
    commission: "₦503,513",
    dateJoined: "Mar 15, 2025",
  },
  {
    id: "AFF-005",
    name: "John Smith",
    email: "sarah@example.com",
    status: "Denied",
    clicks: 124,
    conversions: 89,
    commission: "₦503,513",
    dateJoined: "Mar 15, 2025",
  },
];

export const STATUS_STYLES = {
  Pending: "bg-[#FEF3C7] text-[#92400E]",
  Approved: "bg-[#D1FAE5] text-[#065F46]",
  Rejected: "bg-[#FEE2E2] text-[#991B1B]",
  Denied: "bg-[#E5E7EB] text-[#374151]",
  Suspended: "bg-[#FED7AA] text-[#9A3412]",
};

export const FILTER_OPTIONS = {
  show: ["All Affiliates", "Pending Only", "Approved Only", "Rejected Only"],
  sortBy: ["Date Created", "Name (A-Z)", "Commission", "Conversions"],
};
