import React from "react";
import CustomButton from "@/src/components/ui/custom-button";
import { Plus } from "lucide-react";

interface EventsTableHeaderProps {
  onCreateNew: () => void;
}

export const EventsTableHeader: React.FC<EventsTableHeaderProps> = ({
  onCreateNew,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-100">
      <h2 className="text-lg font-bold text-[#111827]">Event Configuration</h2>
      <CustomButton
        title="Create New Event"
        icon={<Plus className="w-4 h-4" />}
        showIcon={true}
        onClick={onCreateNew}
        className="ms-auto mt-4 sm:mt-0 bg-[#FF5212] hover:bg-[#E54A10]"
      />
    </div>
  );
};
