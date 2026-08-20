# FUD.markets — Brand Kit

Everything a designer needs to redesign FUD's UI in Lovable and stay on-brand.
**This kit contains only design assets and references. No production/application
source, no secrets, no backend.** (The one `.tsx` file is the public brand/tokens
page, included as a styling reference.) The designer never needs access to the FUD app repo.

## What's inside

| File / folder | What it is |
|---|---|
| `LOVABLE_BRIEF.md` | The prompt to paste into Lovable + how to hand off. **Start here.** |
| `PRODUCT.md` | What FUD is, the main flow, canonical terminology, states, and what NOT to invent. |
| `DESIGN_SYSTEM.md` | The real design tokens: palette, type, surfaces, spacing, breakpoints, prestige, voice. |
| `MOCK_DATA.md` | Realistic sample data (market cards, positions, users) to hardcode in Lovable. |
| `SCOPE.md` | What to redesign, what not to touch, acceptance criteria, and the workflow. |
| `assets/logos/` | FUD wordmark logo (white + black, SVG + PNG). |
| `assets/icons/` | App icon / favicon. |
| `assets/reference/` | Real share cards (win / loss / bot) — the aesthetic in action. |
| `assets/fonts/` | Inter weights (Geist + Geist Mono are free on Google Fonts). |
| `reference/fud-brand-page.tsx` | The live in-app brand/tokens page, for exact class strings. |

## How to use (designer)

1. Open the live app at **https://fud.markets** (dark mode) to see the real product.
2. Read `PRODUCT.md` (how FUD works + terminology + states) and `LOVABLE_BRIEF.md`.
3. In Lovable: upload the files in `assets/logos/` and `assets/reference/` so it
   uses the real logo and can see the target aesthetic.
4. Paste the brief block into Lovable. Design **UI only, with mock data** from
   `MOCK_DATA.md`. No backend. Follow `DESIGN_SYSTEM.md` for exact tokens.
5. Cover the states in `PRODUCT.md` (including loading / empty / error), mobile first.
6. Iterate, then share the **preview URL**. Small chunks, not one giant reveal.

## How this connects to the real app

FUD's real stack is Next.js (App Router) + Tailwind v4 + a custom dark/light theme +
Framer Motion. Lovable output (Vite + shadcn) does not drop in directly, so the
Lovable preview is treated as a high-fidelity **spec**. Marcos re-implements the
approved screens in the real stack. That is why the designer needs the visual
reference (this kit), not the codebase.

## Boundaries (important)

- Designer works entirely in Lovable. No access to the FUD repo, Railway, Vercel,
  wallets, DB, or any secrets.
- UI only. No settlement, contracts, balances, auth, backend, or deploys.
- Only Marcos deploys.
