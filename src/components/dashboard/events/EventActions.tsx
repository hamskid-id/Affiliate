import React from "react";
import { Edit, Trash2, MoreVertical } from "lucide-react";

interface EventActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
}

export const EventActions: React.FC<EventActionsProps> = ({
  onView,
  onEdit,
  onDelete,
  onMore,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onView}
        className="text-[#4F46E5] hover:text-[#4338CA] text-sm font-medium"
      >
        View
      </button>
      <button
        onClick={onEdit}
        className="text-[#6B7280] hover:text-[#4B5563] p-1"
      >
        <Edit className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="text-[#DC2626] hover:text-[#B91C1C] p-1"
      >
        <Trash2 className="w-4 h-4" />
      </button>
      <button
        onClick={onMore}
        className="text-[#6B7280] hover:text-[#4B5563] p-1"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
};
