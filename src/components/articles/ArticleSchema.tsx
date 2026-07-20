import React, { useMemo } from "react";
import { getSiteOrigin } from "../../utils/url";


type ArticleAuthor =
  | { type: "Person"; name: string; url?: string }
  | { type: "Organization"; name: string; url?: string };

type ArticleSchemaProps = {
  /** Required */
  headline: string;
  description: string;
  /** Prefer absolute URL for social + schema consistency */
  url: string;

  /** Required by Google for rich results in many cases */
  image: string | string[];

  /** Dates should be ISO strings */
  datePublished: string;
  dateModified?: string;

  /** Optional but recommended */
  author?: ArticleAuthor;
  siteName?: string;

  /** Publisher (recommended). If not provided, falls back to siteName */
  publisherName?: string;
  publisherLogo?: string; // absolute URL preferred

  /** Optional extras */
  keywords?: string[];
  inLanguage?: string; // e.g. "en-US"
  articleSection?: string; // e.g. "Cloud"
};

const isAbsUrl = (u: string) => /^https?:\/\//i.test(u);

const toAbs = (maybeUrl: string) => {
  if (!maybeUrl) return "";
  if (isAbsUrl(maybeUrl)) return maybeUrl;

  const origin = getSiteOrigin();

  return new URL(maybeUrl, origin).toString();
};

const resolveImages = (image: string | string[]) => {
  const images = (Array.isArray(image) ? image : [image])
    .map(toAbs)
    .filter(Boolean);
  return images.length === 1 ? images[0] : images;
};

const buildAuthorSchema = (author?: ArticleAuthor, siteName?: string) => {
  if (author) {
    return {
      "@type": author.type,
      name: author.name,
      ...(author.url ? { url: toAbs(author.url) } : {}),
    };
  }
  if (siteName) {
    return { "@type": "Organization", name: siteName };
  }
  return undefined;
};

export const ArticleSchema: React.FC<ArticleSchemaProps> = (props) => {
  const jsonLd = useMemo(() => {
    const {
      headline,
      description,
      url,
      image,
      datePublished,
      dateModified,
      author,
      siteName,
      publisherName,
      publisherLogo,
      keywords,
      inLanguage = "en-US",
      articleSection,
    } = props;

    if (!headline || !description || !url || !image || !datePublished) {
      return null;
    }

    const absUrl = toAbs(url);
    const pubName = publisherName || siteName || "Maitsys";
    const authorSchema = buildAuthorSchema(author, siteName);

    const schema: any = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: headline.trim(),
      description: description.trim(),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absUrl,
      },
      url: absUrl,
      image: resolveImages(image),
      datePublished,
      dateModified: dateModified || datePublished,
      inLanguage,
      publisher: {
        "@type": "Organization",
        name: pubName,
      },
    };

    if (publisherLogo) {
      schema.publisher.logo = {
        "@type": "ImageObject",
        url: toAbs(publisherLogo),
      };
    }

    if (authorSchema) {
      schema.author = authorSchema;
    }

    if (keywords?.length) {
      schema.keywords = keywords.join(", ");
    }

    if (articleSection) {
      schema.articleSection = articleSection;
    }

    return JSON.stringify(schema);
  }, [props]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};
