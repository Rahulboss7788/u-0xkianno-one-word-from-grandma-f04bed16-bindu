// One Word From Grandma — make.fun entry (@bindu).
//
// Grandma watches the little machine answer a question she never thought
// a box could answer, claps her hands, and texts her grandchild one word:
// MAGICBOX. Delighted, warm, a little baffled — the name she gives the
// clever machine on the table, as if it were a magic trick in a box.
//
// The program writes exactly that one word to /output/entry.txt, nothing
// else: one word, 8 characters, well inside the 1-30 character gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The word itself: grandma's delighted name for the clever machine.
const word = "MAGICBOX";

const outputPath = "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, word, "utf8");

console.log(`Wrote ${word.length}-character entry to ${outputPath}`);

// Read-back self-check: re-read what was written and confirm the gate
// holds — one word, 1-30 characters, not only whitespace — before exiting.
const written = readFileSync(outputPath, "utf8");
const charCount = [...written].length;
if (!/^\S+$/.test(written) || charCount < 1 || charCount > 30) {
  throw new Error(
    `Self-check failed: entry must be one word of 1-30 characters, got ${JSON.stringify(written)} (${charCount} characters)`,
  );
}
console.log(`Self-check passed: ${JSON.stringify(written)} is one word, ${charCount} characters`);
