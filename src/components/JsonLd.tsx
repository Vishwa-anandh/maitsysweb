import React, { useMemo } from "react";

type JsonLdProps = {
  /** A schema.org object. "@context" is added automatically if missing. */
  schema: Record<string, unknown>;
};

/** Renders any schema.org object as a JSON-LD script tag. */
export const JsonLd: React.FC<JsonLdProps> = ({ schema }) => {
  const jsonLd = useMemo(() => {
    if (!schema) return null;
    const withContext = {
      "@context": "https://schema.org",
      ...schema,
    };
    return JSON.stringify(withContext);
  }, [schema]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default JsonLd;
