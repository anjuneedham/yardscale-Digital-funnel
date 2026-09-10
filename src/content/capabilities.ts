/**
 * What YardScale can build. These are capabilities, not packages.
 * Add or edit entries here — the homepage grid and /what-we-build page both read this file.
 */

export type Capability = {
  id: string;
  name: string;
  /** One-line summary used on the homepage grid. */
  summary: string;
  /** Longer answers used on /what-we-build. */
  whatItIs: string;
  whoNeedsIt: string;
  problemItSolves: string;
  couldInclude: string[];
};

export const capabilities: Capability[] = [
  {
    id: "websites",
    name: "Websites",
    summary: "Websites designed to guide visitors toward action.",
    whatItIs:
      "A website built as a conversion path rather than a set of pages. Structure, copy hierarchy, and calls to action are designed around the decision a visitor has to make.",
    whoNeedsIt:
      "Businesses whose site is the main destination for social traffic, referrals, or search — and whose current site describes the company without moving anyone forward.",
    problemItSolves:
      "Attention lands and dissipates. A site that presents information leaves the visitor to work out their own next step, and most will not.",
    couldInclude: [
      "Conversion-led information architecture",
      "Offer and messaging hierarchy",
      "Primary and secondary conversion paths",
      "Lead capture and routing",
      "Analytics and attribution wiring",
    ],
  },
  {
    id: "funnels",
    name: "Funnels",
    summary: "Lead generation, sales, application, and conversion funnels.",
    whatItIs:
      "A defined sequence that takes someone from first contact to a qualified conversation or purchase, with a specific job at every step.",
    whoNeedsIt:
      "Anyone running traffic — paid, organic, or content — into a destination that was not built for that traffic.",
    problemItSolves:
      "Traffic arrives at a general-purpose page, gets no specific next step, and leaves. A funnel replaces that with a sequence you can measure and improve.",
    couldInclude: [
      "Entry points built per traffic source",
      "Lead capture and delivery",
      "Qualification logic",
      "Follow-up and nurture structure",
      "Application or booking flow",
    ],
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    summary: "Focused pages designed around a specific action.",
    whatItIs:
      "A single page with one job: convert a defined audience, arriving from a defined source, into one defined action.",
    whoNeedsIt:
      "Creators and businesses sending campaign, ad, or content traffic that deserves a purpose-built destination.",
    problemItSolves:
      "Sending targeted traffic to an untargeted page wastes the specificity that made the traffic valuable.",
    couldInclude: [
      "Single-action page architecture",
      "Message match to the traffic source",
      "Proof and objection handling",
      "Capture form and confirmation flow",
      "Variant structure for testing",
    ],
  },
  {
    id: "high-ticket-offers",
    name: "High-Ticket Offer Systems",
    summary:
      "Infrastructure around high-value services, coaching, consulting, and education.",
    whatItIs:
      "The positioning, application flow, and conversion path that make a high-value offer buyable without a manual sales process for every prospect.",
    whoNeedsIt:
      "Consultants, agencies, coaches, and expert operators selling outcomes rather than deliverables.",
    problemItSolves:
      "Expertise that is real but unpackaged, priced inconsistently, and sold one improvised conversation at a time.",
    couldInclude: [
      "Offer architecture and positioning",
      "Application and qualification funnel",
      "Sales-call booking infrastructure",
      "Pre-call education and framing",
      "Proposal and follow-up structure",
    ],
  },
  {
    id: "courses-education",
    name: "Courses & Education",
    summary: "Digital education experiences and supporting infrastructure.",
    whatItIs:
      "A structured learning product plus everything around it — the platform that hosts it, the page that sells it, and the path that leads people to it.",
    whoNeedsIt:
      "Educators, operators and creators whose knowledge is repeatable and currently delivered live, one person at a time.",
    problemItSolves:
      "Teaching does not scale until it is structured, hosted, and sold through a repeatable path.",
    couldInclude: [
      "Education platform or course hosting",
      "Curriculum and progression structure",
      "Sales page and checkout",
      "Free-value to paid-product path",
      "Community or cohort infrastructure",
    ],
  },
  {
    id: "creator-monetization",
    name: "Creator Monetization",
    summary:
      "Systems that help creators turn attention and expertise into revenue opportunities.",
    whatItIs:
      "An owned destination and offer structure that sits underneath content, so audience growth compounds into something you control.",
    whoNeedsIt:
      "Creators with real distribution and no owned asset — no email list, no destination, nothing to buy.",
    problemItSolves:
      "Attention on a rented platform disappears. Without capture and an offer, growth does not accumulate.",
    couldInclude: [
      "Creator website and destination",
      "Lead magnet and capture funnel",
      "Email infrastructure",
      "High-ticket or product offer system",
      "Content-to-conversion routing",
    ],
  },
  {
    id: "digital-products",
    name: "Digital Products",
    summary: "Custom digital experiences built around a specific business problem.",
    whatItIs:
      "Software or a structured digital experience that delivers the outcome directly, rather than describing it.",
    whoNeedsIt:
      "Businesses where the value is in a process, a tool, or an experience — not in a service delivered by hand.",
    problemItSolves:
      "A manual process that works but cannot scale, or a value proposition that only becomes real once someone uses something.",
    couldInclude: [
      "Product definition and scoping",
      "Web application build",
      "Customer portal or dashboard",
      "Payment and access infrastructure",
      "Onboarding and retention flow",
    ],
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    summary: "Mobile applications when an app is the right solution.",
    whatItIs:
      "A native or cross-platform mobile application, built when mobile context, frequency of use, or device capability genuinely changes the outcome.",
    whoNeedsIt:
      "Businesses with a validated process, repeat usage, and a clear reason the experience has to live on a phone.",
    problemItSolves:
      "Some products need to be present in someone's pocket. Most do not — so the first question is whether an app is the right answer at all.",
    couldInclude: [
      "Product and platform definition",
      "Cross-platform or native build",
      "Account and payment infrastructure",
      "Release and store setup",
      "Analytics and retention instrumentation",
    ],
  },
  {
    id: "custom-growth-systems",
    name: "Custom Growth Systems",
    summary: "A combination of the above when the business requires something unique.",
    whatItIs:
      "A system assembled from whatever the business actually needs — often a website, an offer, a funnel and a product working as one connected path.",
    whoNeedsIt:
      "Businesses whose bottleneck does not sit inside a single deliverable.",
    problemItSolves:
      "Buying one component at a time produces disconnected parts. The growth system is the connection between them.",
    couldInclude: [
      "Growth architecture across the whole journey",
      "Multiple connected builds",
      "Data and attribution across the system",
      "Sequenced delivery by priority",
      "Ongoing iteration against results",
    ],
  },
];

export const capabilityById = (id: string) => capabilities.find((c) => c.id === id);
