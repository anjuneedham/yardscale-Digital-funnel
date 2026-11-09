/**
 * Proof and documentation.
 *
 * IMPORTANT: nothing in this file is invented. Add an entry only when it is
 * real and you are allowed to publish it. Empty lists render honest empty
 * states. There is deliberately no field for user counts or revenue.
 */

/** Products Andrew is building or has built. */
export type Project = {
  slug: string;
  name: string;
  /** One factual sentence: what it is and who it is for. */
  summary: string;
  /** e.g. "In beta", "Live", "In development". */
  stage: string;
  /** Path in /public or full URL to a real screenshot. Empty hides the image. */
  screenshot: string;
  /** Public link, if there is one. */
  href: string;
  /** What was learned building it — written by Andrew. Empty hides the row. */
  lesson: string;
};

export const projects: Project[] = [
  {
    slug: "agriloop",
    name: "AgriLoop",
    summary:
      "A digital agricultural marketplace for Jamaica and the Caribbean, on the web and as an Android app. Farmers list produce; buyers browse, message and order.",
    stage: "Invitation-only beta",
    screenshot: "",
    href: "",
    lesson: "",
  },
];

/** Written case studies. Publish by adding an entry with real content. */
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  date: string;
};

export const caseStudies: CaseStudy[] = [];

/**
 * Testimonials. Add only genuine ones, with the person's permission.
 * `source` should say where it can be verified (e.g. "Coaching client, 2027").
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  source: string;
};

export const testimonials: Testimonial[] = [];
