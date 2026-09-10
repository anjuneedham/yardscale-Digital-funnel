import { availableResources } from "@/content/resources";
import { Section } from "@/components/ui/Section";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";

/**
 * FREE RESOURCE.
 * The lower-commitment path for visitors who aren't ready for a call:
 * social content → site → resource → nurture → growth call.
 */
export function LeadMagnet() {
  const guide = availableResources[0];
  if (!guide) return null;

  return (
    <Section id="starter-guide" divider>
      <div className="grid gap-10 rounded-card border border-line bg-panel/60 p-6 sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:p-14">
        <div>
          <p className="label-mono">Free resource</p>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-4xl">
            Want to build your own growth system?
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Start with the {guide.title}.
          </p>
          <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-muted">
            {guide.summary}
          </p>

          <ul className="mt-8 space-y-3">
            {guide.contents.map((item) => (
              <li key={item} className="flex gap-3.5 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2 h-px w-3.5 shrink-0 bg-signal/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-14">
          <LeadMagnetForm
            resourceId={guide.id}
            resourceTitle={guide.title}
            origin="homepage_lead_magnet"
          />
        </div>
      </div>
    </Section>
  );
}
