import { Section } from "@/components/ui/Section";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

/** EMAIL CAPTURE. The owned audience — the one channel no platform can take away. */
export function Subscribe({
  origin,
  title = "Get the build notes.",
  copy = "What is being built, what is working, what is not, and each new lesson as it is published. Written by Andrew, sent when there is something worth reading.",
}: {
  origin: string;
  title?: string;
  copy?: string;
}) {
  return (
    <Section id="subscribe" divider tone="raised">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="label-mono mb-4 flex items-center gap-3">
            <span aria-hidden className="signal-rule" />
            Email updates
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {copy}
          </p>
        </div>
        <SubscribeForm origin={origin} />
      </div>
    </Section>
  );
}
