/**
 * Single source of truth for the canonical origin.
 *
 * `trailingSlash: true` in next.config.ts means every emitted URL ends in a
 * slash, so canonicals, sitemap entries, and JSON-LD `@id`s must too —
 * otherwise the site advertises URLs that redirect to the ones it serves.
 */
export const SITE_URL = "https://dieterlunn.ca";

/** Canonical URL for a route path, with the trailing slash the host serves. */
export function canonical(path = "/"): string {
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  const withTrailing = withLeading.endsWith("/")
    ? withLeading
    : `${withLeading}/`;
  return `${SITE_URL}${withTrailing}`;
}

export const SITE_NAME = "Dieter Lunn";
export const SITE_AUTHOR = "Dieter Lunn";
export const SITE_EMAIL = "work@dieterlunn.ca";
export const SITE_JOB_TITLE = "Software Developer";

export const SITE_TITLE = "Dieter Lunn — Software Developer";
export const SITE_DESCRIPTION =
  "Portfolio of Dieter Lunn, software developer building products that matter.";
