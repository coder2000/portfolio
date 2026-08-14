import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/data/site";

export const dynamic = "force-static";

/**
 * Colors mirror globals.css: ink for the browser chrome, paper for the splash
 * ground. `display: browser` rather than `standalone` — this is a site to read,
 * not an app to install, and stripping the URL bar off a portfolio helps nobody.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#f2f2ef",
    theme_color: "#16264a",
    icons: [
      {
        src: "/favicon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
