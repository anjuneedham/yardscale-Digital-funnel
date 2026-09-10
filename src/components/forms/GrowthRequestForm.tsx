"use client";

import { useState } from "react";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { submitToApi } from "@/lib/submit";
import { isEmail, isFilled } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { qualificationQuestions } from "@/content/qualification";

/** Options reused from the qualification flow so both surfaces stay consistent. */
const businessTypes = qualificationQuestions.find((q) => q.id === "businessType")?.options ?? [];
const budgets = qualificationQuestions.find((q) => q.id === "budget")?.options ?? [];

const HEARD_OPTIONS = [
  "YouTube",
  "X",
  "LinkedIn",
  "Instagram",
  "TikTok",
  "Facebook",
  "Search",
  "Referral",
  "Other",
];

type Fields = {
  name: string;
  email: string;
  business: string;
  website: string;
  businessType: string;
  whatYouSell: string;
  whoYouServe: string;
  growthProblem: string;
  tryingToBuild: string;
  triedAlready: string;
  budget: string;
  heardVia: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  business: "",
  website: "",
  businessType: "",
  whatYouSell: "",
  whoYouServe: "",
  growthProblem: "",
  tryingToBuild: "",
  triedAlready: "",
  budget: "",
  heardVia: "",
};

/** The full growth request. Long by design — it replaces a discovery call. */
export function GrowthRequestForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [company, setCompany] = useState(""); // honeypot
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const set = (key: keyof Fields) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFilled(fields.name, 120)) return setError("Please add your name.");
    if (!isEmail(fields.email)) return setError("Please enter a valid email address.");
    if (!isFilled(fields.growthProblem, 2000))
      return setError("Tell us the growth problem — it's the part we work from.");

    setError("");
    setState("sending");

    const result = await submitToApi("/api/growth-request", { ...fields, company });

    if (result.ok) {
      setState("done");
      track("growth_request_submitted", { businessType: fields.businessType });
    } else {
      setState("idle");
      setError(result.message ?? "Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-card border border-signal/40 bg-signal/5 p-8">
        <p className="label-mono text-signal">Received</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
          We&apos;ve got it.
        </h2>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
          We read every request properly rather than replying with a template. Expect a
          response within two business days — it&apos;ll include our read on your
          bottleneck, whether or not we&apos;re the right people to build it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <fieldset className="space-y-4">
        <legend className="label-mono mb-4">About you</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Text label="Name *" value={fields.name} onChange={set("name")} autoComplete="name" required maxLength={120} />
          <Text label="Email *" value={fields.email} onChange={set("email")} type="email" autoComplete="email" required maxLength={254} />
          <Text label="Business" value={fields.business} onChange={set("business")} autoComplete="organization" maxLength={160} />
          <Text label="Website" value={fields.website} onChange={set("website")} placeholder="yoursite.com" maxLength={300} />
        </div>
        <Select
          label="Business type"
          value={fields.businessType}
          onChange={set("businessType")}
          options={businessTypes.map((o) => ({ value: o.value, label: o.label }))}
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="label-mono mb-4">About the business</legend>
        <Textarea label="What do you sell?" value={fields.whatYouSell} onChange={set("whatYouSell")} rows={3} maxLength={600} placeholder="The offer, in the words you'd use out loud." />
        <Textarea label="Who do you serve?" value={fields.whoYouServe} onChange={set("whoYouServe")} rows={3} maxLength={600} placeholder="The more specific the buyer, the more specific the system." />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="label-mono mb-4">The problem</legend>
        <Textarea
          label="What's your biggest growth problem? *"
          value={fields.growthProblem}
          onChange={set("growthProblem")}
          rows={4}
          maxLength={1500}
          required
          placeholder="What's not working, and what it's costing you."
        />
        <Textarea label="What are you trying to build?" value={fields.tryingToBuild} onChange={set("tryingToBuild")} rows={3} maxLength={1000} placeholder="It's fine if the answer is 'I'm not sure yet'." />
        <Textarea label="What have you already tried?" value={fields.triedAlready} onChange={set("triedAlready")} rows={3} maxLength={1000} placeholder="Knowing what failed is usually more useful than knowing what you want." />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="label-mono mb-4">Practicalities</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Budget range"
            value={fields.budget}
            onChange={set("budget")}
            options={budgets.map((o) => ({ value: o.value, label: o.label }))}
          />
          <Select
            label="How did you hear about YardScale?"
            value={fields.heardVia}
            onChange={set("heardVia")}
            options={HEARD_OPTIONS.map((o) => ({ value: o.toLowerCase(), label: o }))}
          />
        </div>
      </fieldset>

      {/* Honeypot */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
      </div>

      <div className="space-y-4 border-t border-line pt-6">
        <CtaButton type="submit" size="lg" className="group w-full sm:w-auto" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Submit growth request"}
          <ArrowGlyph className="group-hover:translate-x-0.5" />
        </CtaButton>

        {error ? (
          <p role="alert" className="text-sm text-warn">
            {error}
          </p>
        ) : null}

        <p className="text-xs leading-relaxed text-faint">
          Fields marked * are required. Everything else helps us give you a more useful
          answer.
        </p>
      </div>
    </form>
  );
}

const FIELD_CLASS =
  "mt-2 w-full rounded-lg border border-line bg-panel/80 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none";

function Text({
  label,
  value,
  onChange,
  ...props
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
} & Omit<React.ComponentProps<"input">, "onChange" | "value">) {
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className={FIELD_CLASS} {...props} />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  ...props
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
} & Omit<React.ComponentProps<"textarea">, "onChange" | "value">) {
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${FIELD_CLASS} resize-y`}
        {...props}
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="text-sm text-ink-soft">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${FIELD_CLASS} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 12 12%22 fill=%22none%22 stroke=%22%237d8b9c%22 stroke-width=%221.4%22><path d=%22M2.5 4.5L6 8l3.5-3.5%22/></svg>')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
