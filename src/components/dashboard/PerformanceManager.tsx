"use client";

import { useState } from "react";

import { metricFields } from "@/content/campaign/meta";
import { patchRecord, useSaver } from "@/lib/campaign/client";
import { METRIC_KEYS, type MetricKey, type MetricsDoc, type SettingsDoc } from "@/lib/campaign/shared";
import { Card, H2, SaveBadge, btnPrimaryCls, inputCls } from "./ui";

type Slim = { n: number; title: string; date: string };

export function PerformanceManager({
  days,
  initialMetrics,
  initialSettings,
  initialDay,
}: {
  days: Slim[];
  initialMetrics: Record<number, MetricsDoc>;
  initialSettings: SettingsDoc;
  initialDay: number;
}) {
  const [metrics, setMetrics] = useState(initialMetrics);
  const [day, setDay] = useState(initialDay);
  const [settings, setSettings] = useState(initialSettings);
  const daySave = useSaver();
  const totalsSave = useSaver();

  const current = metrics[day] ?? {};
  const [form, setForm] = useState<Record<string, string>>(() => toForm(initialMetrics[initialDay]));

  function toForm(m: MetricsDoc | undefined): Record<string, string> {
    const f: Record<string, string> = { note: m?.note ?? "" };
    for (const k of METRIC_KEYS) f[k] = m?.[k] === undefined ? "" : String(m[k]);
    return f;
  }

  function pick(n: number) {
    setDay(n);
    setForm(toForm(metrics[n]));
  }

  async function saveDay(e: React.FormEvent) {
    e.preventDefault();
    const patch: Record<string, number | string | null> = { note: form.note.trim() || null };
    for (const k of METRIC_KEYS) {
      const raw = form[k]?.trim();
      patch[k] = raw === "" || raw === undefined ? null : Number(raw);
      if (raw && !Number.isFinite(Number(raw))) {
        daySave.run(async () => {
          throw new Error(`“${raw}” is not a number.`);
        });
        return;
      }
    }
    await daySave.run(async () => {
      const doc = await patchRecord("metrics", String(day), patch);
      setMetrics((m) => ({ ...m, [day]: doc as MetricsDoc }));
    });
  }

  async function saveTotal(key: "ytSubs" | "ttFollowers", raw: string) {
    const value = raw.trim() === "" ? null : Number(raw);
    if (value !== null && !Number.isFinite(value)) return;
    await totalsSave.run(async () => {
      await patchRecord("settings", "campaign", { [key]: value });
      setSettings((s) => {
        const next = { ...s };
        if (value === null) delete next[key];
        else next[key] = value;
        return next;
      });
    });
  }

  const rows = days.filter((d) => metrics[d.n] && Object.keys(metrics[d.n]).some((k) => k !== "note" && k !== "_updatedAt"));
  const sums = Object.fromEntries(
    METRIC_KEYS.map((k) => [k, rows.reduce((a, d) => a + (metrics[d.n][k] ?? 0), 0)]),
  ) as Record<MetricKey, number>;

  return (
    <div className="space-y-4">
      <Card>
        <H2>Current totals</H2>
        <p className="mt-1 text-sm text-muted">
          Type your real subscriber and follower counts from YouTube Studio and TikTok. These drive the Overview scorecards.
          Nothing here is connected to the platforms; it only shows what you enter.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <TotalField label="YouTube subscribers (current total)" value={settings.ytSubs} onSave={(v) => saveTotal("ytSubs", v)} />
          <TotalField label="TikTok followers (current total)" value={settings.ttFollowers} onSave={(v) => saveTotal("ttFollowers", v)} />
        </div>
        <SaveBadge state={totalsSave.state} error={totalsSave.error} />
      </Card>

      <Card>
        <H2>Daily numbers</H2>
        <form onSubmit={saveDay} className="mt-3">
          <label className="block">
            <span className="label-mono mb-1 block">Day</span>
            <select value={day} onChange={(e) => pick(Number(e.target.value))} className={inputCls}>
              {days.map((d) => (
                <option key={d.n} value={d.n}>
                  Day {d.n} · {d.title}
                </option>
              ))}
            </select>
          </label>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metricFields.map((f) => (
              <label key={f.key} className="block">
                <span className="label-mono mb-1 block">{f.label}</span>
                <input
                  inputMode="numeric"
                  value={form[f.key] ?? ""}
                  onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                  className={inputCls}
                  placeholder="—"
                />
              </label>
            ))}
          </div>
          <label className="mt-3 block">
            <span className="label-mono mb-1 block">Note (what drove this?)</span>
            <textarea
              rows={2}
              value={form.note ?? ""}
              onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
              className={inputCls}
            />
          </label>
          <div className="mt-3 flex items-center gap-3">
            <button type="submit" className={btnPrimaryCls}>
              Save Day {day}
            </button>
            <SaveBadge state={daySave.state} error={daySave.error} />
          </div>
          {Object.keys(current).length === 0 ? <p className="mt-2 text-xs text-faint">Nothing entered for this day yet.</p> : null}
        </form>
      </Card>

      <Card>
        <H2>All entered days</H2>
        {rows.length === 0 ? (
          <p className="mt-2 text-sm text-muted">No numbers entered yet.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <thead className="text-xs text-muted">
                <tr>
                  <th className="py-2 pr-3 font-normal">Day</th>
                  {metricFields.map((f) => (
                    <th key={f.key} className="px-2 py-2 text-right font-normal">
                      {f.label.replace(" (all 3)", "").replace(" (likes + comments + shares)", "")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((d) => (
                  <tr key={d.n}>
                    <td className="py-2 pr-3">
                      <button type="button" onClick={() => pick(d.n)} className="min-h-9 underline underline-offset-4 hover:text-signal">
                        {d.n}
                      </button>
                    </td>
                    {METRIC_KEYS.map((k) => (
                      <td key={k} className="px-2 py-2 text-right tabular-nums">
                        {metrics[d.n][k] ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="font-medium">
                  <td className="py-2 pr-3">Total</td>
                  {METRIC_KEYS.map((k) => (
                    <td key={k} className="px-2 py-2 text-right tabular-nums text-signal">
                      {sums[k]}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}

function TotalField({ label, value, onSave }: { label: string; value: number | undefined; onSave: (v: string) => void }) {
  const [v, setV] = useState(value === undefined ? "" : String(value));
  return (
    <label className="block">
      <span className="label-mono mb-1 block">{label}</span>
      <input inputMode="numeric" value={v} onChange={(e) => setV(e.target.value)} onBlur={() => onSave(v)} className={inputCls} placeholder="Not entered" />
    </label>
  );
}
