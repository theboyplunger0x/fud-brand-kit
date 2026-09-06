# V2 BLUE — Existing Demo Fixtures

Checked against public frontend revision `19b56a7` on **2026-09-06**. The fixture source is **`src/lib/demo-data.ts` in the existing public frontend**, not this document. For later changes, consult its [current-state record](https://github.com/theboyplunger0x/fud-rebrand-frontend/blob/main/CURRENT_STATE.md) and current code. See [CURRENT_STATE.md](CURRENT_STATE.md) for this kit's provenance and [DESIGNER_BRIEF.md](DESIGNER_BRIEF.md) for the editing workflow.

All values below are synthetic. They are not current token prices, real accounts, executable quotes, valid transactions, or evidence of mainnet availability. Do not create a second mock-data system or replace the public adapters with a backend.

## Source map

| Existing file | Responsibility |
|---|---|
| `src/lib/demo-data.ts` | Seed markets, positions, user, funds, activity, and helper fixtures |
| `src/lib/demo-timeframes.ts` | Supported demo timeframe selection and consistent close timestamps |
| `src/lib/v2Api.ts` | Local quote/book displays, order creation/cancellation, selling, market creation, and demo funds |
| `src/lib/api.ts` | Local profiles, leaderboard, follows, notifications; unavailable real service actions |
| `src/lib/auth.tsx` | Synthetic identity/session flag; no external authentication |
| `src/lib/v2Types.ts` | UI-facing market/order/position/quote types and units |
| `scripts/demo.test.ts` | Demo-adapter checks with HTTP disabled |

## Seed state already in the app

The public demo starts with six live markets, no open orders, three positions, and **$1,250.00 available demo balance** ($0.00 reserved). The identity is `demo_designer`; token contract addresses are absent and no wallet is connected.

| Ticker | Entry token price (USD) | LONG share cents | SHORT share cents |
|---|---|---|---|
| SOL | 145.32 | 64 | 36 |
| BTC | 98240 | 43 | 57 |
| ETH | 3482.5 | 72 | 28 |
| HYPE | 42.85 | 38 | 62 |
| DEGEN | 0.0125 | 56 | 44 |
| ZORA | 0.086 | 61 | 39 |

The synthetic live token prices are derived locally from the seed values. Read selected timeframes and close timestamps from the existing fixtures/configuration, and keep their labels/countdowns consistent when editing. Do not infer the current picker from every value allowed by the DTO type; a supported type value is not necessarily an enabled option. These fixtures are not a real market schedule or a specification of settlement timing. The demo's `SOLANA` chain label does not assert each example token's deployed chain or availability.

| Position | Side | Owned shares | Locked shares | Cost basis (USDC) |
|---|---|---|---|---|
| SOL | LONG | 50 | 0 | 22.00 |
| BTC | SHORT | 70 | 0 | 36.00 |
| ETH | LONG | 90 | 0 | 50.00 |

## Example projection, not a replacement fixture

This subset uses actual `V2Market` field names and values from the seed SOL market. It deliberately omits required fields, so it is **not a complete API payload** or a value to paste into the typed array.

```json
{
  "id": "demo-sol",
  "ticker": "SOL",
  "ca": null,
  "chain": "SOLANA",
  "entryPriceUsd": "145.32",
  "crbbIndexCents": 64,
  "longPriceCents": 64,
  "shortPriceCents": 36,
  "volumeUsdc": "8100",
  "status": "live",
  "outcome": null
}
```

Use `V2Position`, `V2Order`, and `V2MarketQuote` in the application. Do not introduce renamed display fields as a parallel contract. See [PRODUCT.md](PRODUCT.md) for the distinction between share cents, hundredths of shares, and USDC base units.

## What demo actions actually do

- Sign-in selects a synthetic identity. The entered email is not sent; the Google control is only a visual preview.
- Buy orders reserve local demo balance and remain queued; cancellation releases that synthetic hold.
- Selling a fixture position updates local position quantities and balance using simplified demo behavior. It is not an execution/fee/liquidity model.
- Creating a market adds a local fixture. It does not create an on-chain market.
- “Add $25 demo balance” credits local memory; it is not a testnet faucet or a deposit.
- Profile edits, follows, and notification reads remain local. Real deposits, withdrawals, and social account linking are unavailable.
- Refresh resets fixture edits. The demo sign-in flag and theme are stored by the UI; this is not an external account session.

Quote/book/fee/payout examples in these adapters exist for presentation, not financial correctness. Their deliberately simplified behavior must not be copied into a real trading engine.

## Add only targeted edge-state fixtures

All six seed markets are live; the baseline does not by itself demonstrate every status. When a requested UI change needs additional coverage, add a clearly named local fixture in the existing source and retain its V2 types:

- `pending`, `resolving`, `settled`, `void`, or `cancelled` status; `draw` is an outcome, not a market status.
- Missing live price/quote, zero activity, matching with no confirmed shares, partial fill, failed action, empty portfolio, or retryable error.
- Locked shares, a partially executable/unavailable sell preview, negative or zero PnL.
- Long symbols, tiny prices, large balances, and near-close labels at mobile widths.

Preserve explicit units, neutral unavailable values, JetBrains Mono/tabular figures, and labelled LONG/SHORT colors. Any placeholder quote must remain visibly synthetic; do not make a missing real quote look executable. Run the existing demo tests after fixture changes.
