import PartnerLogoSlider from "@/components/PartnerLogoSlider";
import HallOfFame from "./sections/HallOfFame";
import MagazineRelease from "./sections/MagazineRelease";
import TrendingSection from "./sections/TrendingSection";
import InnovationTechnologySection from "./sections/InnovationTechnologySection";
import VisionaryVoicesSection from "./sections/VisionaryVoicesSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import EliteArchivesSection from "./sections/EliteArchives";
import EditorialHighlight from "./sections/EditorialHighlight";
import WomenVisionariesSection from "./sections/WomenVisionariesSection";
import FullScreenLoader from "@/components/FullSreenLoader";
import HeroSection from "./sections/HeroSection";
import { getStrapiData } from "@/utils/utils";

const sectionComponentMap = {
  "sections.magazine-release": MagazineRelease,
  "sections.elite-archives": EliteArchivesSection,
  "sections.women-visionaries": WomenVisionariesSection,
  "sections.hall-of-fame": HallOfFame,
  "sections.trending-insights": TrendingSection,
  "sections.innovation-technology": InnovationTechnologySection,
  "sections.visionary-voices": VisionaryVoicesSection,
  "sections.showcase": ShowcaseSection,
  "sections.editorial-highlight": EditorialHighlight,
};

async function getHomePage() {
  const apis = [
    "/home-page?populate=deep",
    '/home-sections?populate=deep',
    // '/posts'
  ];
  return await Promise.all(apis.map(api => getStrapiData(api))).then(([homeRes, sectionsRes]) => {
    const homeData = homeRes?.data?.[0] || {};
    const sectionsData = sectionsRes?.data || [];
    // Map sections to their respective components
    const sectionsMap = {};
    homeData?.sections.forEach(section => {
      if (section.__component) {
        sectionsMap[section.__component] = section;
      }
    });
    return { ...homeData, sections: Object.values(sectionsMap), sectionsData };
  });
}

export default async function Home() {
  let data = null;

  try {
    const _data = await getHomePage();
    data = _data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return (
      <FullScreenLoader
        text="We're having trouble loading this page. Check back again later."
        textColor="text-red-600"
        loadingColor="red"
      />
    );
  }

  if (!data) {
    return <FullScreenLoader text="Loading site details..." />;
  }

  const site = data || {};

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* HERO */}

      <HeroSection site={site} />

      <PartnerLogoSlider partner_logos={site.partner_logos || []} />

      {/* Dynamic Sections */}
      {site?.sections?.map((section, index) => {
        const Component = sectionComponentMap[section.__component];
        const sectionName = section.__component.split(".").pop() || "unknown";
        let sectionData = site.sectionsData?.find(s => s.type === sectionName);
        
        if (!Component) return null;
            return <Component key={index} sectionData={sectionData}/>;
      })}
    </main>
  );
}