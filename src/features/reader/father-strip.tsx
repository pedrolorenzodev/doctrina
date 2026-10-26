"use client";

import { StripShell } from "@/features/reader/strip-shell";
import { TextOptions } from "@/features/reader/text-options";

export function FatherStrip({ text }: { text: Parameters<typeof TextOptions>[0]["text"] }) {
  return <StripShell left={null} center={null} right={<TextOptions text={text} locked={false} sizeOnly />} />;
}
