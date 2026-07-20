import React from "react";

type FeatureBlockProps = {
  title: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // 👈 dynamic
  description?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  items?: string[];
  className?: string;
};

const Block_ul_design: React.FC<FeatureBlockProps> = ({
  title,
  headingTag = "h2", // 👈 default h2
  description,
  description2,
  description3,
  description4,
  items,
  className = "",
}) => {
  const HeadingTag = headingTag; // 👈 dynamic component
const headingStyles = {
  h1: "text-3xl sm:text-4xl font-bold",     // 30 → 36
  h2: "text-xl sm:text-2xl font-bold",      // 20 → 24
  h3: "text-lg sm:text-xl font-semibold",   // 18 → 20
  h4: "text-base sm:text-lg font-semibold",   // 16 → 18
  h5: "text-sm sm:text-base font-medium",
  h6: "text-xs sm:text-sm font-medium",
};
  return (
    <section className={`w-full ${className}`} aria-label={title}>
      <HeadingTag
        className={`${headingStyles[headingTag]} leading-tight text-zinc-900`}
      >
        {" "}
        {title}
      </HeadingTag>

      {description && (
        <p className="mt-3 text-base leading-6 ">{description}</p>
      )}

      {description2 && (
        <p className="mt-3 text-base leading-6 ">{description2}</p>
      )}

      {description3 && (
        <p className="mt-3 text-base leading-6 ">{description3}</p>
      )}

      {description4 && (
        <p className="mt-3 text-base leading-6 ">{description4}</p>
      )}

      {items?.length ? (
        <ul className="mt-4 space-y-3">
          {items.map((item, idx) => (
            <li key={idx + "index"} className="flex gap-3 text-base leading-6 ">
              <span
                className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-red-500"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default Block_ul_design;
