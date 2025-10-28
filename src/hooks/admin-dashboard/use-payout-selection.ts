import { Payouts } from "@/src/types/admin-dashboard";
import { useState, useCallback } from "react";

export const usePayoutSelection = (Payouts: Payouts[]) => {
  const [selectedPayouts, setSelectedPayouts] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedPayouts([]);
      setSelectAll(false);
    } else {
      setSelectedPayouts(Payouts.map((Payout) => Payout.id));
      setSelectAll(true);
    }
  }, [selectAll, Payouts]);

  const handleSelectPayout = useCallback(
    (PayoutId: string) => {
      if (selectedPayouts.includes(PayoutId)) {
        setSelectedPayouts(selectedPayouts.filter((id) => id !== PayoutId));
        setSelectAll(false);
      } else {
        const newSelected = [...selectedPayouts, PayoutId];
        setSelectedPayouts(newSelected);
        if (newSelected.length === Payouts.length) {
          setSelectAll(true);
        }
      }
    },
    [selectedPayouts, Payouts.length]
  );

  return {
    selectedPayouts,
    selectAll,
    handleSelectAll,
    handleSelectPayout,
  };
};
