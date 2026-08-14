import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SiteFooter, SiteNav } from "@/components/site-chrome";
import { projects } from "@/data/projects";

// A 404 should never be indexed, whatever the root metadata says.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * Rendered for any unmatched path, including work slugs that are not in the
 * project list (`dynamicParams = false` sends those here).
 *
 * The project links matter more than the apology: someone who landed on a
 * stale URL is one click from the thing they were looking for, rather than
 * being asked to navigate home and start again.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="on-ink bg-ink flex-1 flex items-center px-6 sm:px-8 pt-36 pb-24">
        <div className="max-w-5xl mx-auto w-full">
          <p className="type-label text-accent-on-ink mb-6">Error 404</p>
          <h1 className="type-section text-on-ink mb-6">
            This page doesn&apos;t exist
          </h1>
          <p className="text-on-ink-muted text-lg leading-relaxed max-w-md">
            The link may be out of date, or the address mistyped. The work is
            all still here.
          </p>

          <div className="mt-14 border-t border-ink-line pt-8">
            <p className="type-label text-on-ink-muted mb-6">Case studies</p>
            <ul className="flex flex-col">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex items-baseline justify-between gap-6 flex-wrap border-b border-ink-line py-4"
                  >
                    <span className="type-card-title text-on-ink group-hover:text-accent-on-ink transition-colors">
                      {project.name}
                    </span>
                    <span className="type-label text-on-ink-muted group-hover:text-accent-on-ink transition-colors flex items-center gap-2">
                      {project.sector}
                      <ArrowRight />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="type-label mt-10 inline-flex items-center gap-2 text-on-ink border-b border-ink-line pb-1 hover:text-accent-on-ink hover:border-accent-on-ink transition-colors"
          >
            Back to the home page
            <ArrowRight />
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
