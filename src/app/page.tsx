import Image from "next/image";

const stack = ["Rails 8", "Tailwind", "Turbo", "Stimulus"];

const skills = [
  "Ruby",
  "Rails 8",
  "Hotwire",
  "Turbo",
  "Stimulus",
  "PostgreSQL",
  "RSpec",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Tailwind CSS",
  "React Native",
  "Swift",
  "iOS",
  "Kotlin",
  "Android",
  "Java",
  "Docker",
  "GitHub Actions",
  "Git",
];

const education = {
  credential: "Diploma, Information Systems Technology",
  institution: "Red River College",
};

const projects = [
  {
    name: "Zeiss Points",
    url: "https://zeisspoints.com",
    description:
      "A private dealer portal for ZEISS Sports Optics and Photo sales reps across two countries. Reps submit sales to earn points, admins approve them, and the platform maintains a verified point balance ledger — handling different point values per country without ever letting the books go out of sync.",
    screenshot: "/screenshots/zeisspoints.png",
  },
  {
    name: "School Bus Hero",
    url: "https://schoolbushero.com",
    description:
      "A niche job board built specifically for the school bus industry. Drivers find employers who are actually hiring for their role — not buried under generic listings — while districts get applicants who already know what the job is. The platform handles job postings, driver profiles, and employer alerts when credentials are nearing expiry.",
    screenshot: "/screenshots/schoolbushero.png",
  },
  {
    name: "Jack's View",
    url: "https://jacksview.com",
    description:
      "A home documentation app with an AI assistant named after a Sicilian master craftsman. Homeowners log repairs, store documents, and track equipment — then ask Jack anything about their home's history. Jack also keeps an eye on aging systems and seasonal maintenance, so nothing quietly falls through the cracks.",
    screenshot: "/screenshots/jacksview.png",
  },
  {
    name: "Chicago's Pulse",
    url: "https://chicagospulse.com",
    description:
      "A booking platform for an AHA-authorized CPR and first aid training center staffed by active paramedics and ER nurses. Students pick from a monthly class schedule with fixed capacity, book their spot, and pay — all online. The scheduling system is built around how the instructors actually plan their month.",
    screenshot: "/screenshots/chicagospulse.png",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
        <span className="text-white text-sm font-semibold tracking-widest uppercase">
          DL
        </span>
        <div className="flex gap-8">
          <a
            href="#work"
            className="text-white text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
          >
            Work
          </a>
          <a
            href="#skills"
            className="text-white text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-white text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="#education"
            className="text-white text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
          >
            Education
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col justify-end bg-zinc-950 min-h-screen px-8 pb-20 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-8">
            Software Developer
          </p>
          <h1
            className="text-white leading-none tracking-tighter mb-12"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              fontWeight: 900,
            }}
          >
            Dieter
            <br />
            Lunn
          </h1>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
              Building products that are fast, useful, and built to last.
            </p>
            <a
              href="#work"
              className="text-zinc-400 text-sm font-medium tracking-wide hover:text-white transition-colors flex items-center gap-2"
            >
              See my work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="rotate-90"
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
      <section id="work" className="px-8 py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2
              className="text-zinc-950 leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              Work
            </h2>
            <span className="text-zinc-400 text-sm font-medium">
              {projects.length} projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Screenshot */}
                <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-zinc-950 font-bold text-xl mb-1">
                      {project.name}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="shrink-0 mt-1 text-zinc-300 group-hover:text-zinc-950 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5M15 5H7M15 5V13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <h2
              className="text-white leading-none tracking-tighter"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 900,
              }}
            >
              About
            </h2>
            <div className="flex flex-col justify-center gap-6">
              <p className="text-zinc-300 text-lg leading-relaxed">
                I&apos;m Dieter Lunn, a software developer with a focus on
                building clean, reliable products. I work across the stack —
                from product design to deployment.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                Whether it&apos;s a loyalty platform for a global optics brand
                or a first aid training center&apos;s web presence, I bring the
                same care and precision to every project.
              </p>
              <a
                href="mailto:work@dieterlunn.ca"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide border-b border-zinc-700 pb-1 w-fit hover:border-white transition-colors"
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2
              className="text-zinc-950 leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              Skills
            </h2>
            <span className="text-zinc-400 text-sm font-medium">
              {skills.length} technologies
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-medium text-zinc-600 bg-white border border-zinc-200 px-4 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="px-8 py-24 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <h2
              className="text-white leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900 }}
            >
              Education
            </h2>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="text-white font-bold text-xl">
                {education.credential}
              </h3>
              <p className="text-zinc-400 text-base">{education.institution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Dieter Lunn
          </span>
          <span className="text-zinc-700 text-sm">dieterlunn.ca</span>
        </div>
      </footer>
    </div>
  );
}
