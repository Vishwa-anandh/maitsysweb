import React from "react";

type KeyTakeawaysProps = {
  /** Short, direct, self-contained statements — one clear fact or answer per bullet. */
  points: string[];
  title?: string;
  className?: string;
};

/**
 * Answer-first summary box shown at the top of an article so readers
 * (and answer engines) get the core facts before the long-form content.
 */
const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({
  points,
  title = "Key Takeaways",
  className = "",
}) => {
  if (!points?.length) return null;

  return (
    <section
      className={`rounded-2xl border border-red-100 bg-red-50/60 p-6 sm:p-8 ${className}`}
      aria-label={title}
    >
      <h2 className="text-xl sm:text-2xl font-bold leading-tight text-zinc-900">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {points.map((point, idx) => (
          <li key={idx + "takeaway"} className="flex gap-3 text-base leading-6">
            <span
              className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-red-500"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KeyTakeaways;
