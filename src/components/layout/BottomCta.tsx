import { cta } from "@/content/site";
import { finalCta } from "@/content/home";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";

type Action = { label: string; href: string };

/**
 * The single conversion band that closes every page. The default pairing is
 * the site-wide one: start learning, or apply for direct help.
 */
export function BottomCta({
  title = finalCta.title,
  copy = finalCta.copy,
  origin,
  primary = cta.academy,
  secondary = cta.coaching,
}: {
  title?: string;
  copy?: string;
  origin: string;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {copy}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <CtaLink
              href={primary.href}
              size="lg"
              className="group"
              event="cta_click"
              eventProps={{ origin, cta: primary.label }}
            >
              {primary.label}
              <ArrowGlyph className="group-hover:translate-x-0.5" />
            </CtaLink>
            <CtaLink
              href={secondary.href}
              variant="secondary"
              size="lg"
              event="cta_click"
              eventProps={{ origin, cta: secondary.label }}
            >
              {secondary.label}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
