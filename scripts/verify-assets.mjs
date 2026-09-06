import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
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

assert.equal(manifest.schemaVersion, 2);
assert.equal(manifest.privateSource.visibility, "private");
assert.match(manifest.verifiedOn, /^\d{4}-\d{2}-\d{2}$/);
assert.equal(
  manifest.publicReference.repository,
  "https://github.com/theboyplunger0x/fud-rebrand-frontend",
);
for (const commit of [
  manifest.privateSource.assetBaselineCommit,
  manifest.privateSource.stylesheetCommit,
  manifest.privateSource.verifiedRevision,
  manifest.publicReference.verifiedRevision,
  manifest.archiveSource.commit,
]) {
  assert.match(commit, /^[a-f0-9]{40}$/, "Provenance revisions must be full Git hashes");
}
assert.notEqual(manifest.publicReference.verifiedRevision, manifest.privateSource.assetBaselineCommit);
assert.notEqual(manifest.publicReference.verifiedRevision, manifest.privateSource.stylesheetCommit);
assert(!("sourceRepository" in manifest), "Do not conflate the public repository with private source commits");
assert(!("sourceBaselineCommit" in manifest), "Source provenance must be scoped explicitly");
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

const adaptations = manifest.assets.filter((asset) => asset.adaptation);
assert.equal(adaptations.length, 1, "Only the avatar has an export adaptation");
const avatar = adaptations[0];
assert.equal(avatar.path, "assets/utility/profile-avatar.svg");
assert.equal(avatar.adaptation.type, "metadata-only");
assert.equal(avatar.adaptation.field, "svg:title");
assert.equal(avatar.adaptation.value, "FUD V2 demo profile avatar");
assert.match(avatar.sourceSha256, /^[a-f0-9]{64}$/);
assert.notEqual(avatar.sha256, avatar.sourceSha256);
assert(assetIndex.includes(avatar.sourceSha256), "Document the original avatar source hash");
const avatarSvg = read(avatar.path).toString();
assert.equal(avatarSvg.match(/<title\b/g)?.length, 1, "Avatar must have one accessible title");
assert(avatarSvg.includes(`<title id="title">${avatar.adaptation.value}</title>`));
assert.equal(
  sha256(avatarSvg.replace(/<title id="title">[^<]*<\/title>/, '<title id="title"></title>')),
  avatar.adaptation.contentExcludingTitleSha256,
  "Avatar changes outside the accessible title are not allowed by this adaptation",
);

const activeDocs = [
  ...readdirSync(root).filter((file) => file.endsWith(".md")),
  ...filesUnder(join(root, "reference")).filter((file) => file.endsWith(".md")),
];
assert(activeDocs.includes("DESIGNER_BRIEF.md"), "The current designer brief is required");
assert(activeDocs.includes("CURRENT_STATE.md"), "The dated source/scope record is required");
assert(!existsSync(join(root, "LOVABLE_BRIEF.md")), "Retired brief must not remain an active entry point");
let localLinks = 0;
for (const file of activeDocs) {
  const content = read(file).toString();
  assert.doesNotMatch(content, /lovable/i, `${file}: retired workflow in active documentation`);
  for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^(?:https?:|#)/.test(target)) continue;
    const fileTarget = target.split("#")[0];
    assert(existsSync(resolve(root, dirname(file), fileTarget)), `${file}: missing link ${target}`);
    localLinks++;
  }
}
const state = read("CURRENT_STATE.md").toString();
assert(state.includes(manifest.verifiedOn), "Document the verification date");
for (const commit of [
  manifest.privateSource.assetBaselineCommit,
  manifest.privateSource.verifiedRevision,
  manifest.publicReference.verifiedRevision,
  manifest.archiveSource.commit,
]) {
  assert(state.includes(commit), "Current-state record must match manifest provenance");
}
for (const block of read("MOCK_DATA.md").toString().matchAll(/```json\n([\s\S]*?)\n```/g)) {
  JSON.parse(block[1]);
}

console.log(`PASS: 10 V2 exports (9 exact-source assets + 1 title-only avatar), 18 unchanged V1 files, CSS/token hashes, blue dark primary, scoped provenance, current workflow, and ${localLinks} active documentation links.`);
