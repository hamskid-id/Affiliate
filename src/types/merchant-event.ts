export interface Event {
  id: string;
  name: string;
  type: "Purchase" | "Registration" | "Page View" | "Subscription";
  description: string;
  trigger: string;
  conversions: number;
  conversionsLabel: string;
  status: boolean;
}
