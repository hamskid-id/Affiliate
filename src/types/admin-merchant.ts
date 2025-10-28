export interface Business {
  id: string;
  name: string;
  category: string;
  avatar?: string;
  contact: {
    name: string;
    email: string;
  };
  status: "Active" | "Suspended" | "Inactive";
  affiliates: number;
  transaction: string;
  dateCreated: string;
}
