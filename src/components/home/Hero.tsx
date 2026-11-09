import { cta, heroVideo } from "@/content/site";
import { hero } from "@/content/home";
import { CtaLink, ArrowGlyph } from "@/components/ui/Cta";
import { VideoPlayer } from "@/components/media/VideoPlayer";

/**
 * Video-first hero. The first screen has to answer "what is this?" in five
 * seconds and put Andrew's video one tap away. To change the video, edit
 * `heroVideo` in src/content/site.ts — nothing here needs to change.
 */
export function Hero() {
  const actions = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <CtaLink
        href={cta.explore.href}
        size="lg"
        className="group"
        event="cta_click"
        eventProps={{ origin: "hero", cta: "explore" }}
      >
        {cta.explore.label}
        <ArrowGlyph className="group-hover:translate-x-0.5" />
      </CtaLink>
      <CtaLink
        href={cta.coaching.href}
        variant="secondary"
        size="lg"
        event="cta_click"
        eventProps={{ origin: "hero", cta: "coaching" }}
      >
        {cta.coaching.label}
      </CtaLink>
    </div>
  );

  return (
    <section className="pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pt-16">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.12fr] lg:gap-14">
          <div>
            <p className="label-mono flex items-center gap-3">
              <span aria-hidden className="signal-rule" />
              {hero.eyebrow}
            </p>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
              <span className="block">{hero.headline[0]}</span>
              <span className="block">{hero.headline[1]}</span>
              <span className="block text-signal">{hero.headline[2]}</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {hero.support}
            </p>
            {/* Desktop: actions sit under the copy. Wrapped, because CTAs are inline-flex. */}
            <div className="mt-8 hidden lg:block">{actions}</div>
          </div>

          <VideoPlayer
            url={heroVideo.url}
            title={heroVideo.title}
            poster={heroVideo.poster}
            placeholderNote={heroVideo.placeholderNote}
            origin="hero"
            priority
          />

          {/* Mobile: actions follow the video, so the video stays on the first screen. */}
          <div className="lg:hidden">{actions}</div>
        </div>
      </div>
    </section>
  );
}
