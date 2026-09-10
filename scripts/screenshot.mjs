import { chromium } from "playwright";

const sites = [
  { name: "zeisspoints", url: "https://zeisspoints.com" },
  { name: "schoolbushero", url: "https://schoolbushero.com" },
  { name: "jacksview", url: "https://jacksview.com" },
  { name: "chicagospulse", url: "https://chicagospulse.com" },
  { name: "fishingcreektrans", url: "https://fishingcreektrans.com" },
  { name: "famli", url: "https://famli.app" },
];

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1400, height: 900 });

for (const site of sites) {
  console.log(`Capturing ${site.url}...`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 15000 });
    // A consent banner is chrome the visitor dismisses in a second, but it
    // would sit across the bottom of the shot forever. Best effort: if a
    // dismiss control is there, click it; if not, carry on.
    for (const label of [/^decline$/i, /^accept$/i, /^got it$/i]) {
      const button = page.getByRole("button", { name: label }).first();
      if (await button.isVisible().catch(() => false)) {
        await button.click().catch(() => {});
        await page.waitForTimeout(500);
        break;
      }
    }
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
