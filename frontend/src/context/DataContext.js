import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    ISHAN_LOGO: "",
    heroSlides: [],
    programCategories: [],
    programs: {},
    colleges: [],
    campusLife: [],
    campusLifeStats: { nationalitiesCount: "0" },
    campusLinks: [],
    facilityLinks: [],
    researchCards: [],
    researchLinks: [],
    placementStats: [],
    recruiters: [],
    testimonials: [],
    universityAchievements: [],
    aboutImages: [],
    news: [],
    socialPosts: [],
    navMenu: [{ items: [] }, { items: [] }, { items: [] }],
    footerLinks: { quickLinks: [], rankings: [], group: [] },
    footerLabels: {},
    contactInfo: {},
    aboutContent: {},
    collegeSection: {},
    programmeSection: {},
    researchSection: {},
    placementSection: {},
    floatingWidgets: {},
    highlights: [],
    newsFlash: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
        const response = await axios.get(`${apiUrl}/landing2`);
        const backendData = response.data;

        if (backendData) {
          setData({
            ISHAN_LOGO: backendData.logo || "",
            heroSlides: backendData.hero?.banners?.map(b => ({
              id: b.id || b._id,
              image: b.image,
              tag: b.tag,
              title: b.title,
              subtitle: b.subtitle,
              ctaText: b.ctaText || "Apply Now",
              ctaLink: b.ctaLink || "#contact",
              specialisations: b.specialisations?.map(s => s.name || s) || [],
              programs: b.programs?.map(p => p.name || p) || [],
              stats: b.stats || []
            })) || [],
            programCategories: backendData.programCategories || [],
            programs: backendData.programs || {},
            colleges: backendData.colleges || [],
            campusLife: backendData.campusLife?.sections || [],
            campusLifeStats: { nationalitiesCount: backendData.campusLife?.nationalitiesCount || "0" },
            campusLinks: backendData.campusLinks?.map(l => l.text || l) || [],
            facilityLinks: backendData.facilityLinks?.map(l => l.text || l) || [],
            researchCards: backendData.researchCards || [],
            researchLinks: backendData.researchLinks?.map(l => l.text || l) || [],
            placementStats: backendData.placementStats || [],
            recruiters: backendData.recruiters?.map(r => r.name || r) || [],
            testimonials: backendData.testimonials || [],
            universityAchievements: backendData.achievements || [],
            aboutImages: backendData.aboutImages?.map(img => img.url || img) || [],
            news: backendData.news || [],
            socialPosts: backendData.socialPosts || [],
            navMenu: backendData.navMenu?.map(m => ({
              title: m.title || m,
              items: m.items?.map(i => i.name || i.text || i) || []
            })) || [{ items: [] }, { items: [] }, { items: [] }],
            footerLinks: backendData.footerLinks ? {
              quickLinks: backendData.footerLinks.quickLinks?.map(l => l.text || l) || [],
              rankings: backendData.footerLinks.rankings?.map(l => l.text || l) || [],
              group: backendData.footerLinks.group?.map(l => l.text || l) || []
            } : { quickLinks: [], rankings: [], group: [] },
            footerLabels: backendData.footerLabels || {},
            contactInfo: backendData.contactInfo || {},
            aboutContent: backendData.aboutContent || {},
            collegeSection: backendData.collegeSection || {},
            programmeSection: backendData.programmeSection || {},
            researchSection: backendData.researchSection || {},
            placementSection: backendData.placementSection || {},
            floatingWidgets: backendData.floatingWidgets || {},
            highlights: backendData.highlights || [],
            newsFlash: backendData.newsFlash || []
          });
        }
      } catch (error) {
        console.error("Error fetching landing page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
