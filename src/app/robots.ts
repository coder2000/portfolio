import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

/**
 * Everything here is public, so the rules are permissive. The reason this file
 * exists at all is the Sitemap line — it is how the sitemap gets discovered
 * without registering the site in a webmaster console.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
