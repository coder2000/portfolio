import { chromium } from "playwright";

const sites = [
  { name: "zeisspoints", url: "https://zeisspoints.com" },
  { name: "schoolbushero", url: "https://schoolbushero.com" },
  { name: "jacksview", url: "https://jacksview.com" },
  { name: "chicagospulse", url: "https://chicagospulse.com" },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

for (const site of sites) {
  console.log(`Capturing ${site.url}...`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 15000 });
    await page.screenshot({
      path: `public/screenshots/${site.name}.png`,
      clip: { x: 0, y: 0, width: 1400, height: 875 },
    });
    console.log(`  ✓ ${site.name}.png`);
  } catch (err) {
    console.error(`  ✗ ${site.name}: ${err.message}`);
  }
}

await browser.close();
