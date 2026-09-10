import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * PROBLEM + NEW WAY OF THINKING.
 * Reframes the visitor's assumption before offering anything.
 */
export function AttentionGap() {
  return (
    <Section divider grid id="the-gap">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
            More attention isn&apos;t always the answer.
          </h2>

          <div className="mt-7 space-y-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              You may not have an attention problem.
              <br />
              <span className="text-ink">You may have a system problem.</span>
            </p>
            <p className="text-muted">You can have all of this —</p>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {[
              "A great service",
              "Real expertise",
              "An audience",
              "A strong product",
              "Social media traffic",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-line bg-panel/60 px-4 py-3 text-sm text-ink-soft"
              >
                <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-signal" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-4 text-pretty text-base leading-relaxed text-ink-soft">
            <p>— and still struggle to turn that attention into customers.</p>
            <p className="text-muted">
              Why? Because the system between attention and conversion is incomplete.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pt-4">
          <GapDiagram />
          <p className="mt-10 text-balance text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl">
            That gap is where{" "}
            <span className="text-signal">YardScale operates.</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

/** ATTENTION → ? → CUSTOMER. The missing middle, drawn literally. */
function GapDiagram() {
  return (
    <div className="rounded-card border border-line bg-panel/60 p-6 sm:p-8">
      <p className="label-mono mb-7">The missing middle</p>
      <div className="flex flex-col items-center gap-0">
        <Node label="Attention" state="present" />
        <Rail />
        <Node label="?" state="missing" />
        <Rail />
        <Node label="Customer" state="present" />
      </div>
      <p className="mt-7 border-t border-line pt-5 text-sm leading-relaxed text-muted">
        Most businesses invest heavily in the first box and hope for the third. The work
        that decides the outcome sits in the middle.
      </p>
    </div>
  );
}

function Node({ label, state }: { label: string; state: "present" | "missing" }) {
  const missing = state === "missing";
  return (
    <div
      className={
        missing
          ? "flex h-16 w-full max-w-xs items-center justify-center rounded-lg border border-dashed border-warn/60 bg-warn/5 text-2xl font-semibold text-warn"
          : "flex h-16 w-full max-w-xs items-center justify-center rounded-lg border border-line-strong bg-raised/70 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft"
      }
    >
      {label}
    </div>
  );
}

function Rail() {
  return (
    <span aria-hidden className="flex h-10 w-px items-center justify-center">
      <span className="h-full w-px bg-[repeating-linear-gradient(to_bottom,#2a3747_0_4px,transparent_4px_8px)]" />
    </span>
  );
}
