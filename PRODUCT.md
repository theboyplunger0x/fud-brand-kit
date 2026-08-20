# FUD.markets — Product & Terminology

Read this so the designs match how FUD actually works. Do not invent mechanics
that are not here.

## What FUD is (one paragraph)

FUD is a crypto prediction market. You pick a token, choose a **timeframe**, and bet
**LONG** (price goes up) or **SHORT** (price goes down) by staking USDC. Everyone's
stake goes into two pools: the **LONG pool** and the **SHORT pool**. When the
timeframe ends, the token's price is checked against the **entry price**. The
winning side splits the losing pool (minus a fee), pro-rata to their stake. If the
price barely moved (below a small threshold) the market is a **draw** and everyone
is refunded. It is pari-mutuel (pooled), not an order book.

## Main flow

1. Browse markets in the **feed** (each is a token + timeframe).
2. Open a market, pick **LONG** or **SHORT**.
3. Enter an amount (quick amounts: **$10, $25, $50, $100**).
4. See your **multiplier** and potential payout before confirming.
5. Bet is placed, your stake joins that side's pool.
6. Timeframe runs (**live**). At close, the market **settles**.
7. **Resolved:** winners get their stake back plus a share of the loser pool
   (minus fee). Losers lose their stake. **Draw / one-sided:** refund.

## Canonical terminology (use these exact words, do not invent synonyms)

| Term | Meaning |
|---|---|
| **LONG** / **SHORT** | The two sides. Price up = LONG, price down = SHORT. Not "buy/sell". |
| **LONG pool / SHORT pool** | Total USDC staked on each side. |
| **Multiplier** | Payout multiple if your side wins: `1 + (otherPool * 0.90) / yourPool`. |
| **Timeframe** | Duration of the market. Fixed set: **5m, 15m, 1h, 4h, 12h, 24h**. |
| **Entry price** | The token price when the market opened. Outcome compares vs this. |
| **Fee** | 10% of the losing pool (kept by the protocol). |
| **Settle / Resolve** | The market closing and paying out. |
| **Draw** | Price moved less than the threshold. Everyone refunded. |
| **Refund / Cancelled** | One-sided market (no opponents) or draw. Stake returned. |
| **PnL** | Profit and loss. Always shown in monospace, tabular-nums. |
| **Vault** | Where the user's USDC balance lives (their on-chain balance). |
| **FUD Points** | Season points campaign that rewards volume and content, convertible to the future $FUD token. Shown as an "Estimated FUD Points" pill. |

## States (design all of these, do not skip the edge states)

**Market status:** `open` (accepting bets, not started) → `live` (timeframe
running) → `settling` (closing, computing result) → then one terminal state:
`resolved` (has a winner side), `cancelled` (one-sided, refund), or `draw`
(flat, refund).

**Position outcome (after settle):** won, lost, refunded (cancelled), draw.

**UI states (every list/card must handle these):**
- **loading** (skeleton, not a spinner-only blank)
- **empty** (no markets / no positions yet, with a nudge to act)
- **error** (something failed, retry affordance)

**Trade action states (the bet flow, design all of them):**
- **default** (side + amount picked, multiplier + payout shown)
- **invalid** (amount below min, over balance, market closing) with a clear reason
- **submitting** (bet sent)
- **pending confirmation** (on-chain, brief wait)
- **success** (bet placed, position appears)
- **failed** (retry affordance, clear plain-language error, no jargon)

**Interaction states** for buttons / cards / inputs: hover, focus (visible),
pressed, selected, and disabled. Disabled must look clearly disabled, not just dim.

## Do NOT invent

FUD does **not** have: an order book, leverage sliders, perpetuals, staking/yield,
NFTs, in-app chat, or custom timeframes. Do not add sell-my-position-midway
(v1 has no secondary market). Keep the timeframes fixed to the set above. If a
screen needs a mechanic that is not described here, flag it to Marcos instead of
inventing it.

## Compare against the real product

Live app: **https://fud.markets** . Open it (dark mode) to see the real feed,
market cards, and trade flow before designing.
