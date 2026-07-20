import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      Pages(),
      createHtmlPlugin({
        inject: {
          data: {
            VITE_SITE_URL: env.VITE_SITE_URL || "https://www.maitsys.com",
          },
        },
      }),
    ],
    build: {
      outDir: "dist",
      target: "es2018",
      sourcemap: false, // Disable source map generation for production - for security reasons (Source maps = mapping compiled code → original code)
      chunkSizeWarningLimit: 1000, // Disable chunk size warning
      cssMinify: true, // Fast modern CSS optimizer - improve Lighthouse score (LCP/CLS)
    },
  };
});
