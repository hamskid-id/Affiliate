import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import CustomAvatar from "@/src/components/ui/custom-avatar";
import { BusinessStatusBadge } from "./BusinessStatusBadge";
import { BusinessActions } from "./BusinessActions";
import { Business } from "@/src/types/admin-merchant";

interface BusinessTableProps {
  businesses: Business[];
  onEdit?: (business: Business) => void;
  onToggleStatus?: (business: Business) => void;
  onDelete?: (business: Business) => void;
  onMore?: (business: Business) => void;
}

export const BusinessTable: React.FC<BusinessTableProps> = ({
  businesses,
  onEdit,
  onToggleStatus,
  onDelete,
  onMore,
}) => {
  const columns: TableColumn[] = [
    { key: "businessCell", label: "Business Name", width: "w-[220px]" },
    { key: "contactCell", label: "Contact", width: "w-[220px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "affiliatesCell", label: "Affiliates", width: "w-[100px]" },
    { key: "transactionCell", label: "Transaction", width: "w-[130px]" },
    { key: "dateCell", label: "Date Created", width: "w-[130px]" },
    { key: "actionsCell", label: "Actions", width: "w-[150px]" },
  ];

  const rows = businesses.map((business) => ({
    businessCell: (
      <div className="flex items-center gap-3">
        <CustomAvatar name={business.name} />
        <div className="flex flex-col">
          <span className="text-[13px] font-[500] text-[#111827]">
            {business.name}
          </span>
          <span className="text-[12px] text-[#9CA3AF]">
            {business.category}
          </span>
        </div>
      </div>
    ),
    contactCell: (
      <div className="flex flex-col">
        <span className="text-[13px] font-[500] text-[#111827]">
          {business.contact.name}
        </span>
        <span className="text-[12px] text-[#9CA3AF]">
          {business.contact.email}
        </span>
      </div>
    ),
    statusCell: <BusinessStatusBadge status={business.status} />,
    affiliatesCell: (
      <span className="text-sm text-[#111827]">{business.affiliates}</span>
    ),
    transactionCell: (
      <span className="text-sm font-medium text-[#111827]">
        {business.transaction}
      </span>
    ),
    dateCell: (
      <span className="text-sm text-[#111827]">{business.dateCreated}</span>
    ),
    actionsCell: (
      <BusinessActions
        business={business}
        onEdit={() => onEdit?.(business)}
        onToggleStatus={() => onToggleStatus?.(business)}
        onDelete={() => onDelete?.(business)}
        onMore={() => onMore?.(business)}
      />
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No businesses found"
    />
  );
};
