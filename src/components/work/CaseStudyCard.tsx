import type { CaseStudy } from "@/content/work";

/** A published case study. Renders only fields that are actually filled in. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-panel/70 p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="label-mono">{study.discipline}</p>
        {study.year ? <span className="font-mono text-xs text-faint">{study.year}</span> : null}
      </div>

      {study.client ? (
        <h3 className="mt-4 text-lg font-semibold tracking-[-0.01em]">{study.client}</h3>
      ) : null}

      <p className="mt-2 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
        {study.headline}
      </p>

      <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
        {study.problem ? (
          <Row term="Problem" definition={study.problem} />
        ) : null}
        {study.approach ? <Row term="Approach" definition={study.approach} /> : null}
        {study.built.length > 0 ? (
          <div>
            <dt className="label-mono">What we built</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.built.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-raised/60 px-3 py-1 text-xs text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ) : null}
        {study.outcome ? <Row term="Outcome" definition={study.outcome} /> : null}
      </dl>
    </article>
  );
}

function Row({ term, definition }: { term: string; definition: string }) {
  return (
    <div>
      <dt className="label-mono">{term}</dt>
      <dd className="mt-1.5 leading-relaxed text-muted">{definition}</dd>
    </div>
  );
}

/**
 * A reserved slot. Communicates the structure future case studies will follow
 * without pretending work exists that does not.
 */
export function ReservedSlot({ discipline, index }: { discipline: string; index: number }) {
  const structure = ["Problem", "Approach", "What we built", "Outcome"];

  return (
    <article className="flex h-full flex-col rounded-card border border-dashed border-line bg-panel/25 p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="label-mono">{discipline}</p>
        <span className="font-mono text-xs text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-4 text-[0.9375rem] font-medium text-ink-soft">Case study slot reserved.</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Published once the build is live and the client has signed off.
      </p>

      <ol className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
        {structure.map((item, i) => (
          <li key={item} className="flex items-baseline gap-3 text-sm text-faint">
            <span className="font-mono text-[0.6875rem]">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>
    </article>
  );
}
