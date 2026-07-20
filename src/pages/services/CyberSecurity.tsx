import React, { Suspense } from "react";

import VulnerabilityHero from "../../components/services/cyberSecurity/VulnerabilityHero";
import ProblemSection from "../../components/services/cyberSecurity/ProblemSection";
import RemediationPage from "../../components/services/cyberSecurity/RemediationPage";
import EngagementModels from "../../components/services/cyberSecurity/Engagementmodels";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "Cyber Security & Vulnerability Remediation | Maitsys",
          description:
            "Maitsys delivers cyber security services from vulnerability discovery to remediation. We don’t just scan — we fix and reduce real security risks.",
          keywords: [
            "cyber security services",
            "vulnerability remediation services",
            "security vulnerability management",
            "penetration testing services",
            "risk reduction cybersecurity",
            "application security services",
            "cloud security remediation",
            "infrastructure security services",
            "cybersecurity consulting company",
            "Maitsys cyber security",
          ],
          url: "/cyber-security-services",
          siteName: "Maitsys",
          image: "/assets/vulnerabilityHero.webp",
          preloadImage_url: "/assets/vulnerabilityHero.webp",
          imageAlt:
            "Cyber Security Services - Vulnerability Remediation by Maitsys",
          type: "website",
          preloadImage: true, // important for hero image
        }}
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Cyber Security & Vulnerability Remediation",
          description:
            "Maitsys delivers cyber security services from vulnerability discovery to remediation. We don’t just scan — we fix and reduce real security risks.",
          serviceType: "Cyber Security Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/cyber-security-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "Cyber Security & Vulnerability Remediation",
            path: "/cyber-security-services",
          },
        ]}
      />
      <ContactPopup />
      <main id="main-content " className="overflow-hidden ">
        <VulnerabilityHero />
        <Suspense fallback={null}>
          <ProblemSection />
          <RemediationPage />
          <EngagementModels />
          <QuickViewUi
            title="Ready to actually close vulnerabilities?"
            description="Stop managing reports. Start reducing risk. Get a free assessment and see how we can help."
            linkName="Schedule Free Consultation"
            url="/contact-us"
            title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
          />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
