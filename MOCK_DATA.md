# FUD.markets — Mock Data

Realistic sample data so screens look convincing without a backend. Copy these
into Lovable as hardcoded data. Numbers are illustrative but shaped like the real app.

## Market cards (feed)

```jsonc
[
  {
    "symbol": "CASHCAT",           // shown as $CASHCAT
    "chain": "Base",
    "timeframe": "1h",
    "status": "live",              // open | live | settling | resolved | cancelled | draw
    "entry_price": 0.00421,
    "current_price": 0.00508,      // +20.7% vs entry → LONG winning
    "long_pool": 1240.00,          // USDC
    "short_pool": 680.00,
    "volume_usd": 1920.00,
    "closes_at_in": "27m",         // time remaining label
    "long_multiplier": 1.49,       // 1 + (680*0.9/1240)
    "short_multiplier": 2.64       // 1 + (1240*0.9/680)
  },
  {
    "symbol": "PEPE",
    "chain": "Base",
    "timeframe": "15m",
    "status": "open",
    "entry_price": 0.00000812,
    "current_price": 0.00000812,
    "long_pool": 0,
    "short_pool": 50.00,
    "volume_usd": 50.00,
    "closes_at_in": "starts in 3m",
    "long_multiplier": 1.90,
    "short_multiplier": 1.00        // one-sided so far
  },
  {
    "symbol": "DEGEN",
    "chain": "Base",
    "timeframe": "4h",
    "status": "resolved",
    "entry_price": 0.0113,
    "final_price": 0.0098,          // -13.3% → SHORT won
    "winner_side": "short",
    "long_pool": 900.00,
    "short_pool": 1500.00,
    "volume_usd": 2400.00,
    "closed_label": "Settled 12m ago"
  },
  {
    "symbol": "WIF",
    "chain": "Solana",
    "timeframe": "24h",
    "status": "draw",
    "entry_price": 2.41,
    "final_price": 2.415,           // +0.2% → below threshold → draw/refund
    "long_pool": 420.00,
    "short_pool": 380.00,
    "volume_usd": 800.00,
    "closed_label": "Draw · refunded"
  }
]
```

## User positions (portfolio / open positions)

```jsonc
[
  {
    "symbol": "CASHCAT", "chain": "Base", "timeframe": "1h",
    "side": "long", "amount_usd": 50.00,
    "market_status": "live", "entry_price": 0.00421, "current_price": 0.00508,
    "unrealized_pnl": 24.50, "multiplier": 1.49, "closes_at_in": "27m"
  },
  {
    "symbol": "DEGEN", "chain": "Base", "timeframe": "4h",
    "side": "long", "amount_usd": 100.00,
    "market_status": "resolved", "winner_side": "short",
    "outcome": "lost", "realized_pnl": -100.00
  },
  {
    "symbol": "BONK", "chain": "Solana", "timeframe": "12h",
    "side": "short", "amount_usd": 25.00,
    "market_status": "resolved", "winner_side": "short",
    "outcome": "won", "realized_pnl": 41.20
  },
  {
    "symbol": "WIF", "chain": "Solana", "timeframe": "24h",
    "side": "long", "amount_usd": 30.00,
    "market_status": "draw", "outcome": "refunded", "realized_pnl": 0.00
  }
]
```

## Users / avatars (feed, leaderboard)

```jsonc
[
  { "username": "0xplunger",  "tier": "top",   "pnl_24h": 312.40, "verified": true },
  { "username": "degenmaxi",  "tier": "pro",   "pnl_24h": -84.10, "verified": true },
  { "username": "fudteam",    "tier": "elite", "pnl_24h": 0,      "official": true },  // gold holo + gradient name
  { "username": "cashcat_ape","tier": null,    "pnl_24h": 57.00,  "verified": false }
]
```

## Header / balance

```jsonc
{
  "balance_usd": 214.83,          // Vault balance (mono, tabular)
  "total_pnl": 88.10,
  "fud_points_estimated": 1240,   // "Estimated FUD Points" pill
  "quick_amounts": [10, 25, 50, 100]
}
```

Notes:
- Prices, PnL, multipliers, pools, balances: always **monospace + tabular-nums**.
- Positive numbers emerald, negative red. Neutral (draw/refund) stays monochrome.
- Symbols render as `$SYMBOL`. Chains: Base and Solana (text label or small chip, no
  official icon assets are shipped, use a simple chip).
- **Design for the ugly cases too**, not just clean numbers: long token symbols
  (`$SUPERLONGNAME`), tiny prices (`0.00000000812`), huge multipliers (`38.4x`),
  zero / negative PnL, an empty pool ($0 on one side), and a market about to close
  (seconds left). These are where layouts break.
