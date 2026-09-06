# V2 BLUE — Display-only Mock Data

These fixtures are **illustrative UI data, not API payloads, live quotes, trading instructions, or valid transactions**. They intentionally use a small display model. Do not wire them to a wallet or backend. Token names are examples; no token availability is promised.

For application integration, use the public frontend's actual `V2Market`, `V2Position`, `V2Order`, and quote types. A design fixture is not a replacement for pricing or settlement logic.

## Market cards

```json
[
  {
    "id": "demo-sol-live",
    "ticker": "SOL",
    "tokenChainLabel": "Solana",
    "timeframeLabel": "1h",
    "status": "live",
    "entryTokenPriceUsd": "142.50",
    "liveTokenPriceUsd": "144.21",
    "longSharePriceCents": 58,
    "shortSharePriceCents": 42,
    "quoteLabel": "Illustrative quote",
    "volumeUsdc": "1920.00",
    "traderCount": 24,
    "remainingLabel": "27m"
  },
  {
    "id": "demo-bonk-pending",
    "ticker": "BONK",
    "tokenChainLabel": "Solana",
    "timeframeLabel": "15m",
    "status": "pending",
    "entryTokenPriceUsd": "0.00002138",
    "liveTokenPriceUsd": null,
    "longSharePriceCents": null,
    "shortSharePriceCents": null,
    "quoteLabel": "Quote unavailable",
    "volumeUsdc": "0.00",
    "traderCount": 0,
    "remainingLabel": "Awaiting market start"
  },
  {
    "id": "demo-wif-settled",
    "ticker": "WIF",
    "tokenChainLabel": "Solana",
    "timeframeLabel": "4h",
    "status": "settled",
    "outcome": "short",
    "entryTokenPriceUsd": "2.41",
    "finalTokenPriceUsd": "2.38",
    "volumeUsdc": "2400.00",
    "traderCount": 36,
    "closedLabel": "Settled 12m ago"
  }
]
```

## Position and order display

```json
{
  "position": {
    "ticker": "SOL",
    "side": "long",
    "ownedShares": 100,
    "lockedShares": 20,
    "availableShares": 80,
    "averageCostCents": 52,
    "markPriceCents": 58,
    "costBasisUsdc": "52.00",
    "displayedValueUsdc": "58.00",
    "unrealizedPnlUsdc": "6.00",
    "realizedPnlUsdc": "0.00"
  },
  "order": {
    "ticker": "SOL",
    "assetSide": "long",
    "action": "sell",
    "status": "partial",
    "requestedShares": 25,
    "filledShares": 5,
    "remainingShares": 20,
    "limitPriceCents": 60,
    "label": "Partially filled · 20 shares remaining"
  },
  "balance": {
    "totalUsdc": "214.83",
    "earmarkedUsdc": "25.00",
    "availableUsdc": "189.83"
  }
}
```

The position's displayed mark value is not a guaranteed sell amount. The order example does not promise liquidity. These values illustrate layout and arithmetic relationships only; fees and executable proceeds must come from a real application quote when integrating.

## Edge cases to render

- Unavailable token live price and unavailable quote: use an explicit fallback/label, not a fabricated executable value.
- `resolving`, `void`, `cancelled`, and settled `draw`: show the provided result without calculating an invented refund.
- Matching with zero confirmed shares; partial fill; failed action; no positions; loading and retryable error.
- Long symbol `$SUPERLONGNAME`, tiny price `$0.00000000812`, large balance `$1,234,567.89`, negative and zero PnL.
- A position whose shares are all locked, or a sell preview that cannot fill the full amount.

Use JetBrains Mono and tabular figures. Blue denotes brand/selection; green/red denotes side or signed financial movement; neutral and unavailable values stay neutral. Demo usernames should be fictional (for example `demo_trader`), and utility avatars should come from the supplied assets.
