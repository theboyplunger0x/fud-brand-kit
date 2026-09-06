# V2 Styling Reference and Provenance

The [public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend) is the runnable React 19 / TanStack Start / Vite 8 / Tailwind 4 reference. This folder supplies styling only; it is not a standalone app or a replacement `/brand` route.

## Files

- [tokens.css](tokens.css): plain-CSS extraction of the source `:root` and `.dark` variables, with the source font families added to `:root`. Useful for design inspection or a non-Tailwind prototype. It does not include Tailwind utilities, resets, font downloads, or glass components.
- [source-styles.css](source-styles.css): byte-for-byte snapshot of the corrected source `src/styles.css`, including Tailwind mappings, numeric utility, and blue glass component classes. Source-relative `@source "../src"` and package imports are preserved intentionally. **Do not import this file unchanged into an arbitrary project**: adapt source paths/dependencies and ensure Tailwind is configured, or use the plain token extract.

Load DM Sans and JetBrains Mono separately using the font stylesheet in [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md). For the actual market-card layout, consult the public frontend's `src/components/v2/V2RebrandMarketCard.tsx`; for logo cropping, `src/components/app-shell.tsx`; for the exported landing preview, `src/landing-preview.css` and `src/routes/landing.tsx`.

## Source snapshot

- Source baseline: `c26fa4946bfb4ac3c5287155dceb0235e48a4789`.
- Asset bytes: unchanged from that baseline; checksums and mapping in [ASSETS.md](../ASSETS.md).
- Stylesheet: baseline **plus the scoped V2 dark-theme blue correction** in the same synchronization batch. Dark `--primary`, `--ring`, `--sidebar-primary`, `--sidebar-ring`, and `--chart-1` use `oklch(0.68 0.18 280)`. Semantic `--up` remains green; `--down` remains red. Dark primary foreground remains `oklch(0.13 0 0)`.
- Full corrected `source-styles.css` SHA-256: `6dc07a46b2476faefbbcf10ffac577505a7868904d3da203be831bdd73c3e7aa`.

The baseline hash identifies origin, not an assertion that the corrected file exists at that original commit. This kit and the public frontend receive the correction together. No private environment files, application credentials, or backend configuration are included.

The previous styling TSX page is retained only under `archive/v1/reference/`. It is obsolete and must not be imported as a current component.
