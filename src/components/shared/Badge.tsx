import { cn } from "@/src/lib/utils";

const getStatusBadge = (status: string) => {
  const isActive = status?.toLocaleLowerCase() === "active";

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-[12px] font-[500] flex items-center justify-center gap-2 w-fit",
        isActive ? "bg-[#D1FAE5] text-[#39D98A]" : "bg-[#FEE2E2] text-[#FF5C5C]"
      )}
    >
      {status}
    </span>
  );
};

const getRoleBadge = (role: string) => {
  const isSuperUser = role?.toLocaleLowerCase() === "super user";
  const isAdmin = role?.toLocaleLowerCase() === "admin";

  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-[12px] font-[500] flex items-center justify-center gap-2 w-fit",
        isSuperUser
          ? "bg-[#E0ECFF] text-[#0063F7]"
          : isAdmin
            ? "bg-[#FFFBDE] text-[#E5B800]"
            : "bg-[#F2F4F5] text-[#536066]"
      )}
    >
      {role}
    </span>
  );
};

export { getRoleBadge, getStatusBadge };
