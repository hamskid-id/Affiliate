import { useState, useCallback } from "react";
import { Campaign } from "../types/campaign";

export const useCampaignSelection = (campaigns: Campaign[]) => {
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = useCallback(() => {
    if (selectAll) {
      setSelectedCampaigns([]);
      setSelectAll(false);
    } else {
      setSelectedCampaigns(campaigns.map((campaign) => campaign.id));
      setSelectAll(true);
    }
  }, [selectAll, campaigns]);

  const handleSelectCampaign = useCallback(
    (campaignId: string) => {
      if (selectedCampaigns.includes(campaignId)) {
        setSelectedCampaigns(
          selectedCampaigns.filter((id) => id !== campaignId),
        );
        setSelectAll(false);
      } else {
        const newSelected = [...selectedCampaigns, campaignId];
        setSelectedCampaigns(newSelected);
        if (newSelected.length === campaigns.length) {
          setSelectAll(true);
        }
      }
    },
    [selectedCampaigns, campaigns.length],
  );

  return {
    selectedCampaigns,
    selectAll,
    handleSelectAll,
    handleSelectCampaign,
  };
};
