import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/SEO";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo
        {...{
          title: "Page Not Found | Maitsys",
          description:
            "The page you are looking for does not exist or has been moved.",
          siteName: "Maitsys",
          noIndex: true,
          omitCanonical: true,
        }}
      />
      <main
        id="main-content"
        className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-6xl font-bold text-gray-300">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-gray-100">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Go to Home
          </Link>
          <Link
            to="/blog"
            className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:bg-gray-800"
          >
            Browse Blog
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
