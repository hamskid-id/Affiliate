import { NotificationIcon } from "@/src/svg";

interface iProps {
  notificationsCount: number;
}

const NotificationBell = ({ notificationsCount }: iProps) => {
  return (
    <div className="relative cursor-pointer">
      <NotificationIcon />
      {notificationsCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#E6F5EA] text-primary_40 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
          {notificationsCount}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;
