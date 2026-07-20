import React, { useState } from "react";
import { allArticles } from "../../components/articles/data";
import { Link } from "react-router-dom";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const ArticlesInsightsPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags: string[] = ["All", "SAP", "Cloud Solutions", "Best Practices"];

  const featuredArticle = allArticles[0];

  const filteredArticles =
    selectedTag === "All"
      ? allArticles.slice(1)
      : allArticles
          .slice(1)
          .filter((article) => article.category === selectedTag);

  return (
    <>
      <Seo
        {...{
          title: "Maitsys Articles & Insights | SAP, Cloud & AI",
          description:
            "Explore Maitsys Articles & Insights on SAP S/4HANA, cloud migration, cost optimization, AI innovation, security, and enterprise IT best practices.",
          keywords: [
            "Maitsys articles",
            "SAP insights",
            "cloud migration articles",
            "SAP S/4HANA guides",
            "cloud cost optimization strategies",
            "FinOps best practices",
            "enterprise IT best practices",
            "AI technology trends",
            "SAP security best practices",
            "digital transformation insights",
          ],
          url: "/blog", // ✅ canonical must be stable (no query params)
          siteName: "Maitsys",
          image: "/assets/articles/articles_image4.webp",
          imageAlt: allArticles[0]?.title || "Maitsys Articles & Insights",
          type: "website",
          preloadImage_url: "/assets/articles/articles_image4.webp",
          preloadImage: true,
        }}
      />
      <JsonLd
        schema={{
          "@type": "ItemList",
          name: "Maitsys Blog Articles",
          itemListElement: allArticles.map((article, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: article.title,
            url: `https://www.maitsys.com/blog/${article.id}`
          }))
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
      
      <div className="min-h-screen bg-white">
        {/* SEO Metadata would go in Next.js Head or Helmet */}

        {/* Hero Section */}
        <header className="flex overflow-hidden relative flex-col justify-center items-center">
          <div className="flex relative flex-col justify-center items-center px-6 py-6 mx-auto max-w-8xl sm:px-8 lg:px-12 sm:py-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8282] to-[#E7000B] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-rose-500/30 tracking-wide">
                Insights & Resources
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                Articles &
              </span>
              <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600">
                Insights
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-center text-gray-500">
              Stay updated with the latest trends, best practices, and
              innovations in SAP, AI, and technology for AI-ready organizations.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20 mx-auto max-w-8xl sm:px-8 lg:px-12">
          {/* Featured Article Section */}
          {featuredArticle && (
            <section className="mb-16" aria-labelledby="featured-heading">
              <div className="flex gap-3 items-center mb-8">
                <h2
                  id="featured-heading"
                  className="text-2xl font-bold tracking-tight text-slate-900"
                >
                  Featured Article
                </h2>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <article className="overflow-hidden relative bg-white rounded-3xl shadow transition-all duration-500 group hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1">
                <Link
                  to={`/blog/${featuredArticle.id}`}
                  className="block group"
                  aria-label={`Read full article: ${featuredArticle.title}`}
                >
                  <div className="grid gap-0 cursor-pointer md:grid-cols-2">
                    {/* Image Section */}
                    <div className="overflow-hidden relative h-72 md:h-auto">
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center bg-red-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg shadow-red-600/40">
                          {featuredArticle.category}
                        </span>
                      </div>

                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        title={featuredArticle.title}
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                          featuredArticle.id === "sap-ecc-2027-deadline-by-ehp-version"
                            ? "object-contain bg-white p-6"
                            : "object-cover"
                        }`}
                        fetchPriority="high"
                        loading="eager"
                      />

                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <div className="inline-flex gap-2 items-center mb-4 text-sm font-semibold text-red-600">
                        {featuredArticle.category}
                      </div>

                      <h3 className="mb-5 text-3xl font-bold leading-tight transition-colors sm:text-4xl text-slate-900 group-hover:text-red-600">
                        {featuredArticle.title}
                      </h3>

                      <p className="mb-6 text-lg font-normal leading-relaxed text-slate-600">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="flex gap-6 items-center mb-8 text-sm text-slate-500">
                        <span>{featuredArticle.date}</span>
                        <span>{featuredArticle.readTime}</span>
                      </div>

                      <div className="inline-flex gap-2 items-center text-lg font-bold text-red-600">
                        Read Full Article →
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </section>
          )}

          {/* Filter Tags */}
          <div className="mb-10">
            <nav
              className="flex flex-wrap gap-3 items-center"
              aria-label="Article categories"
            >
              <span className={`text-lg font-normal text-gray-600`}>
                Filter by:
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedTag === tag
                      ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-500/30 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md shadow-sm border border-slate-200"
                  }`}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </nav>
          </div>

          {/* Articles Grid */}
          <section
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="All articles"
          >
            {filteredArticles.map((article, index) => (
              <Link
                to={`/blog/${article.id}`}
                key={index + "index"}
                className="block focus:outline-none"
                aria-label={`Read article ${article.title}`}
              >
                <article
                  key={article.id}
                  className="flex overflow-hidden flex-col bg-white rounded-2xl shadow-xl transition-all duration-500 group hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  {/* Image */}
                  <div className="overflow-hidden relative h-48">
                    {article.category && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                    )}

                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      title={article.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                        article.id === "sap-ecc-2027-deadline-by-ehp-version"
                          ? "object-contain bg-white p-2"
                          : "object-cover"
                      }`}
                      fetchPriority="high"
                      loading="eager"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 from-black/40 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3
                      className="mb-3 text-xl font-bold leading-tight transition-colors text-slate-900 group-hover:text-red-600 line-clamp-2"
                      title={article.title}
                    >
                      {article.title}
                    </h3>

                    <p className="flex-1 mb-4 text-sm font-light leading-relaxed text-slate-600 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-y-2 gap-x-4 items-center text-xs text-slate-500">
                        <time
                          dateTime={article.date}
                          className="flex items-center gap-1.5"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="whitespace-nowrap">
                            {article.date}
                          </span>
                        </time>

                        <span className="flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="whitespace-nowrap">
                            {article.readTime}
                          </span>
                        </span>
                      </div>

                      <span className="inline-flex gap-1 items-center text-sm font-bold text-red-600 hover:underline sm:justify-end">
                        Read More
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};
export default ArticlesInsightsPage;
