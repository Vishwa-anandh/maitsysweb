// SEO.tsx
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSiteOrigin } from "../utils/url";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[] | string;

  /**
   * Optional canonical override.
   * ✅ Recommended: DO NOT pass for normal pages.
   * Use only when you intentionally want canonical to point elsewhere.
   * Examples:
   *  - canonical for filters: url="/products" while user is on "/products?sort=..."
   *  - canonical for pagination: url="/blog" while user is on "/blog?page=2"
   */
  url?: string;

  siteName?: string;

  /** Main image (OG/Twitter + optional preload). Can be relative or absolute. */
  image?: string;
  imageAlt?: string;

  /** "website" by default. Use "article" for blog pages. */
  type?: "website" | "article";

  /** Example: "en_US" */
  locale?: string;

  /** ISO string: new Date().toISOString() */
  updatedTime?: string;

  /** Optional extras */
  author?: string;
  themeColor?: string;

  /** Duplicate-content control */
  noIndex?: boolean;

  /** Preload hero image for better LCP */
  preloadImage?: boolean;
  preloadImage_url?: string;

  /** Preload hero video for better background performance */
  preloadVideo?: boolean;
  preloadVideo_url?: string;

  /** If true, canonical ignores query params (recommended) */
  canonicalIgnoreQuery?: boolean;

  /** If true, remove trailing slash in canonical (recommended) */
  canonicalRemoveTrailingSlash?: boolean;

  /**
   * ✅ IMPORTANT FIX for your issue:
   * If someone mistakenly passes url="/" on a non-home page,
   * we'll auto-correct canonical to the current pathname.
   */
  preventWrongHomeCanonical?: boolean;

  /**
   * Optional: set canonical origin explicitly (recommended for localhost testing)
   * Example: canonicalOrigin="https://www.maitsys.com"
   * If omitted, it uses window.location.origin
   */
  canonicalOrigin?: string;
  omitCanonical?: boolean;

  /** Optional JSON-LD Schema object */
}

/** Site-wide fallback social card used when a page doesn't pass an image */
const DEFAULT_OG_IMAGE = "/maitsys_company.jpg";
const DEFAULT_OG_IMAGE_ALT = "Maitsys - IT Solutions and Digital Transformation Company";

const normalizeKeywords = (keywords?: string[] | string) => {
  if (!keywords) return "";
  if (Array.isArray(keywords)) {
    return keywords
      .map((k) => k.trim())
      .filter(Boolean)
      .join(", ");
  }
  return keywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)
    .join(", ");
};

const toAbsoluteUrl = (maybeUrl?: string) => {
  if (!maybeUrl) return "";

  // If already absolute URL
  if (/^https?:\/\//i.test(maybeUrl)) {
    return maybeUrl;
  }

  const origin = getSiteOrigin();
  return new URL(maybeUrl, origin).toString();
};

const cleanTrailingSlash = (path: string, remove: boolean) => {
  if (!remove) return path || "/";
  if (!path) return "/";
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
  siteName,
  image,
  imageAlt,
  type = "website",
  locale = "en_US",
  updatedTime,
  author,
  themeColor,
  noIndex = false,
  preloadImage = false,
  preloadImage_url,
  preloadVideo = false,
  preloadVideo_url,
  canonicalIgnoreQuery = true,
  canonicalRemoveTrailingSlash = true,
  preventWrongHomeCanonical = true,
  canonicalOrigin,
  omitCanonical = false,
}) => {
  const { pathname, search } = useLocation();

  const kw = useMemo(() => normalizeKeywords(keywords), [keywords]);
  const absImage = useMemo(
    () => toAbsoluteUrl(image || DEFAULT_OG_IMAGE),
    [image],
  );
  const absImageAlt = imageAlt || (image ? undefined : DEFAULT_OG_IMAGE_ALT);

  // ✅ Canonical (correct & safe)
  const canonical = React.useMemo(() => {
    const origin = (canonicalOrigin || getSiteOrigin()).replace(/\/+$/, "");
    const currentPath = cleanTrailingSlash(
      pathname || "/",
      canonicalRemoveTrailingSlash,
    );

    let targetPath = currentPath;
    let targetOrigin = origin;

    if (url) {
      try {
        const absolute = new URL(url, origin);
        targetPath = canonicalIgnoreQuery
          ? absolute.pathname
          : absolute.pathname + (absolute.search || "");

        targetOrigin = canonicalOrigin ? origin : absolute.origin;
      } catch {
        // Fallback to current route on invalid URL
        targetPath = currentPath;
      }
    }

    targetPath = cleanTrailingSlash(targetPath, canonicalRemoveTrailingSlash);

    // Prevent accidental canonical to homepage when current page is not home
    if (
      preventWrongHomeCanonical &&
      targetPath === "/" &&
      currentPath !== "/"
    ) {
      targetPath = currentPath;
      targetOrigin = origin;
    }

    // If the path is exactly "/", remove it to prevent trailing slashes (e.g. https://www.maitsys.com instead of https://www.maitsys.com/)
    const finalPath = targetPath === "/" ? "" : targetPath;
    return `${targetOrigin.replace(/\/+$/, "")}${finalPath}`;
  }, [
    canonicalOrigin,
    url,
    pathname,
    search,
    canonicalIgnoreQuery,
    canonicalRemoveTrailingSlash,
    preventWrongHomeCanonical,
  ]);

  // Force update any lingering canonical tags left by react-snap in the raw HTML
  React.useEffect(() => {
    if (omitCanonical) return;
    const links = document.querySelectorAll("link[rel='canonical']");
    links.forEach((link) => {
      link.setAttribute("href", canonical);
    });
  }, [canonical, omitCanonical]);

  const robotsValue = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      {/* ✅ Title + Basic Meta */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {kw && <meta name="keywords" content={kw} />}
      {author && <meta name="author" content={author} />}
      {themeColor && <meta name="theme-color" content={themeColor} />}

      {/* ✅ Robots */}
      <meta name="robots" content={robotsValue} />
      <meta name="googlebot" content={robotsValue} />

      {/* ✅ Canonical (always set unless omitted) */}
      {!omitCanonical && <link rel="canonical" href={canonical} />}

      {/* ✅ Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {!omitCanonical && <meta property="og:url" content={canonical} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />

      {absImage && <meta property="og:image" content={absImage} />}
      {absImage && absImageAlt && (
        <meta property="og:image:alt" content={absImageAlt} />
      )}
      {updatedTime && <meta property="og:updated_time" content={updatedTime} />}

      {/* ✅ Twitter */}
      <meta
        name="twitter:card"
        content={absImage ? "summary_large_image" : "summary"}
      />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {absImage && <meta name="twitter:image" content={absImage} />}
      {absImage && absImageAlt && (
        <meta name="twitter:image:alt" content={absImageAlt} />
      )}

      {/* ✅ Preload Hero Image */}
      {preloadImage && preloadImage_url && (
        <link
          rel="preload"
          as="image"
          href={preloadImage_url}
          fetchPriority="high"
        />
      )}

      {/* ✅ Preload Hero Video */}
      {preloadVideo && preloadVideo_url && (
        <link
          rel="preload"
          as="video"
          href={preloadVideo_url}
          fetchPriority="high"
        />
      )}
    </Helmet>
  );
};

export default SEO;
