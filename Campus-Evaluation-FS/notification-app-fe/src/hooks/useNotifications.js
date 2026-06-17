import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchNotifications();
      setNotifications(data);
    }

    load();
  }, []);

  return {
    notifications,
    loading: false,
    error: false,
    totalPages: 1,
  };
}
