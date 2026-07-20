import React, { useMemo } from "react";
import { getSiteOrigin } from "../utils/url";

type BreadcrumbItem = {
  name: string;
  /** Path relative to site root, e.g. "/blog" or "/products/firefighter" */
  path: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

/** Emits BreadcrumbList JSON-LD. Pass items in order, ending with the current page. */
export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({
  items,
}) => {
  const jsonLd = useMemo(() => {
    if (!items?.length) return null;

    const origin = getSiteOrigin();
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name.trim(),
        item: `${origin}${item.path === "/" ? "" : item.path}`,
      })),
    };

    return JSON.stringify(schema);
  }, [items]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default BreadcrumbSchema;
