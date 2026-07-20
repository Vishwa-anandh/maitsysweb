import React, { Suspense } from "react";

import SAPHero from "../../components/services/SAP/SAPHero";
import SapServicePortfolio from "../../components/services/SAP/SapServicePortfolio";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";
import WorldMap from "../../components/WorldMap";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const SAP_Services: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "SAP Services & Managed Support Partner | Maitsys",
          description:
            "Maitsys delivers SAP managed services, BASIS support, AMS, and S/4HANA transformation to drive secure, scalable business growth.",
          keywords: [
            "SAP services company",
            "SAP managed services",
            "SAP BASIS support",
            "SAP application management services",
            "SAP S/4HANA services",
            "SAP consulting partner",
            "SAP security services",
            "SAP DevOps services",
            "SAP AMS provider",
            "Maitsys SAP partner",
          ],
          url: "/sap-services",
          siteName: "Maitsys",
          image: "/assets/SAPEnterpriseTechnology.webp", // change to your actual hero image
          imageAlt: "Maitsys SAP Services and Managed Support Partner",
          type: "website",
          preloadImage_url: "/assets/SAPEnterpriseTechnology.webp",
          preloadImage: true,
        }}
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "SAP Services & Managed Support Partner",
          description:
            "Maitsys delivers SAP managed services, BASIS support, AMS, and S/4HANA transformation to drive secure, scalable business growth.",
          serviceType: "SAP Managed Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/sap-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "SAP Services & Managed Support Partner",
            path: "/sap-services",
          },
        ]}
      />
      <ContactPopup />
      <main id="main-content " className="overflow-hidden ">
        <SAPHero />
        <Suspense fallback={null}>
          <SapServicePortfolio />
          <WorldMap />
          <QuickViewUi
            title="Get started"
            description="Free SAP Services Consultation (30 minutes)"
            linkName=" contact@maitsys.com"
            url="/contact-us"
            title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
          />
        </Suspense>
      </main>
    </>
  );
};

export default SAP_Services;
