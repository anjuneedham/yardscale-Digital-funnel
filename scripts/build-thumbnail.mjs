/**
 * Builds YouTube thumbnail variants for the "opposite websites" video.
 *
 *   node scripts/build-thumbnail.mjs                 → placeholder person slot
 *   PHOTO=/path/to/cutout.png node scripts/...       → composites your cutout
 *
 * Output: out/video/thumb-a.png, thumb-b.png, thumb-c.png (2560x1440, 2x).
 *
 * The photo should be a background-removed PNG of you, roughly waist-up,
 * portrait orientation. remove.bg or Photoshop's subject select both work.
 *
 * Deliberately carries no invented statistics. The contrast that does the
 * work here is the price gap, which is true.
 */

import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out/video";
const playwrightModule = process.env.PLAYWRIGHT_MODULE ?? "playwright";
const { chromium } = await import(playwrightModule);

let photoData = null;
if (process.env.PHOTO) {
  const buf = await readFile(process.env.PHOTO);
  const ext = process.env.PHOTO.split(".").pop().toLowerCase();
  photoData = `data:image/${ext === "jpg" ? "jpeg" : ext};base64,${buf.toString("base64")}`;
}

const LIME = "#bdfa09";

const BASE_CSS = `
  * { box-sizing:border-box; margin:0; }
  body { width:1280px; height:720px; position:relative; overflow:hidden;
         background:#050505; color:#f7f6f2;
         font-family:-apple-system,"Segoe UI Black","Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  .grid { position:absolute; inset:0;
    background-image:linear-gradient(rgba(60,60,60,.5) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(60,60,60,.5) 1px,transparent 1px);
    background-size:60px 60px; }
  .glow { position:absolute; border-radius:50%;
    background:radial-gradient(closest-side, rgba(189,250,9,.22), transparent); }

  /* person slot */
  .person { position:absolute; bottom:-8px; left:22px; width:500px; height:718px;
            display:flex; align-items:flex-end; justify-content:center; z-index:3; }
  /* The subject wears dark clothing and the ground is near-black, so a lime
     rim plus a dark drop shadow is what keeps them from merging into it. */
  .person img, .split-person img { width:100%; height:100%; object-fit:contain;
      object-position:bottom center;
      filter: drop-shadow(3px 0 0 ${LIME}) drop-shadow(-3px 0 0 ${LIME})
              drop-shadow(0 -3px 0 ${LIME}) drop-shadow(0 3px 0 ${LIME})
              drop-shadow(18px 6px 34px rgba(0,0,0,.9)); }
  .slot { width:400px; height:620px; border:5px dashed rgba(189,250,9,.55); border-radius:16px;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:10px; background:rgba(189,250,9,.05); text-align:center; padding:24px; }
  .slot b { font-size:30px; color:${LIME}; letter-spacing:-.01em; }
  .slot span { font-size:17px; color:#9d9b95; line-height:1.45; }

  .mark { position:absolute; right:30px; bottom:22px; z-index:4;
          font-family:ui-monospace,Menlo,monospace; font-size:17px; letter-spacing:.2em;
          text-transform:uppercase; color:#84827c; }
  .mark b { color:#f7f6f2; }
`;

function personSlot(cls = "person") {
  return photoData
    ? `<div class="${cls}"><img src="${photoData}" alt=""></div>`
    : `<div class="${cls}"><div class="slot">
         <b>YOUR PHOTO</b>
         <span>Background removed.<br>Waist-up.<br>Looking at the board.</span>
       </div></div>`;
}

/** Two mini page wireframes — the visual argument of the whole video. */
function wireframes({ dark }) {
  const stroke = dark ? "#1a1a1a" : "#1a1a1a";
  return `
  <div class="pair">
    <div class="col">
      <div class="wf">
        <svg viewBox="0 0 120 150" fill="none" stroke="${stroke}" stroke-width="5"
             stroke-linecap="round">
          <rect x="8" y="8" width="104" height="60" rx="5" fill="${stroke}" opacity=".16"/>
          <rect x="8" y="8" width="104" height="60" rx="5"/>
          <path d="M20 84h80M20 102h60"/>
          <rect x="20" y="118" width="58" height="18" rx="9" fill="${stroke}"/>
        </svg>
      </div>
      <p class="lab">£40,000 JOB</p>
    </div>
    <p class="vs">vs</p>
    <div class="col">
      <div class="wf">
        <svg viewBox="0 0 120 150" fill="none" stroke="${stroke}" stroke-width="5"
             stroke-linecap="round">
          <path d="M22 18h76M22 38h50"/>
          <path d="M22 62h76M22 78h64M22 94h40"/>
          <rect x="22" y="116" width="58" height="20" rx="10" fill="${stroke}"/>
        </svg>
      </div>
      <p class="lab">$9 PDF</p>
    </div>
  </div>`;
}

/* ------------------------------------------------- A · the board */

const VARIANT_A = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}
  .board { position:absolute; right:34px; top:52px; width:760px; height:616px;
           background:#f7f6f2; border-radius:10px; box-shadow:0 30px 70px rgba(0,0,0,.6);
           padding:38px 40px; display:flex; flex-direction:column; }
  .board h1 { color:#0a0a0a; font-size:88px; line-height:.92; font-weight:900;
              letter-spacing:-.045em; }
  .board h1 em { font-style:normal; background:${LIME}; padding:0 10px; }
  .pair { flex:1; display:flex; align-items:center; justify-content:center; gap:34px;
          margin-top:16px; }
  .col { text-align:center; }
  .wf { width:160px; height:200px; }
  .wf svg { width:100%; height:100%; }
  .lab { color:#0a0a0a; font-size:27px; font-weight:800; letter-spacing:-.02em; margin-top:12px; }
  .vs { color:#6b6b63; font-size:34px; font-weight:800; }
</style></head><body>
  <div class="grid"></div>
  <div class="glow" style="width:700px;height:520px;right:120px;top:-140px;"></div>
  <div class="board">
    <h1>SAME SKILLS.<br><em>OPPOSITE</em> SITES.</h1>
    ${wireframes({ dark: true })}
  </div>
  ${personSlot()}
  <p class="mark"><b>YARDSCALE</b></p>
</body></html>`;

/* ------------------------------------------------- B · the number */

const VARIANT_B = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}
  .right { position:absolute; right:52px; top:50%; transform:translateY(-50%);
           width:790px; text-align:right; z-index:2; }
  .big { font-size:172px; font-weight:900; letter-spacing:-.05em; line-height:.9; }
  .big.a { color:#f7f6f2; }
  .big.b { color:${LIME}; }
  .vsrow { display:flex; align-items:center; justify-content:flex-end; gap:24px; margin:6px 0; }
  .vsrow span { font-size:44px; font-weight:800; color:#84827c; }
  .rule { height:6px; width:150px; background:${LIME}; border-radius:4px;
          margin:26px 0 22px auto; }
  .kicker { font-size:42px; font-weight:800; color:#cac8c2; letter-spacing:-.02em;
            line-height:1.15; }
</style></head><body>
  <div class="grid"></div>
  <div class="glow" style="width:760px;height:600px;right:-60px;top:-100px;"></div>
  <div class="right">
    <p class="big a">£40,000</p>
    <div class="vsrow"><span>vs</span><p class="big b">$9</p></div>
    <div class="rule"></div>
    <p class="kicker">Opposite websites.<br>Here's why.</p>
  </div>
  ${personSlot()}
  <p class="mark"><b>YARDSCALE</b></p>
</body></html>`;

/* ------------------------------------------------- C · the split */

const VARIANT_C = `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}
  .halves { position:absolute; inset:0; display:flex; }
  .half { flex:1; position:relative; display:flex; flex-direction:column;
          align-items:center; justify-content:flex-start; gap:18px; padding-top:76px; }
  .half.l { background:linear-gradient(180deg,#141414,#080808); padding-left:300px; }
  .half.r { background:linear-gradient(180deg,#0d1400,#070a00); }
  .divider { position:absolute; left:50%; top:0; bottom:0; width:5px; background:${LIME};
             transform:translateX(-50%); z-index:2; }
  .htitle { font-size:40px; font-weight:900; letter-spacing:-.025em; }
  .half.l .htitle { color:#f7f6f2; }
  .half.r .htitle { color:${LIME}; }
  .hsub { font-size:24px; font-weight:700; color:#84827c; }
  .icon { width:150px; height:170px; }
  .icon svg { width:100%; height:100%; }
  .banner { position:absolute; left:0; right:0; bottom:0; z-index:5;
            background:${LIME}; padding:20px 0; text-align:center; }
  .banner p { color:#0a0a0a; font-size:58px; font-weight:900; letter-spacing:-.035em; }
  /* C keeps the person small and in the corner so the split stays readable. */
  .split-person { position:absolute; bottom:0; left:4px; width:300px; height:600px;
                  display:flex; align-items:flex-end; justify-content:center; z-index:6; }
  .split-person .slot { width:270px; height:470px; }
  .split-person .slot b { font-size:24px; }
  .split-person .slot span { font-size:14px; }
</style></head><body>
  <div class="halves">
    <div class="half l">
      <div class="icon"><svg viewBox="0 0 120 150" fill="none" stroke="#f7f6f2" stroke-width="5"
        stroke-linecap="round">
        <rect x="8" y="8" width="104" height="60" rx="5"/>
        <path d="M20 84h80M20 102h60"/>
        <rect x="20" y="118" width="58" height="18" rx="9" fill="#f7f6f2"/>
      </svg></div>
      <p class="htitle">£40,000 JOB</p>
      <p class="hsub">needs BELIEF</p>
    </div>
    <div class="half r">
      <div class="icon"><svg viewBox="0 0 120 150" fill="none" stroke="${LIME}" stroke-width="5"
        stroke-linecap="round">
        <path d="M22 18h76M22 38h50"/>
        <path d="M22 62h76M22 78h64M22 94h40"/>
        <rect x="22" y="116" width="58" height="20" rx="10" fill="${LIME}"/>
      </svg></div>
      <p class="htitle">$9 PDF</p>
      <p class="hsub">needs CLARITY</p>
    </div>
  </div>
  <div class="divider"></div>
  <div class="banner"><p>OPPOSITE WEBSITES</p></div>
  ${personSlot("split-person")}
</body></html>`;

/* ------------------------------------------------------------------ main */

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });

for (const [name, html] of [["a", VARIANT_A], ["b", VARIANT_B], ["c", VARIANT_C]]) {
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({ path: join(OUT, `thumb-${name}.png`) });
  console.log(`  thumb-${name}.png`);
}

await browser.close();
console.log(photoData ? "\nRendered with your photo." : "\nRendered with placeholder slots. Re-run with PHOTO=/path/to/cutout.png");
