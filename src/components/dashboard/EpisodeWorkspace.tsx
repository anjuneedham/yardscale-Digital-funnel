"use client";

import Link from "next/link";
import { useState } from "react";

import { ctaKinds, hookRules, productionDefaults, scriptFramework } from "@/content/campaign/meta";
import type { ContentStatus, Episode, PieceKey } from "@/content/campaign/types";
import { patchRecord, useSaver } from "@/lib/campaign/client";
import { PIECES, PIECE_LABEL, pieceStatus, type EpisodeState } from "@/lib/campaign/shared";
import { cn } from "@/lib/cn";
import { Ed, EditCtx } from "./Editable";
import { ScriptEditor } from "./ScriptEditor";
import { StatusSelect } from "./StatusSelect";
import { Card, Chip, H2, SaveBadge, inputCls } from "./ui";

type Tab = "brief" | "yt" | "c1" | "c2" | "c3" | "production" | "review";
const TABS: { key: Tab; label: string }[] = [
  { key: "brief", label: "Brief" },
  { key: "yt", label: "YouTube" },
  { key: "c1", label: "TikTok 1" },
  { key: "c2", label: "TikTok 2" },
  { key: "c3", label: "TikTok 3" },
  { key: "production", label: "Production" },
  { key: "review", label: "Review" },
];

const WORKFLOW = [
  "Open today's episode and read the brief",
  "Write the real YouTube script in your own words",
  "Prepare the three TikTok clips",
  "Record screen and voice footage",
  "Edit",
  "Publish YouTube and the three TikToks",
  "Update the four statuses",
  "Enter performance numbers",
  "Write the lesson",
  "Adjust upcoming briefs from what the numbers say",
];

export function EpisodeWorkspace({
  episode: ep,
  initial,
  prev,
  next,
  isToday,
}: {
  episode: Episode;
  initial: EpisodeState;
  prev: number | null;
  next: number | null;
  isToday: boolean;
}) {
  const [tab, setTab] = useState<Tab>("brief");
  const [state, setState] = useState<EpisodeState>(initial);
  const [lesson, setLesson] = useState(initial.lesson ?? "");
  const lessonSave = useSaver();
  const checkSave = useSaver();

  const edits = state.edits;

  /** Save (or reset, when value is null) one brief override. Resolves true on success. */
  async function saveEdit(path: string, value: string | null) {
    try {
      await patchRecord("episode", String(ep.n), { edits: { [path]: value } });
      setState((s) => {
        const e = { ...(s.edits ?? {}) };
        if (value === null) delete e[path];
        else e[path] = value;
        return { ...s, edits: e };
      });
      return true;
    } catch {
      return false;
    }
  }

  async function toggle(key: string, value: boolean) {
    setState((s) => ({ ...s, checklist: { ...s.checklist, [key]: value } }));
    const ok = await checkSave.run(() => patchRecord("episode", String(ep.n), { checklist: { [key]: value } }));
    if (!ok) setState((s) => ({ ...s, checklist: { ...s.checklist, [key]: !value } }));
  }

  function scriptStatusHint(piece: PieceKey) {
    return (hasText: boolean) => {
      // A written script nudges status forward from "brief ready" only; never overrides later stages.
      if (hasText && pieceStatus(state, piece) === "brief-ready") {
        setState((s) => ({ ...s, status: { ...s.status, [piece]: "script-written" as ContentStatus } }));
        patchRecord("episode", String(ep.n), { status: { [piece]: "script-written" } }).catch(() => undefined);
      }
    };
  }

  const clipTab = tab === "c1" || tab === "c2" || tab === "c3" ? tab : null;

  return (
    <EditCtx.Provider value={{ edits, onSave: saveEdit }}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {prev ? (
            <Link href={`/dashboard/episode/${prev}`} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-ink-soft hover:text-ink">
              ← Day {prev}
            </Link>
          ) : null}
          {next ? (
            <Link href={`/dashboard/episode/${next}`} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm text-ink-soft hover:text-ink">
              Day {next} →
            </Link>
          ) : null}
        </div>
        <div className="flex gap-2">
          {isToday ? <Chip tone="signal">Today</Chip> : null}
          <Chip>Chapter {ep.chapter}</Chip>
        </div>
      </div>

      <Card className="mb-4">
        <h2 className="sr-only">Statuses</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {PIECES.map((k) => (
            <StatusSelect
              key={k}
              episode={ep.n}
              piece={k}
              value={pieceStatus(state, k)}
              label={PIECE_LABEL[k]}
              onChange={(v) => setState((s) => ({ ...s, status: { ...s.status, [k]: v } }))}
            />
          ))}
        </div>
      </Card>

      <div role="tablist" aria-label="Episode sections" className="sticky top-[6.25rem] z-40 -mx-5 mb-4 flex gap-1 overflow-x-auto border-b border-line bg-void/95 px-5 py-2 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls="panel"
            type="button"
            onClick={() => setTab(t.key)}
            className={cn(
              "min-h-10 shrink-0 rounded-full px-4 text-sm transition-colors",
              tab === t.key ? "bg-signal text-[color:var(--color-on-signal)] font-medium" : "text-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id="panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {tab === "brief" ? (
          <Card>
            <H2>Episode brief</H2>
            <div className="mt-4">
              {ep.conditional ? (
                <div className="mb-4 rounded-lg border border-warn/40 bg-warn/10 p-3 text-sm text-warn">
                  <strong className="font-medium">Depends on what really happens:</strong> {ep.conditional}
                </div>
              ) : null}
              <Ed label="Storyline" path="storyline" seed={ep.storyline} />
              <Ed label="Episode objective" path="objective" seed={ep.objective} />
              <Ed label="Why this episode matters" path="why" seed={ep.why} />
              <Ed label="What viewers should learn or feel" path="feel" seed={ep.feel} />
              <Ed label="Personal input: answer these in your own words" path="personalInput" seed={ep.personalInput} kind="lines" hint="Real experience only. If you don't have an honest answer, say that instead." />
            </div>
          </Card>
        ) : null}

        {tab === "yt" ? (
          <div className="space-y-4">
            <Card>
              <H2>YouTube script flow</H2>
              <div className="mt-4">
                <Ed label="Opening hook options (pick one or write your own)" path="yt.hooks" seed={ep.yt.hooks} kind="lines" />
                <Ed label="Suggested opening footage" path="yt.openingFootage" seed={ep.yt.openingFootage} />
                <Ed label="Context to establish" path="yt.context" seed={ep.yt.context} />
                <Ed label="Main talking points" path="yt.talkingPoints" seed={ep.yt.talkingPoints} kind="lines" />
                <Ed label="Screen recording sequences" path="yt.screenRecordings" seed={ep.yt.screenRecordings} kind="lines" />
                <Ed label="Questions to answer in your own words" path="yt.questions" seed={ep.yt.questions} kind="lines" />
                <Ed label="Where to demonstrate" path="yt.demo" seed={ep.yt.demo} />
                <Ed label="Closing" path="yt.closing" seed={ep.yt.closing} />
                <Ed label="Next-episode tease" path="yt.tease" seed={ep.yt.tease} />
                <Ed label={`YouTube CTA (${ctaKinds[ep.yt.cta.kind].label})`} path="yt.cta" seed={ep.yt.cta.text} />
              </div>
            </Card>
            <Card>
              <H2>Frame for writing it</H2>
              <ol className="mt-3 space-y-2 text-sm text-ink-soft">
                {scriptFramework.map((s) => (
                  <li key={s.step}>
                    <strong className="font-medium text-ink">{s.step}</strong> — {s.prompt}
                  </li>
                ))}
              </ol>
            </Card>
            <ScriptEditor
              episode={ep.n}
              piece="yt"
              initial={state.scripts?.yt ?? ""}
              initialUrl={state.urls?.yt ?? ""}
              onStatusHint={scriptStatusHint("yt")}
              target="8–12 min"
            />
          </div>
        ) : null}

        {clipTab ? (
          <ClipPanel
            key={clipTab}
            ep={ep}
            index={Number(clipTab[1]) - 1}
            state={state}
            onStatusHint={scriptStatusHint(clipTab)}
            piece={clipTab}
          />
        ) : null}

        {tab === "production" ? (
          <div className="space-y-4">
            <Card>
              <H2>Record</H2>
              <p className="mt-1 text-sm text-muted">Tick items as you capture them.</p>
              <ul className="mt-3 space-y-1">
                {ep.yt.screenRecordings.map((r, i) => (
                  <Check key={`yt${i}`} id={`rec-yt-${i}`} label={`YouTube: ${r}`} state={state} onToggle={toggle} />
                ))}
                {ep.clips.map((c, i) => (
                  <Check key={`c${i}`} id={`rec-c${i + 1}`} label={`TikTok ${i + 1}: ${c.screenRecording}`} state={state} onToggle={toggle} />
                ))}
                {ep.capture.map((c, i) => (
                  <Check key={`cap${i}`} id={`cap-${i}`} label={`Capture separately: ${c}`} state={state} onToggle={toggle} />
                ))}
              </ul>
              <SaveBadge state={checkSave.state} error={checkSave.error} />
            </Card>
            <Card>
              <H2>Edit, captions, thumbnail, publish</H2>
              <ul className="mt-3 space-y-1">
                <Check id="edit-yt" label="YouTube edited (hook in 15s, visual change every 8–12s)" state={state} onToggle={toggle} />
                <Check id="edit-tt" label="All three TikToks edited (9:16, hook text in the first second)" state={state} onToggle={toggle} />
                <Check id="captions" label="Captions added to the TikToks and checked on YouTube" state={state} onToggle={toggle} />
                <Check id="thumb" label="YouTube thumbnail made" state={state} onToggle={toggle} />
                <Check id="privacy" label="Privacy check: no names, keys, private dashboards or fake numbers on screen" state={state} onToggle={toggle} />
                <Check id="pub-yt" label="YouTube published" state={state} onToggle={toggle} />
                <Check id="pub-c1" label="TikTok 1 published" state={state} onToggle={toggle} />
                <Check id="pub-c2" label="TikTok 2 published" state={state} onToggle={toggle} />
                <Check id="pub-c3" label="TikTok 3 published" state={state} onToggle={toggle} />
              </ul>
            </Card>
            <Card>
              <H2>Direction</H2>
              <div className="mt-3">
                <Ed label="Thumbnail direction" path="thumbnail" seed={ep.thumbnail} />
                <Ed label="Footage you can reuse" path="reuse" seed={ep.reuse} />
                <Ed label="Capture separately" path="capture" seed={ep.capture} kind="lines" />
              </div>
              <Defaults title="Recording" items={productionDefaults.recordDay} />
              <Defaults title="Editing" items={productionDefaults.editing} />
              <Defaults title="Captions" items={productionDefaults.captions} />
              <Defaults title="Privacy" items={productionDefaults.privacy} />
            </Card>
          </div>
        ) : null}

        {tab === "review" ? (
          <div className="space-y-4">
            <Card>
              <H2>Daily workflow</H2>
              <ul className="mt-3 space-y-1">
                {WORKFLOW.map((w, i) => (
                  <Check key={w} id={`wf-${i + 1}`} label={`${i + 1}. ${w}`} state={state} onToggle={toggle} />
                ))}
              </ul>
            </Card>
            <Card>
              <H2>Lesson from this episode</H2>
              <p className="mt-1 text-sm text-muted">One honest sentence you could repeat. What worked, what didn&rsquo;t, what changes tomorrow.</p>
              <textarea
                aria-label="Lesson"
                value={lesson}
                onChange={(e) => setLesson(e.target.value)}
                onBlur={() => {
                  if (lesson !== (state.lesson ?? "")) {
                    lessonSave.run(async () => {
                      await patchRecord("episode", String(ep.n), { lesson });
                      setState((s) => ({ ...s, lesson }));
                    });
                  }
                }}
                rows={4}
                className={inputCls + " mt-3"}
              />
              <SaveBadge state={lessonSave.state} error={lessonSave.error} />
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link className="underline underline-offset-4 hover:text-signal" href={`/dashboard/performance?day=${ep.n}`}>
                  Enter performance for Day {ep.n} →
                </Link>
                <Link className="underline underline-offset-4 hover:text-signal" href="/dashboard/notes">
                  Add a campaign note →
                </Link>
              </div>
            </Card>
          </div>
        ) : null}
      </div>
    </EditCtx.Provider>
  );
}

function ClipPanel({
  ep,
  index,
  state,
  piece,
  onStatusHint,
}: {
  ep: Episode;
  index: number;
  state: EpisodeState;
  piece: PieceKey;
  onStatusHint: (has: boolean) => void;
}) {
  const c = ep.clips[index];
  const p = `c${index + 1}`;
  const roleLabel = { attention: "Attention", value: "Value", story: "Story / Progress" }[c.role];
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex flex-wrap items-center gap-2">
          <H2>{c.title}</H2>
          <Chip tone="signal">{roleLabel}</Chip>
        </div>
        <p className="mt-1 text-xs text-muted">Must work with no context from the YouTube episode.</p>
        <div className="mt-4">
          <Ed label={"Clip title (internal)"} path={`${p}.title`} seed={c.title} />
          <Ed label={"Three hook options"} path={`${p}.hooks`} seed={c.hooks} kind="lines" />
          <Ed label={"Main talking point"} path={`${p}.point`} seed={c.point} />
          <Ed label={"Visual instructions"} path={`${p}.visual`} seed={c.visual} />
          <Ed label={"Screen recording to capture"} path={`${p}.screenRecording`} seed={c.screenRecording} />
          <Ed label={"Text overlays"} path={`${p}.overlays`} seed={c.overlays} kind="lines" />
          <Ed label={"Closing statement"} path={`${p}.closing`} seed={c.closing} />
          <Ed label={`CTA (${ctaKinds[c.cta.kind].label})`} path={`${p}.cta`} seed={c.cta.text} />
          <Ed label={"Connection to the campaign"} path={`${p}.connection`} seed={c.connection} />
        </div>
        <details className="mt-2 text-sm text-muted">
          <summary className="min-h-10 cursor-pointer py-2">Hook rules</summary>
          <ul className="list-disc space-y-1 pl-5">
            {hookRules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </details>
      </Card>
      <ScriptEditor
        episode={ep.n}
        piece={piece}
        initial={state.scripts?.[piece] ?? ""}
        initialUrl={state.urls?.[piece] ?? ""}
        onStatusHint={onStatusHint}
        target="30–60s"
      />
    </div>
  );
}

function Check({
  id,
  label,
  state,
  onToggle,
}: {
  id: string;
  label: string;
  state: EpisodeState;
  onToggle: (id: string, v: boolean) => void;
}) {
  const checked = !!state.checklist?.[id];
  return (
    <li>
      <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg px-1 py-2 hover:bg-raised/60">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(id, e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#bdfa09]"
        />
        <span className={cn("text-[0.9375rem] leading-relaxed", checked ? "text-faint line-through" : "text-ink-soft")}>{label}</span>
      </label>
    </li>
  );
}

function Defaults({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <details className="mt-3 border-t border-line pt-3">
      <summary className="min-h-10 cursor-pointer text-sm text-muted">{title} defaults</summary>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-soft">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </details>
  );
}
