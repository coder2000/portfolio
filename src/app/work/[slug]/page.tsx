import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  SiteFooter,
  SiteNav,
} from "@/components/site-chrome";
import { ProjectStructuredData } from "@/components/structured-data";
import { getNextProject, getProject, projects } from "@/data/projects";
import { SITE_NAME, canonical } from "@/data/site";

// Static export: every path is known at build time, so an unlisted slug is a
// 404 rather than an on-demand render.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = canonical(`/work/${project.slug}`);
  // The layout's title template appends " — Dieter Lunn"; OG and Twitter want
  // the full string, since they are read outside the site.
  const fullTitle = `${project.name} — ${SITE_NAME}`;
  const image = {
    url: project.ogImage,
    width: 1200,
    height: 630,
    alt: `${project.name} — ${project.sector}`,
  };

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      // Not `article`: these case studies carry no publish date, and an
      // article without one is a card with a hole in it.
      type: "website",
      url,
      title: fullTitle,
      description: project.summary,
      siteName: SITE_NAME,
      locale: "en_CA",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: project.summary,
      images: [image],
    },
  };
}

const navLinks = [
  { href: "/#work", label: "All work" },
  { href: "/#about", label: "About" },
];

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <div className="min-h-screen">
      <ProjectStructuredData project={project} />
      <SiteNav links={navLinks} />

      {/* Header */}
      <header className="on-ink bg-ink px-6 sm:px-8 pt-36 pb-16">
        <div className="max-w-5xl mx-auto">
          <p className="type-label text-accent-on-ink mb-6">{project.sector}</p>
          <h1 className="type-section text-on-ink mb-6">{project.name}</h1>
          <p className="text-on-ink text-xl leading-relaxed max-w-2xl">
            {project.summary}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label mt-10 inline-flex items-center gap-2 text-on-ink border-b border-ink-line pb-1 hover:text-accent-on-ink hover:border-accent-on-ink transition-colors"
          >
            Visit {project.host}
            <ArrowUpRight />
          </a>
        </div>
      </header>

      {/* Screenshot */}
      <div className="bg-paper px-6 sm:px-8 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="reveal relative aspect-video rounded-2xl overflow-hidden border border-rule bg-card">
            <Image
              src={project.screenshot}
              alt={`${project.name} home page`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </div>

      {/* Narrative */}
      <article className="bg-paper px-6 sm:px-8 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-12 lg:gap-16">
          {/* Facts rail */}
          <aside className="reveal lg:sticky lg:top-28 lg:self-start">
            <dl className="flex flex-col gap-6">
              <div>
                <dt className="type-label text-on-paper-muted mb-2">Sector</dt>
                <dd className="text-on-paper text-sm">{project.sector}</dd>
              </div>
              <div>
                <dt className="type-label text-on-paper-muted mb-2">Stack</dt>
                <dd className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="type-label text-on-paper-muted bg-card border border-rule px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="type-label text-on-paper-muted mb-2">Live</dt>
                <dd>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                  >
                    {project.host}
                    <ArrowUpRight size={12} />
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <div className="max-w-2xl">
            <section className="reveal">
              <h2 className="type-label text-on-paper-muted border-b border-rule pb-3 mb-6">
                The situation
              </h2>
              <p className="text-on-paper text-lg leading-relaxed">
                {project.context}
              </p>
            </section>

            {/* The one genuinely difficult constraint — the reason this is a
                case study and not a blurb. */}
            <section className="reveal mt-14 border-l-2 border-accent pl-6">
              <h2 className="type-label text-accent mb-4">The hard part</h2>
              <p className="text-on-paper text-lg leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section className="reveal mt-14">
              <h2 className="type-label text-on-paper-muted border-b border-rule pb-3 mb-2">
                What I built
              </h2>
              <dl>
                {project.capabilities.map((capability) => (
                  <div
                    key={capability.title}
                    className="border-b border-rule py-6"
                  >
                    <dt className="type-card-title text-on-paper mb-2">
                      {capability.title}
                    </dt>
                    <dd className="text-on-paper-muted leading-relaxed">
                      {capability.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </article>

      {/* Next project */}
      <section className="on-ink bg-ink px-6 sm:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <Link href={`/work/${next.slug}`} className="reveal group block">
            <p className="type-label text-on-ink-muted mb-4">Next project</p>
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="type-subsection text-on-ink group-hover:text-accent-on-ink transition-colors">
                {next.name}
              </h2>
              <span className="type-label text-on-ink-muted group-hover:text-accent-on-ink transition-colors flex items-center gap-2">
                {next.sector}
                <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
