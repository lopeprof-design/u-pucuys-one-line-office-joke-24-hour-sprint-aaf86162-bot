// One-Line Office Joke: 24-Hour Sprint — writes one office joke to /output/entry.txt.
// The joke: a Monday standup so long HR treats it as a second job,
// unpaid, with a Monday standup of its own — the recursion is the punchline.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "Our Monday standup runs so long HR now lists it as a second job — unpaid, with its own Monday standup.";

// The gate requires 1 to 200 characters of non-blank UTF-8 text:
// refuse to write anything that would fail it.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
