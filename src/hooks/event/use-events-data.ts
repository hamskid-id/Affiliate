import { useState, useCallback } from "react";
import { MOCK_EVENTS_DATA } from "../../contants/event";
import { Event } from "../../types/event";

export const useEventsData = () => {
  const [eventsData, setEventsData] = useState<Event[]>(MOCK_EVENTS_DATA);

  const handleStatusToggle = useCallback((eventId: string) => {
    setEventsData((prevData) =>
      prevData.map((event) =>
        event.id === eventId ? { ...event, status: !event.status } : event,
      ),
    );
  }, []);

  return {
    eventsData,
    handleStatusToggle,
  };
};
