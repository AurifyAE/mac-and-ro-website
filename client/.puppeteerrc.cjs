/**
 * Puppeteer config.
 *
 * On Vercel (and other cloud builds) we prerender with @sparticuz/chromium
 * instead of puppeteer's bundled Chromium, so skip the ~150 MB download there
 * to keep installs fast. Locally, puppeteer downloads its own Chromium as usual.
 */
module.exports = {
  skipDownload: !!process.env.VERCEL,
};
