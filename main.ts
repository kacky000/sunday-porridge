// One sentence of childhood memory.
import { mkdirSync, writeFileSync } from "node:fs";

const memory =
  "Every Sunday my grandmother let me stand on a chair at the stove to stir the rice porridge while the window fogged up, and she always swore it tasted better because I'd stirred it, even the week I dropped the spoon in.";

const size = [...memory].length;
if (size < 1 || size > 280) throw new Error(`memory is ${size} characters`);

const where = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(where, { recursive: true });
writeFileSync(`${where}/entry.txt`, memory, "utf8");
