import { cn } from "@/lib/cn";

/**
 * The YardScale growth system, drawn.
 *
 * A signal travels through six stages — the same model the whole site is built
 * on. Pure SVG and CSS: no imagery, no canvas, no animation library. The signal
 * passes behind each stage card, so it reads as attention moving *through* a
 * system rather than around it.
 *
 * Two layouts share one set of stage data: a serpentine board from `sm` up, and
 * a single column on phones, where most social traffic lands.
 */

const STAGES = [
  { n: "01", name: "Attention", note: "Traffic arrives" },
  { n: "02", name: "Offer", note: "Something to want" },
  { n: "03", name: "System", note: "The path between" },
  { n: "04", name: "Conversion", note: "A decision is made" },
  { n: "05", name: "Customer", note: "Revenue exists" },
  { n: "06", name: "Growth", note: "It repeats" },
] as const;

/** Two rows, both read left to right, joined by a return channel. */
const DESKTOP_POSITIONS = [
  { x: 30, y: 90 },
  { x: 370, y: 90 },
  { x: 710, y: 90 },
  { x: 30, y: 330 },
  { x: 370, y: 330 },
  { x: 710, y: 330 },
];

const DESKTOP_PATH =
  "M 160 136 H 800 Q 840 136 840 176 V 216 Q 840 256 800 256 H 200 Q 160 256 160 296 V 376 H 840";
const MOBILE_PATH = "M 190 58 V 638";

export function GrowthSystemVisual({ className }: { className?: string }) {
  return (
    <figure className={cn("relative", className)}>
      <div className="rounded-card border border-line bg-panel/60 p-3 sm:p-5">
        <Frame />
        <svg
          viewBox="0 0 1000 520"
          className="hidden h-auto w-full sm:block"
          role="img"
          aria-label="The YardScale growth system: attention flows into an offer, through a system, into conversion, producing customers and growth."
        >
          <SvgDefs />
          <SignalPath d={DESKTOP_PATH} />
          {STAGES.map((stage, i) => (
            <StageCard
              key={stage.n}
              x={DESKTOP_POSITIONS[i].x}
              y={DESKTOP_POSITIONS[i].y}
              width={260}
              height={92}
              stage={stage}
              index={i}
            />
          ))}
          <Ticks />
        </svg>

        <svg
          viewBox="0 0 380 700"
          className="h-auto w-full sm:hidden"
          role="img"
          aria-label="The YardScale growth system: attention flows into an offer, through a system, into conversion, producing customers and growth."
        >
          <SvgDefs suffix="-m" />
          <SignalPath d={MOBILE_PATH} suffix="-m" />
          {STAGES.map((stage, i) => (
            <StageCard
              key={stage.n}
              x={40}
              y={16 + i * 116}
              width={300}
              height={84}
              stage={stage}
              index={i}
              suffix="-m"
            />
          ))}
        </svg>
      </div>
      <figcaption className="sr-only">
        A diagram of the six-stage YardScale growth system: attention, offer, system,
        conversion, customer, growth.
      </figcaption>
    </figure>
  );
}

function SvgDefs({ suffix = "" }: { suffix?: string }) {
  return (
    <defs>
      <linearGradient id={`ys-card${suffix}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1c1c1c" />
        <stop offset="100%" stopColor="#141414" />
      </linearGradient>
      <filter id={`ys-glow${suffix}`} x="-120%" y="-120%" width="340%" height="340%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/** The base track plus the animated signal travelling along it. */
function SignalPath({ d, suffix = "" }: { d: string; suffix?: string }) {
  return (
    <g>
      <path d={d} fill="none" stroke="#252525" strokeWidth="1.5" />
      <path
        d={d}
        fill="none"
        stroke="#a3e635"
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeDasharray="10 250"
        style={{ animation: `ys-dash${suffix} 6s linear infinite` }}
      />
      <style>{`
        @keyframes ys-dash${suffix} {
          from { stroke-dashoffset: 260; }
          to { stroke-dashoffset: -2340; }
        }
      `}</style>
    </g>
  );
}

function StageCard({
  x,
  y,
  width,
  height,
  stage,
  index,
  suffix = "",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  stage: (typeof STAGES)[number];
  index: number;
  suffix?: string;
}) {
  const isTerminal = index === STAGES.length - 1;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="10"
        fill={`url(#ys-card${suffix})`}
        stroke={isTerminal ? "#54661d" : "#373737"}
        strokeWidth="1"
      />
      <circle
        cx={x + 18}
        cy={y + height / 2}
        r="3"
        fill="#a3e635"
        filter={`url(#ys-glow${suffix})`}
        style={{
          animation: "ys-node 3.2s ease-in-out infinite",
          animationDelay: `${index * 0.45}s`,
          transformOrigin: `${x + 18}px ${y + height / 2}px`,
        }}
      />
      <text
        x={x + 34}
        y={y + height / 2 - 6}
        fill="#f4f4f4"
        fontSize="17"
        fontWeight="600"
        letterSpacing="-0.2"
        fontFamily="var(--font-geist-sans), system-ui, sans-serif"
      >
        {stage.name}
      </text>
      <text
        x={x + 34}
        y={y + height / 2 + 15}
        fill="#989898"
        fontSize="12"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      >
        {stage.note}
      </text>
      <text
        x={x + width - 16}
        y={y + 22}
        fill="#787878"
        fontSize="10"
        textAnchor="end"
        letterSpacing="1.4"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      >
        {stage.n}
      </text>
      <style>{`
        @keyframes ys-node {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </g>
  );
}

/** Measurement ticks — the technical detail that makes the board feel instrumented. */
function Ticks() {
  return (
    <g stroke="#252525" strokeWidth="1" aria-hidden>
      <line x1="30" y1="30" x2="30" y2="52" />
      <line x1="30" y1="30" x2="52" y2="30" />
      <line x1="970" y1="490" x2="970" y2="468" />
      <line x1="970" y1="490" x2="948" y2="490" />
      <text
        x="30"
        y="472"
        fill="#787878"
        fontSize="10"
        letterSpacing="1.6"
        fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      >
        GROWTH SYSTEM / SIGNAL PATH
      </text>
    </g>
  );
}

/** Corner brackets around the board. */
function Frame() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-signal/40" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-signal/40" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-signal/40" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-signal/40" />
    </div>
  );
}
