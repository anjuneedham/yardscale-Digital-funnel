"use client";

import { useMemo, useState } from "react";

import { noteTypes } from "@/content/campaign/meta";
import { deleteRecord, newId, patchRecord, useSaver } from "@/lib/campaign/client";
import type { Note } from "@/lib/campaign/shared";
import { cn } from "@/lib/cn";
import { Card, Chip, H2, SaveBadge, btnCls, btnPrimaryCls, inputCls } from "./ui";

type N = Note & { id: string };

export function NotesManager({ initial, today }: { initial: N[]; today: string }) {
  const [notes, setNotes] = useState<N[]>(initial);
  const [filter, setFilter] = useState("All");
  const [draft, setDraft] = useState<N | null>(null);
  const saver = useSaver();

  const shown = useMemo(() => notes.filter((n) => filter === "All" || n.type === filter), [notes, filter]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!draft) return;
    if (!draft.body?.trim() && !draft.title?.trim()) {
      saver.run(async () => {
        throw new Error("Write something first.");
      });
      return;
    }
    const { id, ...data } = draft;
    const payload = { ...data, createdAt: data.createdAt ?? new Date().toISOString() };
    const ok = await saver.run(async () => {
      await patchRecord("note", id, payload);
      return true;
    });
    if (ok) {
      setNotes((ns) => (ns.some((n) => n.id === id) ? ns.map((n) => (n.id === id ? { id, ...payload } : n)) : [{ id, ...payload }, ...ns]));
      setDraft(null);
    }
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this note?")) return;
    const ok = await saver.run(async () => {
      await deleteRecord("note", id);
      return true;
    });
    if (ok) setNotes((ns) => ns.filter((n) => n.id !== id));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Filter by type" className="flex gap-2 overflow-x-auto pb-1">
          {["All", ...noteTypes].map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
              className={cn(
                "min-h-10 shrink-0 rounded-full border px-4 text-sm",
                filter === t ? "border-signal/60 bg-signal/10 text-signal" : "border-line text-muted hover:text-ink",
              )}
            >
              {t}
            </button>
          ))}
        </div>
        <button type="button" className={btnPrimaryCls} onClick={() => setDraft({ id: newId(), type: "Lesson", title: "", body: "", date: today })}>
          Add note
        </button>
      </div>

      {draft ? (
        <Card>
          <H2>{notes.some((n) => n.id === draft.id) ? "Edit note" : "New note"}</H2>
          <form onSubmit={save} className="mt-4 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="label-mono mb-1 block">Type</span>
                <select value={draft.type} onChange={(e) => setDraft({ ...draft, type: e.target.value })} className={inputCls}>
                  {noteTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="label-mono mb-1 block">Title</span>
                <input value={draft.title ?? ""} onChange={(e) => setDraft({ ...draft, title: e.target.value })} className={inputCls} maxLength={160} />
              </label>
            </div>
            <label className="block">
              <span className="label-mono mb-1 block">Note</span>
              <textarea value={draft.body ?? ""} onChange={(e) => setDraft({ ...draft, body: e.target.value })} rows={6} className={inputCls} />
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <button type="submit" className={btnPrimaryCls}>
                Save note
              </button>
              <button type="button" className={btnCls} onClick={() => setDraft(null)}>
                Cancel
              </button>
              <SaveBadge state={saver.state} error={saver.error} />
            </div>
          </form>
        </Card>
      ) : null}

      {shown.length === 0 && !draft ? (
        <Card>
          <p className="text-sm text-muted">No notes here yet. Log lessons, experiments, problems you hear from the audience, and weekly reflections.</p>
        </Card>
      ) : null}

      <ul className="space-y-3">
        {shown.map((n) => (
          <li key={n.id} className="card p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone={n.type?.startsWith("Audience") ? "signal" : "default"}>{n.type}</Chip>
                <span className="text-xs text-muted">{n.date}</span>
              </div>
              <div className="flex gap-1">
                <button type="button" onClick={() => setDraft(n)} className="min-h-10 rounded-full px-3 text-sm text-muted hover:text-ink">
                  Edit
                </button>
                <button type="button" onClick={() => remove(n.id)} className="min-h-10 rounded-full px-3 text-sm text-muted hover:text-warn">
                  Delete
                </button>
              </div>
            </div>
            {n.title ? <p className="mt-2 font-medium">{n.title}</p> : null}
            {n.body ? <p className="mt-1 whitespace-pre-line text-[0.9375rem] leading-relaxed text-ink-soft">{n.body}</p> : null}
          </li>
        ))}
      </ul>
      <SaveBadge state={saver.state} error={saver.error} />
    </div>
  );
}
