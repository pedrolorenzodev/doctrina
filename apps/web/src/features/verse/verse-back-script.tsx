import { verseBackInitScript } from "@/lib/verse-back";

export function VerseBackScript() {
  return <script dangerouslySetInnerHTML={{ __html: verseBackInitScript }} />;
}
