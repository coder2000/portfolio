export type Capability = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  /** Domain shown to the visitor, without the protocol. */
  host: string;
  sector: string;
  /** One line, used as the case-study lead. */
  summary: string;
  /** Card copy on the home page. */
  description: string;
  /** Who the client is and what the situation was. */
  context: string;
  /** The one genuinely difficult constraint in the project. */
  challenge: string;
  capabilities: Capability[];
  screenshot: string;
  /**
   * What the screenshot actually shows. "<name> screenshot" describes the
   * file rather than the image, which leaves a screen reader user with
   * nothing and wastes the only text a crawler can read off the picture.
   */
  screenshotAlt: string;
  /** 1200x630 social card, letterboxed onto ink. See public/og/. */
  ogImage: string;
  stack: string[];
};

const hotwireStack = ["Rails 8", "Tailwind", "Turbo", "Stimulus"];

export const projects: Project[] = [
  {
    slug: "zeiss-points",
    name: "Zeiss Points",
    url: "https://zeisspoints.com",
    host: "zeisspoints.com",
    sector: "Sports optics · Dealer loyalty",
    summary:
      "A dealer loyalty portal where the point ledger has to balance across two countries.",
    description:
      "A private dealer portal for ZEISS Sports Optics and Photo sales reps across two countries. Reps submit sales to earn points, admins approve them, and the platform maintains a verified point balance ledger — handling different point values per country without ever letting the books go out of sync.",
    context:
      "ZEISS Sports Optics and Photo sell through a network of authorized dealers, and the sales reps at those dealers earn points on qualifying sales. A program like that needs a system of record the reps can reach directly — somewhere to submit a sale, see it approved, and trust the balance that comes back.",
    challenge:
      "Point values differ by country, so the same sale is worth a different amount depending on where it happened. Every balance is the running sum of approved submissions, and a loyalty program stops working the moment a rep suspects the number is wrong. The books can never drift.",
    capabilities: [
      {
        title: "Sales submission",
        body: "Reps submit a sale against their dealer. The submission carries the country it came from, which determines the point value applied to it.",
      },
      {
        title: "Admin approval",
        body: "No points move until an admin approves the submission. Everything waiting sits in one review queue rather than in an inbox.",
      },
      {
        title: "Verified balance ledger",
        body: "Balances are derived from approved entries rather than stored as a number that gets edited, so the ledger reconciles by construction instead of by audit.",
      },
      {
        title: "Two countries, one platform",
        body: "Point values and reporting are scoped per country while reps, dealers, and admins all work in the same system.",
      },
    ],
    screenshot: "/screenshots/zeisspoints.png",
    screenshotAlt:
      "The Zeiss Points sign-in page: a hunter sighting through a ZEISS riflescope, with a dealer store finder and login form set over the photograph.",
    ogImage: "/og/zeisspoints.png",
    stack: hotwireStack,
  },
  {
    slug: "school-bus-hero",
    name: "School Bus Hero",
    url: "https://schoolbushero.com",
    host: "schoolbushero.com",
    sector: "Transportation · Job board",
    summary:
      "A job board narrow enough that a driver's actual role shows up in the results.",
    description:
      "A niche job board built specifically for the school bus industry. Drivers find employers who are actually hiring for their role — not buried under generic listings — while districts get applicants who already know what the job is. The platform handles job postings, driver profiles, and employer alerts when credentials are nearing expiry.",
    context:
      "On a general job board, school transportation roles are buried. Drivers scroll past listings that don't apply to them, and districts field applications from people who don't know what the job involves. Narrowing the board to one industry fixes both ends of that at once.",
    challenge:
      "Driver hiring runs on credentials, not job titles. Endorsements, medical cards, and clearances decide whether someone can legally be hired — and they expire. A board that only matches on role misses the thing the hiring decision actually turns on.",
    capabilities: [
      {
        title: "Role-scoped postings",
        body: "Districts and contractors post by role and location, so a listing reaches drivers who can actually take the job.",
      },
      {
        title: "Driver profiles",
        body: "Applicants record the endorsements and clearances they hold, which gives employers something to filter on beyond a résumé.",
      },
      {
        title: "Credential expiry alerts",
        body: "Employers are notified as a driver's credentials approach expiry, so a lapse surfaces before it becomes a staffing problem.",
      },
    ],
    screenshot: "/screenshots/schoolbushero.png",
    screenshotAlt:
      "The School Bus Hero home page: a student stepping off a bus past a smiling driver, headlined \u201cDrive your community forward\u201d above a job search button.",
    ogImage: "/og/schoolbushero.png",
    stack: hotwireStack,
  },
  {
    slug: "jacks-view",
    name: "Jack's View",
    url: "https://jacksview.com",
    host: "jacksview.com",
    sector: "Home services · AI assistant",
    summary:
      "A home's full maintenance history, and an assistant that can answer questions about it.",
    description:
      "A home documentation app with an AI assistant named after a Sicilian master craftsman. Homeowners log repairs, store documents, and track equipment — then ask Jack anything about their home's history. Jack also keeps an eye on aging systems and seasonal maintenance, so nothing quietly falls through the cracks.",
    context:
      "A house accumulates a decade of repair records, manuals, warranties, and equipment details, usually in a drawer. The value of all that paper only appears at the moment you need to remember what was done, when, and by whom — which is exactly when it's hardest to find.",
    challenge:
      "A pile of documents is not a memory. The records have to be structured enough that an assistant can answer a plain question like when the furnace was last serviced, and the system has to raise aging equipment on its own — because the homeowner who forgot about the water heater is not going to think to ask about it.",
    capabilities: [
      {
        title: "Repair log",
        body: "Every repair is recorded against the home, building a history that stays useful years later.",
      },
      {
        title: "Document storage",
        body: "Manuals, warranties, and receipts are stored with the equipment they belong to rather than in a folder by date.",
      },
      {
        title: "Equipment tracking",
        body: "Systems are tracked with their age and service history, which is what makes proactive reminders possible.",
      },
      {
        title: "Ask Jack",
        body: "An assistant, named after a Sicilian master craftsman, that answers questions against the home's own records — and flags aging systems and seasonal maintenance before they become emergencies.",
      },
    ],
    screenshot: "/screenshots/jacksview.png",
    screenshotAlt:
      "The Jack\u2019s View home page: a family greeting grandparents at the front door, with the line \u201cYour home holds a story. Jack helps you care for it.\u201d",
    ogImage: "/og/jacksview.png",
    stack: hotwireStack,
  },
  {
    slug: "chicagos-pulse",
    name: "Chicago's Pulse",
    url: "https://chicagospulse.com",
    host: "chicagospulse.com",
    sector: "Medical training · Booking",
    summary:
      "Class booking built around how working paramedics actually plan a month.",
    description:
      "A booking platform for an AHA-authorized CPR and first aid training center staffed by active paramedics and ER nurses. Students pick from a monthly class schedule with fixed capacity, book their spot, and pay — all online. The scheduling system is built around how the instructors actually plan their month.",
    context:
      "An AHA-authorized CPR and first aid training center, staffed by paramedics and ER nurses who are still working clinically. The class schedule is set by when those instructors are free, and students need to book and pay without a phone call in the middle of someone's shift.",
    challenge:
      "Generic booking tools assume open availability and let anyone pick a time. This is the opposite: the month is planned in advance as a fixed set of sessions, each with a hard seat count. A class is a room with a capacity, not a slot on a calendar, and the software had to model it that way.",
    capabilities: [
      {
        title: "Monthly class schedule",
        body: "Instructors publish the month as a fixed set of sessions, matching how they actually plan around clinical work.",
      },
      {
        title: "Capacity-limited booking",
        body: "Each class carries a seat count, and booking is constrained by it — no overselling a room.",
      },
      {
        title: "Online payment",
        body: "Students book and pay in one pass, so registration doesn't depend on someone answering the phone.",
      },
    ],
    screenshot: "/screenshots/chicagospulse.png",
    screenshotAlt:
      "The Chicago\u2019s Pulse home page: American Heart Association training-center branding above a headline offering AHA-certified CPR, BLS, ACLS and PALS training in Chicago.",
    ogImage: "/og/chicagospulse.png",
    stack: hotwireStack,
  },
  {
    slug: "fishing-creek-transportation",
    name: "Fishing Creek Transportation",
    url: "https://fishingcreektrans.com",
    host: "fishingcreektrans.com",
    sector: "Transportation · Hiring & ops",
    summary:
      "Driver hiring and fleet operations for a bus company that has run since 1959.",
    description:
      "The driver hiring and operations platform for a family-owned school bus company that has served Columbia and Montour counties since 1959. Applicants find openings by area and apply online, then move through a guided onboarding workflow — credentials, documents, and training videos tracked to completion — while staff run the fleet, districts, and referrals from an admin dashboard.",
    context:
      "A family-owned school bus company serving Columbia and Montour counties since 1959. Hiring a driver means moving someone from an application through credentials, paperwork, and training before they can carry a single student — and the office needs to see where every applicant stands without opening a filing cabinet.",
    challenge:
      "Onboarding a driver is a sequence with a completion state, not a folder. Credentials collected, documents signed, training videos watched — each step either is or isn't done, and staff have to be able to see which. A stack of paper can look full and still be missing the one thing that matters.",
    capabilities: [
      {
        title: "Openings by area",
        body: "Applicants find postings near them rather than reading through every route the company runs.",
      },
      {
        title: "Online application",
        body: "Applying happens on the site, which starts the record the rest of onboarding hangs off.",
      },
      {
        title: "Guided onboarding",
        body: "Credentials, documents, and training videos are tracked to completion, so a driver's readiness is a state the system knows rather than a judgment call.",
      },
      {
        title: "Operations dashboard",
        body: "Staff run the fleet, the districts they serve, and driver referrals from one admin view.",
      },
    ],
    screenshot: "/screenshots/fishingcreektrans.png",
    screenshotAlt:
      "The Fishing Creek Transportation home page: a driver welcoming students aboard, headlined \u201cSafe, reliable rides for every student we carry,\u201d above counters for 65+ years, 4,000+ students, and 3 depots.",
    ogImage: "/og/fishingcreektrans.png",
    stack: ["Rails 8", "Inertia", "React", "Tailwind"],
  },
  {
    slug: "famli",
    name: "Famli",
    url: "https://famli.app",
    host: "famli.app",
    sector: "Family sharing \u00b7 Own product",
    summary:
      "Private family sharing, paid for by the families in it rather than by what\u2019s in their photos.",
    description:
      "My own product, live and taking subscriptions. A private, invite-only place for a family to share photos, video, and the small moments in between \u2014 no ads, no ranked feed, no strangers. Albums are visible only to the family invited to them, video is transcoded properly instead of crushed, and face grouping pulls one child\u2019s whole life out of a decade of uploads. Shipped in English, Canadian French, and Spanish.",
    context:
      "Somewhere to put photographs of your children is the one thing every free platform is happy to provide, and the photograph is the price. It becomes an ad segment, a ranking signal, or training data, and the family that shared it has no say in which. Famli is my own product, built and run on the opposite arrangement: the family pays, and the photos stay photos.",
    challenge:
      "Turning down that revenue means the family has to be the customer, and a subscription is a far smaller number than an ad network. Every feature has to survive that arithmetic. Transcoded video, face grouping, and a decade of full-resolution originals are costs that compound with each upload, while the monthly price stays exactly where it was \u2014 so the storage bill grows forever and the revenue per family does not. That constraint decides what ships.",
    capabilities: [
      {
        title: "Invite-only albums",
        body: "A family reaches an album because someone invited them to it, and visibility is scoped per album rather than broadcast to everyone in the account.",
      },
      {
        title: "Video that survives the upload",
        body: "Clips are transcoded rather than recompressed into mush \u2014 the single clearest example of a feature the subscription pays for instead of an advertiser.",
      },
      {
        title: "Face grouping",
        body: "Photos are grouped by who is in them, so one child\u2019s whole life comes back as a set rather than as ten years of scrolling.",
      },
      {
        title: "Family tree and timelines",
        body: "Relationships are recorded as a tree, and each member has a timeline \u2014 which is what makes the archive navigable by person rather than only by date.",
      },
    ],
    screenshot: "/screenshots/famli.png",
    screenshotAlt:
      "The Famli home page: an \u201cInvite-only \u00b7 Private by design\u201d badge above the headline \u201cThe private space your family deserves,\u201d beside a column of family posts \u2014 a first day of school, a 70th birthday dinner, grandma\u2019s apple pie.",
    ogImage: "/og/famli.png",
    stack: ["Rails 8", "Inertia", "React", "Tailwind"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The next project in the list, wrapping around, for end-of-page navigation. */
export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
