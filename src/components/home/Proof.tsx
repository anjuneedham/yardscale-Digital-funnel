import Image from "next/image";
import { caseStudies, projects, testimonials } from "@/content/proof";
import { Section, SectionHeader } from "@/components/ui/Section";

/**
 * PROOF AND DOCUMENTATION. Renders only what is real. Screenshots, case
 * studies and testimonials appear as they are added to src/content/proof.ts;
 * until then the section says plainly that they are not there yet.
 */
export function Proof() {
  return (
    <Section id="proof" divider tone="raised">
      <SectionHeader
        eyebrow="Proof and documentation"
        title="Built in public, documented as it happens."
        lede="No invented testimonials, user counts or revenue screenshots. This section fills up with real products, real screenshots and real lessons as they exist."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h3 className="label-mono">Products in the studio</h3>
          <ul className="mt-4 border-t border-line">
            {projects.map((project) => (
              <li key={project.slug} className="border-b border-line py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-xl font-semibold tracking-[-0.02em]">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h4>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-signal">
                    {project.stage}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                {project.lesson ? (
                  <p className="mt-3 max-w-2xl border-l-2 border-signal pl-4 text-sm leading-relaxed text-muted">
                    {project.lesson}
                  </p>
                ) : null}
                {project.screenshot ? (
                  <div className="relative mt-5 aspect-video overflow-hidden rounded-card border border-line">
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="label-mono">Case studies</h3>
            {caseStudies.length > 0 ? (
              <ul className="mt-4 border-t border-line">
                {caseStudies.map((study) => (
                  <li key={study.slug} className="border-b border-line py-4">
                    <a href={study.href} className="font-medium text-ink hover:text-signal">
                      {study.title}
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{study.summary}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                None published yet. Written case studies will appear here as products ship
                and there is something true to report.
              </p>
            )}
          </div>

          <div>
            <h3 className="label-mono">From founders</h3>
            {testimonials.length > 0 ? (
              <ul className="mt-4 space-y-6 border-t border-line pt-6">
                {testimonials.map((t) => (
                  <li key={t.name + t.quote.slice(0, 16)}>
                    <blockquote className="border-l-2 border-signal pl-4 text-pretty text-[0.9375rem] leading-relaxed text-ink">
                      {t.quote}
                    </blockquote>
                    <p className="mt-2 pl-4 text-sm text-muted">
                      {t.name}, {t.role}
                      {t.source ? ` · ${t.source}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                Coaching and partnerships are new, so there are no testimonials to show.
                When founders say something worth quoting, with their permission, it goes here.
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
