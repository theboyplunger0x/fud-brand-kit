import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "design-manifest.json"), "utf8"));
const sha256 = (value) => createHash("sha256").update(value).digest("hex");
const read = (path) => readFileSync(join(root, path));

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    assert(!entry.isSymbolicLink(), `Unexpected symlink: ${path}`);
    return entry.isDirectory() ? filesUnder(path) : [relative(root, path).replaceAll("\\", "/")];
  });
}

assert.equal(manifest.schemaVersion, 1);
assert.equal(manifest.assets.length, 10, "Expected all 10 current visual assets");
assert.equal(manifest.archive.length, 18, "Expected all 18 original V1 documents/assets/references");

for (const record of [...manifest.assets, ...manifest.references, ...manifest.archive]) {
  const resolved = resolve(root, record.path);
  assert(resolved.startsWith(`${root}/`), `Path escapes kit: ${record.path}`);
  assert.equal(sha256(read(record.path)), record.sha256, `Checksum mismatch: ${record.path}`);
}

assert.deepEqual(
  filesUnder(join(root, "assets")).sort(),
  manifest.assets.map((asset) => asset.path).sort(),
  "Active assets must match the manifest exactly",
);
assert.deepEqual(
  filesUnder(join(root, "archive/v1")).sort(),
  manifest.archive.map((asset) => asset.path).sort(),
  "V1 archive must preserve the exact original file inventory",
);

const css = read("reference/source-styles.css").toString();
const rootBlock = css.match(/^:root \{[\s\S]*?^\}/m)?.[0];
const darkBlock = css.match(/^\.dark \{[\s\S]*?^\}/m)?.[0];
const fonts = css.match(/^  --font-(?:sans|mono):.*$/gm);
assert(rootBlock && darkBlock && fonts?.length === 2, "Source tokens not found");
const extracted =
  "/* V2 BLUE plain-CSS tokens. Extracted from source-styles.css; fonts added to :root. */\n" +
  rootBlock.replace(":root {", `:root {\n${fonts.join("\n")}`) +
  `\n\n${darkBlock}\n`;
assert.equal(read("reference/tokens.css").toString(), extracted, "Plain tokens drifted from source");
assert.match(rootBlock, /--primary: oklch\(0\.452 0\.313 264\.05\);/);
for (const token of ["primary", "ring", "sidebar-primary", "sidebar-ring", "chart-1"]) {
  assert(darkBlock.includes(`--${token}: oklch(0.68 0.18 280);`), `Dark ${token} must remain blue`);
}
assert(darkBlock.includes("--up: oklch(0.77 0.15 162);"), "Semantic LONG green changed");
assert(darkBlock.includes("--down: oklch(0.68 0.21 22);"), "Semantic SHORT red changed");

const assetIndex = read("ASSETS.md").toString();
for (const asset of manifest.assets) {
  assert(assetIndex.includes(asset.path), `Asset missing from human index: ${asset.path}`);
  assert(assetIndex.includes(asset.sha256), `Hash missing from human index: ${asset.path}`);
}

console.log("PASS: 10 V2 visual assets, 18 preserved V1 files, stylesheet/token integrity, blue dark primary, and asset index.");
