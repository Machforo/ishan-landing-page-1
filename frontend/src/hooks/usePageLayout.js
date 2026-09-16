import { useState, useEffect, useCallback, useMemo } from "react";

const getApiBase = () => {
  if (typeof process !== "undefined" && process?.env?.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  try {
    if (typeof import.meta !== "undefined" && import.meta?.env) {
      return import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "https://ishan-backend-g096.onrender.com/api";
    }
  } catch (e) {
    // ignore
  }
  return "https://ishan-backend-g096.onrender.com/api";
};

export function usePageLayout(pageId = "homepage") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLayout = useCallback(async () => {
    try {
      setLoading(true);
      const apiBase = getApiBase();
      let res;
      try {
        res = await fetch(`${apiBase}/landing1/page-layout/${pageId}`);
      } catch (networkErr) {
        if (!apiBase.includes("localhost:5000")) {
          try {
            res = await fetch(`https://ishan-backend-g096.onrender.com/api/landing1/page-layout/${pageId}`);
          } catch (localErr) {
            throw networkErr;
          }
        } else {
          throw networkErr;
        }
      }

      if (res && res.ok) {
        const json = await res.json();
        setData(json);
        setError(null);
      } else {
        throw new Error(`Failed to fetch page layout: ${res?.status || "network error"}`);
      }
    } catch (err) {
      console.warn(`[usePageLayout] Could not fetch layout for ${pageId}, using defaults:`, err.message);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [pageId]);

  useEffect(() => {
    fetchLayout();
  }, [fetchLayout]);

  const sections = useMemo(() => data?.sections || [], [data]);

  const isHidden = useCallback(
    (sectionId) => {
      const match = sections.find(
        (s) =>
          s.id === sectionId ||
          s.id === sectionId.replace(/-/g, "_") ||
          s.id === sectionId.replace(/_/g, "-")
      );
      return match ? Boolean(match.isHidden) : false;
    },
    [sections]
  );

  const getSectionOrder = useCallback(
    (sectionId) => {
      const idx = sections.findIndex(
        (s) =>
          s.id === sectionId ||
          s.id === sectionId.replace(/-/g, "_") ||
          s.id === sectionId.replace(/_/g, "-")
      );
      return idx !== -1 ? idx : 999;
    },
    [sections]
  );

  return {
    data,
    loading,
    error,
    sections,
    isHidden,
    getSectionOrder,
    refetch: fetchLayout
  };
}

export default usePageLayout;
