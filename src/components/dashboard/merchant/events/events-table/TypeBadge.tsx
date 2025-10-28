import { TYPE_STYLES } from "@/src/contants/merchant-event";
import { Event } from "@/src/types/merchant-event";
import React from "react";

interface TypeBadgeProps {
  type: Event["type"];
}

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-md font-medium ${TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};
