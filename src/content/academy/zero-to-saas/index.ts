import type { Course } from "../types";
import { module0, module1, module2, module3 } from "./modules-0-3";
import { module4, module5, module6, module7 } from "./modules-4-7";
import { module8, module9, module10, module11, module12 } from "./modules-8-12";

/**
 * Zero to SaaS: The Founder Operating System — the flagship course.
 *
 * TO EDIT A LESSON: open the modules-*.ts file that holds it and change the
 * text. TO ADD A LESSON: add an object to that module's `lessons` array.
 * TO MARK A MODULE AS REVIEWED: set `reviewed: true` — the "working draft"
 * note disappears. TO OPEN A MODULE TO EVERYONE: set `access: "open"`.
 */
export const zeroToSaas: Course = {
  slug: "zero-to-saas",
  title: "Zero to SaaS",
  subtitle: "The Founder Operating System",
  description:
    "A text-based course that takes a SaaS idea from nothing to a launched product with customers. Thirteen modules follow the seven stages in order: idea, validation, planning, building, launch, customers, growth.",
  status: "live",
  format: "Text lessons with exercises, templates, checklists and an implementation assignment in every lesson.",
  audience: [
    "First-time founders with a SaaS idea and no clear starting point.",
    "Builders who can make things with AI tools but have not launched or sold one.",
    "People from sales, marketing or a trade who understand a customer and want to build for them.",
  ],
  outcomes: [
    "A validated problem and a written customer profile.",
    "An MVP scope and spec small enough to actually ship.",
    "A repeatable way of building with AI tools without losing control of the product.",
    "A beta, a first price and a positioning statement.",
    "A process for finding first customers and keeping them.",
    "A weekly operating rhythm you keep after the course ends.",
  ],
  price: "",
  modules: [
    module0,
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
    module7,
    module8,
    module9,
    module10,
    module11,
    module12,
  ],
};
