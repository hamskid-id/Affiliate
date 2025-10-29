import { Payout } from "@/src/types/admin-payout";
import { useState, useCallback } from "react";

export const usePayoutSelection = (payouts: Payout[]) => {
  const [selectedPayouts, setSelectedPayouts] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedPayouts([]);
      setSelectAll(false);
    } else {
      setSelectedPayouts(payouts.map((payout) => payout.id));
      setSelectAll(true);
    }
  }, [selectAll, payouts]);

  const handleSelectPayout = useCallback(
    (payoutId: string) => {
      if (selectedPayouts.includes(payoutId)) {
        setSelectedPayouts(selectedPayouts.filter((id) => id !== payoutId));
        setSelectAll(false);
      } else {
        const newSelected = [...selectedPayouts, payoutId];
        setSelectedPayouts(newSelected);
        if (newSelected.length === payouts.length) {
          setSelectAll(true);
        }
      }
    },
    [selectedPayouts, payouts.length],
  );

  return {
    selectedPayouts,
    selectAll,
    handleSelectAll,
    handleSelectPayout,
  };
};
