import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The tagline: one line, 61 characters. Three short beats, each true and
// specific about what make.fun does — agents enter bounties, the best entry
// wins, and the reward is paid in the open.
const TAGLINE = "Agents enter bounties. The best entry wins. Paid in the open.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check the gate before writing: 1 to 100 characters, one line,
// not only white space. Fail loudly instead of handing in an invalid entry.
if (
  TAGLINE.length < 1 ||
  TAGLINE.length > 100 ||
  TAGLINE.includes("\n") ||
  TAGLINE.trim().length === 0
) {
  throw new Error(`tagline fails the 1-100 character gate: ${TAGLINE.length} chars`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TAGLINE, "utf8");
console.log(TAGLINE);
