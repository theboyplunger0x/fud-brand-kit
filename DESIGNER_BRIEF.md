# FUD Markets V2 — Designer Brief

**Work on the existing [public V2 frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend). Do not generate a new application or redesign the identity from scratch.** This kit documents the current design system, supplied assets, product vocabulary, and review boundaries. See [CURRENT_STATE.md](CURRENT_STATE.md) for the dated source snapshot.

## Working brief

Make the requested UI change in the existing React 19 / TanStack Start / Vite 8 / Tailwind CSS 4 codebase. Keep its routes, V2 component structure, Radix/shadcn-style controls, and local demo adapters. Reuse `src/styles.css`, `src/components/v2/`, and the existing `public/` assets rather than introducing another stack or a parallel UI.

Preserve the white/light-first canvas, near-black ink, FUD blue `#0000FF`, and blue glass treatments. Dark brand primary is `oklch(0.68 0.18 280)`; semantic green/red remain LONG/SHORT and signed financial movement. Use [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for exact roles and values.

Preserve **DM Sans** for UI and **JetBrains Mono** for numerical data with tabular figures. The existing frontend loads the documented Google Fonts stylesheet. Use its blue 3D wordmark for the light shell, transparent wordmark for the landing, and monochrome utility mark for dark navigation. No redrawn/recolored/generated assets are needed; consult [ASSETS.md](ASSETS.md).

Edit the requested surface in place: market feed/card, LONG/SHORT detail, create-market dialog, portfolio, profile, leaderboard, funds/sign-in visual controls, or landing. Keep entry/live token prices distinct from share cents, share quantities, indicative quotes, and displayed PnL. Preserve warnings and state distinctions, not just their colors.

Use the existing synthetic fixtures in `src/lib/demo-data.ts` and local adapters in `src/lib/api.ts` / `src/lib/v2Api.ts`. [MOCK_DATA.md](MOCK_DATA.md) explains them; it is not a second dataset to paste over the application. Add targeted edge-state fixtures only when the requested UI work needs them, without changing financial semantics or connecting real services.

Cover affected loading, empty, error, unavailable quote, disabled, matching, partial-fill, and terminal states. Keep the designer-demo notice and the explicit no-real-funds/authentication boundaries. No real credentials, wallet addresses for deposits, blockchain calls, or production data belong in this repository.

Keep financial copy plain and exact. A local simulated fill does not establish real liquidity, settlement behavior, fees, or mainnet readiness. Do not add leverage, yield, guaranteed outcomes, or future token-reward claims. See [PRODUCT.md](PRODUCT.md).

## Validation and handoff

Follow the public frontend's current README and AGENTS instructions. Use Node.js 22.12+ and npm, then run `npm ci`, `npm run dev`, `npm run typecheck`, `npm run build`, `npm run verify:design`, and `npm run test:demo` as appropriate for the change.

Inspect the affected screens at mobile/desktop widths and in both themes. Share a focused code diff or PR, screenshots, test results, and a list of covered states. Coordinate any hosted preview separately; there is no implicit deployment authorization. If the request changes product mechanics, authentication, or money movement, stop for explicit scope approval. See [SCOPE.md](SCOPE.md).
