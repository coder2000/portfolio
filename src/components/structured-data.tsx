import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_JOB_TITLE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  canonical,
} from "@/data/site";
import type { Project } from "@/data/projects";

/**
 * JSON-LD, rendered as a plain script tag.
 *
 * The payload is built here from typed site data — never from user input — so
 * `dangerouslySetInnerHTML` carries no injection surface. The `<` escape is
 * belt-and-braces: it stops any future string containing `</script` from
 * closing the tag early.
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Stable node ids, so the graph cross-references instead of duplicating. */
const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Home page graph: who this is, and what site you are looking at.
 *
 * `knowsAbout` and `alumniOf` come from the rendered page rather than being
 * restated here — structured data that drifts from the visible copy is worse
 * than none at all.
 */
export function HomeStructuredData({
  knowsAbout,
  credential,
  institution,
}: {
  knowsAbout: string[];
  credential: string;
  institution: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": PERSON_ID,
            name: SITE_AUTHOR,
            jobTitle: SITE_JOB_TITLE,
            description: SITE_DESCRIPTION,
            url: canonical("/"),
            email: `mailto:${SITE_EMAIL}`,
            image: `${SITE_URL}/favicon.png`,
            knowsAbout,
            alumniOf: {
              "@type": "EducationalOrganization",
              name: institution,
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              name: credential,
              educationalLevel: "Diploma",
              recognizedBy: {
                "@type": "EducationalOrganization",
                name: institution,
              },
            },
          },
          {
            "@type": "WebSite",
            "@id": SITE_ID,
            url: canonical("/"),
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            inLanguage: "en-CA",
            publisher: { "@id": PERSON_ID },
          },
          {
            "@type": "ProfilePage",
            url: canonical("/"),
            name: SITE_TITLE,
            description: SITE_DESCRIPTION,
            isPartOf: { "@id": SITE_ID },
            about: { "@id": PERSON_ID },
            mainEntity: { "@id": PERSON_ID },
          },
        ],
      }}
    />
  );
}

/**
 * Case study graph.
 *
 * The work itself is a `WebSite` (the thing that was built and is live at
 * project.url); the page about it is a `CreativeWork` authored by Dieter. The
 * `BreadcrumbList` is what turns the raw URL in a result into a
 * `dieterlunn.ca › Work › <name>` trail.
 */
export function ProjectStructuredData({ project }: { project: Project }) {
  const url = canonical(`/work/${project.slug}`);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CreativeWork",
            "@id": `${url}#case-study`,
            url,
            name: `${project.name} — ${SITE_NAME}`,
            headline: project.name,
            description: project.summary,
            abstract: project.description,
            image: `${SITE_URL}${project.ogImage}`,
            inLanguage: "en-CA",
            isPartOf: { "@id": SITE_ID },
            author: { "@id": PERSON_ID },
            creator: { "@id": PERSON_ID },
            keywords: project.stack.join(", "),
            about: {
              "@type": "WebSite",
              name: project.name,
              url: project.url,
              description: project.summary,
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: canonical("/"),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Work",
                item: `${canonical("/")}#work`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.name,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  );
}
