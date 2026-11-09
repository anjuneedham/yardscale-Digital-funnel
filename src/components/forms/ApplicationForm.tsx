"use client";

import { Fragment, useState } from "react";
import { CtaButton, ArrowGlyph } from "@/components/ui/Cta";
import { submitToApi } from "@/lib/submit";
import { isEmail } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { FORM_FIELDS, type FormKind } from "@/lib/forms";
import { site } from "@/content/site";
import { FIELD_CLASS, FieldLabel, Honeypot, SelectChevron } from "./fields";

const COPY: Record<FormKind, { submit: string; doneTitle: string; done: string }> = {
  coaching: {
    submit: "Submit application",
    doneTitle: "Application received.",
    done: `${site.founder} reads every application personally. If it looks like a fit, you will get an email inviting you to a conversation. If it is not, you will be told that too.`,
  },
  partnership: {
    submit: "Submit partnership application",
    doneTitle: "Application received.",
    done: `${site.founder} reviews every partnership application personally. Partnerships are selective, so not every application goes forward — either way, you will get an answer by email.`,
  },
  contact: {
    submit: "Send message",
    doneTitle: "Message sent.",
    done: "Thanks — it has gone straight to the inbox. You will get a reply by email.",
  },
};

/**
 * One form component for coaching applications, partnership applications and
 * contact messages. The questions come from lib/forms.ts, which the API route
 * validates against too.
 */
export function ApplicationForm({ kind }: { kind: FormKind }) {
  const fields = FORM_FIELDS[kind];
  const [values, setValues] = useState<Record<string, string>>({});
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const set = (key: string, value: string) => setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    for (const field of fields) {
      const value = (values[field.key] ?? "").trim();
      if (field.required && !value) {
        setError(`Please complete: ${field.label}.`);
        document.getElementById(`${kind}-${field.key}`)?.focus();
        return;
      }
      if (field.type === "email" && !isEmail(value)) {
        setError("Please enter a valid email address.");
        document.getElementById(`${kind}-${field.key}`)?.focus();
        return;
      }
    }

    setError("");
    setState("sending");

    const result = await submitToApi("/api/apply", { kind, ...values, company });

    if (result.ok) {
      setState("done");
      track("application_submitted", { kind, stage: values.stage });
    } else {
      setState("idle");
      setError(result.message ?? "Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <div role="status" className="rounded-card border border-signal/50 bg-signal/[0.06] p-7 sm:p-9">
        <p className="label-mono text-signal">Confirmed</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{COPY[kind].doneTitle}</h3>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">{COPY[kind].done}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        {fields.map((field, index) => {
          const id = `${kind}-${field.key}`;
          const value = values[field.key] ?? "";
          return (
            <Fragment key={field.key}>
              {field.group ? (
                <p
                  className={`label-mono sm:col-span-2 ${index > 0 ? "mt-3 border-t border-line pt-7" : ""}`}
                >
                  {field.group}
                </p>
              ) : null}
              <label htmlFor={id} className={`block ${field.half ? "" : "sm:col-span-2"}`}>
                <FieldLabel label={field.label} required={field.required} hint={field.hint} />
                {field.type === "textarea" ? (
                  <textarea
                    id={id}
                    value={value}
                    onChange={(e) => set(field.key, e.target.value)}
                    rows={4}
                    maxLength={field.max}
                    required={field.required}
                    placeholder={field.placeholder}
                    className={`${FIELD_CLASS} resize-y`}
                  />
                ) : field.type === "select" ? (
                  <span className="relative block">
                    <select
                      id={id}
                      value={value}
                      onChange={(e) => set(field.key, e.target.value)}
                      required={field.required}
                      className={`${FIELD_CLASS} appearance-none pr-10`}
                    >
                      <option value="">Select…</option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <SelectChevron className="pointer-events-none absolute right-4 top-1/2 mt-1 h-3 w-3 -translate-y-1/2 text-muted" />
                  </span>
                ) : (
                  <input
                    id={id}
                    type={field.type}
                    value={value}
                    onChange={(e) => set(field.key, e.target.value)}
                    maxLength={field.max}
                    required={field.required}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    className={FIELD_CLASS}
                  />
                )}
              </label>
            </Fragment>
          );
        })}
      </div>

      <Honeypot value={company} onChange={setCompany} />

      <div className="mt-8 space-y-4 border-t border-line pt-6">
        {error ? (
          <p role="alert" className="text-sm text-warn">
            {error}
          </p>
        ) : null}
        <CtaButton type="submit" size="lg" className="group w-full sm:w-auto" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : COPY[kind].submit}
          <ArrowGlyph className="group-hover:translate-x-0.5" />
        </CtaButton>
        <p className="text-xs leading-relaxed text-muted">
          Fields marked <span className="text-signal">*</span> are required. Your answers go to{" "}
          {site.founder} and are not shared.
        </p>
      </div>
    </form>
  );
}
