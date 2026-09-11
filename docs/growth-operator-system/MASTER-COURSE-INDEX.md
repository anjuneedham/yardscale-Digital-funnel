# Master Course Index — The Growth Operator System

The canonical map of the course: every phase, its status, its lessons, and its
final asset. Update this file whenever a phase or lesson is added or changed.

**Framework:** DIAGNOSE → POSITION → BUILD → DISTRIBUTE → CONVERT → PROVE →
ACQUIRE → OPERATE → SCALE

**Implementation status legend:** ✅ authored & live · 🔒 stub (route + dashboard
state exist; content not yet authored)

---

## Phase 1 — DIAGNOSE · "Think Like a Growth Operator" — ✅ Available

Shift from doing marketing to operating a growth system, and produce your own
Business Growth Diagnostic.

| # | Lesson | Slug |
| --- | --- | --- |
| 1 | What Is a Growth Operator? | `what-is-a-growth-operator` |
| 2 | Stop Marketing. Start Operating. | `stop-marketing-start-operating` |
| 3 | Diagnose Before You Build | `diagnose-before-you-build` |
| 4 | Understanding the Growth Bottleneck | `understanding-the-growth-bottleneck` |
| 5 | The Growth System | `the-growth-system` |
| 6 | Mapping the Customer Journey | `mapping-the-customer-journey` |
| 7 | Channels vs Systems | `channels-vs-systems` |
| 8 | Your Business Growth Diagnostic | `your-business-growth-diagnostic` |

**Final asset:** Business Growth Diagnostic — a scored, one-page read on your
single biggest growth constraint.

---

## Phase 2 — POSITION · "Own a Category of One" — 🔒 Upcoming
Sharpen positioning and offer so a stranger can evaluate it in one read.
**Final asset:** A positioning statement and offer that sells itself.

## Phase 3 — BUILD · "Build the Conversion System" — 🔒 Upcoming
Construct the pages, path and follow-up that carry attention to a decision.
**Final asset:** A working conversion system for your primary offer.

## Phase 4 — DISTRIBUTE · "Engineer Distribution" — 🔒 Upcoming
Get the right attention to the system, reliably and affordably.
**Final asset:** A repeatable distribution plan feeding your system.

## Phase 5 — CONVERT · "Maximise Conversion" — 🔒 Upcoming
Turn more of the attention you already have into committed customers.
**Final asset:** A measurably higher-converting path.

## Phase 6 — PROVE · "Prove It Works" — 🔒 Upcoming
Build the proof and trust that make buying the safe choice.
**Final asset:** A proof system: evidence, cases and trust markers.

## Phase 7 — ACQUIRE · "Acquire Predictably" — 🔒 Upcoming
Turn the working system into a predictable customer-acquisition machine.
**Final asset:** A predictable acquisition model with known numbers.

## Phase 8 — OPERATE · "Operate the Machine" — 🔒 Upcoming
Run the growth system with dashboards, rhythms and accountability.
**Final asset:** An operating dashboard and weekly growth rhythm.

## Phase 9 — SCALE · "Scale Without Breaking" — 🔒 Upcoming
Increase volume and complexity without the system falling apart.
**Final asset:** A scaling plan that compounds instead of cracking.

---

## Implementation status summary

| Area | Status |
| --- | --- |
| Public sales page (`/growth-system`) | ✅ Complete, SEO-ready |
| Member login + session | ✅ Complete (access-code placeholder for real payment) |
| Server-side access gate + entitlement seam | ✅ Complete |
| Growth Operator Dashboard | ✅ Complete |
| Phase + lesson rendering (dynamic) | ✅ Complete |
| Progress tracking (cookie-backed) | ✅ Complete (DB-ready seam) |
| Phase 1 content | ✅ Complete (8 lessons + diagnostic) |
| Phases 2–9 | 🔒 Stubs (routes + dashboard states in place) |
| Real payment provider (Stripe etc.) | ⏳ Not connected — seam ready in `access.ts` |
| Database-backed users/progress | ⏳ Not connected — seam ready in `progress.ts` |
| Analytics events (enroll, lesson start/complete) | ⏳ Integration points noted; not overbuilt |

To author a later phase, see **ARCHITECTURE.md → §9 How to add a new phase**.
