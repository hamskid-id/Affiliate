import { Business } from "../types/admin-merchant";


export const MOCK_BUSINESSES_DATA: Business[] = [
  {
    id: "BUS-001",
    name: "TechStore",
    category: "Software Store",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
    },
    status: "Active",
    affiliates: 124,
    transaction: "₦503,513",
    dateCreated: "Mar 15, 2025",
  },
  {
    id: "BUS-002",
    name: "TechStore",
    category: "Software Store",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
    },
    status: "Active",
    affiliates: 124,
    transaction: "₦503,513",
    dateCreated: "Mar 15, 2025",
  },
  {
    id: "BUS-003",
    name: "TechStore",
    category: "Software Store",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
    },
    status: "Suspended",
    affiliates: 124,
    transaction: "₦503,513",
    dateCreated: "Mar 15, 2025",
  },
  {
    id: "BUS-004",
    name: "TechStore",
    category: "Software Store",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
    },
    status: "Active",
    affiliates: 124,
    transaction: "₦503,513",
    dateCreated: "Mar 15, 2025",
  },
  {
    id: "BUS-005",
    name: "TechStore",
    category: "Software Store",
    contact: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
    },
    status: "Active",
    affiliates: 124,
    transaction: "₦503,513",
    dateCreated: "Mar 15, 2025",
  },
];

export const STATUS_STYLES = {
  Active: "bg-[#D1FAE5] text-[#065F46]",
  Suspended: "bg-[#FEE2E2] text-[#991B1B]",
  Inactive: "bg-[#F3F4F6] text-[#6B7280]",
};
