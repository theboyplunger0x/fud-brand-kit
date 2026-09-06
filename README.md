# FUD Markets — V2 BLUE Brand Kit

The current design reference for FUD's **blue, light-first, glass-accented V2 frontend**. Use this kit for design work and the [public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend) for runnable UI and component references.

This is a design-only repository: no backend, credentials, wallet keys, or production access. Nothing here authorizes a deployment.

## Start here

1. Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the blue palette, typography, surfaces, and dark variant.
2. Use [ASSETS.md](ASSETS.md) to select the real logo and verify asset provenance. The blue 3D wordmark is the primary light-mode mark.
3. Read [PRODUCT.md](PRODUCT.md) and [SCOPE.md](SCOPE.md) before changing a trading screen.
4. For Lovable, paste [LOVABLE_BRIEF.md](LOVABLE_BRIEF.md) and use [MOCK_DATA.md](MOCK_DATA.md). Keep the prototype mock-only.
5. Follow the [styling reference](reference/README.md) or inspect the equivalent components in the public frontend.

## Contents

| Path | Purpose |
|---|---|
| `assets/logos-v2/` | Four source 3D wordmark variants, including blue and transparent |
| `assets/utility/` | Current app icons, favicon, and profile avatar; intentionally not all blue |
| `assets/reference-v2/` | Current social card and Wojak illustration |
| `ASSETS.md` | Exact source-to-kit mapping and SHA-256 checksums |
| `design-manifest.json` | Machine-readable checksums, source baseline, and archived-file inventory |
| `reference/tokens.css` | Plain-CSS color/radius/font token extract |
| `reference/source-styles.css` | Full source stylesheet snapshot, including blue glass treatments |
| `archive/v1/` | Historical V1 documents, assets, fonts, and styling page; **not current guidance** |

Fonts are **DM Sans** for UI and **JetBrains Mono** for numbers. They are loaded from Google Fonts in the frontend, not bundled in this kit. The old Inter files remain only in the V1 archive.

## Source and stack

This kit follows frontend source baseline `c26fa4946bfb4ac3c5287155dceb0235e48a4789`, plus the scoped V2 dark-theme blue correction documented in [reference/README.md](reference/README.md). This is a source snapshot, not a claim about what is currently deployed at `fud.markets`.

The frontend uses **React 19, TanStack Start/Router, Vite 8, Tailwind CSS 4, Radix/shadcn-style components, and Framer Motion**. It is not the archived Next.js V1 app. The public frontend is the implementation reference; this kit is its design companion.

Share a preview and the changed screens for review. Keep settlement, balances, authentication, and deployment outside a design-only handoff.

The public frontend exposes `/landing` for the landing composition and `/landing?access=true` for a visual-only access-dialog demo; neither is a production login or credential flow.

## Verify the kit

With Node.js installed, run `node scripts/verify-assets.mjs`. No dependency install, network access, credentials, or application server is needed. It checks all active assets, the preserved V1 inventory, source/token consistency, and the corrected blue dark primary against `design-manifest.json`.
