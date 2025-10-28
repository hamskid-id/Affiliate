import { Payouts, TopAffiliate, TopMerchant } from "../types/admin-dashboard";

export const MOCK_PAYOUTS_DATA: Payouts[] = [
  {
    id: "AFF-001",
    name: "John Smith",
    amount: "₦200,847",
    status: "Pending",
    period: "Mar 15, 2025",
  },
  {
    id: "AFF-002",
    name: "John Smith",
    amount: "₦2345",
    status: "Approved",
    period: "Mar 15, 2025",
  },
  {
    id: "AFF-003",
    name: "John Smith",
    amount: "₦6363",
    status: "Rejected",
    period: "Mar 15, 2025",
  },
  {
    id: "AFF-004",
    name: "John Smith",
    amount: "₦827",
    status: "Approved",
    period: "Mar 15, 2025",
  },
  {
    id: "AFF-005",
    name: "John Smith",
    amount: "₦928",
    status: "Denied",
    period: "Mar 15, 2025",
  },
];

export const MOCK_TOP_MERCHANTS: TopMerchant[] = [
  {
    id: "MERCH-001",
    name: "TechStore Inc.",
    category: "Electronics",
    campaigns: 12,
    affiliates: 156,
    revenue: "₦1,847,892",
  },
  {
    id: "MERCH-002",
    name: "FashionCo",
    category: "Clothing",
    campaigns: 8,
    affiliates: 203,
    revenue: "₦847,892",
  },
  {
    id: "MERCH-003",
    name: "BeautyBrand",
    category: "Cosmetics",
    campaigns: 15,
    affiliates: 89,
    revenue: "₦647,892",
  },
];

export const MOCK_TOP_AFFILIATES: TopAffiliate[] = [
  {
    id: "AFF-001",
    name: "Michael Ademola",
    status: "Active",
    clicks: 12450,
    conversions: 892,
    earnings: "₦1,847,892",
  },
  {
    id: "AFF-002",
    name: "Samuel Matthew",
    status: "Inactive",
    clicks: 9820,
    conversions: 654,
    earnings: "₦847,892",
  },
  {
    id: "AFF-003",
    name: "Sarah Williams",
    status: "Active",
    clicks: 7230,
    conversions: 203,
    earnings: "₦647,892",
  },
];
