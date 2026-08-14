import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { canonical } from "@/data/site";

// Emitted as a static sitemap.xml at build time — no runtime involved, which
// is what the static export needs.
export const dynamic = "force-static";

/**
 * `lastModified` is the build time rather than a per-project date, because the
 * project data carries no dates. That is honest for a site where every page is
 * rebuilt together, and it avoids inventing timestamps crawlers would trust.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: canonical("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: canonical(`/work/${project.slug}`),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
