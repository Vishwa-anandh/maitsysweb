import { Link } from "react-router-dom";
import { allArticles } from "./data";

type Props = {
  category: string;
  title: string; // current article title to exclude
};

const RelatedArticles = ({ category, title }: Props) => {
  const normalizedTitle = title?.trim().toLowerCase();

  // Remove current article by title first
  const filteredArticles = allArticles.filter(
    (item) => item.title.trim().toLowerCase() !== normalizedTitle,
  );

  // Match by category
  const matched = filteredArticles.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase(),
  );

  let related = [...matched];

  // If less than 3, fill with other articles
  if (related.length < 3) {
    const others = filteredArticles.filter(
      (item) => item.category.toLowerCase() !== category.toLowerCase(),
    );

    related = [...related, ...others].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }
  return (
    <section className="px-8 pt-6 pb-10 w-full">
      <h2 className="text-xl font-bold text-black lg:text-3xl">
        Related <span className="text-red-500">Articles</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.id}`}
            className="p-5 bg-white rounded-2xl border shadow-sm transition border-slate-200 hover:shadow-md hover:-translate-y-1"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full">
              {item.category}
            </span>

            <h3
              className="mt-3 text-sm font-bold text-black line-clamp-2 hover:text-red-500"
              title={item.title}
            >
              {item.title}
            </h3>

            <p className="mt-2 text-xs text-gray-500 line-clamp-2">
              {item.excerpt}
            </p>

            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <time dateTime={item.date} className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5"
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
                {item.date}
              </time>

              <span className="flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5"
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
                {item.readTime}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
