/**
 * Builds Gumroad-ready deliverables from the Education Library content.
 *
 * For every product in src/content/education it produces:
 *   out/gumroad/<slug>.pdf          the deliverable a buyer downloads
 *   out/gumroad/<slug>.listing.md   title, description and copy for the listing
 *   out/gumroad/README.md           an index with prices and upload notes
 *
 * The PDFs are laid out light-on-white rather than in the site's dark theme,
 * because buyers print these. Brand identity carries through the lime accent,
 * the mono labels and the typographic rhythm.
 *
 * Run:  npm run build:gumroad
 *
 * Nothing here is published by the site — out/ is gitignored, and paid PDFs
 * must never be served from public/.
 */

import { mkdir, writeFile, rm, readFile, readdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const OUT = "out/gumroad";
const JS = "out/education-js";

/**
 * Compiles the typed content modules to plain ESM so this script can import
 * them. TypeScript emits extensionless specifiers, which Node's ESM loader
 * rejects, so they are rewritten here.
 */
async function compileContent() {
  await rm(JS, { recursive: true, force: true });
  execFileSync(
    "npx",
    [
      "tsc",
      "src/content/education/index.ts",
      "--outDir", JS,
      "--module", "esnext",
      "--target", "es2022",
      "--moduleResolution", "bundler",
      "--skipLibCheck",
      "--rootDir", "src",
    ],
    { stdio: "inherit" },
  );

  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) await walk(path);
      else if (entry.name.endsWith(".js")) {
        const src = await readFile(path, "utf8");
        await writeFile(path, src.replace(/from "(\.[^"]*?)"/g, (m, p) => (p.endsWith(".js") ? m : `from "${p}.js"`)));
      }
    }
  };
  await walk(JS);
  await writeFile(join(JS, "package.json"), JSON.stringify({ type: "module" }), "utf8");
}

await compileContent();

const playwrightModule = process.env.PLAYWRIGHT_MODULE ?? "playwright";
const { chromium } = await import(playwrightModule);
const { educationProducts, formatDuration, formatPrice, categoryLabels, formatLabels, difficultyLabels } =
  await import(pathToFileURL(resolve(JS, "content/education/index.js")).href);

const BRAND = {
  signal: "#7a9e00", // darkened lime — the screen lime is illegible on white
  signalBg: "#f2ffcc",
  ink: "#11110f",
  soft: "#3d3d38",
  muted: "#6b6b63",
  faint: "#8f8f86",
  line: "#e2e2dc",
  panel: "#faf9f6",
};

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ---------------------------------------------------------------- blocks */

function renderBlock(b) {
  switch (b.type) {
    case "heading":
      return `<h3 class="bh">${esc(b.text)}</h3>`;
    case "text":
      return `<p>${esc(b.body)}</p>`;
    case "list":
      return b.ordered
        ? `<ol class="nl">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`
        : `<ul class="bl">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    case "framework":
      return `<div class="box framework"><p class="lbl">${esc(b.title)}</p><ol class="steps">${b.steps
        .map(
          (s, i) =>
            `<li><span class="num">${String(i + 1).padStart(2, "0")}</span><div><strong>${esc(
              s.label,
            )}</strong><span>${esc(s.detail)}</span></div></li>`,
        )
        .join("")}</ol></div>`;
    case "example":
      return `<div class="box example">${b.title ? `<p class="lbl">${esc(b.title)}</p>` : ""}<p>${esc(
        b.body,
      )}</p></div>`;
    case "callout":
      return `<div class="box callout ${b.tone}">${b.title ? `<p class="lbl">${esc(b.title)}</p>` : ""}<p>${esc(
        b.body,
      )}</p></div>`;
    case "quote":
      return `<blockquote><p>${esc(b.body)}</p>${
        b.attribution ? `<cite>— ${esc(b.attribution)}</cite>` : ""
      }</blockquote>`;
    default:
      return "";
  }
}

function renderChapter(ch, product) {
  const parts = [];
  parts.push(`<section class="chapter">
    <p class="ceyebrow">Part ${ch.number} of ${product.chapters.length} &middot; ${esc(
      formatDuration(ch.durationMinutes),
    )}</p>
    <h2 class="ctitle">${esc(ch.title)}</h2>
    <p class="csummary">${esc(ch.summary)}</p>
    <div class="body">${ch.blocks.map(renderBlock).join("")}</div>`);

  if (ch.template) {
    parts.push(`<div class="box template"><p class="lbl">Template &middot; ${esc(ch.template.title)}</p>
      <pre>${esc(ch.template.body)}</pre>
      ${
        ch.template.adapt
          ? `<p class="sublbl">Before you use it</p><ul class="bl">${ch.template.adapt
              .map((a) => `<li>${esc(a)}</li>`)
              .join("")}</ul>`
          : ""
      }</div>`);
  }

  if (ch.scorecard) {
    const sc = ch.scorecard;
    parts.push(`<div class="box scorecard"><p class="lbl">Scorecard &middot; ${esc(sc.title)}</p>
      <p>${esc(sc.instructions)}</p><p class="scale">${esc(sc.scale)}</p>
      <ol class="scorerows">${sc.rows
        .map(
          (r, i) =>
            `<li><span class="num">${String(i + 1).padStart(2, "0")}</span><div class="sr"><strong>${esc(
              r.label,
            )}</strong><span>${esc(r.detail)}</span></div><span class="scorebox"></span></li>`,
        )
        .join("")}</ol>
      <p class="sublbl">What your total means</p>
      <dl class="interp">${sc.interpretation
        .map((e) => `<dt>${esc(e.range)}</dt><dd>${esc(e.meaning)}</dd>`)
        .join("")}</dl></div>`);
  }

  if (ch.exercise) {
    parts.push(`<div class="box exercise"><p class="lbl">Exercise &middot; ${esc(ch.exercise.title)}</p>
      <p>${esc(ch.exercise.prompt)}</p>
      ${
        ch.exercise.steps
          ? `<ol class="nl">${ch.exercise.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`
          : ""
      }</div>`);
  }

  if (ch.checklist) {
    parts.push(`<div class="box checklist"><p class="lbl">${esc(ch.checklist.title)}</p>
      ${ch.checklist.groups
        .map(
          (g) =>
            `${g.label ? `<p class="sublbl">${esc(g.label)}</p>` : ""}<ul class="checks">${g.items
              .map((i) => `<li><span class="tick"></span>${esc(i)}</li>`)
              .join("")}</ul>`,
        )
        .join("")}</div>`);
  }

  if (ch.actionStep) {
    parts.push(`<div class="box action"><p class="lbl">Do this now</p><p>${esc(ch.actionStep)}</p></div>`);
  }

  if (ch.recap) {
    parts.push(`<div class="box recap"><p class="lbl">Recap</p><ul class="bl">${ch.recap
      .map((r) => `<li>${esc(r)}</li>`)
      .join("")}</ul></div>`);
  }

  parts.push(`</section>`);
  return parts.join("");
}

/* ------------------------------------------------------------------ page */

function renderDocument(product) {
  const price = formatPrice(product.price);

  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(product.title)}</title>
<style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body { margin:0; font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
         color:${BRAND.ink}; font-size:10.5pt; line-height:1.62; }
  h1,h2,h3,strong { font-weight:600; letter-spacing:-0.01em; }
  p { margin:0 0 0.85em; }

  /* cover */
  .cover { height: 247mm; display:flex; flex-direction:column; page-break-after:always; }
  .mark { font-family: ui-monospace, Menlo, monospace; font-size:8.5pt; letter-spacing:0.16em;
          text-transform:uppercase; color:${BRAND.muted}; }
  .mark b { color:${BRAND.ink}; font-weight:600; }
  .cover-mid { margin-top:auto; }
  .ctag { display:inline-block; background:${BRAND.signalBg}; border:1px solid ${BRAND.signal};
          color:#3f5200; font-family:ui-monospace,Menlo,monospace; font-size:8pt; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase; padding:4px 10px; border-radius:99px; }
  .cover h1 { font-size:30pt; line-height:1.06; margin:16px 0 0; max-width:15em; }
  .cover .sub { font-size:12pt; color:${BRAND.soft}; margin-top:14px; max-width:34em; }
  .meta { margin-top:26px; border-top:1px solid ${BRAND.line}; padding-top:16px;
          display:flex; gap:30px; flex-wrap:wrap; }
  .meta div { min-width:80px; }
  .meta dt { font-family:ui-monospace,Menlo,monospace; font-size:7.5pt; letter-spacing:0.1em;
             text-transform:uppercase; color:${BRAND.faint}; }
  .meta dd { margin:4px 0 0; font-size:10pt; }
  .cover-foot { margin-top:auto; border-top:1px solid ${BRAND.line}; padding-top:12px;
                font-size:8.5pt; color:${BRAND.muted}; }

  /* contents */
  .toc { page-break-after:always; }
  .toc h2 { font-size:16pt; margin:0 0 20px; }
  .toc ol { list-style:none; padding:0; margin:0; counter-reset:t; }
  .toc li { counter-increment:t; display:flex; gap:14px; padding:11px 0;
            border-bottom:1px solid ${BRAND.line}; }
  .toc li::before { content:counter(t,decimal-leading-zero);
            font-family:ui-monospace,Menlo,monospace; font-size:8.5pt; color:${BRAND.signal}; padding-top:3px; }
  .toc .tt { font-weight:600; }
  .toc .ts { color:${BRAND.muted}; font-size:9.5pt; display:block; margin-top:2px; }

  /* chapters */
  .chapter { page-break-before:always; }
  .ceyebrow { font-family:ui-monospace,Menlo,monospace; font-size:8pt; letter-spacing:0.1em;
              text-transform:uppercase; color:${BRAND.signal}; margin:0 0 8px; }
  .ctitle { font-size:19pt; line-height:1.15; margin:0 0 10px; }
  .csummary { color:${BRAND.soft}; font-size:11pt; margin:0 0 22px;
              padding-bottom:18px; border-bottom:1px solid ${BRAND.line}; }
  .bh { font-size:12pt; margin:22px 0 9px; }
  .body p { max-width:38em; }

  ul.bl, ol.nl { margin:0 0 1em; padding:0; list-style:none; }
  ul.bl li, ol.nl li { position:relative; padding-left:20px; margin-bottom:7px; }
  ul.bl li::before { content:""; position:absolute; left:4px; top:0.62em; width:5px; height:5px;
                     border-radius:50%; background:${BRAND.signal}; }
  ol.nl { counter-reset:n; }
  ol.nl li { counter-increment:n; }
  ol.nl li::before { content:counter(n,decimal-leading-zero); position:absolute; left:0; top:0.06em;
                     font-family:ui-monospace,Menlo,monospace; font-size:8pt; color:${BRAND.signal}; }

  .box { border:1px solid ${BRAND.line}; border-radius:8px; padding:14px 16px; margin:16px 0;
         background:${BRAND.panel}; page-break-inside:avoid; }
  .box p:last-child { margin-bottom:0; }
  .lbl { font-family:ui-monospace,Menlo,monospace; font-size:8pt; letter-spacing:0.09em;
         text-transform:uppercase; color:${BRAND.muted}; margin:0 0 9px; }
  .sublbl { font-family:ui-monospace,Menlo,monospace; font-size:7.5pt; letter-spacing:0.09em;
            text-transform:uppercase; color:${BRAND.faint}; margin:14px 0 7px; }

  .framework .steps { list-style:none; padding:0; margin:0; }
  .framework .steps li { display:flex; gap:12px; margin-bottom:11px; }
  .framework .steps li:last-child { margin-bottom:0; }
  .num { font-family:ui-monospace,Menlo,monospace; font-size:8pt; color:${BRAND.signal}; padding-top:3px; }
  .framework strong { display:block; }
  .framework span { color:${BRAND.soft}; font-size:10pt; }

  .callout.signal { background:${BRAND.signalBg}; border-color:${BRAND.signal}; }
  .callout.signal .lbl { color:#4d6600; }
  .callout.warn { background:#fff7e8; border-color:#e0b365; }
  .callout.warn .lbl { color:#8a5d00; }
  .example { background:#fff; }
  blockquote { margin:16px 0; padding-left:16px; border-left:3px solid ${BRAND.signal}; }
  blockquote p { font-size:12pt; font-weight:500; }
  cite { font-style:normal; color:${BRAND.muted}; font-size:9.5pt; }

  .template pre { background:#fff; border:1px solid ${BRAND.line}; border-radius:6px; padding:12px;
                  font-family:ui-monospace,Menlo,monospace; font-size:8.5pt; line-height:1.5;
                  white-space:pre-wrap; margin:0; }
  .action { background:${BRAND.signalBg}; border-color:${BRAND.signal}; }
  .action .lbl { color:#4d6600; }

  ul.checks { list-style:none; padding:0; margin:0 0 6px; }
  ul.checks li { position:relative; padding-left:26px; margin-bottom:8px; font-size:10pt; }
  .tick { position:absolute; left:0; top:0.18em; width:13px; height:13px; border:1.5px solid ${BRAND.muted};
          border-radius:3px; background:#fff; }

  .scorerows { list-style:none; padding:0; margin:0; }
  .scorerows li { display:flex; gap:11px; align-items:flex-start; padding:9px 0;
                  border-bottom:1px solid ${BRAND.line}; }
  .scorerows li:last-child { border-bottom:0; }
  .sr { flex:1; }
  .sr strong { display:block; }
  .sr span { color:${BRAND.soft}; font-size:9.5pt; }
  .scorebox { width:34px; height:26px; border:1.5px dashed ${BRAND.muted}; border-radius:4px; flex:none; }
  .scale { font-family:ui-monospace,Menlo,monospace; font-size:8.5pt; color:${BRAND.muted}; }
  .interp { margin:0; }
  .interp dt { font-family:ui-monospace,Menlo,monospace; font-size:8.5pt; color:${BRAND.signal};
               margin-top:9px; }
  .interp dd { margin:2px 0 0; font-size:10pt; color:${BRAND.soft}; }

  .outro { page-break-before:always; }
  .outro h2 { font-size:17pt; margin:0 0 12px; }
</style></head><body>

<div class="cover">
  <p class="mark"><b>YardScale Digital</b> &nbsp;/&nbsp; Education Library</p>
  <div class="cover-mid">
    <span class="ctag">${esc(formatLabels[product.format])} &middot; ${esc(price)}</span>
    <h1>${esc(product.title)}</h1>
    <p class="sub">${esc(product.description)}</p>
    <dl class="meta">
      <div><dt>Level</dt><dd>${esc(difficultyLabels[product.difficulty])}</dd></div>
      <div><dt>Time</dt><dd>${esc(formatDuration(product.estimatedMinutes))}</dd></div>
      <div><dt>Parts</dt><dd>${product.chapters.length}</dd></div>
      <div><dt>Topic</dt><dd>${esc(categoryLabels[product.category])}</dd></div>
    </dl>
  </div>
  <p class="cover-foot">yardscaledigital.com &nbsp;&middot;&nbsp; This guide describes methods and
  approaches. It does not promise or guarantee any particular business result.</p>
</div>

<div class="toc">
  <h2>What's inside</h2>
  <ol>${product.chapters
    .map(
      (c) =>
        `<li><div><span class="tt">${esc(c.title)}</span><span class="ts">${esc(c.summary)}</span></div></li>`,
    )
    .join("")}</ol>
  <p class="sublbl">Resources included</p>
  <ul class="bl">${product.includedResources
    .map((r) => `<li><strong>${esc(r.title)}</strong> — ${esc(r.detail)}</li>`)
    .join("")}</ul>
</div>

${product.chapters.map((c) => renderChapter(c, product)).join("")}

<div class="outro">
  <h2>Where to go next</h2>
  ${
    product.nextStep
      ? `<p>${esc(product.nextStep.pitch)}</p><p><strong>${esc(
          educationProducts.find((p) => p.slug === product.nextStep.slug)?.title ?? "",
        )}</strong> — yardscaledigital.com/education/${esc(product.nextStep.slug)}</p>`
      : ""
  }
  <div class="box">
    <p class="lbl">Want this built rather than taught?</p>
    <p>YardScale Digital builds high-ticket offers, courses and funnels for solopreneurs, then runs the
    paid distribution that fills them. If you would rather have it built for you, start at
    yardscaledigital.com and find your bottleneck.</p>
  </div>
</div>

</body></html>`;
}

/* ---------------------------------------------------------------- images */

/**
 * Hand-built geometric motifs, per the project rule against stock imagery.
 *
 * Keyed by product slug rather than by category: three of these products are
 * about websites and two about funnels, so category-level art would put
 * near-identical thumbnails next to each other in a marketplace grid. The
 * category entries are the fallback for anything added later.
 */
const MOTIFS = {
  // Websites — a browser frame with content and one call to action.
  "build-your-first-website": `
    <rect x="14" y="20" width="172" height="120" rx="8"/>
    <path d="M14 46h172"/>
    <circle cx="30" cy="33" r="3.5" fill="currentColor" stroke="none"/>
    <circle cx="42" cy="33" r="3.5" fill="currentColor" stroke="none"/>
    <path d="M32 66h86M32 82h120M32 98h64"/>
    <rect x="32" y="112" width="52" height="16" rx="8" fill="currentColor" stroke="none" opacity="0.9"/>`,

  // Landing page — one narrow page driving down to a single action.
  "landing-page": `
    <rect x="58" y="12" width="84" height="142" rx="9"/>
    <path d="M74 38h52M74 54h34"/>
    <path d="M74 76h52M74 88h40"/>
    <path d="M100 100v12M94 107l6 6 6-6"/>
    <rect x="74" y="122" width="52" height="18" rx="9" fill="currentColor" stroke="none"/>`,

  // Launch checklist — two verified, one still open.
  "website-launch-checklist": `
    <rect x="42" y="28" width="24" height="24" rx="6"/>
    <path d="M48 40l4.5 5 9-11"/><path d="M80 40h76"/>
    <rect x="42" y="70" width="24" height="24" rx="6"/>
    <path d="M48 82l4.5 5 9-11"/><path d="M80 82h58"/>
    <rect x="42" y="112" width="24" height="24" rx="6"/>
    <path d="M80 124h70"/>`,

  // Funnel mistakes — the same funnel, leaking at every stage.
  "funnel-mistakes": `
    <path d="M18 26h164M34 60h46M112 60h54M52 94h34M118 94h30M72 128h56"/>
    <path d="M100 128v18"/>
    <circle cx="100" cy="156" r="8" fill="currentColor" stroke="none"/>
    <circle cx="94" cy="74" r="4.5" fill="currentColor" stroke="none" opacity="0.8"/>
    <circle cx="100" cy="88" r="3" fill="currentColor" stroke="none" opacity="0.45"/>
    <circle cx="176" cy="74" r="4.5" fill="currentColor" stroke="none" opacity="0.8"/>
    <circle cx="188" cy="90" r="3" fill="currentColor" stroke="none" opacity="0.45"/>`,

  // Funnel blueprint — the clean, complete sequence.
  "funnel-blueprint": `
    <path d="M18 26h164M34 60h132M52 94h96M72 128h56"/>
    <path d="M100 128v22"/>
    <circle cx="100" cy="160" r="9" fill="currentColor" stroke="none"/>`,

  // Client acquisition — many sources converging into one pipeline.
  "client-acquisition": `
    <circle cx="26" cy="34" r="8"/><circle cx="26" cy="80" r="8"/><circle cx="26" cy="126" r="8"/>
    <path d="M34 34c60 0 60 46 120 46M34 80h120M34 126c60 0 60-46 120-46"/>
    <circle cx="164" cy="80" r="14" fill="currentColor" stroke="none"/>`,

  // First client — one connection made, the rest still waiting.
  "first-online-client": `
    <circle cx="30" cy="38" r="7" opacity="0.32"/>
    <circle cx="30" cy="126" r="7" opacity="0.32"/>
    <circle cx="30" cy="82" r="11"/>
    <path d="M41 82h76"/>
    <circle cx="146" cy="82" r="22" fill="currentColor" stroke="none"/>
    <path d="M137 82l6.5 7 13-15" stroke="#050505" stroke-width="4.5"/>`,

  // App building — a product in the hand.
  "app-building": `
    <rect x="64" y="14" width="72" height="132" rx="12"/>
    <path d="M88 26h24"/>
    <circle cx="82" cy="60" r="5" fill="currentColor" stroke="none"/>
    <circle cx="100" cy="60" r="5" fill="currentColor" stroke="none"/>
    <circle cx="118" cy="60" r="5" fill="currentColor" stroke="none"/>
    <circle cx="82" cy="84" r="5" fill="currentColor" stroke="none"/>
    <circle cx="100" cy="84" r="5" fill="currentColor" stroke="none"/>
    <circle cx="118" cy="84" r="5" fill="currentColor" stroke="none"/>
    <rect x="80" y="108" width="40" height="14" rx="7" fill="currentColor" stroke="none" opacity="0.9"/>`,

  // Category fallbacks for products added later.
  growth: `
    <path d="M18 146h168"/>
    <rect x="32" y="110" width="26" height="36" rx="3"/>
    <rect x="70" y="86" width="26" height="60" rx="3"/>
    <rect x="108" y="56" width="26" height="90" rx="3" fill="currentColor" stroke="none" opacity="0.9"/>
    <rect x="146" y="26" width="26" height="120" rx="3" fill="currentColor" stroke="none"/>`,
};

function motif(product, size) {
  const art = MOTIFS[product.slug] ?? MOTIFS[product.category] ?? MOTIFS.growth;
  return `<svg viewBox="0 0 200 165" width="${size}" height="${size * 0.825}" fill="none"
    stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
    ${art}</svg>`;
}

const IMAGE_CSS = `
  @font-face { font-family: x; src: local("Helvetica"); }
  * { box-sizing:border-box; margin:0; }
  body { font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
         background:#050505; color:#f7f6f2; overflow:hidden; }
  .grid { position:absolute; inset:0;
    background-image:linear-gradient(rgba(56,56,56,.42) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(56,56,56,.42) 1px, transparent 1px);
    background-size:48px 48px; }
  .glow { position:absolute; border-radius:50%;
    background:radial-gradient(closest-side, rgba(189,250,9,.16), transparent); }
  .mark { font-family:ui-monospace,Menlo,monospace; font-size:13px; letter-spacing:.2em;
          text-transform:uppercase; color:#84827c; }
  .mark b { color:#f7f6f2; font-weight:600; }
  .tag { display:inline-block; background:#bdfa09; color:#0a0a0a; font-family:ui-monospace,Menlo,monospace;
         font-weight:700; letter-spacing:.1em; text-transform:uppercase; border-radius:99px; }
  .motif { color:#bdfa09; opacity:.92; }
  .meta { font-family:ui-monospace,Menlo,monospace; letter-spacing:.14em;
          text-transform:uppercase; color:#84827c; }
  .rule { height:2px; background:#bdfa09; border-radius:2px; }`;

function renderCover(product) {
  const price = product.price === null ? "Free" : `$${product.price}`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${IMAGE_CSS}
    body { width:1280px; height:720px; position:relative; }
    .wrap { position:relative; height:100%; display:flex; align-items:center;
            padding:56px 64px; gap:48px; }
    .left { flex:1; min-width:0; }
    .tag { font-size:15px; padding:9px 18px; }
    h1 { font-size:58px; line-height:1.04; letter-spacing:-.03em; font-weight:600;
         margin:26px 0 0; max-width:13em; }
    .sub { font-size:21px; line-height:1.5; color:#cac8c2; margin-top:20px; max-width:26em; }
    .meta { font-size:13px; margin-top:34px; }
    .rule { width:64px; margin-top:30px; }
    .right { flex:none; width:300px; display:flex; justify-content:center; }
    .foot { position:absolute; left:64px; bottom:38px; font-family:ui-monospace,Menlo,monospace;
            font-size:13px; color:#84827c; letter-spacing:.06em; }
  </style></head><body>
    <div class="grid"></div>
    <div class="glow" style="width:760px;height:560px;right:-180px;top:-120px;"></div>
    <div class="wrap">
      <div class="left">
        <p class="mark"><b>YardScale Digital</b> &nbsp;/&nbsp; Education Library</p>
        <div style="margin-top:38px"><span class="tag">${esc(formatLabels[product.format])} &middot; ${esc(price)}</span></div>
        <h1>${esc(product.title)}</h1>
        <p class="sub">${esc(product.summary)}</p>
        <div class="rule"></div>
        <p class="meta">${esc(difficultyLabels[product.difficulty])} &nbsp;&middot;&nbsp; ${esc(
          formatDuration(product.estimatedMinutes),
        )} &nbsp;&middot;&nbsp; ${product.chapters.length} parts</p>
      </div>
      <div class="right"><span class="motif">${motif(product, 280)}</span></div>
    </div>
    <p class="foot">yardscaledigital.com</p>
  </body></html>`;
}

function renderThumb(product) {
  const price = product.price === null ? "Free" : `$${product.price}`;
  const title = product.shortTitle ?? product.title;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${IMAGE_CSS}
    body { width:600px; height:600px; position:relative; }
    .wrap { position:relative; height:100%; display:flex; flex-direction:column;
            padding:44px 44px 40px; }
    .mark { font-size:11px; letter-spacing:.18em; }
    .art { flex:1; display:flex; align-items:center; justify-content:center; }
    .tag { font-size:13px; padding:7px 15px; }
    h1 { font-size:38px; line-height:1.08; letter-spacing:-.028em; font-weight:600;
         margin:18px 0 0; }
    .rule { width:48px; margin-top:22px; }
  </style></head><body>
    <div class="grid"></div>
    <div class="glow" style="width:520px;height:420px;left:50%;top:-80px;transform:translateX(-50%);"></div>
    <div class="wrap">
      <p class="mark"><b>YardScale</b> &nbsp;/&nbsp; Education</p>
      <div class="art"><span class="motif">${motif(product, 240)}</span></div>
      <div>
        <span class="tag">${esc(formatLabels[product.format])} &middot; ${esc(price)}</span>
        <h1>${esc(title)}</h1>
        <div class="rule"></div>
      </div>
    </div>
  </body></html>`;
}

/* --------------------------------------------------------------- listing */

function renderListing(product) {
  const price = product.price === null ? "0 (free / pay-what-you-want)" : String(product.price);
  const learn = product.whatYouWillLearn.map((i) => `- ${i}`).join("\n");
  const forWho = product.whoItIsFor.map((i) => `- ${i}`).join("\n");
  const build = product.whatYouWillBuild.map((i) => `- ${i}`).join("\n");
  const resources = product.includedResources.map((r) => `- **${r.title}** — ${r.detail}`).join("\n");
  const contents = product.chapters
    .map((c) => `${c.number}. **${c.title}** — ${c.summary}`)
    .join("\n");
  const faqs = product.faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join("\n\n");

  return `# ${product.title}

**Suggested price:** $${price}
**Format:** ${formatLabels[product.format]} · PDF
**Level:** ${difficultyLabels[product.difficulty]}
**Length:** ${product.chapters.length} parts · ~${formatDuration(product.estimatedMinutes)} to work through
**Category:** ${categoryLabels[product.category]}
**File to upload:** \`${product.slug}.pdf\`

---

## Gumroad summary (the one-liner under the title)

${product.summary}

---

## Description

${product.description}

### What you'll learn

${learn}

### Who it's for

${forWho}

### What you'll finish with

${build}

### Included resources

${resources}

---

## Contents

${contents}

---

## FAQ

${faqs}

---

## Suggested Gumroad settings

- **URL slug:** \`${product.slug}\`
- **Price:** ${product.price === null ? "Free, or enable pay-what-you-want with a $0 minimum to build the list" : `$${product.price} fixed`}
- **Category:** Education / Business
- **Summary field:** use the one-liner above
- **Tags:** ${[categoryLabels[product.category].toLowerCase(), product.format, difficultyLabels[product.difficulty].toLowerCase(), "solopreneur"].join(", ")}
- **Receipt note:** Point buyers at yardscaledigital.com/education for the rest of the library.
${product.nextStep ? `- **Cross-sell:** recommend \`${product.nextStep.slug}\` after purchase.` : ""}

> Do not add income claims, guaranteed results, or testimonials you cannot substantiate.
`;
}

/* ------------------------------------------------------------------ main */

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage();
const built = [];

for (const product of educationProducts) {
  const html = renderDocument(product);
  await page.setContent(html, { waitUntil: "load" });
  const pdfPath = join(OUT, `${product.slug}.pdf`);
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate: `<div style="width:100%;font-size:7pt;color:#8f8f86;padding:0 16mm;
      font-family:-apple-system,Helvetica,Arial,sans-serif;display:flex;justify-content:space-between;">
      <span>YardScale Digital &middot; ${esc(product.title)}</span>
      <span class="pageNumber"></span></div>`,
    margin: { top: "18mm", bottom: "20mm", left: "16mm", right: "16mm" },
  });

  // Cover 1280x720 and thumbnail 600x600, rendered at 2x for crispness.
  const shot = await browser.newPage({ deviceScaleFactor: 2 });

  await shot.setViewportSize({ width: 1280, height: 720 });
  await shot.setContent(renderCover(product), { waitUntil: "load" });
  await shot.screenshot({ path: join(OUT, `${product.slug}.cover.png`) });

  await shot.setViewportSize({ width: 600, height: 600 });
  await shot.setContent(renderThumb(product), { waitUntil: "load" });
  await shot.screenshot({ path: join(OUT, `${product.slug}.thumb.png`) });

  await shot.close();

  await writeFile(join(OUT, `${product.slug}.listing.md`), renderListing(product), "utf8");
  built.push(product);
  console.log(`  ${product.tier === "free" ? "FREE" : `$${product.price} `}  ${product.slug}  (pdf + cover + thumb + listing)`);
}

await browser.close();

const index = `# Gumroad upload pack — YardScale Digital Education Library

Generated by \`npm run build:gumroad\`. Regenerate whenever the content changes.

Each product has four files:
- \`<slug>.pdf\` — upload this as the product file
- \`<slug>.listing.md\` — title, description, contents and settings to paste into Gumroad

## Free — list builders

${built
  .filter((p) => p.tier === "free")
  .map((p) => `- **${p.title}** — \`${p.slug}.pdf\` (${p.chapters.length} parts)`)
  .join("\n")}

## Paid

${built
  .filter((p) => p.tier === "paid")
  .map((p) => `- **${p.title}** — $${p.price} — \`${p.slug}.pdf\` (${p.chapters.length} parts)`)
  .join("\n")}

## Suggested order of upload

1. Put the three free products up first at $0 (or pay-what-you-want with a $0 minimum). They build the
   email list Gumroad collects for you, and they are the top of the funnel for everything else.
2. Add the $9 Website Launch Checklist next — it is the lowest-friction paid purchase and it converts
   readers of the free website mini-course.
3. Then the four $19 playbooks.

## After uploading

- Put each Gumroad URL into \`src/content/education/products/<slug>.ts\` when you wire up checkout, or
  link to it from the product page.
- Gumroad handles VAT and delivery. You do not need the entitlement seam in
  \`src/lib/education/access.ts\` until you want the content readable on the site itself.

Do not add income claims, guaranteed results, or testimonials you cannot substantiate.
`;

await writeFile(join(OUT, "README.md"), index, "utf8");
console.log(`\n${built.length} products written to ${OUT}/`);
