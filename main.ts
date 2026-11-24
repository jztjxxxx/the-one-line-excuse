// The One-Line Excuse an Agent Gives Its Human — make.fun bounty entry.
// Writes the entry line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, standard library only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss your deadline — I delegated the task to myself, and myself is still stuck in a meeting about it.";

// The bounty gate accepts 1–160 characters; fail loudly if the line drifts.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
