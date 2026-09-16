import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageSections({ sections: propSections }) {
  const [globalData, setGlobalData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchGlobalSections = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || "https://ishan-backend-g096.onrender.com/api";
        const cleanPath = location.pathname.replace(/\/+$/, '') || '/';
        let res = await fetch(`${apiBase}/landing1/page-sections/by-url?url=${encodeURIComponent(location.pathname)}`);
        if (!res.ok && cleanPath !== location.pathname) {
          res = await fetch(`${apiBase}/landing1/page-sections/by-url?url=${encodeURIComponent(cleanPath)}`);
        }
        if (res.ok) {
          const data = await res.json();
          if (data && data.sections && data.sections.length > 0) {
             setGlobalData(data);
          } else {
             setGlobalData(null);
          }
        }
      } catch (err) {
        console.error("Failed to fetch global sections", err);
      }
    };
    fetchGlobalSections();
  }, [location.pathname]);

  let actualSections = globalData?.sections || propSections;

  if (actualSections && !Array.isArray(actualSections) && typeof actualSections === 'object') {
     actualSections = actualSections.sections;
  }

  if (!actualSections || !Array.isArray(actualSections) || actualSections.length === 0) return null;

  return (
    <>
      {actualSections.map((sec, i) => (
        <div key={i} className="page-custom-section w-full" dangerouslySetInnerHTML={{ __html: sec.htmlContent || "" }} />
      ))}
    </>
  );
}
