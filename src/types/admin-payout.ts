export interface Payout {
  id: string;
  affiliateName: string;
  affiliateEmail: string;
  affiliateAvatar?: string;
  businessName: string;
  businessCategory: string;
  businessAvatar?: string;
  amount: string;
  conversions: number;
  status: "Paid" | "Pending" | "Failed";
  paymentMethod: "Paypal" | "Bank Transfer" | "Stripe";
  dateRequested: string;
  timeAgo: string;
}
