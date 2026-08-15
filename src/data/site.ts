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

/**
 * Names the actual work rather than the ambition. "Products that matter" is
 * true of every portfolio ever written and matches no query anyone types; the
 * stack and the kinds of systems built are what someone is actually searching
 * for. Kept under ~160 characters so it survives intact in a result snippet.
 */
export const SITE_DESCRIPTION =
  "Dieter Lunn is a software developer building Rails and React products end to end — dealer loyalty platforms, hiring and onboarding systems, and booking sites.";
