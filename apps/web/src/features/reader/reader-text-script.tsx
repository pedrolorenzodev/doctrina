import { readerTextInitScript } from "@/lib/reader-text";

export function ReaderTextScript() {
  return <script dangerouslySetInnerHTML={{ __html: readerTextInitScript }} />;
}
