"use client";

import { useState } from "react";

// FUD. brand kit — one shareable page for partners/press. Styled to match the
// app's own design language (near-black surface, subtle white/[0.03] cards,
// font-black headings, Geist Mono numerals, emerald/red accents). Linked from
// the account drawer below Terms. Marcos 2026-05-22.

const COLORS: { name: string; hex: string; cls: string; note: string }[] = [
  { name: "Black", hex: "#0A0A0A", cls: "bg-[#0A0A0A] border border-white/10", note: "Background" },
  { name: "White", hex: "#FFFFFF", cls: "bg-white",                              note: "Text & logo on dark" },
  { name: "Green", hex: "#34D399", cls: "bg-emerald-400",                        note: "LONG · positive · accent" },
  { name: "Red",   hex: "#F87171", cls: "bg-red-400",                            note: "SHORT · negative" },
];

const PRODUCTS: { name: string; blurb: string }[] = [
  { name: "P2P",   blurb: "Peer-to-peer LONG/SHORT markets on any token. Pick a side, set your size — the multiplier is the pool." },
];

const TONE = ["degen", "sharp", "anti-bullshit", "trading-native"];

const DL = "text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.10] transition";
const CARD = "rounded-2xl border border-white/8 bg-white/[0.03]";
const LABEL = "text-[10px] font-black uppercase tracking-[0.18em] text-white/30";

const BOILERPLATE = "FUD is the social layer for crypto conviction — peer-to-peer long/short markets on token prices over fixed timeframes, settled by a decentralized oracle. Built on Base.";

export default function BrandPage() {
  const [copied, setCopied] = useState<string | null>(null);
  function copy(text: string) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text)
      .then(() => { setCopied(text); setTimeout(() => setCopied((c) => (c === text ? null : c)), 1400); })
      .catch(() => {});
  }

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="border-t border-white/[0.06] pt-8 mt-8">
      <h2 className={`${LABEL} mb-4`}>{title}</h2>
      {children}
    </section>
  );

  return (
    // Own scroll container — the app shell sets body overflow-hidden for the
    // feed, so a normal content page needs to scroll itself.
    <main className="h-dvh overflow-y-auto bg-[#0A0A0A] text-white antialiased">
      <div className="mx-auto max-w-2xl px-5 py-12">
        {/* Hero */}
        <span className="text-[40px] font-black tracking-[-0.04em] leading-none select-none">FUD.</span>
        <h1 className="mt-6 text-[24px] sm:text-[30px] font-black leading-[1.1] tracking-tight">
          The social trading market for going{" "}
          <span className="text-emerald-400">LONG</span> or <span className="text-red-400">SHORT</span> on memecoins.
        </h1>
        <p className="mt-3 text-[13px] text-white/40 font-medium">Brand kit — logos, colors, type, copy. Grab what you need.</p>

        {/* Logo */}
        <Section title="Logo">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* eslint-disable @next/next/no-img-element */}
            <div className="rounded-2xl overflow-hidden border border-white/8 h-24">
              <img src="/brand/FUD_WhiteLogo.png" alt="FUD. on dark" className="w-full h-full" style={{ objectFit: "cover" }} />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/8 h-24">
              <img src="/brand/FUD_BlackLogo.png" alt="FUD. on light" className="w-full h-full" style={{ objectFit: "cover" }} />
            </div>
            {/* eslint-enable @next/next/no-img-element */}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[
              { label: "On-dark SVG", href: "/brand/FUD_WhiteSVG.svg" },
              { label: "On-light SVG", href: "/brand/FUD_BlackSVG.svg" },
              { label: "On-dark PNG", href: "/brand/FUD_WhiteLogo.png" },
              { label: "On-light PNG", href: "/brand/FUD_BlackLogo.png" },
            ].map((d) => (
              <a key={d.href} href={d.href} download className={DL}>↓ {d.label}</a>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-white/30 leading-relaxed">
            Monochrome wordmark, Geist Bold. On-dark over dark, on-light over light. Don’t recolor,
            stretch, or add effects — the green is an accent, not part of the logo.
          </p>
        </Section>

        {/* Colors */}
        <Section title="Colors">
          <p className="text-[11px] text-white/30 -mt-2 mb-4 leading-relaxed">
            The official palette — use these exact values for anything FUD-branded. Tap a swatch to copy the hex.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {COLORS.map((c) => (
              <button key={c.hex} onClick={() => copy(c.hex)} className={`text-left ${CARD} overflow-hidden hover:border-white/14 transition`}>
                <div className={`h-14 w-full ${c.cls}`} />
                <div className="p-3">
                  <p className="text-[12px] font-black">{c.name}</p>
                  <p className="text-[11px] font-mono tabular-nums text-white/45 mt-0.5">{copied === c.hex ? "copied!" : c.hex}</p>
                  <p className="text-[10px] text-white/25 mt-1 leading-tight">{c.note}</p>
                </div>
              </button>
            ))}
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <div className={`${CARD} p-5 space-y-2.5`}>
            <p className="text-[26px] font-black tracking-tight">Geist Bold — wordmark “FUD.”</p>
            <p className="text-[13px] text-white/50">Inter for UI — Black (900) headings, Bold (700) labels, Medium (500) body.</p>
            <p className="text-[18px] font-mono tabular-nums text-emerald-400">Geist Mono — prices & PnL · +$33.93 · 7.79×</p>
          </div>
        </Section>

        {/* Products */}
        <Section title="Products">
          <div className="space-y-2">
            {PRODUCTS.map((p) => (
              <div key={p.name} className={`${CARD} p-3.5 flex gap-3.5 items-start`}>
                <span className="text-[12px] font-black uppercase tracking-wider text-emerald-400 w-12 shrink-0 pt-0.5">{p.name}</span>
                <span className="text-[12px] text-white/60 leading-relaxed">{p.blurb}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Voice */}
        <Section title="Voice & tone">
          <div className="flex flex-wrap gap-1.5">
            {TONE.map((t) => (
              <span key={t} className="text-[12px] font-bold px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">{t}</span>
            ))}
          </div>
          <p className="mt-3.5 text-[12px] text-white/50 leading-relaxed">
            Talk like a trader, not a bank. Short, sharp, confident. No jargon for its own sake, no hype-bait,
            no “revolutionary.” Say the real thing — the market is the product.
          </p>
        </Section>

        {/* Social cards */}
        <Section title="Social cards">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { src: "/og/share-win.png", label: "Win card" },
              { src: "/og/share-loss.png", label: "Loss card" },
            ].map((s) => (
              <a key={s.src} href={s.src} download className="block rounded-xl overflow-hidden border border-white/8 hover:border-white/14 transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.label} className="w-full" style={{ aspectRatio: "1200 / 630", objectFit: "cover" }} />
                <p className="text-[11px] font-bold px-3 py-2 text-white/55">↓ {s.label}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Usage */}
        <Section title="Usage">
          <div className={`${CARD} p-5`}>
            <ul className="space-y-2 text-[12px] text-white/55 leading-relaxed">
              <li>✓ Use the official assets above, exactly as provided.</li>
              <li>✗ Don&rsquo;t recolor — the green is an accent, never part of the wordmark.</li>
              <li>✗ Don&rsquo;t stretch, rotate, or distort.</li>
              <li>✗ Don&rsquo;t add shadows, gradients, outlines, or other effects.</li>
              <li>↔ Keep clear space around the mark — at least the height of the &ldquo;F&rdquo;.</li>
            </ul>
          </div>
        </Section>

        {/* Boilerplate / About */}
        <Section title="Boilerplate">
          <div className={`${CARD} p-5 space-y-3`}>
            <p className="text-[12px] text-white/60 leading-relaxed">{BOILERPLATE}</p>
            <button onClick={() => copy(BOILERPLATE)} className={DL}>
              ↓ {copied === BOILERPLATE ? "copied!" : "Copy boilerplate"}
            </button>
          </div>
        </Section>

        {/* Attribution — nominative use only, no co-brand */}
        <Section title="Built on Base">
          <div className={`${CARD} p-5 space-y-2`}>
            <p className="text-[13px] font-black">Built on Base.</p>
            <p className="text-[11px] text-white/35 leading-relaxed">
              Attribution only. FUD is independent and not affiliated with, sponsored by, or endorsed by
              Base or Coinbase. Don&rsquo;t build a FUD&nbsp;&times;&nbsp;Base lockup or use Base marks as a
              sponsor/partner badge.
            </p>
          </div>
        </Section>

        <p className="text-[11px] font-mono text-white/20 pt-10 pb-4">
          fud<span className="text-emerald-400">.</span>markets — brand kit
        </p>
      </div>
    </main>
  );
}
