/**
 * Selected builds.
 *
 * IMPORTANT: nothing in this file is invented. Add a case study only when the
 * work is real and you are permitted to publish it. Entries with
 * `status: "placeholder"` render as reserved slots and are excluded from
 * structured data and from the /work index count.
 *
 * To publish a case study: set status to "published" and fill every field.
 */

export type CaseStudyStatus = "published" | "placeholder";

export type CaseStudy = {
  slug: string;
  status: CaseStudyStatus;
  /** Client or project name. Leave empty on placeholders. */
  client: string;
  /** The category of build, e.g. "Creator monetization system". */
  discipline: string;
  /** One-line framing of the growth problem. */
  headline: string;
  problem: string;
  approach: string;
  built: string[];
  /**
   * Outcome. Only include measurable claims you can substantiate.
   * Leave empty until there is a real, verifiable outcome to report.
   */
  outcome: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "reserved-01",
    status: "placeholder",
    client: "",
    discipline: "Conversion system",
    headline: "Case study slot reserved.",
    problem: "",
    approach: "",
    built: [],
    outcome: "",
    year: "",
  },
  {
    slug: "reserved-02",
    status: "placeholder",
    client: "",
    discipline: "Lead generation system",
    headline: "Case study slot reserved.",
    problem: "",
    approach: "",
    built: [],
    outcome: "",
    year: "",
  },
  {
    slug: "reserved-03",
    status: "placeholder",
    client: "",
    discipline: "Education platform",
    headline: "Case study slot reserved.",
    problem: "",
    approach: "",
    built: [],
    outcome: "",
    year: "",
  },
];

export const publishedCaseStudies = caseStudies.filter((c) => c.status === "published");
export const placeholderCaseStudies = caseStudies.filter((c) => c.status === "placeholder");
