import Overview from "@/src/components/dashboard/overview";
import AffiliateOverview from "@/src/components/dashboard/overview/affiliate-overview";
import { useAuth } from "@/src/hooks/use-auth";

export default function OverviewPage() {
  const { role } = useAuth();
  return role === "affiliate" ? <AffiliateOverview /> : <Overview />;
}
