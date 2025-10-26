import { RULE_TYPE_STYLES } from "@/src/contants/commission-rule";
import { CommissionRule } from "@/src/types/commission-rule";
import React from "react";

interface RuleTypeBadgeProps {
  type: CommissionRule["ruleType"];
}

export const RuleTypeBadge: React.FC<RuleTypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-md font-medium ${RULE_TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};
