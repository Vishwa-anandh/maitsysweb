export const getSiteOrigin = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  const fallback = "https://test.maitsys.com";

  // If we have an environment variable, use it as the primary source of truth
  if (envUrl && !envUrl.includes("localhost")) {
    return envUrl.replace(/\/+$/, "");
  }

  // If we are in the browser, check if we are on the production domain
  const browserOrigin = globalThis.window?.location?.origin;
  if (browserOrigin) {
    if (browserOrigin.includes("maitsys.com") && !browserOrigin.includes("localhost")) {
      return browserOrigin.replace(/\/+$/, "");
    }
  }

  // Fallback to the hardcoded production URL
  return fallback;
};
