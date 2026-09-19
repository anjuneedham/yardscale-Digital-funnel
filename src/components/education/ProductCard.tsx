import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  difficultyLabels,
  formatDuration,
  formatLabels,
  formatPrice,
  type EducationProduct,
} from "@/content/education/types";

/** A single meta pill — format, difficulty, duration. */
export function MetaPill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The price or Free badge. */
export function PriceBadge({ price, className }: { price: number | null; className?: string }) {
  const free = price === null;
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-3 py-1 font-mono text-xs font-semibold tracking-[0.04em]",
        free
          ? "bg-signal text-[color:var(--color-on-signal)]"
          : "border border-line-strong bg-raised text-ink",
        className,
      )}
    >
      {formatPrice(price)}
    </span>
  );
}

/** Product meta row, reused on cards and detail pages. */
export function ProductMeta({ product }: { product: EducationProduct }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <MetaPill>{formatLabels[product.format]}</MetaPill>
      <MetaPill>{difficultyLabels[product.difficulty]}</MetaPill>
      <MetaPill>{formatDuration(product.estimatedMinutes)}</MetaPill>
    </div>
  );
}

export function ProductCard({ product }: { product: EducationProduct }) {
  const href = `/education/${product.slug}`;

  return (
    <article className="group relative flex h-full flex-col rounded-card border border-line bg-panel/60 p-6 transition-colors duration-200 hover:border-line-strong sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <p className="label-mono text-faint">{formatLabels[product.format]}</p>
        <PriceBadge price={product.price} />
      </div>

      <h3 className="mt-4 text-pretty text-xl font-semibold leading-snug tracking-[-0.015em] text-ink">
        <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
          {product.title}
        </Link>
      </h3>

      <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
        {product.summary}
      </p>

      <div className="mt-5">
        <p className="label-mono mb-2.5 text-faint">What you&rsquo;ll learn</p>
        <ul className="space-y-1.5">
          {product.whatYouWillLearn.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <MetaPill>{difficultyLabels[product.difficulty]}</MetaPill>
          <MetaPill>{formatDuration(product.estimatedMinutes)}</MetaPill>
          <MetaPill>
            {product.chapters.length} {product.chapters.length === 1 ? "part" : "parts"}
          </MetaPill>
        </div>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-signal">
          {product.tier === "free" ? "Start free" : "View details"}
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h9.5M8.5 4l4 4-4 4" />
          </svg>
        </p>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: EducationProduct[] }) {
  if (products.length === 0) {
    return (
      <p className="rounded-card border border-line bg-panel/40 p-8 text-center text-sm text-muted">
        Nothing here yet.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
