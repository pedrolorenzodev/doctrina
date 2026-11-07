import { resolveAddress } from "@/content/ai-simplify/resolve-address";
import { simplifiedManifest } from "@/content/simplified-manifest";
import { sha256 } from "@/lib/ai/cache-keys";
import { addressId, type SimplifyAddress } from "@/lib/ai/contracts";

export function generatesLive(address: SimplifyAddress): boolean {
  return address.kind === "father";
}

export function sourceTextSha256(text: string): string {
  return sha256(text.normalize("NFC"));
}

export async function isSimplificationServed(
  address: SimplifyAddress,
  manifest: Readonly<Record<string, string>> = simplifiedManifest,
): Promise<boolean> {
  if (generatesLive(address)) return true;
  const hash = manifest[addressId(address)];
  if (!hash) return false;
  const resolved = await resolveAddress(address, "es").catch(() => null);
  return resolved !== null && resolved.simplifiable && sourceTextSha256(resolved.text) === hash;
}
