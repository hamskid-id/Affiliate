export interface Payouts {
  id: string;
  name: string;
  amount: string;
  status: "Pending" | "Approved" | "Rejected" | "Denied" | "Suspended";
  period: string;
}

export interface TopMerchant {
  id: string;
  name: string;
  category: string;
  avatar?: string;
  campaigns: number;
  affiliates: number;
  revenue: string;
}

export interface TopAffiliate {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  avatar?: string;
  clicks: number;
  conversions: number;
  earnings: string;
}