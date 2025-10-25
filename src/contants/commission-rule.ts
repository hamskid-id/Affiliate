import { CommissionRule } from "../types/commission-rule";

export const MOCK_COMMISSION_RULES_DATA: CommissionRule[] = [
  {
    id: "RULE-001",
    name: "Premium Signup Rule",
    description: "Premium plan subscription",
    icon: "⭐",
    iconBg: "bg-[#FF5212]",
    ruleType: "Flat",
    value: "₦50,091",
    perSignup: "Per signup",
    status: "Active",
    created: "Mar 15, 2024",
    conversions: 142,
    paid: "₦20,130 paid",
  },
  {
    id: "RULE-002",
    name: "Signup Rule",
    description: "New user registration",
    icon: "👤",
    iconBg: "bg-[#FF5212]",
    ruleType: "Percentage",
    value: "₦50,091",
    perSignup: "Per signup",
    status: "Active",
    created: "Mar 15, 2024",
    conversions: 142,
    paid: "₦20,130 paid",
  },
  {
    id: "RULE-003",
    name: "Purchase Rule",
    description: "Product purchase",
    icon: "🛒",
    iconBg: "bg-[#FF5212]",
    ruleType: "Flat",
    value: "₦50,091",
    perSignup: "Per signup",
    status: "Inactive",
    created: "Mar 15, 2024",
    conversions: 142,
    paid: "₦20,130 paid",
  },
  {
    id: "RULE-004",
    name: "Renewal Rule",
    description: "Subscription renewal",
    icon: "🔄",
    iconBg: "bg-[#FF5212]",
    ruleType: "Percentage",
    value: "₦50,091",
    perSignup: "Per signup",
    status: "Active",
    created: "Mar 15, 2024",
    conversions: 142,
    paid: "₦20,130 paid",
  },
];

export const RULE_TYPE_STYLES = {
  Flat: "bg-[#DBEAFE] text-[#1E40AF]",
  Percentage: "bg-[#FEF3C7] text-[#92400E]",
};

export const STATUS_STYLES = {
  Active: "bg-[#D1FAE5] text-[#065F46]",
  Inactive: "bg-[#FEE2E2] text-[#991B1B]",
};

export const events = [
  { label: "Purchase Complete", value: "purchase_complete" },
  { label: "Sign Up", value: "sign_up" },
  { label: "Subscription", value: "subscription" },
];
