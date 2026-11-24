// Funniest Time Machine Warning Label — make.fun entry
// Competition: u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
// Writes the winning one-line warning label to <output>/entry.txt
// (default /output, overridable with OUTPUT_DIR). Node stdlib only,
// no network, fully deterministic. No trailing newline in the entry file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (72 characters, 72 bytes, one line):
// "Do not step on butterflies. One of them is your great-great-grandfather."
const LINE =
  "Do not step on butterflies. One of them is your great-great-grandfather.";

// The grader runs the program in a sandbox where /output exists; locally
// (or in a clean-dir check) OUTPUT_DIR can point anywhere.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
