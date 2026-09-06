# Current State — Verified 2026-09-06

This is a dated, source-backed description of the **FUD V2 rebrand and its public designer demo**. It is not a live-service status page, security audit, contract specification, or statement of mainnet readiness.

## What to edit

The [public V2 frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend) is the existing editable application for UI work. Keep its structure and make focused changes in place. Its own [current-state record](https://github.com/theboyplunger0x/fud-rebrand-frontend/blob/main/CURRENT_STATE.md) tracks export boundaries and pending source promotion. The kit supplies assets, design tokens, vocabulary, and a [designer brief](DESIGNER_BRIEF.md); it is not a separate app generator or a second implementation.

| Area | Verified state |
|---|---|
| Design | White/light-first, blue brand, blue glass treatments, supplied 3D marks |
| Dark theme | Blue primary `oklch(0.68 0.18 280)`; semantic LONG green and SHORT red remain distinct |
| Type | DM Sans UI, JetBrains Mono numbers; Google Fonts, not bundled binaries |
| Stack | React 19, TanStack Start/Router, Vite 8, Tailwind CSS 4 |
| Public runtime | Synthetic market/profile/order/balance data and local adapters; no live auth/API/RPC/wallet execution |
| Existing screens | Markets/detail/create, portfolio/profile, leaderboard, funds/sign-in visual controls, landing/access preview |
| Design workflow | Edit public code, use existing fixtures, verify, then review the diff/screenshots |

Public demo seed data and behavior are described in [MOCK_DATA.md](MOCK_DATA.md). Demo actions are deliberately simplified and do not reproduce the real trading engine.

## Provenance: origin is not the public reference

| Record | Revision | Meaning |
|---|---|---|
| Private asset origin | `c26fa4946bfb4ac3c5287155dceb0235e48a4789` | Original visual sources: nine exact copies and one avatar with accessible-title-only metadata adaptation |
| Private frontend checked | `01eb183a06164b3d044e53ed073bc9c0beeb2b01` | Same assets plus the committed dark-brand-blue stylesheet correction |
| Public demo checked | [`19b56a798c62a1d16e4c9f4eaeb93c223856d1d4`](https://github.com/theboyplunger0x/fud-rebrand-frontend/tree/19b56a798c62a1d16e4c9f4eaeb93c223856d1d4) | Separate public history; current UI with safe synthetic adapters and the metadata-only avatar correction |
| Historical kit archive | `a4b32620f0a6b644bb475c75d20389602d61e2d0` | Old V1 kit preserved only for provenance, not present-day instructions |

Private revisions identify source provenance; they are **not** public-repository commit links and private access is not required for design work. The public reference and kit share ten exported visual files and the corrected stylesheet. Relative to the private origin, nine visuals are byte-exact; only the avatar's accessible SVG title changes to “FUD V2 demo profile avatar”, with no geometry/color change. [ASSETS.md](ASSETS.md) and [design-manifest.json](design-manifest.json) distinguish export and original-source hashes so correspondence can be verified independently of repository names or commit histories.

This date records what was checked, not a promise of automatic synchronization. Other branches or local experiments do not automatically replace the selected source; source promotion requires an explicit choice. When UI/assets change, update the relevant documents and manifest in a reviewed batch. Preserve historical files as historical; do not relabel the archive as current.

## Explicit limits

- No live deployment was established by this documentation check; `fud.markets` may have a different deployed state.
- No backend, contract, settlement, fee, liquidity, authentication, or production-readiness claims are inferred from the public demo.
- Existing visual sign-in, funds, and access controls remain demonstrations. Do not enter credentials, send money, or connect private services.
- UI approval or a commit does not authorize deployment. Any production integration or hosted preview needs its own explicit scope.
