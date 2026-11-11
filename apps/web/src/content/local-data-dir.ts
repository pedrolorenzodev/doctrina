import { existsSync } from "node:fs";
import { join } from "node:path";

const candidates = [join(process.cwd(), "data"), join(process.cwd(), "..", "..", "data")];

export const localDataDir = candidates.find((dir) => existsSync(join(dir, "sources"))) ?? candidates[0]!;
