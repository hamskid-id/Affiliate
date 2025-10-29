export interface Transaction {
  id: string;
  dateTime: string;
  merchant: {
    name: string;
    category: string;
    avatar?: string;
  };
  affiliate: {
    name: string;
    email: string;
    avatar?: string;
  };
  event: string;
  eventType:
    | "Purchase"
    | "Registration"
    | "Sign Up"
    | "Subscription"
    | "Page View";
  amount: string;
  commission: string;
  status: "Pending" | "Approved" | "Rejected" | "Paid";
}
