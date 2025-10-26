import Overview from "@/src/components/dashboard/merchant/overview";
import AffiliateOverview from "@/src/components/dashboard/affiliate/overview";
import { useAuth } from "@/src/hooks/use-auth";

export default function OverviewPage() {
  const { role } = useAuth();
  return role === "affiliate" ? <AffiliateOverview /> : <Overview />;
}
