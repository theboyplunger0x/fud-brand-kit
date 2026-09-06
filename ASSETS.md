# V2 Asset Index

These **10 visual files** are exact copies of the current source frontend's `public/` assets at baseline `c26fa4946bfb4ac3c5287155dceb0235e48a4789`. No new imagery was generated and no asset was recolored. The [public frontend](https://github.com/theboyplunger0x/fud-rebrand-frontend) keeps their original `public/` filenames.

## Selection and mapping

| Kit path | Source path | Use |
|---|---|---|
| [Blue 3D wordmark](assets/logos-v2/fud-3d-wordmark-blue.jpg) | `public/fud-3d-wordmark-blue.jpg` | Primary light-navigation mark; preserve source crop |
| [Transparent 3D wordmark](assets/logos-v2/fud-3d-wordmark-transparent.png) | `public/fud-3d-wordmark-transparent.png` | Existing 3D cutout variant; use when transparency is needed |
| [Black 3D wordmark](assets/logos-v2/fud-3d-wordmark-black.jpg) | `public/fud-3d-wordmark-black.jpg` | Source alternate; not a replacement for blue UI tokens |
| [3D wordmark](assets/logos-v2/fud-3d-wordmark.jpg) | `public/fud-3d-wordmark.jpg` | Source alternate; preserve supplied colors |
| [App icon](assets/utility/fud-icon.png) | `public/fud-icon.png` | Existing monochrome utility; also used by dark navigation |
| [Apple icon](assets/utility/apple-touch-icon.png) | `public/apple-touch-icon.png` | Existing utility icon |
| [Favicon](assets/utility/favicon.ico) | `public/favicon.ico` | Existing browser utility icon |
| [Profile avatar](assets/utility/profile-avatar.svg) | `public/profile-avatar.svg` | Existing profile utility illustration |
| [Social card](assets/reference-v2/fud-social-card.png) | `public/fud-social-card.png` | Existing social metadata utility; not newly blue artwork |
| [Wojak reference](assets/reference-v2/fud-wojak-white-sunglasses.jpg) | `public/fud-wojak-white-sunglasses.jpg` | Existing illustration reference |

The utility/social assets intentionally retain their source styling, including monochrome imagery. Use them as shipped; do not mistake them for missing blue 3D variants. V1's flat wordmark exports, 400px icons, win/loss/bot cards, and Inter font binaries are preserved separately in `archive/v1/assets/` and are not the active kit.

## SHA-256 checksums

Run `shasum -a 256` against a listed file to verify its bytes. Each value below is also the SHA-256 of its mapped source file.

For the complete offline check, run `node scripts/verify-assets.mjs`. The machine-readable source is [design-manifest.json](design-manifest.json), which also records the unchanged V1 archive and current styling snapshots.

| Kit path | SHA-256 |
|---|---|
| `assets/logos-v2/fud-3d-wordmark-blue.jpg` | `3d76e38d3a1fee455921cccbe5571e3ba04088256263821a029adb39dbb3d1a1` |
| `assets/logos-v2/fud-3d-wordmark-transparent.png` | `466907710dc0aaaaf19c7d7054a6600dd6181ff2330d119dea2a19e9a844be6a` |
| `assets/logos-v2/fud-3d-wordmark-black.jpg` | `695b3e12c7d11e31284d4dbb314ac92df24c7da9c218f483cd07f1a0ecca182d` |
| `assets/logos-v2/fud-3d-wordmark.jpg` | `cf6b0c2a17716d7904d9bc6103c763e256b916f0d831bb5be8161b32886ed9ff` |
| `assets/utility/fud-icon.png` | `87931c8fe15e81d22b0bc03789d5c2d01b8ad868f61100e2dde39bc834d9a2c3` |
| `assets/utility/apple-touch-icon.png` | `72920bcb76bfa313e582df4cfc6e2e8fa89478d86c02b78c83b853b4b168ecdc` |
| `assets/utility/favicon.ico` | `5770dd92a0b82a96e6d29533e545014045394dda16aafdce822aa6003b6b0cc8` |
| `assets/utility/profile-avatar.svg` | `3d561ea71c49aacd225b135bf04b964b149017e7bc0cc0e756a082fee045a9ce` |
| `assets/reference-v2/fud-social-card.png` | `e00396c363df6613f63bd7313db2e3aaede5b0357899bdc3200c5ea2467d5321` |
| `assets/reference-v2/fud-wojak-white-sunglasses.jpg` | `3ab4c5e40f1210aeafbae70a9b5c75f5285d7cd6b298c7e4c279175d3414e525` |

Fonts are sourced remotely as described in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md); DM Sans and JetBrains Mono binaries are not bundled. Nonvisual deployment/auth files, robots rules, and manifests are outside this design asset package.
