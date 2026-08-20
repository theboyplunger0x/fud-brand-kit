# FUD.markets — Brief for Lovable

Paste the block below into Lovable as your project prompt. Upload the files in
`assets/logos/` and `assets/reference/` to Lovable first so it uses the real logo
and can see the real aesthetic. Design UI only, with mock data. Do not wire any
backend.

---

## Paste this into Lovable

Build a UI-only design prototype for **FUD.markets**, a crypto prediction market
where users go **LONG** or **SHORT** on the future price of tokens across
timeframes. This is a redesign pass on the **frontend UI/UX only**. Use mock /
placeholder data. Do **not** add a backend, Supabase, auth, or a database. Do not
add login. Keep everything client-side with hardcoded sample data.

**Visual identity (follow this exactly):**

- **Aesthetic:** a near-black trading terminal that reads like an editorial zine.
  Dark-first. Sharp, dense, confident, anti-bullshit. It should feel trading-native,
  not like a bank or a generic SaaS dashboard. Avoid rounded pastel "friendly fintech"
  looks, avoid cream backgrounds, avoid generic shadcn defaults.

- **Canvas:** near-black background `#0A0A0A`. Support a light mode too
  (`#F9FAFB` canvas with white cards, `#111827` text), but dark is the hero.

- **Signal colors, used ONLY for meaning, never decoration:**
  - Emerald `#34D399` = LONG / up / positive / win
  - Red `#F87171` = SHORT / down / negative / loss
  - Everything else is monochrome: white or black with an opacity ladder
    (text-white, then 55%, 50%, 45%, 40%, 35%, 30%, 25%, 20% for hierarchy).

- **Typography:**
  - Headings: **Geist**, weight **900 (black)**, tight letter-spacing.
  - **All numbers, prices, PnL, multipliers: monospace (Geist Mono) with
    tabular-nums** so they line up like a terminal readout. This is a signature,
    never render a price in a proportional font.
  - Body: **Inter**, medium (500).
  - Tiny **uppercase labels at wide letter-spacing (0.18em)** act as section
    dividers/rules. Use them a lot.

- **Surfaces:** cards are `rounded-2xl`, ultra-thin fill (white at ~3% opacity on
  dark), hairline borders (white at ~8% opacity), subtle border brighten on hover.
  Pills/tags are `rounded-full`, tiny, bold. Hierarchy comes from opacity and
  spacing, not from heavy shadows or bright fills.

- **Prestige treatment:** for "official" or "market maker" items, use an animated
  conic-gradient holographic border (gold for official/admin, rose for market
  maker). This is how status is shown, through motion, not loud chrome.

- **Motion:** tasteful. Framer-motion style micro-interactions. Do not over-animate.

**Voice / copy:** talk like a trader, not a bank. Short, direct, a little degen.
Example headline: "Go LONG or SHORT on any token." Quick bet amounts: $10, $25, $50, $100.

**Screens to design (see SCOPE.md for the full list):** the market/token card, the
trade panel (LONG/SHORT with amount + multiplier), a user's open positions with
live PnL, the feed, and the mobile trading sheet. Focus on visual hierarchy, the
trading moment, and mobile.

Use the FUD logo I uploaded. Match the colors and type above precisely. Deliver
clean Tailwind. Keep components simple and portable (avoid deep component-library
abstractions where a plain element works).

---

## After Lovable generates

1. Iterate in Lovable until the screens feel right.
2. Share the **preview URL** with Marcos (do not worry about exporting code, the
   preview is the spec).
3. Marcos re-implements the approved screens in the real FUD stack
   (Next.js App Router + Tailwind v4 + custom theme + Framer Motion).

See `DESIGN_SYSTEM.md` for exact tokens if you want to hand-tune, and `SCOPE.md`
for what to design and what not to touch.
