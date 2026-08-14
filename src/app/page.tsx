import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  SiteFooter,
  SiteNav,
} from "@/components/site-chrome";
import { HomeStructuredData } from "@/components/structured-data";
import { projects } from "@/data/projects";

// Grouped rather than piled: the grouping is the information. A visitor
// scanning for "can he do mobile?" should find the answer without reading 22
// tags in sequence.
const skillGroups = [
  {
    label: "Backend",
    items: [
      "Ruby",
      "Rails 8",
      "Hotwire",
      "Turbo",
      "Stimulus",
      "PostgreSQL",
      "RSpec",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native", "Swift", "iOS", "Kotlin", "Android", "Java"],
  },
  { label: "Platform", items: ["Docker", "GitHub Actions", "Git"] },
];

const skillCount = skillGroups.reduce((n, g) => n + g.items.length, 0);

const education = {
  credential: "Diploma, Information Systems Technology",
  institution: "Red River College",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeStructuredData
        knowsAbout={skillGroups.flatMap((group) => group.items)}
        credential={education.credential}
        institution={education.institution}
      />
      <SiteNav />

      {/* Hero */}
      <section
        id="top"
        className="on-ink relative flex flex-col justify-end bg-ink min-h-screen px-6 sm:px-8 pb-20 pt-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <p className="type-label text-accent-on-ink mb-8">
            Software Developer
          </p>
          <h1 className="type-hero text-on-ink mb-12">
            Dieter
            <br />
            Lunn
          </h1>
          <div className="flex items-end justify-between flex-wrap gap-6 border-t border-ink-line pt-8">
            <p className="text-on-ink-muted text-lg max-w-sm leading-relaxed">
              Building products that are fast, useful, and built to last.
            </p>
            <a
              href="#work"
              className="type-label text-on-ink-muted hover:text-on-ink transition-colors flex items-center gap-2"
            >
              See my work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 3L8 13M8 13L13 8M8 13L3 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 sm:px-8 py-24 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex items-baseline justify-between gap-6 border-b border-rule pb-6 mb-16">
            <h2 className="type-section text-on-paper">Work</h2>
            <span className="type-label text-on-paper-muted shrink-0">
              {projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              // Links to the case study, not the live site: an outbound link
              // here loses the visitor on the first click.
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="reveal group flex flex-col bg-card rounded-2xl overflow-hidden border border-rule hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-paper overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <p className="type-label text-accent mb-2">
                    {project.sector}
                  </p>
                  <h3 className="type-card-title text-on-paper mb-2">
                    {project.name}
                  </h3>
                  <p className="text-on-paper-muted text-sm leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Pinned to the bottom so the row of cards lines up
                      regardless of how long the summary runs. */}
                  <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-rule">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="type-label text-on-paper-muted bg-paper border border-rule px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="type-label shrink-0 text-on-paper-muted group-hover:text-accent transition-colors flex items-center gap-1.5">
                      Case study
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit + Education — reference material, one band, quieter scale. */}
      <section id="toolkit" className="px-6 sm:px-8 py-20 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
            <div className="reveal">
              <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 mb-8">
                <h2 className="type-subsection text-on-paper">Toolkit</h2>
                <span className="type-label text-on-paper-muted shrink-0">
                  {skillCount} technologies
                </span>
              </div>

              <dl className="flex flex-col gap-6">
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-2 sm:gap-4"
                  >
                    <dt className="type-label text-on-paper-muted sm:pt-2">
                      {group.label}
                    </dt>
                    <dd className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm text-on-paper bg-card border border-rule px-3 py-1.5 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal">
              <div className="border-b border-rule pb-4 mb-8">
                <h2 className="type-subsection text-on-paper">Education</h2>
              </div>
              <p className="text-on-paper font-medium text-base leading-snug mb-1">
                {education.credential}
              </p>
              <p className="text-on-paper-muted text-sm">
                {education.institution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="on-ink px-6 sm:px-8 py-24 bg-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="reveal type-section text-on-ink">About</h2>
            <div className="reveal flex flex-col justify-center gap-6">
              <p className="text-on-ink text-lg leading-relaxed">
                I&apos;m Dieter Lunn, a software developer with a focus on
                building clean, reliable products. I work across the stack —
                from product design to deployment.
              </p>
              <p className="text-on-ink-muted text-base leading-relaxed">
                Whether it&apos;s a dealer loyalty platform for a global optics
                brand, a hiring and onboarding system for a school bus company,
                or a booking site for a first aid training center, I bring the
                same care and precision to every project.
              </p>
              <a
                href="mailto:work@dieterlunn.ca"
                className="type-label inline-flex items-center gap-2 text-on-ink border-b border-ink-line pb-1 w-fit hover:border-accent-on-ink hover:text-accent-on-ink transition-colors"
              >
                Get in touch
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
