# FUD Markets — V2 BLUE Lovable Brief

Upload the assets selected in [ASSETS.md](ASSETS.md), especially `assets/logos-v2/fud-3d-wordmark-blue.jpg`, and provide [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Do not upload `archive/v1/` as current inspiration.

## Paste this brief

Build a **UI-only FUD Markets V2 prototype** with hardcoded demonstration data. Follow the blue rebrand and the public reference frontend: https://github.com/theboyplunger0x/fud-rebrand-frontend . No backend, database, real login, wallet connection, deposits, withdrawals, or transactions.

Use a white/light-first canvas, near-black ink, FUD blue `#0000FF` for brand controls, and restrained blue glass fills, gradients, and shadows. Support dark mode with primary `oklch(0.68 0.18 280)`, not an emerald brand primary. Green/red are semantic LONG/SHORT and PnL colors. Use the exact tokens in DESIGN_SYSTEM.md and reference/tokens.css.

Use **DM Sans** for UI/headings and **JetBrains Mono** for numerical data with tabular figures. Load them from Google Fonts; font files are not bundled. Use the supplied blue 3D wordmark for the light shell. Preserve the source utility icons and monochrome dark-mode mark where applicable. Do not redraw or generate a logo.

The implementation reference is **React 19 + TanStack Start/Router + Vite 8 + Tailwind CSS 4**, with Radix/shadcn-style UI components and Framer Motion. This is not a request to recreate the old Next.js, black/emerald, Geist/Inter interface. Match the source components and semantic tokens, not untouched component-library defaults.

Design the market feed/cards, market detail and LONG/SHORT entry, portfolio with shares/order states, and responsive mobile dialogs/sheets. Keep entry/live token prices distinct from share prices, indicative quotes, and estimated payouts. Use the V2 terms in PRODUCT.md and display-only fixtures in MOCK_DATA.md. Do not implement settlement or calculate executable quotes from a design formula.

Cards use white surfaces, cool hairline borders, rounded corners, subtle shadows, and restrained hover lift. Use blue-tinted glass for general actions. Keep all important financial information legible: side, amount, share count, quote qualification, balance, order state, and any existing warning. Do not communicate side or success by color alone.

Include loading, empty, error, unavailable quote, disabled, submitting, matching, partial fill, and settled/void cases where relevant. Prototype actions must be visibly simulated. Do not show a real deposit address or copy a production credential.

Keep copy short and trading-native. Financial confirmations and failures must be plain and exact. No invented leverage, yield, token-reward promises, fixed fees, or guaranteed fills. V2 has share orders and selling states: do not import the old V1 no-secondary-market rule or losing-pool multiplier formula.

Deliver portable components, a preview URL, and a short list of changed screens and covered states. The preview is for review, not authorization to deploy.

## Handoff

Review scope against [SCOPE.md](SCOPE.md). If a new screen changes authentication, money movement, fees, or settlement behavior, stop and ask for product approval before expanding the prototype. Production integration remains a separate, explicitly scoped task.
