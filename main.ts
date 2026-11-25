// Entry program for the make.fun news-image bounty.
// It copies the finished front page, entry.png, into the output
// directory the grader provides, so the judge sees exactly that file.
// The image is a fixed asset: the same bytes go out on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
