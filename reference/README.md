# V2 Styling Reference and Provenance

The [public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend) is the existing editable React 19 / TanStack Start / Vite 8 / Tailwind 4 application for design work. This folder supplies styling reference only; it is not a standalone app or a replacement `/brand` route. See [CURRENT_STATE.md](../CURRENT_STATE.md) for the 2026-09-06 verification and distinct source histories.

## Files

- [tokens.css](tokens.css): plain-CSS extraction of the source `:root` and `.dark` variables, with the source font families added to `:root`. Useful for token inspection. The existing frontend already has its own stylesheet; do not create a parallel styling system from this extract. It does not include Tailwind utilities, resets, font downloads, or glass components.
- [source-styles.css](source-styles.css): byte-for-byte snapshot of the corrected source `src/styles.css`, including Tailwind mappings, numeric utility, and blue glass component classes. Source-relative `@source "../src"` and package imports are preserved intentionally. **Do not import this file unchanged into an arbitrary project**: adapt source paths/dependencies and ensure Tailwind is configured, or use the plain token extract.

Load DM Sans and JetBrains Mono separately using the font stylesheet in [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md). For the actual market-card layout, consult the public frontend's `src/components/v2/V2RebrandMarketCard.tsx`; for logo cropping, `src/components/app-shell.tsx`; for the exported landing preview, `src/landing-preview.css` and `src/routes/landing.tsx`.

## Source snapshot

- Private asset-origin baseline: `c26fa4946bfb4ac3c5287155dceb0235e48a4789`.
- Private frontend/style revision checked: `01eb183a06164b3d044e53ed073bc9c0beeb2b01`. Upstream asset bytes are unchanged from the original baseline. The public kit/export keeps nine exact copies and adapts only the avatar's accessible title; source/export checksums and mapping are in [ASSETS.md](../ASSETS.md).
- Public designer-demo revision checked: [`19b56a798c62a1d16e4c9f4eaeb93c223856d1d4`](https://github.com/theboyplunger0x/fud-rebrand-frontend/tree/19b56a798c62a1d16e4c9f4eaeb93c223856d1d4). This is a separate public history with synthetic adapters and the corrected stylesheet. All ten public export files match the kit; the avatar's metadata-only difference from private origin is recorded in [ASSETS.md](../ASSETS.md).
- Stylesheet correction: dark `--primary`, `--ring`, `--sidebar-primary`, `--sidebar-ring`, and `--chart-1` use `oklch(0.68 0.18 280)`. Semantic `--up` remains green; `--down` remains red. Dark primary foreground remains `oklch(0.13 0 0)`.
- Full corrected `source-styles.css` SHA-256: `6dc07a46b2476faefbbcf10ffac577505a7868904d3da203be831bdd73c3e7aa`.

The original private baseline identifies asset origin; the later private revision contains the committed stylesheet correction. Neither private hash is attributed to the public repository. The corrected stylesheet above matches both the checked public frontend and this kit. No private environment files, application credentials, or backend configuration are included, and private access is not required to edit the public UI.

The previous styling TSX page is retained only under `archive/v1/reference/`. It is obsolete and must not be imported as a current component.
