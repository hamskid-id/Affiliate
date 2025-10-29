import AdminPayout from "@/src/components/dashboard/admin/payouts";
import PayoutDashboard from "@/src/components/dashboard/merchant/payouts";
import { useAuth } from "@/src/hooks/use-auth";
import { Role } from "@/src/types";

export default function PayoutsPage() {
  const { role } = useAuth();
  switch (role) {
    case Role.ADMIN:
      return <AdminPayout />;
    case Role.MERCHANT:
      return <PayoutDashboard />;
    default:
      return <div>Unauthorized</div>;
  }
}
