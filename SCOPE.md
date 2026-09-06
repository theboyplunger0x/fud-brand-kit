# V2 BLUE — Design Scope and Handoff

This kit supports focused edits to the **existing [public V2 frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend)**, not a new application or a ground-up redesign. See [CURRENT_STATE.md](CURRENT_STATE.md) for the verified 2026-09-06 source snapshot. It is not an application deployment package.

## In scope

- Blue/light-first shell, navigation, typography, and supplied 3D branding.
- Market feed/card hierarchy: token, timeframe, state, prices, side controls, and activity.
- Market detail/trade-panel layout and its mobile presentation.
- Portfolio presentation, including owned/locked shares and relevant order states.
- Existing light/dark treatment, accessible focus, readable financial signals, and responsive behavior.
- Loading, empty, error, unavailable-data, pending/matching, partial-fill, and terminal-state UI coverage using targeted local fixtures.

Match [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Green and red remain financial semantics; general brand emphasis remains blue in both themes.

## Out of scope unless separately approved

- Contract, order-matching, fee, settlement, oracle, or balances logic.
- Real authentication, wallets, deposits, withdrawals, or payment flows.
- Backend/API changes, production data, credentials, or infrastructure.
- New product mechanics or token/reward promises.
- Deployment, including a preview backed by live financial actions.

Preserve existing warnings, state distinctions, and financial meaning. A design change cannot make a pending order look filled or a displayed estimate look guaranteed.

## Acceptance checklist

- [ ] Uses the V2 blue tokens, DM Sans / JetBrains Mono, and current assets.
- [ ] Does not use archived V1 documentation as the current specification.
- [ ] Light and dark brand primaries are blue; LONG/SHORT remain labelled and semantic.
- [ ] Values use appropriate units: token USD price, share cents, share count, and USDC balance are not conflated.
- [ ] No-data and zero values are distinguishable; estimates and partial outcomes are labelled.
- [ ] Mobile and desktop work with long tickers, tiny prices, large numbers, dialogs, and keyboard focus.
- [ ] Motion can be reduced, touch controls are usable, and information does not depend on color alone.
- [ ] Existing local adapters, synthetic data, and demo notices remain intact; no private service is introduced.
- [ ] Handoff includes the focused diff/PR, screenshots, validation results, covered states, and remaining design decisions.

## Workflow

1. Read the public frontend's README/AGENTS and this kit's [designer brief](DESIGNER_BRIEF.md); work in a review branch from its current `main`.
2. Run the existing app with Node.js 22.12+, `npm ci`, and `npm run dev`. Do not scaffold a replacement project.
3. Edit the requested existing routes/components. Keep fixtures in `src/lib/demo-data.ts` and local adapters in `src/lib/api.ts` / `src/lib/v2Api.ts`; see [MOCK_DATA.md](MOCK_DATA.md).
4. Run `npm run typecheck`, `npm run build`, `npm run verify:design`, and `npm run test:demo`. Inspect the affected screens on mobile/desktop and in both themes.
5. Share the code diff or PR, screenshots, test results, and covered states. Coordinate any public hosting or private-app integration separately.
6. Commit/push or coding approval is **not** production deployment approval. Deploy only on explicit authorization.
