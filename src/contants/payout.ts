import { Payout } from "../types/payout";

export const MOCK_PAYOUTS_DATA: Payout[] = [
  {
    id: "PAY-001",
    affiliateName: "Sarah Johnson",
    affiliateEmail: "sarah@example.com",
    amount: "₦80,892",
    conversions: 15,
    status: "Paid",
    lastUpdated: "Mar 15, 2025",
    lastUpdatedTime: "2 months ago",
    commissionPeriod: "Aug 2025",
    commissionFrequency: "Monthly",
    paymentMethod: "Paypal",
  },
  {
    id: "PAY-002",
    affiliateName: "Emma Williams",
    affiliateEmail: "emma@example.com",
    amount: "₦80,892",
    conversions: 15,
    status: "Pending",
    lastUpdated: "Mar 15, 2025",
    lastUpdatedTime: "2 months ago",
    commissionPeriod: "Aug 2025",
    commissionFrequency: "Monthly",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "PAY-003",
    affiliateName: "Mike Chen",
    affiliateEmail: "mike@example.com",
    amount: "₦80,892",
    conversions: 15,
    status: "Pending",
    lastUpdated: "Mar 15, 2025",
    lastUpdatedTime: "2 months ago",
    commissionPeriod: "Aug 2025",
    commissionFrequency: "Monthly",
    paymentMethod: "Stripe",
  },
  {
    id: "PAY-004",
    affiliateName: "Sarah Johnson",
    affiliateEmail: "sarah@example.com",
    amount: "₦80,892",
    conversions: 15,
    status: "Paid",
    lastUpdated: "Mar 15, 2025",
    lastUpdatedTime: "2 months ago",
    commissionPeriod: "Aug 2025",
    commissionFrequency: "Monthly",
    paymentMethod: "Paypal",
  },
  {
    id: "PAY-005",
    affiliateName: "Mike Chen",
    affiliateEmail: "mike@example.com",
    amount: "₦80,892",
    conversions: 15,
    status: "Approved",
    lastUpdated: "Mar 15, 2025",
    lastUpdatedTime: "2 months ago",
    commissionPeriod: "Aug 2025",
    commissionFrequency: "Monthly",
    paymentMethod: "Stripe",
  },
];

export const frequencyOptions = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Bi-weekly", value: "bi-weekly" },
  { label: "Monthly", value: "monthly" },
];

export const campaignsOptions = [
  { label: "Summer Sale 2025", value: "summer-sale-2025" },
  { label: "Flash Sale 25", value: "flash-sale-25" },
  { label: "Black Friday 2024", value: "black-friday-2024" },
  { label: "Holiday Special", value: "holiday-special" },
];

export const PAYOUT_STATUS_STYLES = {
  Paid: "bg-[#D1FAE5] text-[#065F46]",
  Pending: "bg-[#FEF3C7] text-[#92400E]",
  Approved: "bg-[#DBEAFE] text-[#1E40AF]",
};
