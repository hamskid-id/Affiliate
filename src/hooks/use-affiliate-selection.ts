import { useState, useCallback } from "react";
import { Affiliate } from "../types/affiliate";

export const useAffiliateSelection = (affiliates: Affiliate[]) => {
  const [selectedAffiliates, setSelectedAffiliates] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedAffiliates([]);
      setSelectAll(false);
    } else {
      setSelectedAffiliates(affiliates.map((affiliate) => affiliate.id));
      setSelectAll(true);
    }
  }, [selectAll, affiliates]);

  const handleSelectAffiliate = useCallback(
    (affiliateId: string) => {
      if (selectedAffiliates.includes(affiliateId)) {
        setSelectedAffiliates(
          selectedAffiliates.filter((id) => id !== affiliateId),
        );
        setSelectAll(false);
      } else {
        const newSelected = [...selectedAffiliates, affiliateId];
        setSelectedAffiliates(newSelected);
        if (newSelected.length === affiliates.length) {
          setSelectAll(true);
        }
      }
    },
    [selectedAffiliates, affiliates.length],
  );

  return {
    selectedAffiliates,
    selectAll,
    handleSelectAll,
    handleSelectAffiliate,
  };
};
