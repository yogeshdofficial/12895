import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import { logFrontendEvent } from "../logger.js";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError("");

      try {
        logFrontendEvent("info", "load notifications");

        const data = await fetchNotifications();
        setNotifications(data);

        logFrontendEvent("info", `loaded notifications ${data.length}`);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load notifications",
        );
        logFrontendEvent("error", "notifications load failed");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    notifications,
    loading,
    error,
    totalPages: 1,
  };
}
