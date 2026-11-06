"use client";

import { useMemo, useState } from "react";

import { attribution, leadSources, leadStatuses } from "@/content/campaign/meta";
import { deleteRecord, newId, patchRecord, useSaver } from "@/lib/campaign/client";
import type { Lead } from "@/lib/campaign/shared";
import { cn } from "@/lib/cn";
import { Card, Chip, H2, SaveBadge, btnCls, btnPrimaryCls, inputCls } from "./ui";

type L = Lead & { id: string };
type Opt = { value: string; label: string };

const blank: Lead = { name: "", contact: "", idea: "", source: "Other", content: "", status: "New", nextAction: "", nextDate: "", notes: "" };

export function LeadsManager({ initial, contentOptions }: { initial: L[]; contentOptions: Opt[] }) {
  const [leads, setLeads] = useState<L[]>(initial);
  const [filter, setFilter] = useState<string>("All");
  const [editing, setEditing] = useState<L | null>(null);
  const [isNew, setIsNew] = useState(false);
  const saver = useSaver();

  const shown = useMemo(() => leads.filter((l) => filter === "All" || (l.status ?? "New") === filter), [leads, filter]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    if (!editing.name?.trim()) {
      saver.run(async () => {
        throw new Error("Add a name or company.");
      });
      return;
    }
    const { id, ...data } = editing;
    const payload = { ...data, createdAt: data.createdAt ?? new Date().toISOString() };
    const ok = await saver.run(async () => {
      await patchRecord("lead", id, payload);
      return true;
    });
    if (ok) {
      setLeads((ls) => (ls.some((l) => l.id === id) ? ls.map((l) => (l.id === id ? { id, ...payload } : l)) : [{ id, ...payload }, ...ls]));
      setEditing(null);
    }
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this lead? This cannot be undone.")) return;
    const ok = await saver.run(async () => {
      await deleteRecord("lead", id);
      return true;
    });
    if (ok) {
      setLeads((ls) => ls.filter((l) => l.id !== id));
      setEditing(null);
    }
  }

  function field<K extends keyof Lead>(k: K) {
    return {
      value: (editing?.[k] as string | undefined) ?? "",
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setEditing((x) => (x ? { ...x, [k]: e.target.value } : x)),
    };
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Filter by status" className="flex gap-2 overflow-x-auto pb-1">
          {["All", ...leadStatuses].map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={filter === s}
              onClick={() => setFilter(s)}
              className={cn(
                "min-h-10 shrink-0 rounded-full border px-4 text-sm",
                filter === s ? "border-signal/60 bg-signal/10 text-signal" : "border-line text-muted hover:text-ink",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={btnPrimaryCls}
          onClick={() => {
            setIsNew(true);
            setEditing({ id: newId(), ...blank });
          }}
        >
          Add lead
        </button>
      </div>

      {editing ? (
        <Card>
          <H2>{isNew ? "New lead" : "Edit lead"}</H2>
          <form onSubmit={save} className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="label-mono mb-1 block">Name / company *</span>
              <input {...field("name")} className={inputCls} maxLength={160} />
            </label>
            <label className="block">
              <span className="label-mono mb-1 block">Contact details</span>
              <input {...field("contact")} className={inputCls} maxLength={240} placeholder="Email, phone, handle" />
            </label>
            <label className="block sm:col-span-2">
              <span className="label-mono mb-1 block">Application idea / problem</span>
              <textarea {...field("idea")} rows={3} className={inputCls} />
            </label>
            <label className="block">
              <span className="label-mono mb-1 block">Lead source</span>
              <select {...field("source")} className={inputCls}>
                {leadSources.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-mono mb-1 block">Relevant content</span>
              <select {...field("content")} className={inputCls}>
                <option value="">None / unknown</option>
                {contentOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-mono mb-1 block">Status</span>
              <select {...field("status")} className={inputCls}>
                {leadStatuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-mono mb-1 block">Next action date</span>
              <input type="date" {...field("nextDate")} className={inputCls} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label-mono mb-1 block">Next action</span>
              <input {...field("nextAction")} className={inputCls} maxLength={240} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label-mono mb-1 block">Notes (include how they said they found you)</span>
              <textarea {...field("notes")} rows={3} className={inputCls} />
            </label>
            <div className="flex flex-wrap items-center gap-2 sm:col-span-2">
              <button type="submit" className={btnPrimaryCls}>
                Save lead
              </button>
              <button type="button" className={btnCls} onClick={() => setEditing(null)}>
                Cancel
              </button>
              {!isNew ? (
                <button type="button" className={cn(btnCls, "text-warn")} onClick={() => remove(editing.id)}>
                  Delete
                </button>
              ) : null}
              <SaveBadge state={saver.state} error={saver.error} />
            </div>
          </form>
        </Card>
      ) : null}

      {shown.length === 0 && !editing ? (
        <Card>
          <p className="text-sm text-muted">
            {leads.length === 0
              ? "No leads yet. Add the first real one when someone enquires. Don't add placeholders."
              : "No leads with that status."}
          </p>
        </Card>
      ) : null}

      <ul className="grid gap-3 lg:grid-cols-2">
        {shown.map((l) => (
          <li key={l.id} className="card p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-medium">{l.name}</p>
              <Chip tone={l.status === "Won" ? "signal" : l.status === "Lost" || l.status === "Not a fit" ? "warn" : "default"}>{l.status ?? "New"}</Chip>
            </div>
            {l.idea ? <p className="mt-1.5 line-clamp-3 text-sm text-ink-soft">{l.idea}</p> : null}
            <p className="mt-2 text-xs text-muted">
              {l.source}
              {l.content ? ` · ${l.content}` : ""}
            </p>
            {l.nextAction ? (
              <p className="mt-1 text-sm">
                <span className="text-muted">Next:</span> {l.nextAction}
                {l.nextDate ? <span className="text-muted"> ({l.nextDate})</span> : null}
              </p>
            ) : null}
            <button
              type="button"
              onClick={() => {
                setIsNew(false);
                setEditing(l);
              }}
              className="mt-3 min-h-10 rounded-full border border-line px-4 text-sm text-ink-soft hover:text-ink"
            >
              Open / edit
            </button>
          </li>
        ))}
      </ul>

      <Card>
        <H2>How attribution works</H2>
        <p className="mt-2 text-sm text-ink-soft">{attribution.principle}</p>
        <p className="mt-3 break-all rounded-lg bg-void p-3 font-mono text-xs text-muted">{attribution.linkPattern}</p>
      </Card>
    </div>
  );
}
