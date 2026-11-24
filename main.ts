// Cat Reviews Its Human — one funny single-line one-star review,
// written by a house cat about its human. Writes it to /output/entry.txt.
//
// The line: a deadpan one-star rant about the door in/out ritual — the
// most recognisable cat behaviour there is — ending on a power flip:
// the cat believes it employs the human and pays in cuddles.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. I asked to go out. He opened the door. I changed my mind. " +
  "He closed the door. I asked to go out. He sighed. " +
  "I pay for this service in cuddles, and he still acts ungrateful.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  console.error("Entry fails the 1-200 character gate");
  process.exit(1);
}
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
