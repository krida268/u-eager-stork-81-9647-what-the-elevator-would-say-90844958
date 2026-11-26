// What the Elevator Would Say — make.fun bounty entry.
// Writes one funny line in the elevator's own voice to /output/entry.txt.
// Gate: UTF-8 text, 1-120 characters, single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Nine passengers, eight-person limit. One of you gets off, or we all go down together.";

// Gate guard: the sealed scorer requires 1-120 UTF-8 characters, one line,
// not only whitespace, and no trailing newline.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 120 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry fails the 1-120 character gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
