import React from "react";
import CustomTable, {
  TableColumn,
  TableAction,
} from "@/src/components/ui/custom-table";
import { Switch } from "@/src/components/ui/switch";
import { TypeBadge } from "./TypeBadge";
import { EventActions } from "./EventActions";
import { Event } from "@/src/types/event";

interface EventsTableProps {
  events: Event[];
  onStatusToggle: (eventId: string) => void;
  onView?: (event: Event) => void;
  onEdit?: (event: Event) => void;
  onDelete?: (event: Event) => void;
  onMore?: (event: Event) => void;
}

export const EventsTable: React.FC<EventsTableProps> = ({
  events,
  onStatusToggle,
  onView,
  onEdit,
  onDelete,
  onMore,
}) => {
  const columns: TableColumn[] = [
    { key: "nameCell", label: "Event Name", width: "w-[200px]" },
    { key: "typeCell", label: "Type", width: "w-[130px]" },
    { key: "descriptionCell", label: "Description", width: "w-[300px]" },
    { key: "conversionsCell", label: "Conversions", width: "w-[130px]" },
    { key: "statusCell", label: "Status", width: "w-[100px]" },
    { key: "actionsCell", label: "Actions", width: "w-[150px]" },
  ];

  const rows = events.map((event) => ({
    nameCell: (
      <div className="flex flex-col">
        <span className="text-[13px] font-[500] text-[#111827]">
          {event.name}
        </span>
        <span className="text-[12px] text-[#9CA3AF]">ID: {event.id}</span>
      </div>
    ),
    typeCell: <TypeBadge type={event.type} />,
    descriptionCell: (
      <div className="flex flex-col">
        <span className="text-[13px] text-[#111827]">{event.description}</span>
        <span className="text-[11px] text-[#9CA3AF]">{event.trigger}</span>
      </div>
    ),
    conversionsCell: (
      <div className="flex flex-col">
        <span className="text-[14px] font-[600] text-[#111827]">
          {event.conversions}
        </span>
        <span className="text-[11px] text-[#9CA3AF]">
          {event.conversionsLabel}
        </span>
      </div>
    ),
    statusCell: (
      <Switch
        checked={event.status}
        onCheckedChange={() => onStatusToggle(event.id)}
        className="data-[state=checked]:bg-[#10B981]"
      />
    ),
    actionsCell: (
      <EventActions
        onView={() => onView?.(event)}
        onEdit={() => onEdit?.(event)}
        onDelete={() => onDelete?.(event)}
        onMore={() => onMore?.(event)}
      />
    ),
  }));

  const actions: TableAction[] = [];

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      actions={actions}
      emptyMessage="No events found"
    />
  );
};
