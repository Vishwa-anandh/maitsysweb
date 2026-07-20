type ArticleMetaAboutProps = {
  tags?: string[];
  initials: string; // e.g. "S"
  title: string;
  description: string;
  className?: string;
};

const ArticleMetaAbout: React.FC<ArticleMetaAboutProps> = ({
  tags = [],
  initials,
  title,
  description,
  className = "",
}) => {
  return (
    <section
      className={`w-full flex flex-col justify-center items-center ${className}`}
    >
      {/* Tags row */}
      {tags.length > 0 && (
        <div className="mb-10 flex items-center gap-3">
          {/* Tag icon */}
          <span className="text-zinc-500" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 13l-7 7a2 2 0 0 1-2.83 0L3 12V4h8l9 9a2 2 0 0 1 0 2.83Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 7.5h.01"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* About Card */}
      <div
        className={`w-full flex items-center justify-center mx-auto bg-[#F9FAFB] py-6`}
      >
        <div className="  rounded-2xl bg-white p-8  shadow ring-1 ring-zinc-100">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-red-600 text-xl font-semibold text-white">
              {initials}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
              <p className="mt-2 max-w-3xl text-base leading-7 text-zinc-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ArticleMetaAbout;
