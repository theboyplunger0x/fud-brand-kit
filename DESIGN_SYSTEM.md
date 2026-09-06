# FUD Markets — V2 BLUE Design System

Verified design direction on 2026-09-06: **white canvas, FUD blue, near-black ink, 3D wordmark, and restrained blue glass surfaces**. Preserve this system when editing the existing frontend. Dark mode is supported with an accessible lighter blue primary. Green and red communicate LONG/SHORT and financial direction, not the overall brand. See [CURRENT_STATE.md](CURRENT_STATE.md) for the dated scope.

Exact values live in [reference/tokens.css](reference/tokens.css); full Tailwind mappings and component treatments live in [reference/source-styles.css](reference/source-styles.css). These reflect the source snapshot and dark correction described in [reference/README.md](reference/README.md).

## Palette

| Role | Light (default) | Dark |
|---|---|---|
| Canvas | `oklch(1 0 0)` / white | `oklch(0.13 0 0)` |
| Ink | `oklch(0.17 0.008 265)` | `oklch(0.98 0 0)` |
| Card / popover | `oklch(1 0 0)` | `oklch(0.16 0 0)` |
| Brand primary, ring, sidebar primary | `oklch(0.452 0.313 264.05)` / FUD blue `#0000FF` | `oklch(0.68 0.18 280)` |
| Text on primary | White | `oklch(0.13 0 0)` |
| Muted surface | `oklch(0.972 0.008 268)` | `oklch(0.2 0 0)` |
| Muted text | `oklch(0.53 0.02 266)` | `oklch(0.68 0 0)` |
| Border | `oklch(0.92 0.012 266)` | White at 8% |
| LONG / up | `oklch(0.66 0.17 155)` | `oklch(0.77 0.15 162)` |
| SHORT / down | `oklch(0.62 0.23 22)` | `oklch(0.68 0.21 22)` |
| LONG soft surface | `oklch(0.958 0.045 155)` | `oklch(0.24 0.05 162)` |
| SHORT soft surface | `oklch(0.962 0.035 22)` | `oklch(0.24 0.06 22)` |

Use `primary` for navigation, selected controls, focus rings, and brand emphasis. Use `up`/`down` for financial signals and side controls. Keep side labels/icons visible: color alone never explains a trade. Unavailable values, neutral states, draw/void, and zero PnL are not positive outcomes.

The public landing preview uses blue glass accents based on `#0000ff`, a deliberate `#3138ff` headline, near-black ink, and white. Its exported layout lives in the public frontend's `src/landing-preview.css` and `src/routes/landing.tsx`; do not substitute the archived black/emerald design.

The dark brand primary renders approximately as sRGB `#8587FF`; retain the exact OKLCH token above. The source teaser also uses the deliberate headline-blue variant `#3138FF`. These are role-specific variants, not a change to the light brand's `#0000FF`.

## Typography

- **DM Sans** — UI and headings; frontend font request includes 400, 500, and 700.
- **JetBrains Mono** — prices, PnL, balances, shares, odds, and multipliers; font request includes 400, 600, and 700.
- Use tabular figures. The source `.num` utility sets the mono family, `"tnum"`, and `-0.02em` tracking; `tabular-nums` is also appropriate for numerical UI.
- Main headings use tight tracking. Market cards combine bold symbols, compact labels, and a clearly differentiated numeric hierarchy.

Font stylesheet used by the frontend:

```text
https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=JetBrains+Mono:wght@400;600;700&display=swap
```

No active font binaries are bundled. Do not use the archived Geist/Inter instructions as a fallback identity.

## Surfaces, spacing, and motion

- Market card: `overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`.
- Card content starts at `p-4`; use compact `gap-1.5` / `gap-3` groupings. Preserve readability and touch targets on narrow screens.
- Base radius is `0.875rem` (14px at the default root size): `rounded-lg` 14px, `rounded-xl` 18px, `rounded-2xl` 22px under the source theme mapping. Pills remain `rounded-full`.
- LONG/SHORT controls use their semantic colors with soft tinted fill and border; general calls to action use blue.
- `.fud-glass-primary`: blue 14% fill, blue 18% border, blue shadow, 2px backdrop blur. Hover increases fill to 23%.
- `.fud-glass-hero` uses a subtle blue linear gradient, white highlight, and layered shadow. `.fud-hero-cta` uses a stronger blue fill with white text.
- Dark glass treatments are defined explicitly in the source stylesheet; do not invert light colors mechanically.
- Keep hover lifts and transitions restrained. Respect reduced-motion preferences in UI changes; trading state changes must remain understandable without animation.

Use the public frontend as the layout reference rather than inventing a new breakpoints system. Verify mobile and desktop, including long tickers, tiny prices, large balances, sheets/dialogs, and visible focus states.

## Logos and imagery

Use [ASSETS.md](ASSETS.md). The current light navigation uses `fud-3d-wordmark-blue.jpg`; preserve the source crop and aspect ratio when reproducing that shell. Other 3D variants are source alternatives, not a license to generate a new mark. Use the transparent PNG when a cutout is required.

The source dark navigation still uses the monochrome `fud-icon.png`. The current favicon/social utilities also retain monochrome styling. Their presence is intentional; it does not make the blue primary optional. Do not label these utility assets as newly blue or recolor them silently.

Do not stretch imagery or add invented effects. Existing 3D material and reflections belong to the supplied image. Old win/loss/bot illustrations are historical references under `archive/v1/`, not the current mood board.

## Voice and states

Short, confident, trading-native. Use LONG and SHORT. Marketing may be playful; balances, fees, order matching, selling, errors, and settlement copy must be literal and clear. Never promise a fill, payout, token reward, or production availability from a design fixture.

Cover loading, empty, error, disabled, selected, submitting, matching, partially filled, and terminal states as applicable. See [PRODUCT.md](PRODUCT.md) for the V2 terminology boundary.
