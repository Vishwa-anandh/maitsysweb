/// <reference types="vite/client" />

declare module "vite-plugin-pages";
declare module "vite-plugin-sitemap";
declare module "vite-plugin-html";

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
