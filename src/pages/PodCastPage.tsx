import React from "react";

import Podcast from "../components/podcast/PodCast";

import AnimatedVideoCards from "../components/podcast/AnimatedVideoCards";
import Seo from "../components/SEO";

const PodCastPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "Maitsys Podcast | IT, SAP, Cloud & AI Insights",
          description:
            "Listen to the Maitsys Podcast for expert insights on IT solutions, SAP, cloud migration, AI innovations, and the latest technology trends.",
          keywords: [
            "Maitsys podcast",
            "technology podcast",
            "IT solutions podcast",
            "SAP podcast",
            "cloud migration podcast",
            "AI innovation podcast",
            "digital transformation podcast",
            "enterprise technology trends",
          ],
          url: "/podcast", // clean route
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt: "Maitsys Podcast - IT, SAP, Cloud & AI Insights",
          type: "website",
          preloadImage: false,
          noIndex: true,
        }}
      />
      <main id="main-content">
        {(globalThis as { __snapshot?: boolean }).__snapshot ? (
          <div className="py-20 text-center text-gray-400">
            Podcast content is loaded on the client side.
          </div>
        ) : (
          <>
            <AnimatedVideoCards />
            <Podcast />
          </>
        )}
      </main>
    </>
  );
};

export default PodCastPage;
