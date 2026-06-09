import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import * as mockData from "../mock";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ ...mockData });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || "https://ishan-backend-g096.onrender.com/api";
        const response = await axios.get(`${apiUrl}/landing1`);
        const backendData = response.data;

        // Merge backend data with mock data as fallback
        if (backendData && Object.keys(backendData).length > 0) {
          setData(prev => ({
            ...prev,
            ISHAN_LOGO: backendData.logo || prev.ISHAN_LOGO,
            heroSlides: backendData.hero?.banners?.length > 0 ? backendData.hero.banners.map(b => ({
              id: b.id || b._id,
              image: b.image,
              tag: b.tag,
              title: b.title,
              subtitle: b.subtitle,
              specialisations: b.specialisations?.map(s => s.name || s) || [],
              programs: b.programs?.map(p => p.name || p) || [],
              stats: b.stats || []
            })) : prev.heroSlides,
            programCategories: backendData.programCategories?.length > 0 ? backendData.programCategories : prev.programCategories,
            programs: backendData.programs && Object.keys(backendData.programs).length > 0 ? backendData.programs : prev.programs,
            colleges: backendData.colleges?.length > 0 ? backendData.colleges : prev.colleges,
            campusLife: backendData.campusLife?.sections?.length > 0 ? backendData.campusLife.sections : prev.campusLife,
            campusLifeStats: { nationalitiesCount: backendData.campusLife?.nationalitiesCount },
            campusLinks: backendData.campusLinks?.length > 0 ? backendData.campusLinks.map(l => l.text || l) : prev.campusLinks,
            facilityLinks: backendData.facilityLinks?.length > 0 ? backendData.facilityLinks.map(l => l.text || l) : prev.facilityLinks,
            researchCards: backendData.researchCards?.length > 0 ? backendData.researchCards : prev.researchCards,
            researchLinks: backendData.researchLinks?.length > 0 ? backendData.researchLinks.map(l => l.text || l) : prev.researchLinks,
            placementStats: backendData.placementStats?.length > 0 ? backendData.placementStats : prev.placementStats,
            recruiters: backendData.recruiters?.length > 0 ? backendData.recruiters.map(r => r.name || r) : prev.recruiters,
            testimonials: backendData.testimonials?.length > 0 ? backendData.testimonials : prev.testimonials,
            universityAchievements: backendData.achievements?.length > 0 ? backendData.achievements : prev.universityAchievements,
            aboutImages: backendData.aboutImages?.length > 0 ? backendData.aboutImages.map(img => img.url || img) : prev.aboutImages,
            news: backendData.news?.length > 0 ? backendData.news : prev.news,
            socialPosts: backendData.socialPosts?.length > 0 ? backendData.socialPosts : prev.socialPosts,
            navMenu: backendData.navMenu?.length > 0 ? backendData.navMenu.map(m => ({
              title: m.title || m,
              items: m.items?.map(i => i.name || i.text || i) || []
            })) : prev.navMenu,
            footerLinks: backendData.footerLinks && Object.keys(backendData.footerLinks).length > 0 ? {
              quickLinks: backendData.footerLinks.quickLinks?.map(l => l.text || l) || prev.footerLinks.quickLinks,
              rankings: backendData.footerLinks.rankings?.map(l => l.text || l) || prev.footerLinks.rankings,
              group: backendData.footerLinks.group?.map(l => l.text || l) || prev.footerLinks.group
            } : prev.footerLinks,
            contactInfo: backendData.contactInfo || prev.contactInfo,
            aboutContent: backendData.aboutContent || prev.aboutContent,
            collegeSection: backendData.collegeSection || prev.collegeSection,
            programmeSection: backendData.programmeSection || prev.programmeSection,
            researchSection: backendData.researchSection || prev.researchSection,
            floatingWidgets: backendData.floatingWidgets || prev.floatingWidgets,
            highlights: backendData.highlights?.length > 0 ? backendData.highlights : prev.highlights,
            newsFlash: backendData.newsFlash?.length > 0 ? backendData.newsFlash : prev.newsFlash
          }));
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
