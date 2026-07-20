import React from "react";

export type ArticleReference = {
  /** Display title of the source, e.g. "SAP S/4HANA Product Page" */
  title: string;
  /** Absolute external URL of the authoritative source */
  url: string;
  /** Publisher name, e.g. "SAP", "Microsoft", "NIST" */
  source: string;
};

type ArticleReferencesProps = {
  references: ArticleReference[];
  title?: string;
  className?: string;
};

/**
 * Visible "References & Further Reading" section linking claims in the
 * article to authoritative external sources.
 */
const ArticleReferences: React.FC<ArticleReferencesProps> = ({
  references,
  title = "References & Further Reading",
  className = "",
}) => {
  if (!references?.length) return null;

  return (
    <section className={`w-full ${className}`} aria-label={title}>
      <h2 className="text-xl sm:text-2xl font-bold leading-tight text-zinc-900">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {references.map((ref, idx) => (
          <li key={idx + "reference"} className="flex gap-3 text-base leading-6">
            <span
              className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-red-500"
              aria-hidden="true"
            />
            <span>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 underline decoration-red-200 underline-offset-4 hover:text-red-700"
              >
                {ref.title}
              </a>
              <span className="text-zinc-500"> — {ref.source}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleReferences;
