export type CampaignType = "referral" | "coupon";

export interface CampaignFormData {
  campaignName: string;
  campaignDescription: string;
  landingPage: string;
  category: string;
  priority?: string;
  targetUrl: string;
  campaignType: CampaignType;
  startDate?: string;
  endDate?: string;
  timezone?: string; // Added timezone field
  campaignStatus?: boolean;
  minimumPayoutThreshold?: string;
  cookieDuration?: string;
  discountPerClick?: boolean;
  commissionRate?: boolean;
  perClickTracking?: boolean;
  conversionTracking?: boolean;
  autoApproveAffiliates?: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  type: "Referral Link" | "Coupon Code";
  status: "Active" | "Paused" | "Completed" | "Scheduled";
  clicks: number;
  conversion: string;
  dateCreated: string;
  timeAgo: string;
}
