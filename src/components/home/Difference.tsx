import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const REFRAMES = [
  { ask: "a website", real: "the offer" },
  { ask: "a funnel", real: "the customer journey" },
  { ask: "an app", real: "an unvalidated process" },
];

const OPERATING_SEQUENCE = [
  { step: "Problem", note: "What is actually not working" },
  { step: "Strategy", note: "What has to change" },
  { step: "System", note: "What needs to exist" },
  { step: "Build", note: "Implementation" },
  { step: "Launch", note: "Real traffic, real behaviour" },
  { step: "Improve", note: "Fix the step that leaks" },
];

/**
 * TRUST.
 * Explains the operating philosophy — the reason the diagnostic came first.
 */
export function Difference() {
  return (
    <Section id="difference" divider grid>
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
            We don&apos;t start with what you want built.
            <span className="mt-2 block text-signal">We start with what needs to happen.</span>
          </h2>

          <ul className="mt-9 space-y-3">
            {REFRAMES.map((item) => (
              <li
                key={item.ask}
                className="rounded-lg border border-line bg-panel/60 p-5 text-[0.9375rem] leading-relaxed"
              >
                <span className="text-muted">Someone may come to us asking for </span>
                <span className="text-ink">{item.ask}</span>
                <span className="text-muted">. But the real problem might be </span>
                <span className="text-ink">{item.real}</span>
                <span className="text-muted">.</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            That&apos;s why YardScale starts with the growth problem and works backward to
            the system.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="card p-6 sm:p-8">
            <p className="label-mono mb-8">How the work is sequenced</p>
            <ol className="relative">
              <span
                aria-hidden
                className="absolute bottom-6 left-[7px] top-2 w-px bg-[repeating-linear-gradient(to_bottom,#373737_0_4px,transparent_4px_9px)]"
              />
              {OPERATING_SEQUENCE.map((item, i) => (
                <li key={item.step} className="relative flex gap-5 pb-7 last:pb-0">
                  <span
                    aria-hidden
                    className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border border-line-strong bg-surface"
                  >
                    <span
                      className="absolute inset-[3px] rounded-full bg-signal"
                      style={{
                        animation: "pulse-node 3.2s ease-in-out infinite",
                        animationDelay: `${i * 0.35}s`,
                      }}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
                      {item.step}
                    </p>
                    <p className="mt-1.5 text-sm text-muted">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
