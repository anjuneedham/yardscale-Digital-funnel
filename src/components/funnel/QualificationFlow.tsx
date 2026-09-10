"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  qualificationQuestions,
  buildRecommendation,
  type QualificationAnswers,
  type QualificationQuestion,
} from "@/content/qualification";
import { cta, bookingUrl } from "@/content/site";
import { track } from "@/lib/analytics";
import { submitToApi } from "@/lib/submit";
import { isEmail, isFilled } from "@/lib/validation";
import { cn } from "@/lib/cn";
import { CtaButton, CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { FlowDiagram } from "@/components/visuals/FlowDiagram";

type Stage = "questions" | "details" | "result";

/**
 * The qualification experience.
 *
 * Ten questions, then contact details, then a personalised high-level
 * recommendation and the booking step. One question per screen keeps the flow
 * fast on a phone, which is where most of the traffic arrives.
 */
export function QualificationFlow({
  origin,
  seedBottleneck,
  onClose,
}: {
  origin: string;
  seedBottleneck?: string;
  onClose?: () => void;
}) {
  const [stage, setStage] = useState<Stage>("questions");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QualificationAnswers>(() =>
    seedBottleneck ? ({ bottleneck: seedBottleneck } as QualificationAnswers) : {},
  );
  const [contact, setContact] = useState({ name: "", email: "", business: "", website: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<"idle" | "ok" | "error">("idle");

  const question = qualificationQuestions[index];
  const total = qualificationQuestions.length;
  const recommendation = useMemo(() => buildRecommendation(answers), [answers]);

  const answerFor = (id: string) => answers[id];

  const setAnswer = (id: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setError("");
  };

  const canAdvance = (q: QualificationQuestion): boolean => {
    if (!q.required) return true;
    const value = answers[q.id];
    if (Array.isArray(value)) return value.length > 0;
    return isFilled(value, q.maxLength ?? 2000);
  };

  const next = () => {
    if (!canAdvance(question)) {
      setError("This one matters — please answer before continuing.");
      return;
    }
    track("qualification_step_completed", { step: question.id, index: index + 1 });
    if (index + 1 < total) {
      setIndex(index + 1);
    } else {
      setStage("details");
    }
    setError("");
  };

  const back = () => {
    if (stage === "details") {
      setStage("questions");
      setIndex(total - 1);
      return;
    }
    if (index > 0) setIndex(index - 1);
  };

  const submit = async () => {
    if (!isFilled(contact.name, 120)) return setError("Please add your name.");
    if (!isEmail(contact.email)) return setError("Please add a valid email address.");

    setSubmitting(true);
    setError("");

    const result = await submitToApi("/api/qualification", {
      contact,
      answers,
      recommendation: {
        pathId: recommendation.pathId,
        pathName: recommendation.pathName,
      },
      origin,
    });

    setSubmitting(false);
    setSubmitted(result.ok ? "ok" : "error");

    if (result.ok) {
      track("qualification_submitted", { path: recommendation.pathId, origin });
      setStage("result");
    } else {
      setError(result.message ?? "Something went wrong. Please try again.");
    }
  };

  const progress =
    stage === "result" ? 100 : stage === "details" ? 95 : Math.round((index / total) * 90);

  return (
    <div className="flex min-h-[100dvh] flex-col sm:min-h-[32rem]">
      <div className="border-b border-line px-5 py-4 pr-16 sm:px-8">
        <p className="label-mono">
          {stage === "result" ? "Your growth path" : "Find your growth path"}
        </p>
        <div className="mt-3 h-px w-full bg-line">
          <div
            className="h-px bg-signal transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progress"
          />
        </div>
      </div>

      <div className="flex-1 px-5 py-8 sm:px-8 sm:py-10">
        {stage === "questions" ? (
          <QuestionScreen
            question={question}
            index={index}
            total={total}
            value={answerFor(question.id)}
            onChange={setAnswer}
          />
        ) : null}

        {stage === "details" ? (
          <DetailsScreen contact={contact} onChange={setContact} />
        ) : null}

        {stage === "result" ? (
          <ResultScreen recommendation={recommendation} onClose={onClose} />
        ) : null}

        {error ? (
          <p role="alert" className="mt-5 text-sm text-warn">
            {error}
          </p>
        ) : null}

        {submitted === "error" && stage !== "result" ? (
          <p className="mt-3 text-sm text-muted">
            You can also email us directly and we&apos;ll pick it up from there.
          </p>
        ) : null}
      </div>

      {stage !== "result" ? (
        <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-line bg-surface/95 px-5 py-4 backdrop-blur sm:px-8">
          <button
            type="button"
            onClick={back}
            disabled={stage === "questions" && index === 0}
            className="text-sm text-muted transition-colors hover:text-ink disabled:opacity-30"
          >
            Back
          </button>
          <div className="flex items-center gap-3">
            <span className="label-mono hidden sm:inline">
              {stage === "details" ? "Final step" : `${index + 1} / ${total}`}
            </span>
            {stage === "questions" ? (
              <CtaButton onClick={next}>
                Continue <ArrowGlyph />
              </CtaButton>
            ) : (
              <CtaButton onClick={submit} disabled={submitting}>
                {submitting ? "Sending…" : "See my growth path"} <ArrowGlyph />
              </CtaButton>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function QuestionScreen({
  question,
  index,
  total,
  value,
  onChange,
}: {
  question: QualificationQuestion;
  index: number;
  total: number;
  value: string | string[] | undefined;
  onChange: (id: string, value: string | string[]) => void;
}) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];

  return (
    <div key={question.id} className="animate-fade-up">
      <p className="label-mono sm:hidden">
        Step {index + 1} of {total}
      </p>
      <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em] sm:mt-0 sm:text-3xl">
        {question.prompt}
      </h2>
      {question.help ? <p className="mt-3 text-sm text-muted">{question.help}</p> : null}

      <div className="mt-7">
        {question.type === "single" || question.type === "multi" ? (
          <ul className="grid gap-2.5" role={question.type === "multi" ? "group" : undefined}>
            {question.options?.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      if (question.type === "multi") {
                        const nextValues = isSelected
                          ? selected.filter((v) => v !== option.value)
                          : [...selected, option.value];
                        onChange(question.id, nextValues);
                      } else {
                        onChange(question.id, option.value);
                      }
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-4 py-3.5 text-left text-[0.9375rem] transition-all duration-150",
                      isSelected
                        ? "border-signal/60 bg-signal/10 text-ink"
                        : "border-line bg-panel/70 text-ink-soft hover:border-line-strong hover:bg-raised/70",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center border transition-colors",
                        question.type === "multi" ? "rounded-[4px]" : "rounded-full",
                        isSelected ? "border-signal bg-signal" : "border-line-strong",
                      )}
                    >
                      {isSelected ? (
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#0d1400]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 6.2l2.4 2.4L9.5 3.8" />
                        </svg>
                      ) : null}
                    </span>
                    <span>{option.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <textarea
            value={typeof value === "string" ? value : ""}
            onChange={(e) => onChange(question.id, e.target.value)}
            placeholder={question.placeholder}
            maxLength={question.maxLength}
            rows={4}
            className="w-full resize-y rounded-lg border border-line bg-panel/70 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
          />
        )}
      </div>

      {question.type === "multi" ? (
        <p className="mt-3 text-xs text-faint">Select as many as apply, or none.</p>
      ) : null}
    </div>
  );
}

function DetailsScreen({
  contact,
  onChange,
}: {
  contact: { name: string; email: string; business: string; website: string };
  onChange: (value: { name: string; email: string; business: string; website: string }) => void;
}) {
  const field = (key: keyof typeof contact, label: string, props: Record<string, unknown> = {}) => (
    <label className="block">
      <span className="label-mono">{label}</span>
      <input
        value={contact[key]}
        onChange={(e) => onChange({ ...contact, [key]: e.target.value })}
        className="mt-2 w-full rounded-lg border border-line bg-panel/70 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-faint focus:border-signal/50 focus:outline-none"
        {...props}
      />
    </label>
  );

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
        Where should we send the read?
      </h2>
      <p className="mt-3 text-sm text-muted">
        We&apos;ll show your growth path on the next screen and send a copy so you can act
        on it later.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {field("name", "Name *", { autoComplete: "name", required: true, maxLength: 120 })}
        {field("email", "Email *", {
          type: "email",
          autoComplete: "email",
          required: true,
          maxLength: 254,
        })}
        {field("business", "Business name", { autoComplete: "organization", maxLength: 160 })}
        {field("website", "Website", { placeholder: "yoursite.com", maxLength: 300 })}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-faint">
        We use this to prepare for the conversation. No list-swapping, no spam.
      </p>
    </div>
  );
}

function ResultScreen({
  recommendation,
  onClose,
}: {
  recommendation: ReturnType<typeof buildRecommendation>;
  onClose?: () => void;
}) {
  return (
    <div className="animate-fade-up">
      <p className="label-mono">Here&apos;s your next step</p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
        {recommendation.headline}
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
        {recommendation.rationale}
      </p>

      <div className="mt-7 rounded-card border border-line bg-panel/70 p-5">
        <p className="label-mono mb-4">The sequence that has to work</p>
        <FlowDiagram stages={recommendation.flow} compact />
      </div>

      <div className="mt-4 rounded-card border border-line bg-panel/70 p-5">
        <p className="label-mono mb-3">Where we&apos;d likely start</p>
        <ul className="space-y-2">
          {recommendation.firstBuilds.map((build, i) => (
            <li key={build} className="flex items-baseline gap-3 text-[0.9375rem] text-ink-soft">
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              {build}
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
          {recommendation.scopeNote}
        </p>
      </div>

      <p className="mt-6 text-sm text-muted">
        This is a starting hypothesis based on what you told us — not a diagnosis. The call
        is where we pressure-test it against your actual numbers.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <CtaLink
          href={bookingUrl || cta.secondary.href}
          size="lg"
          event="booking_cta_click"
          eventProps={{ origin: "qualification_result" }}
          {...(bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {cta.secondary.label} <ArrowGlyph />
        </CtaLink>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-13 items-center justify-center rounded-full border border-line px-7 text-[0.9375rem] text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
        >
          Keep exploring
        </button>
      </div>

      <p className="mt-6 text-xs text-faint">
        Prefer to write it out?{" "}
        <Link href="/contact" className="text-muted underline underline-offset-4 hover:text-ink">
          Send a growth request instead
        </Link>
        .
      </p>
    </div>
  );
}
