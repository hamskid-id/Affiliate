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

export interface TopPerformingBusiness {
  id: string;
  name: string;
  avatar?: string;
  revenue: string;
  affiliates: number;
  growthRate: string;
}

export const TOP_PERFORMING_BUSINESSES: TopPerformingBusiness[] = [
  {
    id: "TPB-001",
    name: "TechStore",
    revenue: "₦5.3M",
    affiliates: 8472,
    growthRate: "+57.5%",
  },
  {
    id: "TPB-002",
    name: "FashionBrand",
    revenue: "₦4.0M",
    affiliates: 6472,
    growthRate: "+34.5%",
  },
  {
    id: "TPB-003",
    name: "BeautyCo",
    revenue: "₦3.2M",
    affiliates: 3293,
    growthRate: "+19.5%",
  },
];
