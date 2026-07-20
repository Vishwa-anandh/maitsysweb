/*
 * Runs the react-snap prerender using the config from package.json.
 * In AWS CodeBuild, set PUPPETEER_EXECUTABLE_PATH to the system Chrome
 * (installed via dnf in buildspec.yml) so react-snap doesn't depend on
 * the bundled Chromium working on Amazon Linux.
 */
const { run } = require("react-snap");
const pkg = require("../package.json");

const config = { ...(pkg.reactSnap || {}) };

if (process.env.PUPPETEER_EXECUTABLE_PATH) {
  config.puppeteerExecutablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  console.log(`react-snap: using Chrome at ${config.puppeteerExecutablePath}`);
}

run(config)
  .then(() => {
    console.log("react-snap prerender complete");
  })
  .catch((err) => {
    console.error("react-snap prerender FAILED - aborting build");
    console.error(err);
    process.exit(1);
  });
