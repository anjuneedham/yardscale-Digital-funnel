import type { Course, CourseModule } from "./types";
import { zeroToSaas } from "./zero-to-saas";
import { course as growthOperator } from "@/content/growth-system/course";
import { phases } from "@/content/growth-system/phases";

/**
 * The Academy course registry. Add a course here and it appears in the
 * catalogue with its own course page and lesson pages.
 */

/** The existing Growth Operator System keeps its own member area at /growth-system. */
const growthOperatorSystem: Course = {
  slug: "growth-operator-system",
  title: growthOperator.name,
  subtitle: "Diagnose and relieve growth constraints",
  description:
    "The follow-on course for founders who have a product and customers and want growth that compounds. Nine phases: diagnose, position, build, distribute, convert, prove, acquire, operate, scale.",
  status: "live",
  format: `${phases.length} phases with lessons, exercises and an asset to build in each.`,
  audience: [],
  outcomes: [],
  modules: [],
  price: "",
  externalHref: growthOperator.routes.public,
};

export const courses: Course[] = [zeroToSaas, growthOperatorSystem];

/**
 * Planned courses, shown in the catalogue so visitors know what is coming.
 * Add a title and one-line summary only once a course is genuinely planned.
 */
export const plannedCourses: { title: string; summary: string }[] = [];

export const flagship = zeroToSaas;

export const getCourse = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug && !c.externalHref);

export const getModule = (course: Course, slug: string): CourseModule | undefined =>
  course.modules.find((m) => m.slug === slug);

export const courseHref = (course: Course) => course.externalHref ?? `/academy/${course.slug}`;

export const lessonCount = (course: Course) =>
  course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
