"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download } from "lucide-react";
import { z } from "zod";

import { CustomModal } from "@/src/components/ui/custom-modal";
import CustomButton from "@/src/components/ui/custom-button";
import CustomFormField from "@/src/components/ui/custom-input-field";
import { Form } from "@/src/components/ui/form";
import { FormFieldType } from "@/src/types";

const ExportPayoutSchema = z.object({
  dateRange: z.string().min(1, "Please select a date range"),
  status: z.string().min(1, "Please select a status"),
});

type ExportPayoutFormData = z.infer<typeof ExportPayoutSchema>;

interface ExportPayoutCSVModalProps {
  open: boolean;
  onClose: () => void;
  onExport: (dateRange: string, status: string) => void;
}

const ExportPayoutCSVModal: React.FC<ExportPayoutCSVModalProps> = ({
  open,
  onClose,
  onExport,
}) => {
  const form = useForm<ExportPayoutFormData>({
    resolver: zodResolver(ExportPayoutSchema),
    defaultValues: {
      dateRange: "This Month",
      status: "All",
    },
  });

  const handleSubmit = (values: ExportPayoutFormData) => {
    onExport(values.dateRange, values.status);
    onClose();
  };

  const dateRangeOptions = [
    "This Month",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
    "This Year",
    "All Time",
  ];

  const statusOptions = ["All", "Paid", "Pending", "Approved"];

  return (
    <CustomModal
      open={open}
      setOpen={onClose}
      title="Export Payout CSV"
      width="sm:max-w-[440px]"
      description="Export payout data for accounting or record keeping. Choose filters below to customize your file."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 mt-2"
        >
          <CustomFormField
            control={form.control}
            name="dateRange"
            label="Date Range"
            fieldType={FormFieldType.SELECT}
            options={dateRangeOptions}
            placeholder="Select date range"
          />

          <CustomFormField
            control={form.control}
            name="status"
            label="Status"
            fieldType={FormFieldType.SELECT}
            options={statusOptions}
            placeholder="Select status"
          />

          <p className="text-xs text-[#6B7280]">
            The exported file will include affiliate name, amount, status, and
            payout date.
          </p>

          <div className="flex gap-3 pt-2">
            <CustomButton
              title="Cancel"
              type="button"
              className="flex-1 bg-white border-2 border-[#606060] text-[#606060] hover:bg-gray-50 shadow-none"
              onClick={onClose}
            />
            <CustomButton
              title="Export CSV"
              type="submit"
              className="flex-1 bg-[#FF5212] hover:bg-[#E54A10]"
              icon={<Download className="w-4 h-4" />}
              showIcon
            />
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default ExportPayoutCSVModal;
