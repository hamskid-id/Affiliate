export interface Affiliate {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Approved" | "Rejected" | "Denied" | "Suspended";
  avatar?: string;
  clicks: number;
  conversions: number;
  commission: string;
  dateJoined: string;
}
