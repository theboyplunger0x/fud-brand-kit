# FUD.markets — Design System (real tokens)

This is the actual system from the production app, condensed. It is a hand-rolled
system on **Tailwind v4** (CSS-first, no `tailwind.config`) with a **custom JS
dark/light theme** (no next-themes, no shadcn). The canonical in-repo reference is
`reference/fud-brand-page.tsx` (the live `/brand` page).

## 1. Palette

| Name | Hex | Tailwind | Meaning |
|---|---|---|---|
| Canvas (near-black) | `#0A0A0A` / `#080808` | `bg-[#0A0A0A]` | Background |
| White | `#FFFFFF` | `text-white` | Text / logo on dark |
| Emerald | `#34D399` | `emerald-400` | LONG · up · positive · win · accent |
| Red | `#F87171` | `red-400` | SHORT · down · negative · loss |
| Light canvas | `#F9FAFB` | | Light-mode background |
| Light text | `#111827` | `text-gray-900` | Light-mode text |

**Signal rule:** color is reserved for meaning. Emerald = LONG/win, red = SHORT/loss.
Everything else is monochrome (white/black + opacity). Never use color as decoration.

## 2. Typography

- **Geist** (sans) — headings `font-black` (900), tight tracking. In-app the "FUD."
  wordmark is rendered as text in Geist Black; the logo SVG asset is drawn in Geist
  Bold (700), so treat the logo files as the canonical wordmark and use 900 only when
  setting "FUD." as live text.
- **Geist Mono** — ALL numbers, prices, PnL, multipliers. Always `font-mono tabular-nums`.
- **Inter** — UI body text, medium (500).

> **Font sourcing:** Geist, Geist Mono, and Inter are all free on Google Fonts (Lovable
> can pull them natively — just name them). The `Inter-700.woff` / `Inter-900.woff` in
> `assets/fonts/` are optional convenience copies; get Inter 500 (body) from Google Fonts.

Weights: Black (900) headings, Bold (700) labels, Medium (500) body.

| Role | Classes |
|---|---|
| Wordmark "FUD." | `text-[40px] font-black tracking-[-0.04em] leading-none` (the `.` is emerald) |
| H1 | `text-[24px] sm:text-[30px] font-black leading-[1.1] tracking-tight` |
| Section label | `text-[10px] font-black uppercase tracking-[0.18em] text-white/30` |
| Body | `text-[12px]`/`text-[13px] text-white/50 font-medium leading-relaxed` |
| Numbers / PnL | `text-[18px] font-mono tabular-nums text-emerald-400` |
| Pill / tag | `text-[12px] font-bold px-3 py-1 rounded-full` |

**Wide tracking on tiny uppercase labels is a signature** (`tracking-[0.18em]`, `tracking-widest`).
Tight tracking on big headings (`tracking-tight`, `tracking-[-0.04em]`).

## 3. Surfaces & hierarchy (dark)

- Card: `rounded-2xl border border-white/8 bg-white/[0.03]`, hover `hover:border-white/14`
- Section divider: `border-t border-white/[0.06] pt-8 mt-8`
- Pills: `text-[11px] font-bold px-3 py-1 rounded-full bg-white/[0.04] border border-white/10`
- Opacity ladder (text): `white → /55 → /50 → /45 → /40 → /35 → /30 → /25 → /20`
- Radius: `rounded-2xl` cards, `rounded-xl` media, `rounded-full` pills, `rounded-md` tooltips

### Dark ↔ light pairs (the real "tokens")
| Purpose | dark | light |
|---|---|---|
| Primary text | `text-white` | `text-gray-900` |
| Muted text | `text-white/40` | `text-gray-400` |
| Secondary text | `text-white/55` | `text-gray-600` |
| Inverted button | `bg-white text-black` | `bg-gray-900 text-white` |
| Border | `border-white/8` | `border-gray-200` |
| LONG chip | `text-emerald-300 bg-emerald-500/20` | `text-emerald-700 bg-emerald-100` |
| SHORT chip | `text-red-300 bg-red-500/20` | `text-red-700 bg-red-100` |

## 3b. Spacing, radius, breakpoints

- **Spacing:** standard Tailwind scale. Common in-app values: card padding `p-4`,
  gaps `gap-2` / `gap-2.5` / `gap-3`, page container `mx-auto max-w-2xl px-5 py-12`,
  section rhythm `pt-8 mt-8`. Keep it tight and dense (trading terminal), not airy.
- **Radius:** `rounded-2xl` cards, `rounded-xl` media, `rounded-full` pills/avatars,
  `rounded-md` tooltips. Holo wrappers `18px`.
- **Breakpoints:** mobile-first. The app mainly uses the `sm:` breakpoint (640px) to
  step type up (e.g. `text-[24px] sm:text-[30px]`). **Mobile is the primary target**
  (most users are on phones), so design mobile first, then desktop.
- **Shadows:** almost none. Depth comes from opacity + hairline borders, not drop
  shadows. The only "glow" is the holo prestige borders.

## 4. Prestige (gold / rose holo borders)

Status is shown through motion, not chrome. Animated conic-gradient borders:
- **Gold holo** = official / admin (most prestigious): conic `#7d5a00 → #ffd700 → #fff6a0`, gold glow.
- **Rose holo** = market maker (subtler): conic `#5a1a2a → #f43f5e → #fb7185`.
- Gold gradient username for official team: `#fbbf24 → #f59e0b → #fbbf24`, weight 900, clipped to text.

(The full CSS keyframes live in the app's `globals.css`. For design purposes: an
animated spinning gold/rose glowing border around a near-black card.)

## 5. Visual voice

Near-black trading terminal meets editorial zine. A `#0A0A0A` canvas carries
ultra-thin `white/3%` cards with hairline `white/8` borders. Tiny uppercase labels
at wide `0.18em` tracking act as section rules. Numbers are always monospace +
tabular-nums so prices/PnL/multipliers read like a terminal. Two-color signal
system (emerald = LONG/win, red = SHORT/loss), color only for meaning, everything
else monochrome on an opacity ladder. Prestige encoded as motion (gold/rose holo
borders). Type is heavy and confident: Geist Black headings, Inter medium body.
Tone: degen, sharp, anti-bullshit, trading-native. Talk like a trader, not a bank.

## 6. Assets in this kit

- `assets/logos/` — FUD wordmark logo, white + black, SVG + PNG. **Caveat:** the SVGs
  contain live `<text>` (they need the Geist font to render) and a background rectangle,
  so they are not transparent cutouts. For a clean transparent logo, use the PNG or
  outline the text. The PNGs are very high-res, downscale as needed.
- `assets/icons/` — app icon / favicon.
- `assets/reference/` — real share cards (win / loss / bot). These show the brand
  attitude and color, but they are meme/illustration art, **not** product UI. Use them
  for mood, not for trading-flow layout.
- `assets/fonts/` — Inter 700 / 900 (optional). Geist + Geist Mono come free from Google Fonts.
- `reference/fud-brand-page.tsx` — the live in-app brand/tokens page, for exact class strings.
