import { Link, QrCode } from "lucide-react";
import { Campaign, CampaignType } from "../types/campaign";

export const CampaignTypes = [
  {
    id: "referral" as CampaignType,
    icon: <Link size={20} className="text-white" />,
    title: "Referral Link",
    description:
      "Generate unique tracking links for affiliates to share and drive targeted traffic to your website. You can create unique tracking links for your website URLs.",
    features: [
      "Custom UTM parameters",
      "Advanced tracking & attribution",
      "Real-time analytics",
    ],
    gradient: "bg-[linear-gradient(131.08deg,#4169E1_0%,#0D2D8F_100.86%)]",
  },
  {
    id: "coupon" as CampaignType,
    icon: <QrCode size={20} className="text-white" />,
    title: "Coupon Code",
    description:
      "Provide affiliates with discount codes for affiliates to share, coupon code for the tracking and generating your sales. Increase sales, attract new customers.",
    features: [
      "Custom coupon percentages",
      "Usage limit controls",
      "Expiration date management",
    ],
    gradient: "bg-[linear-gradient(139.74deg,#08CE08_6.82%,#095309_90.05%)]",
  },
];

export const CampaignCategoryOption = [
  { label: "E-commerce", value: "ecommerce" },
  { label: "SaaS", value: "saas" },
  { label: "Digital Products", value: "digital" },
  { label: "Services", value: "services" },
];

export const CampaignPriority = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Urgent", value: "urgent" },
];

export const CampaignTimezone = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Europe/London", label: "GMT (London)" },
  { value: "Europe/Paris", label: "CET (Paris)" },
  { value: "Asia/Tokyo", label: "JST (Tokyo)" },
  { value: "Asia/Shanghai", label: "CST (Shanghai)" },
  { value: "Australia/Sydney", label: "AEST (Sydney)" },
  { value: "Africa/Lagos", label: "WAT (Lagos)" },
];

export const CampaignCreationSteps = [
  { number: 1, label: "Campaign Details" },
  { number: 2, label: "Campaign Type" },
  { number: 3, label: "Rules & Settings" },
];

export const MOCK_CAMPAIGNS_DATA: Campaign[] = [
  {
    id: "CAMP-2025-001",
    name: "Summer Sale 2025",
    type: "Referral Link",
    status: "Active",
    clicks: 2847,
    conversion: "4.2%",
    dateCreated: "Mar 15, 2025",
    timeAgo: "2 months ago",
  },
  {
    id: "CAMP-2025-002",
    name: "Black Friday Blitz",
    type: "Coupon Code",
    status: "Paused",
    clicks: 2847,
    conversion: "4.2%",
    dateCreated: "Mar 15, 2025",
    timeAgo: "2 months ago",
  },
  {
    id: "CAMP-2025-003",
    name: "Valentine's Special",
    type: "Referral Link",
    status: "Completed",
    clicks: 2847,
    conversion: "4.2%",
    dateCreated: "Mar 15, 2025",
    timeAgo: "2 months ago",
  },
  {
    id: "CAMP-2025-004",
    name: "Flash Sale Weekend",
    type: "Coupon Code",
    status: "Active",
    clicks: 2847,
    conversion: "4.2%",
    dateCreated: "Mar 15, 2025",
    timeAgo: "2 months ago",
  },
  {
    id: "CAMP-2025-005",
    name: "Back to School 2025",
    type: "Referral Link",
    status: "Scheduled",
    clicks: 0,
    conversion: "Not Started",
    dateCreated: "Mar 15, 2025",
    timeAgo: "2 months ago",
  },
];

export const TYPE_STYLES = {
  "Referral Link": "bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]",
  "Coupon Code": "bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]",
};

export const STATUS_STYLES = {
  Active: "bg-[#D1FAE5] text-[#065F46]",
  Paused: "bg-[#FEF3C7] text-[#92400E]",
  Completed: "bg-[#E5E7EB] text-[#374151]",
  Scheduled: "bg-[#DBEAFE] text-[#1E40AF]",
};
