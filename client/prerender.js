// Post-build prerenderer.
//
// The site is a client-side-only SPA, so the built dist/index.html carries the
// Home <title>/meta for every URL. Crawlers and SEO checkers that read the raw
// HTML (and don't run JS) therefore only ever see the Home tags.
//
// This script serves the freshly built dist/ with Vite's preview server, opens
// each route in a headless browser, lets the app's <SEO> components set the
// real per-page <title>/meta, then snapshots the finished HTML to
// dist/<route>/index.html. No changes to the app's SEO/router code are needed.
//
// Run automatically after `vite build` (see package.json "build" script).

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const PORT = 4180;

// Static routes to prerender. Dynamic detail pages (/news/:slug, /blogs/:slug,
// /product/:productId) are not listed here — add them once their slugs should
// be prerendered too.
const routes = [
  '/',
  '/services',
  '/who-we-are',
  '/accreditations',
  '/corporate-governance',
  '/news',
  '/blogs',
  '/faq',
  '/contact',
  '/metal-accounts',
  '/metal-accounts/deluxe-metal-account',
  '/metal-accounts/mac-ro-metal-account',
  '/metal-accounts/end-of-treatment-payment-tfm',
  '/metal-accounts/key-man-metal-account',
  '/live-rate',
  '/products',
  '/portfolio',
  '/location-swap',
  '/privacy-policy',
  '/privacy-policies',
  '/terms-and-conditions',
];

// Hosts to block during prerender so the build doesn't fire analytics beacons
// or hang waiting on third-party/socket traffic.
const blockedHosts = [
  'googletagmanager.com',
  'google-analytics.com',
  'analytics.google.com',
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const server = await preview({
    root: __dirname,
    preview: { port: PORT, strictPort: true },
    logLevel: 'warn',
  });
  const origin = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let failures = 0;

  for (const route of routes) {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (blockedHosts.some((h) => req.url().includes(h))) req.abort();
      else req.continue();
    });

    try {
      await page.goto(origin + route, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // Wait until the app has mounted and a <SEO> effect has populated the head.
      await page
        .waitForFunction(
          () =>
            document.title &&
            document.querySelector('#root')?.children.length > 0 &&
            document.querySelector('meta[name="description"]')?.content,
          { timeout: 20000 },
        )
        .catch(() => {
          console.warn(`  ! ${route}: SEO tags not detected before timeout`);
        });

      // Let any page-level <SEO> override finish applying over the global default.
      await sleep(400);

      const html = await page.content();
      const outPath =
        route === '/'
          ? path.join(distDir, 'index.html')
          : path.join(distDir, route, 'index.html');
      await fs.mkdir(path.dirname(outPath), { recursive: true });
      await fs.writeFile(outPath, html, 'utf8');

      const title = await page.title();
      console.log(`  ✓ ${route}  ->  ${path.relative(distDir, outPath)}`);
      console.log(`      title: ${title}`);
    } catch (err) {
      failures++;
      console.error(`  ✗ ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  if (typeof server.close === 'function') await server.close();
  else server.httpServer.close();

  if (failures > 0) {
    console.error(`\nPrerender finished with ${failures} failed route(s).`);
    process.exit(1);
  }
  console.log(`\nPrerendered ${routes.length} routes.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
