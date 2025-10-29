import AdminInviteAffiliateForm from "@/src/components/dashboard/admin/affiliates/InviteAffiliateForm";
import InviteAffiliateForm from "@/src/components/dashboard/merchant/affiliates/InviteAffiliateForm";
import { useAuth } from "@/src/hooks/use-auth";
import { Role } from "@/src/types";

export default function InviteAffiliatePage() {
  const { role } = useAuth();
  switch (role) {
    case Role.ADMIN:
      return <AdminInviteAffiliateForm />;
    case Role.MERCHANT:
      return <InviteAffiliateForm />;
    default:
      return <div>Unauthorized</div>;
  }
}
