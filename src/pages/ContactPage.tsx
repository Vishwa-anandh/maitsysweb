import React from "react";
import ContactSection from "../components/contact/ContactSection";
import Seo from "../components/SEO";

const ContactPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: `Contact Maitsys | IT, SAP, Cloud & AI Solutions`,
          description:
            "Contact Maitsys for expert IT services, SAP implementation, cloud migration, AI solutions, and customized digital services worldwide.",
          keywords: ["Maitsys", "Contact", "SAP implementation"],
          url: "/contact-us",
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          preloadImage: false,
        }}
      />
      <main id="main-content">
        <ContactSection />
      </main>
    </>
  );
};

export default ContactPage;
