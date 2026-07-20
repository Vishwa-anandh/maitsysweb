import React, { Suspense } from "react";

import CareersSection from "../components/career/CareersSection";
import CurrentOpenings from "../components/career/CurrentOpenings";
import CareersForm from "../components/career/CareersForm";
import Seo from "../components/SEO";

const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "Careers at Maitsys | IT, SAP, Cloud & AI Jobs",
          description:
            "Build your career at Maitsys. Explore exciting job opportunities in IT, SAP, cloud computing, AI, and next-generation digital technologies.",
          keywords: [
            "careers at Maitsys",
            "IT jobs at Maitsys",
            "SAP consultant jobs",
            "cloud computing jobs",
            "AI technology jobs",
            "software engineer jobs",
            "digital transformation careers",
          ],
          url: "/careers", // clean route
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt: "Maitsys Careers - IT, SAP, Cloud & AI Jobs",
          type: "website",
          preloadImage: false,
        }}
      />
      <main id="main-content">
        <CareersSection />
        <Suspense fallback={null}>
          <CurrentOpenings />
          <CareersForm />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
