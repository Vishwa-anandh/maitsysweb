import React, { useMemo } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSchemaProps = {
  faqs: FAQItem[];
};

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const jsonLd = useMemo(() => {
    // Guard: no empty arrays
    if (!faqs?.length) return null;

    // Build schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question.trim(),
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer.trim(),
        },
      })),
    };

    return JSON.stringify(schema);
  }, [faqs]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};
