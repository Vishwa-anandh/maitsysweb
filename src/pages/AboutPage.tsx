import React, { Suspense } from "react";

import AboutSection from "../components/about/AboutSection";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Leaders from "../components/about/Leaders";
import OurClientsSay from "../components/about/OurClientsSay";
import GlobalOffices from "../components/about/GlobalOffices";
import GlobalRecognition from "../components/about/GlobalRecognition";
import Seo from "../components/SEO";
import { FAQSchema } from "../components/FAQSchema";
import { aboutFaqs } from "../Data";

const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title:
            "About Maitsys | Trusted Technology & Digital Solutions Partner",
          description:
            "Discover Maitsys’s mission, values, and expertise in delivering scalable digital and IT solutions that empower businesses worldwide.",
          keywords: [
            "IT solutions provider",
            "digital transformation company",
            "technology consulting firm",
            "Maitsys IT solutions company",
            "digital transformation services",
            "enterprise IT solutions provider",
            "cloud consulting company",
            "SAP implementation partner",
            "IT infrastructure services",
            "technology solutions provider",
            "global IT services company",
          ],
          url: "/about-us", // clean route
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt: "Maitsys About Us - Technology & Digital Solutions Partner",
          type: "website",
          preloadImage_url: "/assets/sapimage1.webp",
          preloadImage: true,
        }}
      />
      {/* Add only if the FAQ section is visible on this page */}
      <FAQSchema faqs={aboutFaqs} />
      <main id="main-content " className="overflow-hidden">
        <AboutSection />

        <Suspense fallback={null}>
          <WhyChooseUs />
          <Leaders />
          <GlobalRecognition />
          <GlobalOffices />
          {/* <Animated_Image_Columns /> */}
          <OurClientsSay />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
