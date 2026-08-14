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
    ogImage: "/og/fishingcreektrans.png",
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
