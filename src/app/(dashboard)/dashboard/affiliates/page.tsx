import AdminAffiliate from "@/src/components/dashboard/admin/affiliates";
import Affiliate from "@/src/components/dashboard/merchant/affiliates";
import { useAuth } from "@/src/hooks/use-auth";
import { Role } from "@/src/types";

export default function AffiliatesPage() {
  const { role } = useAuth();
  switch (role) {
    case Role.ADMIN:
      return <AdminAffiliate />;
    case Role.MERCHANT:
      return <Affiliate />;
    default:
      return <div>Unauthorized</div>;
  }
}
