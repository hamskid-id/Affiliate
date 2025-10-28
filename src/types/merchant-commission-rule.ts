export interface CommissionRule {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconBg: string;
  ruleType: "Flat" | "Percentage";
  value: string;
  perSignup: string;
  status: "Active" | "Inactive";
  created: string;
  conversions: number;
  paid: string;
}
