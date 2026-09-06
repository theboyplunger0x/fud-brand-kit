# FUD Markets V2 — Product Vocabulary for Designers

FUD's current source describes **Solana-native LONG and SHORT share markets on token prices**. This document is a UI orientation, not a specification for contracts, pricing, or settlement. The public frontend's `src/lib/v2Types.ts`, `src/lib/v2Market.ts`, and `src/components/v2/` are the implementation references.

Do not reuse the archived V1 model of distributing a losing pool, a fixed 10% fee, fixed legacy timeframes, or a prohibition on selling positions. V2 exposes share positions, orders, quotes, and sell previews.

## Typical UI journey

1. Browse a token/timeframe market and its status.
2. Inspect the market detail, token entry/live price, and LONG/SHORT share quote.
3. Select a side and amount; review the current estimate and warnings.
4. Submit in the real app; show the returned matching/confirmation/fill state accurately. In a design preview, simulate and label this action.
5. Inspect positions and orders. Selling or cancelling is available only when the current app allows it; never imply an instant or guaranteed exit.
6. Display the actual settled, void, or cancelled result when supplied. Do not invent refund amounts or settlement rules in UI work.

## Terms and units

| Term | Design meaning |
|---|---|
| LONG / SHORT | The two market sides; preserve the labels and semantic green/red colors |
| Token entry / live price | Price of the underlying token in USD, not the share price |
| Share price | Price in cents; display distinctly from the underlying token price |
| Shares | Position/order quantity; owned, locked, matching, and confirmed amounts may differ |
| Multiplier / estimated payout | Quote-related display, not the V1 losing-pool formula or a promised return |
| Available balance | Amount available to act with; not interchangeable with total or earmarked balance |
| Buy / sell order | Action on a specified LONG/SHORT side; do not rename the market sides BUY/SELL |
| Matching / partial fill | Intermediate states; do not present the whole requested amount as confirmed |
| Sell preview | Current executability/proceeds estimate; may be partial or unavailable |
| PnL | Profit/loss; keep realized and displayed position metrics distinct |
| Timeframe | Market duration; use the app's configured options, not an invented fixed menu |

Keep numeric values monospace and tabular. Use explicit units and qualifiers. Missing quote data must not silently become a real 50/50 executable price; mock indicative values must be labelled as such.

## States to preserve

The source market status union is `pending`, `live`, `resolving`, `settled`, `void`, or `cancelled`. The outcome may be `long`, `short`, `draw`, `void`, or absent. Status and outcome are separate fields, not an interchangeable sequence of labels.

The UI also needs loading/empty/error states, invalid amount, disabled action with a reason, submitting, matching, partial/filled results, and failed/cancelled actions as applicable. Respect locked shares and outstanding orders when presenting available quantities.

Fees, tradeable timeframes, eligibility, and executable amounts come from the runtime/application. Do not hardcode rules from this kit. Market-token chain metadata is also distinct from the Solana settlement platform.

## Copy boundaries

Use short, clear trading language. No invented leverage, perpetuals, yield, chat features, guaranteed fills, or future token conversion promises. If a requested UI would change financial behavior or authentication, ask for approval before designing that extension.
