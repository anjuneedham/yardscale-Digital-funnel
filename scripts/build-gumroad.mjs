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

  await writeFile(join(OUT, `${product.slug}.listing.md`), renderListing(product), "utf8");
  built.push(product);
  console.log(`  ${product.tier === "free" ? "FREE" : `$${product.price} `}  ${product.slug}.pdf`);
}

await browser.close();

const index = `# Gumroad upload pack — YardScale Digital Education Library

Generated by \`npm run build:gumroad\`. Regenerate whenever the content changes.

Each product has two files:
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
