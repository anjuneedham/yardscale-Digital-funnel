import { budgetOptions, stageOptions } from "@/content/coaching";
import { partnershipStageOptions } from "@/content/partnerships";

/**
 * Form definitions, shared by the client form component and the API route.
 * To add, remove or reword a question, edit it here — the form, the server
 * validation, the stored record and the notification email all follow.
 */

export type FormKind = "coaching" | "partnership" | "contact";

export type FormField = {
  key: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  max: number;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  options?: { value: string; label: string }[];
  /** Half-width on larger screens. */
  half?: boolean;
  /** Starts a new visual group with this heading. */
  group?: string;
};

export const FORM_FIELDS: Record<FormKind, FormField[]> = {
  coaching: [
    { key: "name", label: "Name", type: "text", required: true, max: 120, autoComplete: "name", half: true, group: "About you" },
    { key: "email", label: "Email", type: "email", required: true, max: 254, autoComplete: "email", half: true },
    { key: "stage", label: "Current stage", type: "select", required: true, max: 40, options: stageOptions, group: "Your SaaS" },
    {
      key: "product",
      label: "Your SaaS idea or product",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "What it does and who it is for. A link is welcome if there is one.",
    },
    {
      key: "obstacle",
      label: "Your main obstacle right now",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "The thing that is actually stopping progress.",
    },
    {
      key: "help",
      label: "What help do you need?",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "What would make coaching worth it for you.",
    },
    {
      key: "budget",
      label: "Budget or investment readiness",
      type: "select",
      max: 40,
      options: budgetOptions,
      hint: "Optional. It helps Andrew suggest something realistic.",
      group: "Practicalities",
    },
  ],

  partnership: [
    { key: "name", label: "Name", type: "text", required: true, max: 120, autoComplete: "name", half: true, group: "Founder and contact details" },
    { key: "email", label: "Email", type: "email", required: true, max: 254, autoComplete: "email", half: true },
    { key: "phone", label: "Phone or WhatsApp", type: "text", max: 40, autoComplete: "tel", half: true, hint: "Optional." },
    { key: "location", label: "Where you are based", type: "text", max: 120, half: true, hint: "Optional." },
    {
      key: "background",
      label: "About you",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "Your background, and why you are the person to build this.",
    },
    {
      key: "product",
      label: "The product idea",
      type: "textarea",
      required: true,
      max: 2000,
      placeholder: "What it does and the problem it solves.",
      group: "The product",
    },
    {
      key: "audience",
      label: "Target audience",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "Who has this problem, and how you can reach them.",
    },
    { key: "stage", label: "Current development stage", type: "select", required: true, max: 40, options: partnershipStageOptions },
    {
      key: "progress",
      label: "Existing resources and progress",
      type: "textarea",
      required: true,
      max: 2000,
      placeholder: "What exists today: validation, designs, code, users, funding, team, time you can commit.",
    },
    {
      key: "needs",
      label: "What you need from YardScale",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "Strategy, the build, launch, marketing — be specific.",
      group: "The partnership",
    },
    {
      key: "expectations",
      label: "Your partnership expectations",
      type: "textarea",
      required: true,
      max: 1500,
      placeholder: "How you imagine it working: roles, time, and the commercial arrangement you have in mind.",
    },
  ],

  contact: [
    { key: "name", label: "Name", type: "text", required: true, max: 120, autoComplete: "name", half: true },
    { key: "email", label: "Email", type: "email", required: true, max: 254, autoComplete: "email", half: true },
    {
      key: "topic",
      label: "What is this about?",
      type: "select",
      max: 40,
      options: [
        { value: "question", label: "A general question" },
        { value: "academy", label: "The Academy or a course" },
        { value: "community", label: "The community" },
        { value: "media", label: "Media, podcast or collaboration" },
        { value: "other", label: "Something else" },
      ],
    },
    { key: "message", label: "Message", type: "textarea", required: true, max: 3000 },
  ],
};
