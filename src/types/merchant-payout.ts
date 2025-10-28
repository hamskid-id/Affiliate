export interface Payout {
  id: string;
  affiliateName: string;
  affiliateEmail: string;
  affiliateAvatar?: string;
  amount: string;
  conversions: number;
  status: "Paid" | "Pending" | "Approved";
  lastUpdated: string;
  lastUpdatedTime: string;
  commissionPeriod: string;
  commissionFrequency: string;
  paymentMethod: "Paypal" | "Bank Transfer" | "Stripe";
}
