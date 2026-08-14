import Link from "next/link";

type NavLink = { href: string; label: string };

const homeLinks: NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#toolkit", label: "Toolkit" },
];

/**
 * Difference-blending only stays neutral over a neutral ground; against the
 * ink navy it inverts to mustard. A translucent ink bar reads the same over
 * every section instead.
 */
export function SiteNav({ links = homeLinks }: { links?: NavLink[] }) {
  return (
    <nav className="on-ink fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-5 bg-ink/85 backdrop-blur-md border-b border-ink-line">
      <Link
        href="/"
        className="type-label text-on-ink hover:text-accent-on-ink transition-colors"
      >
        DL
      </Link>
      <div className="flex gap-5 sm:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="type-label text-on-ink-muted hover:text-on-ink transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="on-ink px-6 sm:px-8 py-8 bg-ink border-t border-ink-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <span className="type-label text-on-ink-muted">
          © {new Date().getFullYear()} Dieter Lunn
        </span>
        <a
          href="mailto:work@dieterlunn.ca"
          className="type-label text-on-ink-muted hover:text-accent-on-ink transition-colors"
        >
          work@dieterlunn.ca
        </a>
      </div>
    </footer>
  );
}

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7H12M12 7L8 3M12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
