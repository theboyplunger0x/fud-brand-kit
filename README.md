# FUD Markets — V2 BLUE Brand Kit

The design companion to FUD's **blue, light-first, glass-accented V2 frontend**, verified on **2026-09-06**. Designers edit the existing [public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend); this kit is not a prompt to generate a replacement application. Read [CURRENT_STATE.md](CURRENT_STATE.md) for source revisions and the limits of this snapshot.

This is a design-only repository: no backend, credentials, wallet keys, or production access. Nothing here authorizes a deployment.

## Start here

1. Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the blue palette, typography, surfaces, and dark variant.
2. Use [ASSETS.md](ASSETS.md) to select the real logo and verify asset provenance. The blue 3D wordmark is the primary light-mode mark.
3. Read [PRODUCT.md](PRODUCT.md) and [SCOPE.md](SCOPE.md) before changing a trading screen.
4. Follow [DESIGNER_BRIEF.md](DESIGNER_BRIEF.md) to make the requested change in the existing public frontend. [MOCK_DATA.md](MOCK_DATA.md) maps its current synthetic fixtures.
5. Reuse the existing components and [styling reference](reference/README.md), run the frontend checks, and hand off a focused diff with screenshots.

## Contents

| Path | Purpose |
|---|---|
| `assets/logos-v2/` | Four source 3D wordmark variants, including blue and transparent |
| `assets/utility/` | Current app icons, favicon, and profile avatar; intentionally not all blue |
| `assets/reference-v2/` | Current social card and Wojak illustration |
| `ASSETS.md` | Exact source-to-kit mapping and SHA-256 checksums |
| `DESIGNER_BRIEF.md` | Brief for editing the existing V2 frontend |
| `CURRENT_STATE.md` | Dated facts, public/private source provenance, and scope limits |
| `design-manifest.json` | Checksums, separate private origin/public reference, and archived-file inventory |
| `reference/tokens.css` | Plain-CSS color/radius/font token extract |
| `reference/source-styles.css` | Full source stylesheet snapshot, including blue glass treatments |
| `archive/v1/` | Historical V1 documents, assets, fonts, and styling page; **not current guidance** |

Fonts are **DM Sans** for UI and **JetBrains Mono** for numbers. They are loaded from Google Fonts in the frontend, not bundled in this kit. The old Inter files remain only in the V1 archive.

## Source and stack

Asset origin is the **private V2 frontend**, baseline `c26fa4946bfb4ac3c5287155dceb0235e48a4789`. Nine exported visuals are exact source copies; the avatar has an accessible-title-only adaptation documented in [ASSETS.md](ASSETS.md). The corrected source stylesheet is at private revision `01eb183a06164b3d044e53ed073bc9c0beeb2b01`. Those are not commits attributed to the public repository. The separately inspected public designer-demo revision is [`19b56a7`](https://github.com/theboyplunger0x/fud-rebrand-frontend/tree/19b56a798c62a1d16e4c9f4eaeb93c223856d1d4); see [CURRENT_STATE.md](CURRENT_STATE.md) and [reference/README.md](reference/README.md) for export provenance.

The frontend uses **React 19, TanStack Start/Router, Vite 8, Tailwind CSS 4, Radix/shadcn-style components, and Framer Motion**. It is not the archived Next.js V1 app. The public frontend is the implementation reference; this kit is its design companion.

Keep the public frontend's fixture-backed runtime and demo warnings intact. Share the code changes, screenshots, and validation results for review. Neither the public demo nor this kit asserts production deployment, real-money functionality, or mainnet readiness.

The public frontend exposes `/landing` for the landing composition and `/landing?access=true` for a visual-only access-dialog demo; neither is a production login or credential flow.

## Verify the kit

With Node.js installed, run `node scripts/verify-assets.mjs`. No dependency install, network access, credentials, or application server is needed. It checks all active assets, preserved V1 bytes, source/token consistency, blue dark primary, provenance schema, and active documentation links/workflow against `design-manifest.json`.
