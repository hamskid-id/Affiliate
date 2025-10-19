import { TYPE_STYLES } from "@/src/contants/campaign";
import { Campaign } from "@/src/types/campaign";
import React from "react";

interface TypeBadgeProps {
  type: Campaign["type"];
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium ${TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};
