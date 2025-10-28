import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import { EllipsisVertical } from "lucide-react";
import { TypeBadge } from "./TypeBadge";
import { StatusBadge } from "./StatusBadge";
import { PerformanceBar } from "../PerformanceBar";
import { Campaign } from "@/src/types/merchant-campaign";

interface CampaignsTableProps {
  campaigns: Campaign[];
  selectedCampaigns: string[];
  selectAll: boolean;
  onSelectAll: () => void;
  onSelectCampaign: (id: string) => void;
  onView?: (campaign: Campaign) => void;
  onEdit?: (campaign: Campaign) => void;
  onMoreOptions?: (campaign: Campaign) => void;
}

export const CampaignsTable: React.FC<CampaignsTableProps> = ({
  campaigns,
  selectedCampaigns,
  selectAll,
  onSelectAll,
  onSelectCampaign,
  onView,
  onEdit,
  onMoreOptions,
}) => {
  const columns: TableColumn[] = [
    {
      key: "checkbox",
      label: (
        <input
          type="checkbox"
          checked={selectAll}
          onChange={onSelectAll}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
      ),
      width: "w-[50px]",
    },
    { key: "nameCell", label: "Campaign Name", width: "w-[250px]" },
    { key: "typeCell", label: "Type", width: "w-[150px]" },
    { key: "statusCell", label: "Status", width: "w-[120px]" },
    { key: "performanceCell", label: "Performance", width: "w-[260px]" },
    { key: "dateCell", label: "Date Created", width: "w-[150px]" },
  ];

  const rows = campaigns.map((campaign) => ({
    checkbox: (
      <input
        type="checkbox"
        checked={selectedCampaigns.includes(campaign.id)}
        onChange={() => onSelectCampaign(campaign.id)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
      />
    ),
    nameCell: (
      <div className="flex flex-col">
        <span className="text-[13px] font-[500] text-[#111827]">
          {campaign.name}
        </span>
        <span className="text-[12px] text-[#9CA3AF]">ID: {campaign.id}</span>
      </div>
    ),
    typeCell: <TypeBadge type={campaign.type} />,
    statusCell: <StatusBadge status={campaign.status} />,
    performanceCell: (
      <PerformanceBar
        conversion={campaign.conversion}
        clicks={campaign.clicks}
      />
    ),
    dateCell: (
      <div className="flex flex-col">
        <span className="text-sm text-[#111827]">{campaign.dateCreated}</span>
        <span className="text-xs text-[#9CA3AF]">{campaign.timeAgo}</span>
      </div>
    ),
    rawData: campaign,
  }));

  const actions: TableAction[] = [
    {
      label: "View",
      onClick: (row) => {
        onView?.(row.rawData as Campaign);
      },
    },
    {
      label: "Edit",
      onClick: (row) => {
        onEdit?.(row.rawData as Campaign);
      },
    },
    {
      label: "",
      icon: <EllipsisVertical className="w-4 h-4" />,
      onClick: (row) => {
        onMoreOptions?.(row.rawData as Campaign);
      },
    },
  ];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No campaigns found"
    />
  );
};
