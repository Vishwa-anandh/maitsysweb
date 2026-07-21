/**
 * Custom Puppeteer prerenderer (replaces react-snap).
 *
 * For each route it:
 *   1. serves the built dist/ over a local static server (SPA fallback),
 *   2. loads the route in headless Chrome so React + react-helmet-async render,
 *   3. saves the fully-rendered HTML to dist/<route>/index.html.
 *
 * The output HTML contains the real page content, meta tags, and JSON-LD, so
 * non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) can read every page.
 * It still hydrates on the client because the module script tags are preserved.
 *
 * Chrome is located via PUPPETEER_EXECUTABLE_PATH (set in CI) or common install
 * paths. Third-party requests (analytics, fonts) are blocked so the page settles.
 */
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import puppeteer from "puppeteer-core";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 45678;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY) || 4;
const NAV_TIMEOUT = 60000;

const normalize = (r) => {
  if (!r) return "/";
  const t = r.replace(/\/+$/, "");
  return t === "" ? "/" : t;
};

// Route manifest lives under "prerender" in package.json (falls back to legacy "reactSnap").
const cfg = pkg.prerender || pkg.reactSnap || {};
const exclude = new Set((cfg.exclude || []).map(normalize));
const routes = [...new Set((cfg.include || ["/"]).map(normalize))].filter(
  (r) => !exclude.has(r),
);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".pdf": "application/pdf",
  ".map": "application/json",
};

function findSystemChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  const candidates = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    process.env.LOCALAPPDATA &&
      `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    "/opt/google/chrome/chrome",
  ].filter(Boolean);
  return candidates.find((c) => existsSync(c)) || null;
}

/**
 * Resolve a Puppeteer launch config using the system Chrome
 * (PUPPETEER_EXECUTABLE_PATH in CI, or a common install path locally).
 */
function resolveLaunchConfig() {
  const systemChrome = findSystemChrome();
  if (!systemChrome) return null;
  console.log(`prerender: using system Chrome at ${systemChrome}`);
  return {
    executablePath: systemChrome,
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  };
}

function startServer(shell) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        // Requests with a file extension map to real built assets.
        if (extname(urlPath)) {
          const filePath = join(DIST, urlPath);
          if (existsSync(filePath)) {
            const data = await readFile(filePath);
            res.writeHead(200, {
              "Content-Type": MIME[extname(filePath)] || "application/octet-stream",
            });
            res.end(data);
            return;
          }
          res.writeHead(404);
          res.end("not found");
          return;
        }
        // Any route path gets the original SPA shell so the app boots and renders.
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(shell);
      } catch {
        res.writeHead(500);
        res.end("error");
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    // Match react-snap's window.__snapshot flag so existing guards behave the same.
    await page.evaluateOnNewDocument(() => {
      window.__snapshot = true;
    });

    // Block third-party requests (analytics, fonts, ZoomInfo) so the page settles.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (u.startsWith(`http://localhost:${PORT}`) || u.startsWith("data:")) {
        req.continue();
      } else {
        req.abort();
      }
    });

    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT });

    // Wait until the app has rendered real content (not the Suspense loader).
    await page
      .waitForFunction(
        () => {
          const root = document.getElementById("root");
          if (!root || root.children.length === 0) return false;
          const text = root.innerText || "";
          return text.trim().length > 0 && !/^\s*loading/i.test(text);
        },
        { timeout: NAV_TIMEOUT },
      )
      .catch(() => {});

    // Let react-helmet-async flush <head> tags (title, meta, canonical).
    await new Promise((r) => setTimeout(r, 400));

    const html = await page.content();
    const outPath =
      route === "/"
        ? join(DIST, "index.html")
        : join(DIST, route, "index.html");
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    return { route, ok: true, bytes: html.length };
  } catch (err) {
    return { route, ok: false, error: err.message };
  } finally {
    await page.close();
  }
}

async function run() {
  const launchConfig = resolveLaunchConfig();
  if (!launchConfig) {
    console.error(
      "ERROR - Chrome not found. Set PUPPETEER_EXECUTABLE_PATH to a Chrome/Chromium binary.",
    );
    process.exit(1);
  }
  console.log(`prerender: ${routes.length} routes, concurrency ${CONCURRENCY}`);

  const shellPath = join(DIST, "index.html");
  if (!existsSync(shellPath)) {
    console.error(`ERROR - ${shellPath} not found. Run "vite build" first.`);
    process.exit(1);
  }
  const shell = await readFile(shellPath, "utf8");
  const server = await startServer(shell);

  const browser = await puppeteer.launch(launchConfig);

  const results = [];
  const queue = [...routes];
  async function worker() {
    let route;
    while ((route = queue.shift())) {
      const res = await prerenderRoute(browser, route);
      results.push(res);
      const label = res.ok
        ? `ok ${res.bytes}B`
        : `FAILED ${res.error}`;
      console.log(`  [${results.length}/${routes.length}] ${res.route} -> ${label}`);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, routes.length) }, worker),
  );

  await browser.close();
  server.close();

  // Always write a report readable from the deployed site (diagnostics).
  const okCount = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok);
  const report = [
    `total=${results.length}`,
    `ok=${okCount}`,
    `failed=${failed.length}`,
    `chrome=${launchConfig.executablePath}`,
    `concurrency=${CONCURRENCY}`,
    "",
    ...results.map((r) =>
      r.ok ? `OK   ${r.route} (${r.bytes}B)` : `FAIL ${r.route} :: ${r.error}`,
    ),
  ].join("\n");
  try {
    await writeFile(join(DIST, "prerender-report.txt"), report, "utf8");
  } catch {
    /* ignore */
  }

  if (failed.length) {
    console.error(`prerender: ${failed.length}/${results.length} route(s) failed`);
    failed.forEach((f) => console.error(`  ${f.route}: ${f.error}`));
    // Fail the build only in strict mode; otherwise deploy what succeeded + report.
    if (process.env.PRERENDER_STRICT === "1") process.exit(1);
  }
  console.log(`prerender: ${okCount}/${results.length} routes written`);
}

run().catch((err) => {
  console.error("prerender: fatal error");
  console.error(err);
  process.exit(1);
});
