import { transliterationInitScript } from "@/lib/transliteration";

export function TransliterationScript() {
  return <script dangerouslySetInnerHTML={{ __html: transliterationInitScript }} />;
}
