import Overview from "@/src/components/dashboard/merchant/overview";
import AffiliateOverview from "@/src/components/dashboard/affiliate/overview";
import { useAuth } from "@/src/hooks/use-auth";
import { Role } from "@/src/types";
import AdminDashboard from "@/src/components/dashboard/admin/overview";

export default function OverviewPage() {
  const { role } = useAuth();
  switch (role) {
    case Role.ADMIN:
      return <AdminDashboard />;
    case Role.MERCHANT:
      return <Overview />;
    case Role.AFFILIATE:
      return <AffiliateOverview />;
    default:
      return <div>Unauthorized</div>;
  }
}
