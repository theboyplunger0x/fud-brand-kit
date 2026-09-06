# UI/UX Sprint — Scope

One week, UI/UX only. You design in Lovable, Marcos implements in the real FUD repo.

## Focus (redesign these)

- **Market / token card** — the core unit in the feed. Symbol, price, LONG/SHORT
  pools, timeframe, entry. Make the hierarchy and the trading signal read instantly.
- **Trade panel** — the LONG/SHORT bet flow: pick side, amount ($10 / $25 / $50 / $100
  quick amounts), see the multiplier and potential payout.
- **Open positions / portfolio** — a user's active bets with live PnL (mono, tabular),
  and settled outcomes (won / lost / refunded / draw).
- **Feed** — the main shell: cards, tabs, hero. Visual rhythm and density.
- **Mobile trading sheet** — the bottom-sheet trade flow on mobile. High priority,
  most users are on mobile.
- **Navigation + visual hierarchy** — overall polish, spacing, type scale.

## Do NOT touch

These are out of scope. Design around them, do not redesign the logic:

- Settlement, contracts, oracle, balances math
- **Auth / login / wallet / deposit / withdraw flows** — do not touch these unless
  Marcos explicitly approves that screen separately (money-in / money-out is sensitive)
- The backend, API endpoints, or data contracts
- Production infrastructure, deploys

## Priority tiers (one week is tight, do them in order)

- **Must:** market card, trade panel + mobile trading sheet, position states (won / lost / refunded / draw / live).
- **Should:** feed shell (tabs, hierarchy, density).
- **Could:** navigation polish, broader visual-system cleanup.

Do not try to redesign everything. A polished Must tier beats a half-done everything.

## Financial-UX + accessibility guardrails (money app)

Changing visuals can change financial meaning even without touching logic. So:

- **Preserve the meaning and visibility** of: side (LONG/SHORT), amount, timeframe,
  multiplier, potential payout, PnL, outcome, and any existing warnings/confirmations.
  You can restyle them, not remove or bury them.
- **Never signal by color alone.** LONG/SHORT and win/loss must always carry a text
  label or icon too (colorblind users, and it reads clearer anyway).
- **Transactional copy = clarity first.** The "degen" voice is for the feed and
  marketing. Confirmation, error, settlement, and balance copy must be plain and exact.
- **Accessibility basics:** visible focus states, respect reduced-motion (holo borders
  should calm down), readable contrast, and touch targets big enough on mobile (the
  bottom sheet especially).

## Rules

- **UI only. Mock data.** No backend, no Supabase, no auth, no database in Lovable.
- **You do not deploy and do not touch the real repo.** Only Marcos deploys.
- Match the design system in `DESIGN_SYSTEM.md` (colors, type, surfaces, voice).
- Use the real logo/assets from `assets/`.

## What "done" looks like (acceptance criteria)

A screen is ready to hand off when:

- It uses the real tokens (colors, type, surfaces) from `DESIGN_SYSTEM.md`, not
  Lovable defaults. Numbers are monospace + tabular-nums. Color only for LONG/SHORT meaning.
- It covers the relevant **states** from `PRODUCT.md`: for markets that means
  open / live / settling / resolved / cancelled / draw as applicable, plus
  **loading, empty, and error** for any list.
- It works at **mobile width first**, then desktop (`sm:` and up).
- It uses the **canonical terminology** from `PRODUCT.md` (LONG, SHORT, pools,
  multiplier, timeframe, Vault, FUD Points), no invented words or mechanics.
- It uses realistic data shaped like `MOCK_DATA.md` (real-looking symbols, prices,
  PnL, pools, time remaining), not "lorem" or round fake numbers.
- The FUD logo and voice are used correctly.

## Workflow

1. Marcos gives you this kit + screenshots of the current screens.
2. You design screens in Lovable, on-brand, mock data.
3. You share **preview URLs**. Small chunks, not one giant reveal at the end.
   Suggested order: market card, then trade panel, then positions/PnL, then mobile sheet.
4. Marcos reviews each preview, gives feedback.
5. On approval, Marcos ports the screen into the real FUD stack (branch, PR,
   Vercel preview, merge). You do not need repo access for any of this.
