import React, { lazy, Suspense } from "react";

import Seo from "../components/SEO";

import HeroSlider from "../components/home/HeroSlider";

const HomePage: React.FC = () => {
  const ClientLogoMarquee = lazy(
    () => import("../components/home/ClientLogoMarquee"),
  );
  const ServicesSection = lazy(
    () => import("../components/home/ServicesSection"),
  );
  const Industries = lazy(() => import("../components/home/Industries"));
  const AchievementsSection = lazy(
    () => import("../components/home/AchievementsSection"),
  );
  const Testimonials = lazy(() => import("../components/home/Testimonials"));
  const WorldMap = lazy(() => import("../components/WorldMap"));

  return (
    <>
      <Seo
        {...{
          title: "Maitsys | IT Solutions And Digital Transformation Company",
          description:
            "Maitsys is a global IT solutions provider with expertise in SAP implementation, cloud migration, and enterprise IT infrastructure support.",
          keywords: [
            "global IT solutions provider",
            "IT solutions company",
            "SAP implementation services",
            "cloud migration services",
            "IT infrastructure support",
            "enterprise IT services",
            "cloud migration consulting",
            "AWS cloud services",
            "Azure cloud solutions",
            "GCP cloud services",
            "Oracle cloud solutions",
            "digital transformation services",
            "managed IT services",
            "SAP implementation",
            "enterprise",
          ],
          url: "/", // clean route
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt: "Maitsys IT solutions and digital transformation",
          type: "website",
          preloadImage_url: "/assets/image9.webp",
          preloadImage: true,
        }}
      />
      <main id="main-content">
        <HeroSlider />
        <Suspense fallback={null}>
          <ClientLogoMarquee />
          <ServicesSection />
          <Industries />

          <AchievementsSection />
          <WorldMap />
          <Testimonials />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
