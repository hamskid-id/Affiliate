import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import { RuleTypeBadge } from "./RuleTypeBadge";
import { StatusBadge } from "./StatusBadge";
import { RuleActions } from "./RuleActions";
import { CommissionRule } from "@/src/types/merchant-commission-rule";

interface CommissionRulesTableProps {
  rules: CommissionRule[];
  onEdit?: (rule: CommissionRule) => void;
  onToggleStatus?: (rule: CommissionRule) => void;
  onDelete?: (rule: CommissionRule) => void;
  onMore?: (rule: CommissionRule) => void;
}

export const CommissionRulesTable: React.FC<CommissionRulesTableProps> = ({
  rules,
  onEdit,
  onToggleStatus,
  onDelete,
  onMore,
}) => {
  const columns: TableColumn[] = [
    { key: "eventTypeCell", label: "Event Type", width: "w-[200px]" },
    { key: "ruleTypeCell", label: "Rule Type", width: "w-[120px]" },
    { key: "valueCell", label: "Value", width: "w-[150px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "createdCell", label: "Created", width: "w-[130px]" },
    { key: "performanceCell", label: "Performance", width: "w-[180px]" },
    { key: "actionsCell", label: "Actions", width: "w-[150px]" },
  ];

  const rows = rules.map((rule) => ({
    eventTypeCell: (
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${rule.iconBg} rounded-lg flex items-center justify-center text-white text-lg`}
        >
          {rule.icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {rule.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">{rule.description}</span>
        </div>
      </div>
    ),
    ruleTypeCell: <RuleTypeBadge type={rule.ruleType} />,
    valueCell: (
      <div className="flex flex-col">
        <span className="text-[14px] font-[600] text-[#111827]">
          {rule.value}
        </span>
        <span className="text-[11px] text-[#9CA3AF]">{rule.perSignup}</span>
      </div>
    ),
    statusCell: <StatusBadge status={rule.status} />,
    createdCell: <span className="text-sm text-[#111827]">{rule.created}</span>,
    performanceCell: (
      <div className="flex flex-col">
        <span className="text-[13px] font-[500] text-[#111827]">
          {rule.conversions} conversions
        </span>
        <span className="text-[11px] text-[#9CA3AF]">{rule.paid}</span>
      </div>
    ),
    actionsCell: (
      <RuleActions
        rule={rule}
        onEdit={() => onEdit?.(rule)}
        onToggleStatus={() => onToggleStatus?.(rule)}
        onDelete={() => onDelete?.(rule)}
        onMore={() => onMore?.(rule)}
      />
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No commission rules found"
    />
  );
};
