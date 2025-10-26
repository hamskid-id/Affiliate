import React from "react";
import { Edit2, Pause, Play, Trash2, MoreVertical } from "lucide-react";
import { CommissionRule } from "@/src/types/commission-rule";

interface RuleActionsProps {
  rule: CommissionRule;
  onEdit?: () => void;
  onToggleStatus?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
}

export const RuleActions: React.FC<RuleActionsProps> = ({
  rule,
  onEdit,
  onToggleStatus,
  onDelete,
  onMore,
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onEdit}
        className="text-[#4F46E5] hover:text-[#4338CA] p-1"
      >
        <Edit2 className="w-4 h-4" />
      </button>
      <button
        onClick={onToggleStatus}
        className="text-[#6B7280] hover:text-[#4B5563] p-1"
      >
        {rule.status === "Active" ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
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
