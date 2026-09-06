# V2 BLUE — Design Scope and Handoff

This kit supports a visual/UI handoff aligned with the [current public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend). It is not an application deployment package.

## In scope

- Blue/light-first shell, navigation, typography, and supplied 3D branding.
- Market feed/card hierarchy: token, timeframe, state, prices, side controls, and activity.
- Market detail/trade-panel layout and its mobile presentation.
- Portfolio presentation, including owned/locked shares and relevant order states.
- Existing light/dark treatment, accessible focus, readable financial signals, and responsive behavior.
- Loading, empty, error, unavailable-data, pending/matching, partial-fill, and terminal-state mockups.

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
- [ ] All actions and data in a design-only preview are clearly simulated.
- [ ] Handoff lists changed screens, covered states, and remaining design decisions.

## Workflow

1. Start from the public frontend and this kit's source/provenance notes.
2. Make one coherent batch of UI changes using mock data.
3. Share the preview and screen/state checklist for review.
4. Integrate approved UI in a separate application task with appropriate tests.
5. Commit/push or coding approval is **not** production deployment approval. Deploy only on explicit authorization.
