import React from "react";

import ProductsSection from "../components/products/ProductsSection";
import Seo from "../components/SEO";
import JsonLd from "../components/JsonLd";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const ProductsPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "SAP Integration & Cloud Optimization Products | Maitsys",
          description:
            "Explore Maitsys enterprise products for SAP integration monitoring, security governance, user activity control, and cloud cost optimization.",
          keywords: [
            "SAP integration monitoring tools",
            "SAP security governance solutions",
            "SAP user activity monitoring",
            "cloud cost optimization platform",
            "enterprise SAP monitoring software",
            "AI powered cloud cost management",
            "SAP access governance tools",
            "multi cloud cost optimization",
            "SAP intelligence platform",
          ],
          url: "/products",
          siteName: "Maitsys",
          type: "website",
          image: "/logo.png",
          imageAlt:
            "Maitsys SAP Integration, Security & Cloud Cost Optimization Products",
          preloadImage: false, // only preload if you have a big hero banner image
        }}
      />
      <JsonLd
        schema={{
          "@type": "ItemList",
          name: "Maitsys Products",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "SAP IDoc Monitoring",
              url: "https://www.maitsys.com/products/sap-idoc-monitoring"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "MIO User Monitoring",
              url: "https://www.maitsys.com/products/mio-user-monitoring"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Firefighter",
              url: "https://www.maitsys.com/products/firefighter"
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Cloud Cost Optimizer",
              url: "https://www.maitsys.com/products/cloud-cost-optimizer"
            }
          ]
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]} />
      <main id="main-content">
        <ProductsSection />
      </main>
    </>
  );
};

export default ProductsPage;
